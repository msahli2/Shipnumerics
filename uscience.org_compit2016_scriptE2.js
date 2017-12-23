/*NOTES:
This is a version that sets the z positions in the vertex shader, 
using time, amplitude, wave offset and wave length as uniforms.

I have tampered slightly with the calculations, in the end 
(almost) only changing the calculation of beta (the relative heading).
It looks like the motion is OK in the range 270-360 degrees for
the wave heading. The motion formulas do not properly account 
for wave heading. Heave looks OK, but pitch and roll rotate the 
same way regardless of what direction the waves come from.
I think there should be a sign multiplied in, because the FRFs are
always positive.

I have formulated the waves as a A*sin(Bt-Cx) (for positive A,B,C).
The heave follows a A*sin(Bt) (for positive A,B)
The pitch follows a -A*cos(Bt-0.5*PI) (for positive A,B)
The roll follows a A*sin(Bt) (for positive A,B)

I think, although it should not be that important as long as 
the relations are right, that the waves and heave should be cos, 
the pitch should be sin, and the roll...?
*/

//Possible problems with the calculations:
//- Inconsistent coordinates. Not correct according to ship standards, and hard to deal with. A bit hard to fix too.
//- Rotation order (should be Z,Y,X according to standards, I think, but only if the ship has the right coordinate system, which it currently doesn't). Can be specified in the rotation object, instead of having to apply an external Euler.
//- Changed estimate of radius of gyration to 0.35*B instead of 0.42*B. Not sure if it is more correct, but it gives slightly better motion.
//- The event of beta close to PI/2 in the calculation of F and G.

//Other problems that should be fixed:
//- The zingcharts don't work anymore?

"use strict";

if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

//Shortcuts:
var PI=Math.PI, cos=Math.cos, sin=Math.sin, sqrt=Math.sqrt, abs=Math.abs, exp=Math.exp, round=Math.round, asin=Math.asin, g = 9.81;

//Add uniforms and update of z position to vertex shader of water:
THREE.ShaderLib['water'].uniforms.waveAmplitude = {type: "f", value: 0.0};
THREE.ShaderLib['water'].uniforms.wavePeriod = {type: "f", value: 0.0};
THREE.ShaderLib['water'].uniforms.waveOffset = {type: "f", value: 0.0};
THREE.ShaderLib['water'].uniforms.waveLength = {type: "f", value: 0.0};
THREE.ShaderLib['water'].vertexShader =
	["#define PI " + PI.toString(),
	"uniform float waveAmplitude;",
	"uniform float wavePeriod;",
	"uniform float waveOffset;",
	"uniform float waveLength;"].join("\n") +
	THREE.ShaderLib['water'].vertexShader.split(
	['{',
		'	mirrorCoord = modelMatrix * vec4( position, 1.0 );',
		'	worldPosition = mirrorCoord.xyz;',
		'	mirrorCoord = textureMatrix * mirrorCoord;',
		'	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',
		'}'].join("\n")).join(
		['{',
		'	vec3 modPos = position.xyz;',
		//HERE IS THE WAVE FORMULA:
		'	modPos.z = waveAmplitude*sin(waveOffset+2.0*PI*(time/wavePeriod-(modPos.x+waveOffset)/waveLength));',
		'	mirrorCoord = modelMatrix * vec4( position, 1.0 );',
		'	worldPosition = mirrorCoord.xyz;',
		'	mirrorCoord = textureMatrix * mirrorCoord;',
		'	gl_Position = projectionMatrix * modelViewMatrix * vec4( modPos, 1.0 );',
		'}'].join("\n"));


//Simple injection to allow for assignment of object children by index.
THREE.Object3D.prototype.replaceAt = function(index, newChild) {
	var oldChild = this.children[index];
	oldChild.parent = null;
	oldChild.dispatchEvent({ type: 'removed' });

	this.children[index] = newChild;
	newChild.parent = this;
	newChild.dispatchEvent({ type: 'added' });

	return oldChild;
}

//GLOBALS:
var clock = new THREE.Clock();
var container = document.getElementById('box2'), splash, gui;
var controls, camera;
var scene, dockEnv, seaEnv, manager, skyBox;
var heaveAmplitude, pitchAmplitude, rollAmplitude;
var heave_t, pitch_t, roll_t;

//scale logically defines the metric size of the vessel relative to the size it has in THREE units.
//Implemented without actually scaling any objects. Instead the waves and motion are scaled.
var scale = 0.5; // meters/unit
//computations use metric units, but the results are scaled for correct visualization.

//NB: Viktig at orbitCamera blir initiert før water. Ellers skjult feil.
var orbitCamera =  	new THREE.PerspectiveCamera(55, container.clientWidth / container.clientHeight,
		1, 100000);
	//The camera is not attached to the scene, but positioned according to world
	//(along with the skybox, even though that is attached).
	orbitCamera.position.set(-140,70,210);
var renderer = new THREE.WebGLRenderer({
		antialias: true
	});
	renderer.setClearColor(0xf0f0f0); //bakgrunn
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(container.clientWidth, container.clientHeight);
	renderer.sortObjects = false;
	//renderer.shadowMap.enabled = true;
	//renderer.shadowMap.type = THREE.PCFSoftShadowMap;


//------------------------------------------------
//------------------- VESSEL ---------------------
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv


//object for all vessel stuff (don't need class for only one instance).
var vessel = {
	models: {}, //all vessel parts go here.
	cont: undefined, //container for proper heave/pitch/roll.

	//Hidden parameters
	PHIw: 1,
	PHItheta: 1,
	omegaBar: 1,
	B: 40*scale, //Width of ship model.
	//computed parameters:
	L: 75, //computed from choice of components, namely cargo hold.
	//Directly controllable parameters:
	Speed_knots: 0,
	heading: 0,
	T: 19*scale, //Draft, how deep the ship lies in the water. Change only from gui!
	//block coefficient, how much of the enclosing rectangular prism is filled by the underwater part of the ship.
	Cb: 0.9,
	Cwp: 0.9, //water plane coefficient
	GM: 4, //GM distance
	critical_damping_percentage: 0.2,
	Prism_Length_ratio: 0.749,
	
	loadCargoHold: function () {
		var path = "modules3D/cargoHold1.dae"; 
        var sliderValue = this.L;
		//this.object.position.setX(62-0.67*delta); //for proper centering within vessel container
		this.object.position.setX(60 + (75/2 - sliderValue/3) ); //for proper centering within vessel container
		var cargoh = this.models[path];
		
			this.object.replaceAt(1,cargoh);
			this.bowPositioned.position.setX(sliderValue*scale/2 -40 + (sliderValue/2 - 75/2) );
            var child = this.object.children[1];
            //console.log( sliderValue);
            child.scale.set(sliderValue/75, 1, 1);
            child.position.set((sliderValue*1.7 - 1.7*75), 0, 0);
            //child.position.set((sliderValue/3 - 75/2 +10), 0, 0);
            //geometry.applyMatrix( new THREE.Matrix4().makeTranslation(x, y, z) );
            console.log(child.position);        
			this.update_FRFs();
		
	},

	//type is "Simple" or "Azimuth".
	loadStern: function (type) {
		var path = "modules3D/stern" + type + ".dae";
		this.object.replaceAt(2,this.models[path]);
	},

	//type is "Simple" or "X".
	loadBow: function (type) {
		var path = "modules3D/bow" + type + ".dae";
		this.bowPositioned.replaceAt(0,this.models[path]);
	},

	//size is "S", "M" or "B".
	loadAccommodation: function (size) {
		var path = "modules3D/accommodation" +
			((size=="S")? 1 : (size=="M")? 2 : (size=="B")? 3 : undefined)
			+ ".dae";
		this.bridgeCamera.position.setY(59 + 8*(size=="M") + 14*(size=="B"));
		this.bowPositioned.replaceAt(1,this.models[path]);
	},
    
    
    winchOUT: function(){
        var winch = this.models["modules3D/winch.dae"];
        this.bowPositioned.replaceAt(2,new THREE.Group());
    },
    
    winchIN: function (){
        var winch = this.models["modules3D/winch.dae"];
        this.bowPositioned.replaceAt(2,winch);
    },

    craneOUT: function(){
        var crane = this.models["modules3D/crane.dae"];
        this.object.replaceAt(3,new THREE.Group());
    },
    
    craneIN: function (){
        var crane = this.models["modules3D/crane.dae"];
        this.object.replaceAt(3,crane);
    },
    
    
	//New implementation of Jensen's closed-expression formulas for estimating vessel motion.
	//True to Jensen's variable names, for easy comparison and debugging
	//Only radians and metric units are used.
	//See: http://www.angelfire.com/ultra/carolemarcio/oceaneng/v31cap4.pdf
	update_FRFs: function() {
	
		var omega = 2*PI/ocean.period; //angular frequency of waves
		
		//heading of vessel relative to waves, in radians:
		var beta = (ocean.waveHeading-vessel.heading)*PI/180;
		
		var k = omega*omega/g; //angular wave number
		var V = vessel.Speed_knots*(463/900); //metric speed of vessel
		var alpha = 1 - V*cos(beta)*omega/g;

		//Box model dimensions:
		var B = vessel.Cb * vessel.B;
		var L = vessel.L;
		var T = vessel.T;
		
		//sectional hydrodynamic damping
		var A = 2*sin(k*B*alpha**2/2)*exp(-k*T*alpha**2);
		
		var ke = abs(k*cos(beta)); //effective wave number
		var kappa = exp(-ke*T); //Estimate of Smith correction factor
		
		//expressions for use by both F and G:
		var f = sqrt((1-k*T)**2 + A**4/(k*B*alpha**3)**2 );
		var keLh = ke*L/2; //Values from zero to two-figured.
		
		//hack to avoid division by approximate zero when beta is +-PI/2.
		if (abs(keLh)<0.01) {
			var F = kappa*f;
			var G = 0; //a bit weird, but seems right, and works (?).
		} else{
			var F = kappa*f*sin(keLh)/keLh;
			var G = kappa*f*(sin(keLh)/keLh**2-cos(keLh)/keLh)*6/L;
		}
		
		var eta = 1/sqrt((1-2*k*T*alpha**2)**2 + (A/alpha)**4/(k*B)**2);
		
		this.omegaBar = alpha*omega; //Frequency of encounter
		this.PHIw = F*eta;
		this.PHItheta = G*eta;
    

		//Roll calculations (copy-paste from Olivia's code, with only a few changes):
		var GM = vessel.GM;
		var Cb = vessel.Cb;
		var Cwp = vessel.Cwp;
        var delta = vessel.Prism_Length_ratio;
		var critical_damping_percentage = vessel.critical_damping_percentage;
		var omegaBar = this.omegaBar;
		
        var natural_period = 2*PI*0.35*B/sqrt(g*GM); //From wikipedia: 2PI*k/sqrt(g*GM), where k is the radius of gyration. Here estimated to 0.35*B. (http://www.neely-chaulk.com/narciki/Radius_of_gyration)
		
        var restoring_moment_coeff = g*1025*Cb*L*B*T*GM;
        var breadth_ratio =  (Cwp - delta)/(1 - delta);
        var B_1 = breadth_ratio*B;
        var A_0 = Cb*B*T/(delta+breadth_ratio*(1-delta));
        var A_1 = breadth_ratio*A_0;
                
                //sectional damping coefficient//
                var Breadth_Draft_ratio = B/T;
                //3 <= B/T <= 6//
                if (Breadth_Draft_ratio>3){
                    var a0 = 0.256*Breadth_Draft_ratio - 0.286;
                    var b0 = -0.11*Breadth_Draft_ratio - 2.55;
                    var d0 = 0.033*Breadth_Draft_ratio - 1.419;
                }
                
                //1 <= B/T <= 3//
                else {
                    var a0 = -3.94*Breadth_Draft_ratio + 13.69;
                    var b0 = -2.12*Breadth_Draft_ratio - 1.89;
                    var d0 = 1.16*Breadth_Draft_ratio-7.97;
                }
                
                var Breadth_Draft_ratio = B_1/T;
                //3 <= B/T <= 6//
                if (Breadth_Draft_ratio>3){
                    var a1 = 0.256*Breadth_Draft_ratio - 0.286; 
                    var b1 = -0.11*Breadth_Draft_ratio - 2.55;
                    var d1 = 0.033*Breadth_Draft_ratio - 1.419;
                }
                
                //1 <= B/T <= 3//
                else {
                    var a1=-3.94*Breadth_Draft_ratio + 13.69;
                    var b1=-2.12*Breadth_Draft_ratio - 1.89;
                    var d1=1.16*Breadth_Draft_ratio-7.97;
                }

        var b_44_0 = (1025*A_0*B*B*a0*exp(b0*omegaBar**(-1.3))*omegaBar**d0/(sqrt(B/(2*g)))); //2g? Maybe check Jensen's paper.
        var b_44_1 = (1025*A_1*B_1*B_1*a1*exp(b1*omegaBar**(-1.3))*omegaBar**d1/(sqrt(B_1/(2*g))));
                
        var damping_ratio=sqrt(b_44_1/b_44_0);
                
        var b_44 = L*b_44_0*(delta + b_44_1*(1-delta)/b_44_0);
		
        //total damping = hydro damping + additional damping//       
        var add_damping = restoring_moment_coeff*natural_period/PI;
        var roll_hydro_damping= b_44+add_damping*critical_damping_percentage;
                
        //excitation frequency//
		//Note: here is a similar hack to the one I wrote above for the Heave and Pitch
        if (abs(beta-PI/2)<0.001 || abs(beta-3*PI/2)<0.001){
            var excitation_frequency = sqrt(1025*g*g*b_44_0/omegaBar)*(delta+damping_ratio*(1-delta))*L;
        } else {  
            var A = abs(sin(beta))*sqrt(1025*g*g/omegaBar)*sqrt(b_44_0)*2/ke;
            var B=sin(0.5*delta*L*ke)**2;
            var C=(  damping_ratio*sin(0.5*(1-delta)*L*ke) )**2;
            var D = 2*damping_ratio*sin(0.5*delta*L*ke)*sin(0.5*(1-delta)*L*ke)*cos(0.5*L*ke);
               
            var excitation_frequency=A*sqrt(B+C+D); 
        }
                
        //main formula//   
        var B = (1-(omegaBar*natural_period/(2*PI))**2)**2;
        var C = restoring_moment_coeff**2; 
        var D = (omegaBar*roll_hydro_damping)**2; 
                
        //roll output
        this.Roll = excitation_frequency/sqrt(B*C+D);
        
        
        /////////////////////////////////////////////////
        //outputs to the footBar
        heaveAmplitude = abs(this.PHIw*ocean.amplitude).toFixed(2);
        document.getElementById('heaveAmplitude').innerHTML = heaveAmplitude;
        
        pitchAmplitude = abs(this.PHItheta*ocean.amplitude*180/PI).toFixed(2);
        document.getElementById('pitchAmplitude').innerHTML = pitchAmplitude;
        
        
        rollAmplitude = abs(this.Roll*ocean.amplitude*180/PI).toFixed(2);
        document.getElementById('rollAmplitude').innerHTML = rollAmplitude;
        
        var waveLength = ((g*ocean.period**2)/(2*PI)).toFixed(2);
        document.getElementById('waveLength').innerHTML = waveLength;

        document.getElementById('Tn').innerHTML = natural_period.toFixed(2);
        
        ////////////////////////////////////////////////////
        
	},
	
    update: function (t) {
		//heave
		this.cont.position.setY(this.PHIw*ocean.amplitude*sin(this.omegaBar*t)/scale); //scaled for visualization
		
		//rotation
		var yaw = this.heading*PI/180; //y
		var pitch = this.PHItheta*ocean.amplitude*(-cos(this.omegaBar*t)); //z
		var roll = this.Roll*ocean.amplitude*sin(this.omegaBar*t); //x
		
		this.cont.rotation.set(roll,yaw,pitch,"YZX");
		//this.cont.setRotationFromEuler(new THREE.Euler(roll,yaw,pitch,"YZX"));
    }
};

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//----------------- VESSEL END -------------------
//------------------------------------------------


//------------------------------------------------
//-------------------- OCEAN ---------------------
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv


//object for all ocean stuff (don't need class for only one instance).
var ocean = {
	mesh: null,
	geom: null,
	water: null,
	side: 4096,
	segments: 1024,
	//Controllable parameters:
	amplitude: 2,
	period: 11,
	waveHeading: 290,

	update: function (t) {
		//calculate in graphical units by dividing by scale.
		var a = ocean.amplitude/scale;
		var waveLength = (ocean.period**2 *g/(2*PI))/scale;
		var V = vessel.Speed_knots*(463/900)/scale; //converted via m/s.

		//relative heading
		var beta = (ocean.waveHeading-vessel.heading)*PI/180;

		//The offset due to (illusory) motion is calculated as
		//the proportion of vessel velocity against wave heading
		//multiplied with time.
		var travelledOffset = V*cos(beta)*t;

		this.water.material.uniforms.waveAmplitude.value = a;
		this.water.material.uniforms.wavePeriod.value = ocean.period;
		this.water.material.uniforms.waveOffset.value = travelledOffset;
		this.water.material.uniforms.waveLength.value = waveLength;
		this.water.material.uniforms.time.value = t;
	}
};


//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//------------------ OCEAN END -------------------
//------------------------------------------------



var sunDir = new THREE.Vector3(1024, 492, -256);

preload();

function preload() {
	var splashinfo=document.getElementById("splashinfo");
	splashinfo.innerHTML = "Loading";
	
	manager = new THREE.LoadingManager();
	manager.onProgress = function (url, loaded, total) {
		console.log(url + " loaded. Progress: " + loaded + "/" + total);
	}
	manager.onError = function (url) {
			console.error("ERROR! ERROR! ERROR! " + url);}
	manager.onLoad = function (m) {
		console.log("Preloading complete!");
    
		var splash=document.getElementById("splash");
		splash.style.display = "none";

		init();
	};

	//Vessel parts:
	var cloader = new THREE.ColladaLoader(manager); //lagt til
	var colladas = ["accommodation1.dae", "accommodation2.dae",
				"accommodation3.dae", "bowSimple.dae",
				"bowX.dae", "cargoHold1.dae",
				"crane.dae", "sternAzimuth.dae",
				"sternSimple.dae", "winch.dae"];
	for (var i=0; i<10; i++)
		(function(filename) {
			var path="modules3D/" + filename;
		cloader.load(path, //endret
		//new THREE.ColladaLoader(manager).load(path,
			function onLoad(part) {
				vessel.models[path] = part.scene;
				//console.log(path + " loaded to vessel.models['" + path +"']");
			});
		})(colladas[i])
		
	//env "dock":
	dockEnv = new THREE.Group();
		//scale this too, to show decameters.
		var helper = new THREE.GridHelper(300, 10/scale);
		helper.position.set(0, 0, 0);
		helper.setColors(0xD8D8D8, 0xD8D8D8);
		dockEnv.add(helper);

		var axes = new THREE.AxisHelper(300);
		axes.rotation.x = -PI / 2;
		dockEnv.add(axes);

	//env "seaEnv":
	seaEnv = new THREE.Scene();
	
	new THREE.TextureLoader(manager).load(
		'textures/waternormals.jpg',
		function (waterNormals) {
			waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;

			ocean.water = new THREE.Water(renderer, orbitCamera, scene, {
				textureWidth: 512,
				textureHeight: 512,
				waterNormals: waterNormals,
				alpha: 1.0,
				sunDirection: sunDir.clone().normalize(),
				sunColor: 0xffffff,
				waterColor: 0x001e0f,
				distortionScale: 50.0,
			});

			//defining ocean geometry, which is a flat plane 
			ocean.geom = new THREE.PlaneBufferGeometry(
				ocean.side, ocean.side,
				ocean.segments, 1); //invariant over one axis.            
            
			// creating ocean mesh
			ocean.mesh = new THREE.Mesh(
				ocean.geom, ocean.water.material);
			ocean.mesh.add(ocean.water);

			//positioning mesh in the scene
			ocean.mesh.rotation.x = -PI/2;
			ocean.mesh.rotation.z = ocean.waveHeading*PI/180;

			//add mesh to seaEnv environment
			seaEnv.add(ocean.mesh);
		});

	// load skybox
	new THREE.ImageLoader(manager).load('textures/skyboxsun25degtest1.png', 
		function(image) {
			var cubeMap = new THREE.CubeTexture([]);
			cubeMap.format = THREE.RGBFormat;

			var getSide = function(x, y) {

				var size = 1024;

				var canvas = document.createElement('canvas');
				canvas.width = size;
				canvas.height = size;

				var context = canvas.getContext('2d');
				context.drawImage(image, -x * size, -y * size);

				return canvas;

			};

			cubeMap.images[0] = getSide(2, 1); // px
			cubeMap.images[1] = getSide(0, 1); // nx
			cubeMap.images[2] = getSide(1, 0); // py
			cubeMap.images[3] = getSide(1, 2); // ny
			cubeMap.images[4] = getSide(1, 1); // pz
			cubeMap.images[5] = getSide(3, 1); // nz
			cubeMap.needsUpdate = true;

			var cubeShader = THREE.ShaderLib['cube'];
			cubeShader.uniforms['tCube'].value = cubeMap;

			var skyBoxMaterial = new THREE.ShaderMaterial({
				fragmentShader: cubeShader.fragmentShader,
				vertexShader: cubeShader.vertexShader,
				uniforms: cubeShader.uniforms,
				depthWrite: false,
				side: THREE.BackSide});
			
            skyBox = new THREE.Mesh(
										//align with horizon (approximately)
				new THREE.BoxGeometry(ocean.side,ocean.side,ocean.side),
				skyBoxMaterial);
			seaEnv.add(skyBox);
		});
}

//------------------------------------------------
//----------------- init function ----------------
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

function init() {
	//scene initialization is indented for clarification of structure:
	scene = new THREE.Scene();
	//To orient skybox right (the skybox cannot be rotated, and is positioned globally, it seems)
	scene.rotation.y = PI;
		//scene.children[0] is a vessel container for proper positioning and rotation.
		vessel.cont = new THREE.Object3D();
		scene.add(vessel.cont)
		vessel.object = new THREE.Object3D();
		//vessel.object.castShadow = true;
		//vessel.object.receiveShadow = true;
		vessel.cont.add(vessel.object);
		vessel.object.position.setX(62); //oppdateres i loadCargoHold
		vessel.object.position.setY(-vessel.T/scale);
			vessel.bowPositioned = new THREE.Object3D();
			vessel.object.add(vessel.bowPositioned);
			//vessel.bowPositioned.children:
			vessel.bowPositioned.add(new THREE.Group()); //0: bow
			vessel.bowPositioned.add(new THREE.Group()); //1: accommodation
			vessel.bowPositioned.add(new THREE.Group()); //2: winch
			//bridge camera:
			vessel.bridgeCamera = new THREE.PerspectiveCamera(55, container.clientWidth / container.clientHeight,
		1, 100000);
			vessel.bridgeCamera.position.set(-5,59,0);
			//vessel.bridgeCamera.lookAt(new THREE.Vector3(300,0,0));
			vessel.bridgeCamera.up.set(0,1,0);
			vessel.bridgeCamera.rotation.set(0,PI/2,0,"YZX");
			vessel.bowPositioned.add(vessel.bridgeCamera);
		//vessel.object.children videre:
		vessel.object.add(new THREE.Group()); //1: cargo
		vessel.object.add(new THREE.Group()); //2: stern
		vessel.object.add(new THREE.Group()); //3: crane
		// Lights in scene.children[1] and scene.children[2]
		scene.add( new THREE.HemisphereLight( 0xbbbbff, 0x001e0f, 1.3 ) );
		var light = new THREE.DirectionalLight( 0xffffff, 1.5 );
		
		light.position.copy(sunDir);
		//light.castShadow = true;
		scene.add(light);
		//Environment placeholder in scene.children[3]
		scene.add(new THREE.Group());
	
	//Choose starting camera:
	camera = orbitCamera;
	
	//install renderer
	container.appendChild( renderer.domElement ); //canvas

	//controls
	controls = new THREE.OrbitControls(orbitCamera, renderer.domElement);
	controls.target = new THREE.Vector3(0, 1, 0); //1 to stay just above ocean at still water.
	controls.minDistance = 140;
	controls.maxDistance = 400;
	//controls.enablePan = false; 
	//controls.enableDamping=true; //lagt til nettopp.
	controls.update();
	
	//Bridge view controls:
	renderer.domElement.addEventListener("mousemove", function(e) {
		vessel.bridgeCamera.rotation.set(
			-PI/8 + (-(2*e.clientY/container.clientHeight)+1)*PI/4,
			-PI/2 -((2*e.clientX/container.clientWidth)-1)*PI/3,
			0,
			"YZX");
	});

	//GUI 'controls'
    gui = new dat.GUI( );
    
	var f1 = gui.addFolder('Ocean parameters');
		//syntax: ( object's name, 'object property's name', minimum value it can assume, max value)
		f1.add(ocean, 'amplitude', 0, 10).onChange(function(value) {
			controls.maxPolarAngle = PI/2-asin((ocean.amplitude/scale)/controls.minDistance);
            vessel.update_FRFs();
        });
		f1.add(ocean, 'period', 4, 15).onChange(function(value){
            vessel.update_FRFs();
        });
		f1.add(ocean, 'waveHeading', 270, 360).onChange(function(value) {
			ocean.mesh.rotation.z = value*PI/180;
			vessel.update_FRFs();
        });
		f1.open();
    
	var f2 = gui.addFolder('Vessel parameters');
		//f2.add(vessel, 'Speed_knots', 0, 27).onChange(function(value){vessel.update_FRFs();});
		f2.add(vessel, 'L', 75, 180).listen().onChange(function(value){
            vessel.update_FRFs();
            vessel.loadCargoHold();
        });
        f2.add(vessel, 'B', 18, 35).onChange(function(value){
            vessel.update_FRFs();
            vessel.cont.scale.z=value/25;
        });
        f2.add(vessel, 'T', 6, 10).onChange(function (value) {
			vessel.object.position.setY(-value/scale);
			vessel.update_FRFs();
        });
		f2.add(vessel, 'Cb', 0.3, 1).onChange(function(value){vessel.update_FRFs();});
		f2.add(vessel, 'Cwp', 0.75, 1).onChange(function(value){vessel.update_FRFs();});
		f2.add(vessel, 'GM', 0.5, 10).onChange(function(value){vessel.update_FRFs();});
		f2.add(vessel, 'critical_damping_percentage', 0, 1).onChange(function(value){vessel.update_FRFs();});
		f2.add(vessel, 'Prism_Length_ratio', 0, 0.749).onChange(function(value){vessel.update_FRFs();});
		f2.open();

	displayGrids();

	//Load minimal valid vessel configuration:
	vessel.loadCargoHold();
	vessel.loadStern("Simple");
	vessel.loadBow("Simple");
	vessel.loadAccommodation("S");
	vessel.update_FRFs();

	window.addEventListener('resize', onWindowResize, false);
	onWindowResize(); //workaround for first run
	
	animate();
}

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//--------------- END init function --------------
//------------------------------------------------



// grids and axes background 
function displayGrids() {
	var wavesIcon = document.getElementById("waves");
	wavesIcon.setAttribute("onclick", "displayOcean()");
	
	controls.maxPolarAngle = PI;
	scene.replaceAt(3, dockEnv);
	vessel.cont.position.setY(0);
	vessel.cont.rotation.set(0,0,0)
	gui.close();
	dat.GUI.toggleHide();
    
    globeCamera();
    
    document.getElementById('modulesMenu').style.left = "0.5%";
    document.getElementById('navBarIcons').style.left = "30%";
    document.getElementById('box2').style.width = "73.5%";
    document.getElementById('footer').style.display = "none";
	setTimeout(onWindowResize,1000); //wait for animation before resizing
}

// Ocean background
function displayOcean() {
	var editIcon = document.getElementById("edit");
	editIcon.setAttribute("onclick", "displayGrids()");
    
    document.getElementById('modulesMenu').style.left = "-27%";
    document.getElementById('navBarIcons').style.left = "3%";
    document.getElementById('box2').style.width = "99%";
    document.getElementById('footer').style.display = "block";
	setTimeout(onWindowResize,1000); //wait for animation before resizing
	
	//Force camera to stay above waves:
	controls.maxPolarAngle = PI/2-asin((ocean.amplitude/scale)/controls.minDistance);
	scene.replaceAt(3 , seaEnv);
	gui.open();
	dat.GUI.toggleHide();
}

//change camera functions
function globeCamera(){
    camera = orbitCamera;
	ocean.water.camera = camera;
	ocean.water.mirrorCamera = camera.clone(); //small hack

}

function bridgeCamera(){
    camera = vessel.bridgeCamera;
	ocean.water.camera = camera;
	ocean.water.mirrorCamera = camera.clone(); //small hack
}




//------------------------------------------------
//------------- Real time graphs ----------------
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

    var a = 'down';
    function abreFecha() {
        
        if( a == 'down'){
            document.getElementById('footer').style.top = '68%';
            a = 'up';
        }else{
            document.getElementById('footer').style.top = '95%';
            a = 'down';
        }     
    }
    

function updateGraphs (t) {
           
        heave_t = heaveAmplitude*sin(2*PI/ocean.period*t);
        pitch_t = pitchAmplitude*sin(2*PI/ocean.period*t - PI/2);
        roll_t = rollAmplitude*sin(2*PI/ocean.period*t);

    }

    
    window.feedHeave = function(callback) {
        var tick = {};
        tick.plot0 = heave_t;
        callback(JSON.stringify(tick));
    };
    
    window.feedPitch = function(callback) {
        var tick = {};
        tick.plot0 = pitch_t;
        callback(JSON.stringify(tick));
    };
    
    window.feedRoll = function(callback) {
        var tick = {};
        tick.plot0 = roll_t;
        callback(JSON.stringify(tick));
    };
    
     var myDashboard = {
        "graphset":[
          {//---------- heave graph-----------//
            "type":"line",
            /* Size your chart using height/width attributes */
            "height":"35%",
            "width":"33%",
            /* Position your chart using x/y attributes */
            "x":"0", 
            "y":"0%",
            "plot":{ 
                "aspect":"spline", 
                "marker":{"visible":true},
            },
            "scale-y":{"decimals":2},
            "series":[{"values":[0,0,0,0,0,0,0,0,0,0,0]}],
            "refresh":{
                "type":"feed",
                "transport":"js",
                "url":"feedHeave()",
                "method":"pull",
                "interval":500,
                "adjust-scale":true
            },
            title:{
                text:"Heave Movement [m]",
                fontFamily:"Helvetica",
                fontWeight:"none",
                fontSize:12
              }
          },
          {//---------- pitch graph-----------//
            "type": "line",
               /* Size your chart using height/width attributes */
            "height":"35%",
            "width":"33%",
            /* Position your chart using x/y attributes */
            "x":"30%", 
            "y":"0%",
                "plot":{ 
                    "aspect":"spline", 
                    "marker":{"visible":true},
                },
                "scale-y":{"decimals":2},
                "series":[{"values":[0,0,0,0,0,0,0,0,0,0,0]}],
                "refresh":{
                    "type":"feed",
                    "transport":"js",
                    "url":"feedPitch()",
                    "method":"pull",
                    "interval":500,
                    "adjust-scale":true
                },
                title:{
                    text:"Pitch Movement [deg]",
                    fontFamily:"Helvetica",
                    fontWeight:"none",
                    fontSize:12
                }
          },
          {//---------- roll graph-----------//
            "type": "line",
               /* Size your chart using height/width attributes */
            "height":"35%",
            "width":"33%",
            /* Position your chart using x/y attributes */
            "x":"60%", 
            "y":"0%",
                "plot":{ 
                    "aspect":"spline", 
                    "marker":{"visible":true},
                },
                "scale-y":{"decimals":2},
                "series":[{"values":[0,0,0,0,0,0,0,0,0,0,0]}],
                "refresh":{
                    "type":"feed",
                    "transport":"js",
                    "url":"feedRoll()",
                    "method":"pull",
                    "interval":500,
                    "adjust-scale":true
                },
                title:{
                    text:"Roll Movement [deg]",
                    marginBottom: "0",
                    fontFamily:"Helvetica",
                    fontWeight:"none",
                    fontSize:12
                }
          }
        ]
      };

    window.onload=function(){
       
         zingchart.render({ 
            id:'chartDivBla',
            height:"100%",
            width:"100%",
            data: myDashboard,
        });
        
    };
       

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//--------------- Real time graphs ---------------
//------------------------------------------------


function onWindowResize() {
	orbitCamera.aspect = container.clientWidth / container.clientHeight;
	orbitCamera.updateProjectionMatrix();
	vessel.bridgeCamera.aspect = container.clientWidth / container.clientHeight;
	vessel.bridgeCamera.updateProjectionMatrix();
	renderer.setSize(container.clientWidth, container.clientHeight);
}

function animate() {
	render();
	requestAnimationFrame(animate);
}

function render() {
	var t = clock.getElapsedTime();
	if (scene.children[3] == seaEnv) {
		ocean.update(t);
		vessel.update(t);
        updateGraphs(t);
		ocean.water.render();
	}

	controls.update(); //Naar maa man bruke denne?
	renderer.render(scene, camera);
}

