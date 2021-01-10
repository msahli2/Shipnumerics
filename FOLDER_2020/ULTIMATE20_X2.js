




	function GUI() {
  		var text = {message:'dat.gui', speed:0.8, displayOutline:false,};
		var gui = new dat.GUI({ autoplace: false , width:240 ,height : 6 * 15  });   //
		document.getElementById('GUI').appendChild(gui.domElement); 
		//gui.close() ;	

		 /*
		  .dropdown{ position:relative;display:inline-block;width:100px; }
		 */
  
		var object1 = {
			type1_boolean: false,
			type2_string: 'string',
			type3_number: 0,
			//SOUND :  false,
			
			/*
			
			SOUND: function () {
				var audio = document.getElementById('audio1');
				//audio.setLoop(true); audio.play(); 
				if(audio.paused){audio.play();	} //SOUND.innerHTML = "Pause";	
				else {audio.pause();	     	} //SOUND.innerHTML = "Play";	
			},
			*/
			
			DAY_NIGHT: function () {
				if (DayNightb == 'DAY')        {DayNightb = 'NIGHT'; DayNight=0.3 ; Skydome(); renderer.setClearColor( 0xfeefff, DayNight); } 
				else if (DayNightb == 'NIGHT') {DayNightb = 'DAY';   DayNight=0.99; Skydome(); renderer.setClearColor( 0xfeefff, DayNight); }   
			 },
			//CAPA_HANDEL: function ()   { delete3DOBJ('CAPA'); },	
			Capa_Hide:function(){
					if(capaHidden) {
						capaHidden = false;	SIMMON.CapaBox.visible = true;// code to show object
					} else {
						capaHidden = true;	SIMMON.CapaBox.visible = false;// code to hide object
					}
					//var selectedObject = scene.getObjectByName('CAPA');
                    //selectedObject.visible = false; //.parent.remove( selectedObject );
			},
			StationsDisplay  :function(){ deleteStations();}	,			 
			ShipTransMat:function(){
				//if ( Ship0.material == material0) {Ship0.material = material1, Ship.material = material1; WheelHouse.material = material1 }	
				//else  {Ship0.material = material0, Ship.material = Shipmaterial; WheelHouse.material = Shipmaterial;}		
				//if ( Ship.material == Shipmaterial) {Ship0.material = material1, Ship.material = material1; WheelHouse.material = material1 }	
				//else  {Ship0.material = Shipmaterial0, Ship.material = Shipmaterial; WheelHouse.material = Shipmaterial;}		

				if ( Ship.material.color.getHexString() == '9a7d0a') {Ship0.material = material1,           Ship.material = material1;    
																	  WheelHouse.material = material1;      Bulwark.material = material1}	
	         	else                                                  {Ship0.material = Shipmaterial0,      Ship.material = Shipmaterial; 
																	  WheelHouse.material = Shipmaterial;;  Bulwark.material = material0}			  
            },		 //  { Ship.material.opacity = 0.1;  Ship0.material.opacity = 0.3; }
			
			FLOATINGDOCK:function(){FLOATINGDOCK();  },
			SHOWGAUGES:function(){
             if ( document.getElementById('GAUGES').style.visibility == "hidden")  document.getElementById('GAUGES').style.visibility = "visible";
		     else if ( document.getElementById('GAUGES').style.visibility == "visible")  document.getElementById('GAUGES').style.visibility = "hidden";
  			},
		 
		};

        //https://www.cnblogs.com/xiaoniuzai/p/6685556.html
		var f1 = gui.addFolder('.OCEAN PARAMETERS'); 
		f1.add(this, 'SOUND' ); 			            //.onChange( SOUND1(););
		f1.add(object1, 'DAY_NIGHT');	
		//f1.add(object1, 'Capa_Hide');	
	
	    f1.add(this, 'waveHeading',-270, 270)  	    .onChange( function(value) {Ocean0.rotation.z = value*PI/180; 
		                                                                        Ocean03.rotation.z = value*PI/180; 
																				//caparrow.rotation.y = value*PI/180;
																				SIMMON.update_FRFs() ; });
	    //WindspeedController= f1.add(this, 'windspeed',2, 50)          	.onChange( function(value) {windspeed = value; SIMMON.update_FRFs(); } );
																				
	    WindspeedController = f1.add(this, 'windspeed').min(2.5).max(50.5).step(0.5)         .onChange( function(value) {windspeed = value; SIMMON.update_FRFs(); } );
		BeaufortController = f1.add(this, 'beaufort',0, 50)          	.onChange( function(value) {beaufort = value; SIMMON.update_FRFs();  } );
		SeastateController = f1.add(this, 'seastate',0, 50)          	.onChange( function(value) {seastate = value; SIMMON.update_FRFs();  } );
		WaveheightController = f1.add(this, 'waveheight',0, 50)        	.onChange( function(value) {waveheight = value; SIMMON.update_FRFs();} );
		
		
		//f1.add(this, 'waveAmplitude', 0.1, 6)  	.onChange( function(value) {waveAmplitude = value; SIMMON.update_FRFs(); });  
		//f1.add(this, 'waveLength', 10, 100)    	.onChange( function(value) {waveLength = value; wavePeriod =Math.sqrt(2*PI*waveLength/9.81); SIMMON.update_FRFs(); });  
		//f1.add(this, 'wavePeriod', 1, 60)        	.onChange( function(value) {wavePeriod = value; SIMMON.update_FRFs(); });   
 
		//f1.add(this, 'Speedi0',Speedi0 ) ;//,{source: source, theme: 'energyblue', width: '100px',height: '25px', selectedIndex:2} .onChange( function(value) {wavePeriod2 = value;   }); 
		//f1.add(this, 'WavAngli0',WavAngli0 ) ;// .onChange( function(value) {wavePeriod2 = value;   }); 
		//f1.add(this, 'WavLengi0',WavLengi0 ) ;// .onChange( function(value) {wavePeriod2 = value;   }); 

 		//var f11 = gui.addFolder('        '); 

		var f2 = gui.addFolder('.SHIP PARAMETERS'); 
     	f2.add(object1, 'SHOWGAUGES')  	 
		f2.add(this, 'rollAlarm',10, 30)			    .onChange( function(value) {rollAlarm = value    });

		
     	f2.add(SIMMON, 'WindageOpacity', 0.1, 0.99)  	.onChange( function(value) {Ship.material.opacity = value;});	
     	f2.add(SIMMON, 'BuoancyOpacity', 0.1, 0.99)  	.onChange( function(value) {Ship0.material.opacity = value;});	
     	f2.add(object1, 'StationsDisplay' )     
  
        f2.add(object1, 'FLOATINGDOCK' )     
     	f2.add(object1, 'ShipTransMat')  	        
		
		
 		//f2.add(SIMMON, 'L', 10, 90)   		   		.onChange( function(value) {ship.scale.x = value/30; SIMMON.update_FRFs();});
		//f2.add(SIMMON, 'B', 3, 35)    		   		.onChange( function(value) {ship.scale.y = value/6 ; SIMMON.update_FRFs();});
		//f2.add(SIMMON, 'D', 1, 10)    		   		.onChange( function(value) {ship.scale.z = value/3 ; SIMMON.update_FRFs();});		
	
		DraftController=f2.add(this, 'Draft',0, 5)  .onChange( function(value) {
		                                                document.getElementById("GZButton").click(); //Deny Draft Modif Handling in Meteo Criteria
														Draft = value; 
														document.getElementById("LOAD_draft").value = Draft;
														LoadCondition_TRIM('LOAD_draft');
														SIMMON.update_FRFs(); 
														});
		
    	f2.add(this, 'shipspeed', 0, 27)  		    .onChange( function(value) {shipspeed = value;  SIMMON.CAPSPEED(); SIMMON.update_FRFs();});
     	f2.add(this, 'shipheading', 0, 360)  		.onChange( function(value) {shipheading =value; SIMMON.CAPSPEED(); SIMMON.update_FRFs(); });
	 
    	TransController=f2.add(this, 'Transversals', 0, 50).step(2)  		.onChange( function(value) {ShipSectionS('Trans',value); });
        // TransController=f2.add(text, 'speed', { 1: 0, 2: 0.1, 3: 5 } );	
	
	
    	f2.add(this, 'Longitudinals', 0, 10)  		.onChange( function(value) {ShipSectionS('Longi',value); });
    	f2.add(this, 'Waterlines', 0, 10)  		    .onChange( function(value) {ShipSectionS('Waterl',value); });
		//var Transversals = 0, Longitudinals = 0, Waterlines= 0;	

/*			
		//f2.add(SIMMON, 'Cb', 0.3, 1).				onChange(function(value){SIMMON.Cb =  value; SIMMON.update_FRFs();}); 
		//f2.add(SIMMON, 'Cwp', 0.75, 1).		    onChange(function(value){SIMMON.Cwp = value; SIMMON.update_FRFs();});  //-(SIMMON.T*s)
		//f2.add(SIMMON, 'GM', 0.5, 10).		    onChange(function(value){SIMMON.GM =  value; SIMMON.update_FRFs();});
		//f2.add(SIMMON, 'critical_damping_percentage', 0, 1);  //.onChange(function(value){SIMMON.update_FRFs();});
		//f2.add(SIMMON, 'Prism_Length_ratio', 0, 0.749);  //.onChange(function(value){SIMMON.update_FRFs();});
		
*/	
 	} 		



	function SHIPNUMERICS(ship,x,z,y){
		//SHIPNUMERICS TN 2020 ---------------------------------------------------------------------------------------------------------------------
		//var modifier = new THREE.BendModifier();
		var loader = new THREE.FontLoader();
		loader.load( 'https://rawcdn.githack.com/msahli2/Shipnumerics/816300912182d65b0e5a0135537ef7164e858e57/FOLDER_2020/helvetiker_regular.typeface.json', function ( font ) {
			var textGeo = new THREE.TextGeometry( 'SHIPNUMERICS TN 2020', {
				font: font,    // Font family	
				size:1,               // Font size 
				height:  20,              // Font height (depth)   
				//weight: 'bold',         // Font weight  
				//style: 'italic',        // Font style
				curveSegments: 5,       // Amount of curve segments
				bevelThickness: 0.1,      // Bevel thickness
				bevelSize: 0.1,           // Bevel size
				bevelEnabled: false,    // Enable/Disable the bevel 
				//material: 0,            // Main material
				//extrudeMaterial: 0.5      // Side (extrude) material 				
				} );

			//textGeo.computeBoundingBox();
			//var centerOffset = - 0.5 * ( textGeo.boundingBox.max.x - textGeo.boundingBox.min.x );
 	 
			var textMaterial = new THREE.MeshPhongMaterial( { color:0x0000FF, specular:0x0000FF } );  //0xb90000 https://html-color-codes.info
			var mesh2 = new THREE.Mesh( textGeo, textMaterial );

			//mesh2.position.x = centerOffset;		mesh2.position.y = -centerOffset/fntsize;	mesh2.rotation.x = -Math.PI/2;    
		    //mesh2.position.set(geoparticles2.vertices[1].x-LPP/2, geoparticles2.vertices[1].z  , 0  ); 
		    mesh2.scale.set(.15, .15, .15);
		    //mesh2.position.set(25-LPP/2, 6 , 0  ); 	
		    mesh2.position.set(x, z, y  ); 				
			//dummy.add(mesh2);	
			return(mesh2);
	dummy.add(mesh2); 
/*	
			//PRINTING ----------------SHIPNUMERICS TN 2020------------------------
			//forward convert & boolean
			var shipx = THREE.CSG.fromMesh(ship);  
			var cutr = THREE.CSG.fromMesh(mesh2);
			//backward convert
			var RoughMesh = THREE.CSG.toMesh(cutr.intersect(shipx), new THREE.MeshPhongMaterial({color:'blue'}));//Mesh0.renderOrder = 0;
			RoughMesh.position.set(0,0,+0.03) ;		 
			//dummy.add(RoughMesh);
			
			//Refine Mesh:final freeboard mesh
			var meshTsT =  THREE.CSG.fromMesh(RoughMesh); 		
			var RefinedMesh = THREE.CSG.toMesh(meshTsT.subtract(shipx), new THREE.MeshPhongMaterial({color:'blue'}));//Mesh0.renderOrder = 0;
			//dummy.add(RefinedMesh);		//meshTsT2.position.set(0,0,1) ;		 
            
			//return(RefinedMesh);
			return(mesh2);
*/			
			

		} );	//FontLoader.load
		

    }


		
		
 	//GLOBALS:
	

	
	var clock = new THREE.Clock();
	var heaveAmplitude, pitchAmplitude, rollAmplitude0 , rollAmplitude;  
	var RollAmp13,PitchAmp13,HeaveAmp13,  RollClrt,PitchClrt,HeaveClrt,   RollAcc,PitchAcc,HeaveAcc  ;
	var scale2 = 1;    

	var PI=Math.PI, cos=Math.cos, sin=Math.sin, pow=Math.pow ,sqrt=Math.sqrt, abs=Math.abs, exp=Math.exp, round=Math.round, asin=Math.asin, g = 9.81 ,scale = 0.5; 
	var TTax = 0;
	var TTa00 = 0;
	//object for all SIMMON stuff 
    var SIMMON = {
	
		MomentRoll:0,
		MomentPitch:0,
		MomentHeave:0,		
		
		X_Shift	:0,	
		Y_Shift	:0,	
		Z_Shift	:0,
        Weights :1,
		box_X0	:0,
		box_Y0	:0,	
		box_Z0	:0,	
		WeightBox : null,	
		CapaBox : [],		
		BuoancyOpacity:1,
		WindageOpacity:1,

		
		//Controllable parameters:
		SIMMON_id: "SIM",

		signalrandom :[],
		signaluniform :[],		
		signalTime :[],
		samlpeSize :256,	//128 256 384 512
		samplingWindow : 0,
		samplingInterval : 0,
		samplingRate : 0, 
		limit0:0,	 
		limitB:0,
		
		//Hidden parameters
		PHIw: 1, 
		PHItheta: 1,
		omegaBar: 1,
		//B: 6, 				// 40*scale, //Width of ship model.
		//L: 30, 				//computed from choice of components, namely cargo hold.
		//D: 4, 				// 
		//T: Draft, //   2, 				// ************************************************************
		Cb: 0.5,            //GUI Modif
		Cwp: 0.8,           //GUI Modif
		GM: 3,              //GUI Modif		
 
		critical_damping_percentage: 0.2,  //GUI Modif
		Prism_Length_ratio: 0.749,         //GUI Modif

		//audioContext = new AudioContext();
		//osc = audioContext.createOscillator();
		
        oldts: null,
		newts: null,
        ts0: null,
		dts: null ,	//250
		
		//implementation of Jensen's closed-expression formulas for estimating SIMMON motion. 
		//See: http://www.angelfire.com/ultra/carolemarcio/oceaneng/v31cap4.pdf

		update_FRFs: function() {  //Full Scale Measurements  Full_Scale_Meas.pdf
			/*
			http://www.surfline.com/surfdata/chart_viewer/?chart=medwave&id=2958
			http://www.scs-ingenierie.com/cours/
					Sea Description term                       Wind sp.[knots]  Wave height [m]
			Beufort state Wind Wave								min 	max 	Probable 	Max
			0 	0 	Calm 			Calm						0 		1 		0 			0
			1 	0 	Light air 		Ripples						1 		3 		0.1 		0.1
			2 	1 	Light breeze 	Small wavelets 				3 		6 		0.2 		0.3
			3 	2 	Gentle breeze 	Large wavelets 				6 		10 		0.6 		1
			4 	3 	Moderate breeze Small waves 				10 		16 		1 			1.5
			5 	4 	Fresh breeze 	Moderate waves 				16 		21 		2 			2.5
			6 	5 	Strong breeze 	Large waves					21 		27 		3 			4
			7 	6 	Near gale 		Large waves 				27 		33 		4 			5.5
			8 	7 	Gale 			Moderately high waves 		33 		40 		6 			7.5
			9 	8 	Strong gale 	High waves 					40 		47 		7 			10
			10 	9 	Storm 			Very high waves 			47 		55 		9 			12.5
			11 	9 	Violent storm 	Exceptionally high waves 	55 		63 		11.5 		16
			12 	9 	Hurricane 		Exceptionally high waves 	63 		71 		14 			16
			13 	9 	Hurricane 		Exceptionally high waves 	71 		80 		>14 		>16
			14 	9 	Hurricane		Exceptionally high waves 	80 		89 		>14 		>16
			15 	9 	Hurricane 		Exceptionally high waves 	89 		99 		>14 		>16
			*/
		    // windspeed = 10 || windspeed ;		
			if 		(windspeed == 0 ) windspeed = 10
			if 		(windspeed > 1  && windspeed <= 4 )  { beaufort = 1; seastate = 0;  waveheight = 10;		waveheight = 0.10;}
			else if (windspeed > 4  && windspeed <= 7 )  { beaufort = 2; seastate = 1;  waveheight = 10.50;		waveheight = 0.30;}
			else if (windspeed > 7  && windspeed <= 11)  { beaufort = 3; seastate = 2;  waveheight = 50.125;	waveheight = 0.85;}	
			else if (windspeed > 11 && windspeed <= 17)  { beaufort = 4; seastate = 3;  waveheight = 125.250;	waveheight = 1.87;}
			else if (windspeed > 17 && windspeed <= 22)  { beaufort = 5; seastate = 4;  waveheight = 250.400;	waveheight = 3.25;}
			else if (windspeed > 22 && windspeed <= 28)  { beaufort = 6; seastate = 5;  waveheight = 400.600;	waveheight = 5.00;}
			else if (windspeed > 28 && windspeed <= 34)  { beaufort = 7; seastate = 6;  waveheight = 600.900;	waveheight = 7.50;}
			else if (windspeed > 34 && windspeed <= 40)  { beaufort = 8; seastate = 6;  waveheight = 900.1400;	waveheight = 11.5;}
			else    { beaufort = 9; seastate = 6;                                       waveheight = 1400;    	waveheight = 12.00;}    //(windspeed > 41 || windspeed < 48) 

			/*				
			if 		(waveheight <= 0.10 )                     { beaufort = 1; seastate = 0;  windspeed  = 2.5;	}
			else if (waveheight > 0.10 && windspeed <= 0.50)  { beaufort = 2; seastate = 1;  windspeed  = 5.5;	}
			else if (waveheight > 0.50 && windspeed <= 1.25)  { beaufort = 3; seastate = 2;  windspeed  = 9;	}	
			else if (waveheight > 1.25 && windspeed <= 2.50)  { beaufort = 4; seastate = 3;  windspeed  = 14;	}
			else if (waveheight > 2.50 && windspeed <= 4.00)  { beaufort = 5; seastate = 4;  windspeed  = 19.5;	}
			else if (waveheight > 4.00 && windspeed <= 6.00)  { beaufort = 6; seastate = 5;  windspeed  = 25;	}
			else if (waveheight > 6.00 && windspeed <= 9.00)  { beaufort = 7; seastate = 6;  windspeed  = 31;	}
			else if (waveheight > 9.00 && windspeed <= 1.40)  { beaufort = 8; seastate = 6;  windspeed  = 37;	}
			//else    { beaufort = 9; seastate = 6;                                            windspeed  = 1400;    	}    //(windspeed > 41 || windspeed < 48) 



			var s = Math.sign(waveheight);
			var ax = Math.abs(waveheight);
			var f = s*(ax - Math.floor(ax));
			var entw = s*Math.floor(ax) ; 
			var decw = s*(ax - Math.floor(ax)) ;
			 */ 
			windspeed = Math.floor(windspeed)  ;			           //wind speed is integer
			waveAmplitude = waveheight/2 ;                  
			//dummy.position.set(LPP/2,-(SIMMON.T*s),0) ;           // update draft
//camera.position.set(1*LPP, 0.4*LPP, 1*LPP); //recenter the ship

			//WindspeedController.updateDisplay(); 
			//WaveheightController.updateDisplay(); 
			//SeastateController.updateDisplay(); 
			//BeaufortController.updateDisplay() ;

			//Basic Data----------------------------------------------------------------------------
			var Ls = LPP,  lpp = LPP, lar = BEAM, cre = DEPTH,  bsd = lar/cre , cbc = SIMMON.Cb;
			var X1 = 0, X2 = 0, k = 0, s = 0, r = 0, OG_sD = 0, nsi=0  ;
            
			SIMMON.T = Draft;    //used in SimHeave simulation and LOAD MASTER
			
			//PHI = AMPLITUDE
			var Fb = 0.15 * cre;
			//var Tirant = SIMMON.T ; //0.85 * D
			var GMreg = 0.53 + 2 * lar * (0.075 - 0.37 * (Fb/lar) + 0.82 * (Fb/lar) - 0.014 * (lar/cre) - 0.032 * (Ls/lpp));

			var C = 0.746 + 0.046 * (lar / Draft) - 0.086 * (Ls / 100) ;
			var Tperiode = C * lar / (sqrt(GMreg));
			NatPeriod_IS2008 = Tperiode.toFixed(3);
			

      
			
		    //heading of vessel relative to waves, in radians:
		    //var beta = (ocean.waveHeading-vessel.heading)*PI/180;
 			var betha =  (waveHeading-shipheading)*PI/180 ; //heading * 3.14 / 180 ;
			var Block = SIMMON.Cb  ; 				//CSng(Mid(DIMENSIONS(8),3)) ;'cb			
			var Breadth = BEAM * Block ;
			var Length =LPP;

			var Speed_metric = shipspeed* 0.5144444 ;
			var Froude_N = Speed_metric / sqrt((g * Length)) ;
 
			var Roll_Movement = new Array(), Pitch_Movement = new Array(), Heave_Movement = new Array();
			var Vertical_Movement = new Array(), Vertical_Acceleration = new Array(), Heave_Movement = new Array();
			
			var arrRoll = new Array(), arrPitch = new Array(), arrHeave = new Array();			
            //Dim wave_freq(nn),Vertical_Movement(nn),Vertical_Acceleration(nn),Pitch_Movement(nn),Heave_Movement(nn),Bending_Moment(nn),Roll_Movement(nn),wave_period(nn) As Single
			var position = 0 ; //(CSng(Mid(DIMENSIONS(5),4))- LENGTH/2 )*LENGTH/100 ; '    Length * Position / 200
			var WaveLength_n = 19 ;
			//var Wave_Len = new Array([5, 10, 15, 20, 25, 30, 35, 40, 50, 60, 70, 80, 100, 120, 140, 180, 200, 300, 400, 500,600,700] );
			var Wave_Len = [5, 10, 15, 20, 25, 30, 35, 40, 50, 60, 70, 80, 100, 120, 140, 180, 200, 300, 400, 500,600,700] ;			
			//2*PI)wavelength =  9.81* pow(wavePeriod, 2) /            .toFixed(3);
	
			//for (var l = 0; l < Wave_Len.length-1  ; l++) {	
l=1;
Wave_Len[l] = abs(g * pow(wavePeriod,2) / (2*PI)).toFixed(3); 
  		
				//wave_freq=0.05+1.95*l/1000;
                wave_freq  = sqrt(2*PI*g/ Wave_Len[l]) ;
			    wave_number = pow(wave_freq,2) / g ;   //w2=Kg
					
				eff_wave_number = abs(wave_number * cos(betha)) ;                                                                                      				//2.8
				smith_factor = exp(-eff_wave_number * Draft) ; 
				
				alpha = 1 - Froude_N * sqrt(wave_number * Length) * cos(betha) ;                                                                       					//2.4
				sectional_hydro_damping = 2 * sin(0.5 * wave_number * Breadth * pow(alpha,2)) * exp(-wave_number * Draft * pow(alpha,2)) ;                   			//2.5
				a1 = pow((1-wave_number * Draft),2);                                                                                                              		//2.9 /a
				b1 = pow((pow(sectional_hydro_damping,2)/(wave_number*Breadth*pow(alpha,3))),2);
				f1 = sqrt(a1 + b1);                                                                                                                             	    //2.9 / a+b

				FF = smith_factor * f1 * (2 / (eff_wave_number * Length)) * sin(eff_wave_number * Length / 2) ;                                              			//2.6
				GG = 24 * smith_factor * f1 / ( pow(eff_wave_number * Length,2)  * Length) *  
				 	(sin(eff_wave_number * Length / 2) - (eff_wave_number * Length / 2) * cos(eff_wave_number * Length / 2)) ;                           					//2.7
                eta = 1 /(sqrt(pow((1-2*wave_number*Draft*pow(alpha,2)),2)+	pow(pow(sectional_hydro_damping,2) /
				    (wave_number*Breadth*pow(alpha,2)),2))); //2.13
 			
				FRF_Heave = 1 * eta * FF ;                                                                                                               //2.11
				FRF_Pitch = 1 * eta * GG ;                                                                                                      //2.12

				Vertical_Movement[l]= sqrt( pow(FRF_Heave,2) + pow(FRF_Pitch, 2) * pow(position,2) ) ;  //the frequency response functions for the vertical motion
				Vertical_Acceleration[l] = pow(alpha,2) * wave_number * g * Vertical_Movement[l];        //acceleration
				
				Pitch_Movement[l] = sqrt(pow(FRF_Pitch,2) * pow(position,2) ) ;//function for Pitch  p64 --------------------------
				Heave_Movement[l] = abs(FRF_Heave) ;//function for Heave  p64 --------------------------
 
				arrPitch[l] = FRF_Pitch;	
				arrHeave[l] = 1*FRF_Heave;
			    //document.getElementById('container32').innerHTML += '<pre>' + '<BR>' +  l + '  ' + wave_freq  ;	
			//}


			
 			//ROLL ________________________________________________________________________________________________________________________
			var excitation_frequency,AA,BB,CC,DD  ;  			
			var critical_damping_percentage = 2/ 100 ;
			var GM = SIMMON.GM ;
			var Cwp = SIMMON.Cwp;
			var delta = Cwp - 0.05 ; // ' delta cannot be greater than CWP /p74
			var B_0 = BEAM ;
			var natural_period = NatPeriod_IS2008 ;//Natural period of roll according IS 2008
			var restoring_moment_coeff = g * 1025 * Block * Length * B_0 * Draft * GM ;
			//for (var l = 0; l < Wave_Len.length-1  ; l++) {	 
l=1;
Wave_Len[l] = abs(g * pow(wavePeriod,2) / (2*PI)).toFixed(3); 

			    wave_freq = sqrt(2*PI*g/ Wave_Len[l]) ;
				//wave_period = 2*PI/ wave_freq ;
				wave_number = pow(wave_freq,2) / g ;   //ArrR.add(wave_number)
	
				alpha = 1 - Froude_N * sqrt(wave_number * Length) * cos(betha) ;
				encounter_frequency = wave_freq  * alpha ; 
			    eff_wave_number = abs(wave_number * cos(betha)) ;
				
				breadth_ratio = (Cwp - delta) / (1 - delta)  ;                           //6.3
				B_1 = breadth_ratio * Breadth ;
				A_0 = Block * Breadth * Draft / (delta + breadth_ratio * (1 - delta)) ;  //6.4
				A_1 = breadth_ratio * A_0 ;
 				
				//sectional damping coefficient  // CHALMERS W ave-Induced Loads and Ship Motions .pdf  page 96 & JENSSEN.PDF page 14/15
				var B_T = Breadth / Draft ;
				if (B_T > 3) //3 <= B/T <= 6//
					{a0 = 0.256*B_T-0.286; 	b0 = -0.11*B_T-2.55;  d0 = 0.033*B_T-1.419; } // triangular Section
				else     					//1 <= B/T <= 3//
					{a0 = -3.94*B_T+13.69;	b0 = -2.12*B_T-1.89;  d0 = 1.16*B_T-7.97;}    // rectangular Section

				var B_T = B_1 / Draft
				if (B_T > 3)//3<= B/T <= 6
					{a1 = 0.256*B_T-0.286;	b1 = -0.11*B_T- 2.55; d1 = 0.033*B_T-1.419;}
				else                       //1 <= B/T <= 3//
					{a1 = -3.94*B_T+13.69;	b1 = -2.12*B_T-1.89;  d1 = 1.160*B_T-7.97;}
					
				//B_44 - hydro damping coeff//
				b_44_0 = (1025*A_0*pow(Breadth,2)*a0*exp(b0* pow(encounter_frequency,-1.3))* pow(encounter_frequency,d0) / (sqrt(Breadth/(2*g)))); 	//6.5 /a.
				b_44_1 = (1025*A_1*pow(B_1,2)*a1*exp(b1* pow(encounter_frequency,-1.3))* pow(encounter_frequency,d1) /(sqrt(B_1/(2*g))));				//6.5 /b
						
				damping_ratio = sqrt(b_44_1 / b_44_0) ;
				b_44 = Length * b_44_0 * (delta + damping_ratio * (1 - delta))  ;                         //6.6
				//total damping = hydro damping + additional damping//
				add_damping = restoring_moment_coeff * natural_period / 3.14 ;
				roll_hydro_damping = b_44 + add_damping * critical_damping_percentage  ;                  //6.15
			
				///excitation frequency -----------------------
				if  (waveHeading == 90 ) {
					//heading = 270 ;	
					excitation_frequency = Math.sqrt(1025 * pow(g,2) * b_44_0 / encounter_frequency) * (delta + damping_ratio * (1 - delta)) * Length ;    //6.14
					}
				else{
					AA =  abs(sin(betha)) * sqrt(1025 * pow(g,2) / encounter_frequency) * sqrt(b_44_0) * 2 / eff_wave_number ;          //6.13 /a   aa=abs(Sin(Betha)Sqr(rog2/w)Sqr(b440)*(2/ke)
					BB =  pow(sin(0.5 * delta * Length * eff_wave_number), 2) ;                                                         //6.13 /b   bb=sin2(0.5dLke)
					CC = damping_ratio * pow(sin(0.5 * (1 - delta) * Length * eff_wave_number), 2) ;                                     //6.13 /c   cc=sin2(0.5(1-d)Lke)

					DD = 2 * damping_ratio * sin(0.5 * delta * Length * eff_wave_number) * sin(0.5 * (1 - delta) * Length * eff_wave_number) 
					    * cos(0.5 * Length * eff_wave_number) ; //6.13 /d 3Ã©me terme
					excitation_frequency = AA * sqrt(BB + CC + DD) ;
//document.getElementById('container3').innerHTML += '<pre>'+ '<BR>' + excitation_frequency + '  '+ abs(sin(betha))   ;
					
					}

					//document.getElementById('container32').innerHTML += '<pre>'+ '<BR>'  	+ ' meext  ' + excitation_frequency	
					//excitation_frequency=Math.sqrt(1025*g*g*b_44_0/encounter_frequency)*(delta+damping_ratio*(1-delta))*Length;
					//main formula//
					AA = pow( 1- pow( encounter_frequency*natural_period/(2*PI),2) ,2)  ;                         //6.2 AA=denominateur 1er terme
					BB = pow(restoring_moment_coeff, 2)  ;                                                             //6.2 BB=C44^2
					CC = pow(encounter_frequency*roll_hydro_damping, 2)  ;                                        //6.2 CC=denominateur 2Ã¨me terme

			

				//function for roll  p73 -----------------------------------------------------
				//Roll_Movement(i) = AMPLITUDE * excitation_frequency / (Math.sqrt(AA * BB + CC))                  //6.2
				Roll_Movement[l] = 1 * excitation_frequency / (sqrt(AA * BB + CC)) 				;          //6.2
				if (isNaN(Roll_Movement[l])) Roll_Movement[l] = 0 ; //5
				arrRoll[l] = Roll_Movement[l] ;
	 //document.getElementById('container3').innerHTML += '<pre>'+ '<BR>'  	+ ' meroll  ' + excitation_frequency	+ '  ' + A_0 + '  ' + b0 + '  ' + CC ;			
	

	
				//if ( l == 5 ) document.getElementById('container32').innerHTML = '<pre>' + '<BR>' + " Roll  Amplitude     / " + l + '  ' + critical_damping_percentage;		
				//if ( l= 1 )document.getElementById('container32').innerHTML = '<pre>' + '<BR>' + " Roll  Amplitude     / " + wave_freq   ;  //RollAmp13		
            //}	
			

			// SEA SPECTRA
			//BUILD SPECTRUM's /Waves and Spectrums.pdf-----------------------------------------------------------------------------
            var H13 = waveAmplitude ;
 		    var ys = new Array(), S_Spectra1 = new Array(),S_Spectra2 = new Array()  ;
            var Sp_PitchAmp1 = new Array(), Sp_HeaveAmp1 = new Array(), Sp_RollAmp1 = new Array()  ;			
            var Sp_PitchAmp2 = new Array(), Sp_HeaveAmp2 = new Array(), Sp_RollAmp2 = new Array()  ;
			var Fw = new Array(), Fwe = new Array() ;
			var Se1,Se2;
			var vv = 10;
			var A0 = 0.0081 * pow( g,2)  ;
	        //var B0 = 0.0323 * pow( (g / H13),2)  ;
	        var B0 = 0.74 * pow( (g /(vv*0.515)),4)  ;			
	 	    var JS_Wp = 0.4512 ;  //0.4512
			for (var l = 0; l < Wave_Len.length-1; l++) {		
		
				var w = sqrt(2*PI*g/ Wave_Len[l]) ;    //Lmda(i) = 2*Math.PI/xs(i)^2
				var we =  (1+w*shipspeed * 0.515 * cos(betha)/g);     //We computing we= w(1+w.Speed(s)*0.515*cos(Î±)/g)        'V.1852/3600     
                Fw[l] = w;      Fwe[l] = we;
 //document.getElementById('container3').innerHTML += '<pre>' + Wave_Len[l]	;	
 //return;
				//SPECTRE ITTC2005/Spectre de Bretschneider  SH'â· page 67
				ys[l] = A0 / pow( w,5)  *  exp(-B0 / pow( w,4))
				S_Spectra1[l] = ys[l];  // Bretschneider SPECTRA
				Se1 = ys[l];  // (1 + 2 * w * shipspeed * 0.515 * cos(betha)/g)  //Se computing Se= Sw(1+2*w.speed* 0.515*cos(Î±)/g)-1

				//SPECTRE JONSWAP   page 68
				if  (w < JS_Wp) {var Sigma = 0.07;}
				else            {var Sigma = 0.09;}
					
				var aa = exp (-0.5 * pow(  ( w / JS_Wp-1),2 ) / pow( Sigma,2) );
				
				var Gamma = 3.3 ;
				ys[l] = 1 * ys[l] * pow(Gamma,aa)  ; //0.625
				S_Spectra2[l] = ys[l] ;              //JONSWAP SPECTRA
				//Se computing Se= Sw(1+2*w.speed * 0.515*cos(Î±)/g)-1
				Se2 = ys[l]*(1 - 2 * w * shipspeed * 0.515 * cos(betha)/g ) ;

				//DEDUCED MOTIONS SPECTRUMS -------------------------------------------------------------
				//Sp_PitchAmp1[l] = pow( arrPitch[l] ,2) * Se1;//Bretschneider RAO SPECTRA
 				//Sp_HeaveAmp1[l] = pow( arrHeave[l] ,2) * Se1;
			    //Sp_RollAmp1[l]  = pow( arrRoll[l]  ,2) * Se1;
				
				//Sp_PitchAmp2[l] = pow( arrPitch[l] ,2) * Se2;//JONSWAP RAO SPECTRA'
				//Sp_HeaveAmp2[l] = pow( arrHeave[l] ,2) * Se2;
				//Sp_RollAmp2[l]  = pow( arrRoll[l]  ,2) * Se2;
				
  	
 
// if ( l == 5 ) document.getElementById('container32').innerHTML = '<pre>' + '<BR>' + " Roll  Amplitude     / " + l + '  ' + critical_damping_percentage;
//document.getElementById('container32').innerHTML += '<pre>' + '<BR>' +  l + '  ' + w  ;		
 //document.getElementById('container32').innerHTML += '<pre>' + '<BR>' +  l + '  ' + Sp_RollAmp2[l] + '  ' + Sp_PitchAmp2[l] + '  ' + Sp_HeaveAmp2[l];	 
		    }	
			//var mx = new Array()  ;

			var  m0 = new Array(), m2 = new Array(), m4 = new Array() ;
			 
			//Hs = (1.555+0.2596Î³ âˆ’ 0.02231 Î³^2+0.001142Î³^3)g.Î±1/2 /(2Ï€.fp)^2 ;
			//mâˆ’1 = (0.1195 + 0.05561Î³ âˆ’ 0.003033Î³ + 0.0001595Î³^3)g^2Î±/(2Ï€.fp )^5;		
			//m0 = (0.1475 + 0.05617Î³ âˆ’ 0.003077Î³ + 0.0001618Î³^3)g^2Î±/(2Ï€.fp )^4;
			//m1 = (0.2059 + 0.05705Î³ âˆ’ 0.003154Î³ + 0.0001661Î³^3)g^2Î±/(2Ï€.fp )^3;
			//m2 = (0.3420 + 0.05827Î³ âˆ’ 0.003269Î³ + 0.0001723Î³^3)g^2Î±/(2Ï€.fp)^2;
			//m3 = (0.8015 + 0.05984Î³ âˆ’ 0.003422Î³ 2 + 0.0001807Î³^3)g^2Î±/(2Ï€.fp); 
 
			'JONSWAP RAO SPECTRA'
//document.getElementById('container3').innerHTML += '<pre>' + Sp_RollAmp2 ;	//Fw 
/* 				 
			var mxr = Simpson(Fw, Sp_RollAmp2) ;
			
			RollAmp13 = 2 * sqrt(mxr[0]);  //m0.push(RollAmp13);
		
			RollClrt = 4 * sqrt(mxr[1]);   //m2.push(RollClrt);
			RollAcc = 4 * sqrt(mxr[2]);    //m4.push(RollAcc)	;
		 
			var mxp = Simpson(Fw, Sp_PitchAmp2) ;			
			PitchAmp13 = 2 * sqrt(mxp[0]); //m0.push(PitchAmp13);
			PitchClrt = 4 * sqrt(mxp[1]);  //m2.push(PitchClrt);
			PitchAcc = 4 * sqrt(mxp[2]);   //m4.push(PitchAcc);		
 			
			var mxh = Simpson(Fw, Sp_HeaveAmp2) ;			
			HeaveAmp13 = 2 * sqrt(mxh[0]); //m0.push(HeaveAmp13);
			HeaveClrt = 4 * sqrt(mxh[1]);  //m2.push(HeaveClrt);
			HeaveAcc = 4 * sqrt(mxh[2]);   //m4.push(HeaveAcc);	
 */

			this.SimRoll = 0;
			this.SimPitch = 0;	
			this.SimHeave = 0;
			this.SimWave = 0;	

			this.MonRoll = 0;		
			this.MonPitch = 0;	
			this.Troll = 0;
			this.Tpitch	 = 0;
				
			this.Phim=0;
			this.dPhi=0;
			this.NBrtn=0;
			this.PhimTab = [];
			this.dPhiTab = [];
			this.NBrtnTab = [];
			this.PhimTimeTab = [];	
			this.PhimMeanTime = 0;	
			this.PhimOldTime = 0;				
			this.BERTINpos = 0;
			this.BERTINneg = 0;

			this.MULT0 = -1;
 			
	

			//Design Categorie
			var DCAT = "";
			if (waveheight > 4     && beaufort <= 8) DCAT = "B"; 
			if (waveheight > 4     && beaufort > 8)  DCAT = "A"; 
			if (waveheight <= 4    && beaufort <= 8) DCAT = "B"; 
			if (waveheight <= 2    && beaufort <= 6) DCAT = "C"; 
			if (waveheight <= 0.5  && beaufort <= 4) DCAT = "D"; 
			
	 		heaveAmplitude = arrHeave[1]; 			//abs(this.PHIw*SIMMON.waveAmplitude).toFixed(3); 
			pitchAmplitude = arrPitch[1]*180/PI; 	//abs(this.PHItheta*SIMMON.waveAmplitude*180/PI).toFixed(3)   ;
			rollAmplitude0 = arrRoll[1]*180/PI;     rollAmplitude = rollAmplitude0;
            //document.getElementById('container31').innerHTML  = 'rollAmplitude /' + arrRoll[1]  + ' waveAmplitude/ ' + waveAmplitude;
			
			
			wavelength = abs( g* pow(wavePeriod,2)/(2*PI) ) ; 
			// document.getElementById('container3').innerHTML  = heaveAmplitude   ;
			// document.getElementById('container3').innerHTML  = heaveAmplitude   ;
					
 
 						
        }, //update_FRFs: function  

	 	//document.getElementById('container3').innerHTML  = this.arrRoll[1]   ;	
  
 
 
 
        SIMULATION: function (ts) {
			
 			

			var omega = 2*PI/wavePeriod; //angular frequency of waves	
			encounter_frequency = omega ;
			var w0 = abs(encounter_frequency).toFixed(2);    
            var ts0 = 0;
			SIMMON.dts =3;  //300;//
 
            //SIMULATION2: function (t) {
 		    (function simulate (ts){
				
				
				
			    // only 70Kb of Javascript !!!
				// ship model motion simulation & real time wireless roll monitoring on-board electronic device 
  		        //if (windspeed > 10) {tweenBack.start();  DOCKmesh.visible = false;  DOCKmeshEdges.visible = false;}
 		     
		        ts0 = ts0 + 0.1; 
		        //if (ts0 > 350 ) ts0=1;   
		   		//water.material.uniforms.time.value += 1.0 /100.0; // 2*clock.getDelta();    //1.0 / 10.0;				//swell:------------------------------------------------------------------------------------------ 		   

				//Zwave = Amplitude * Math.cos(NUMBER_K * x + Frequency * CLOCK + PHASE)
				//NUMBER_K =  k = 2 Ï€ / Î»        w = 2 Ï€ / T   la pulsation de l'onde		   
				window.requestAnimationFrame(simulate); 	
				Ocean0.geometry.verticesNeedUpdate = true; 	
				//Ocean03.geometry.verticesNeedUpdate = true; 	
				
				var center = new THREE.Vector2(1000,10); 
				var vLength = Ocean0.geometry.vertices.length;				
 				for (var i = 0; i < vLength; i++) {
					var v = Ocean0.geometry.vertices[i];
					
					var dist = new THREE.Vector2(v.x, v.y).sub(center);
					var NUMBER_K = 2*PI / waveLength ;
					var Frequency = 2*PI / wavePeriod ;    
					//v.z = waveAmplitude * sin(NUMBER_K * dist.length() - Frequency * ts0/SIMMON.dts +2.5*PI/2 ) ; SIMMON.SimWave = v.z ;
					v.z = waveAmplitude * sin(NUMBER_K * dist.length() - Frequency * ts0/SIMMON.dts +0.9*PI/2 ) ; SIMMON.SimWave = v.z ;
				}
				 
	 	   		//ship:------------------------------------------------------------------------------------------ 		   
				SIMMON.MomentRoll  = _MomentRoll;   //_MomentRoll   || rollAmplitude0;  // to be replaced by MomentRoll at once
				SIMMON.MomentPitch = _MomentPitch;   //|| pitchAmplitude;
				SIMMON.MomentHeave = _MomentHeave;  //  || heaveAmplitude;
				SIMMON.T = Draft;
				 		
				//plotWithOptions2();
				var sng =1;
				var s=1;
				//if 	(GZCURVEGRAPH == "METEO" )  sng =-1;else sng = 1;
										
				//if 	(SIMMON.SIMMON_id == 'SIM' && Draft !=-DOCKz; ) 	{
				if 	(SIMMON_id == 'SIM'  ) 	{

					SIMMON.SimHeave = SIMMON.MomentHeave + ( heaveAmplitude*waveAmplitude ) * cos( w0 * ts0/SIMMON.dts + 0.5*PI  ).toFixed(2) ;
                    SIMMON.SimRoll =  SIMMON.MomentRoll  + ( rollAmplitude*waveAmplitude  ) * sin( w0 * ts0/SIMMON.dts ).toFixed(2) ;
 	                SIMMON.SimPitch = SIMMON.MomentPitch + ( pitchAmplitude*waveAmplitude ) * cos( w0 * ts0/SIMMON.dts + 1*PI ).toFixed(2) ;
	
                	SIMMON.Troll = SIMMON.SimRoll;
					SIMMON.Tpitch = SIMMON.SimPitch; 
					SIMMON.MonRoll = 0;

					//dummy.rotation.set(sng*SIMMON.Troll*PI/180,shipheading*PI/180,-SIMMON.Tpitch*PI/180,"YZX"); 	//dummy.rotation.set(SIMMON.Troll,0,-SIMMON.Tpitch,"YZX"); 
					if (Sink == 0 ){
						dummy.position.set(0, 1*SIMMON.SimHeave -1* (SIMMON.T*1) ,0); 
						dummy.rotation.set(sng*SIMMON.Troll*PI/180,0,1*SIMMON.Tpitch*PI/180,"YZX");
						}

					else if (Sink == 1) {TweenRotate2(dummy, {x:Math.sign(Roll0[0])*30*PI/180,y:0,z:0}, 2000, 0 );	}
					else if (Sink == 2) {
						//dummy.position.set(0, 0.3*SIMMON.SimHeave -1* (SIMMON.T*1) ,0); 
						dummy.rotation.z = 0.5*SIMMON.Tpitch*PI/180;
						dummy.position.set(0, 1*SIMMON.SimHeave -1* (SIMMON.T*1) ,0); 
					}
 				
				
				
	/*			
	document.getElementById('container31').innerHTML = 	'<pre style="font-family:courier" >'  + 
														" Sink " + Sink
														+ '<BR>'  +  'windspeed / ' + windspeed
	*/				
//dummy.position.set(100,0 ,0); 
				  
					//level1.setValue (90- SIMMON.Troll*180/3.1416 );   level2.setValue (90+ SIMMON.Tpitch *180/3.1416 );  
					//horizon1.setRoll(SIMMON.Troll*180/3.1416 );       horizon1.setPitch(-(-SIMMON.Tpitch *180/PI+SIMMON.SimHeave) ); 
					
					//horizon1.setRoll(SIMMON.Troll );       horizon1.setPitch(-(-SIMMON.Tpitch +SIMMON.SimHeave) ); 
					
				    //SIMMON.Alarm(SIMMON.SimRoll,rollAlarm );
					
 				
					//line11.append(new Date(), -SIMMON.Troll    );
					//line2.append(new Date(),  -SIMMON.Tpitch   ); 
					//line3.append(new Date(),   SIMMON.SimHeave );  
					
				    //Periode(ts);         	   //Sampling			
					/* 			 
					document.getElementById('container322').innerHTML = 			 
									'<pre style="font-family:courier" >'  +  '<i>' + " &#8226Motions Ampl(R.Time)" + '</i>'
									+ '<BR>'  + " Roll    :" + SIMMON.Troll.toFixed(3)  
									+ '<BR>'  + " Pitch   :" + SIMMON.Tpitch.toFixed(3)  
									+ '<BR>'  + " Heave   :" + SIMMON.SimHeave.toFixed(3)  
					*/							 
				 
				//document.getElementById('buttonROLL').innerHTML  = abs((SIMMON.Troll).toFixed(2)) ;
				//document.getElementById('buttonPITCH').innerHTML = abs((SIMMON.Tpitch ).toFixed(2));
				//Interval = window.setInterval(startWatch,100);	

				//horizon1.setPitchAnimated(pitch0);         //horizon1.setRollAnimated(roll0);
				//var Interval = window.setInterval(startWatch,100);

				//document.getElementById('container3').innerHTML =  new Date().getTime()  ;   //new Date();clock.getElapsedTime()  					

				//document.getElementById('container3').innerHTML = ts0   ;
				//startWatch  for Troll & Tpitch display on Horizon
				//document.gauges[0].value =   Math.round( iroll   *180/3.1416 ) ;  
				//document.gauges[1].value = - ( ipitch *180/3.1416) ;   
				//document.gauges[4].value =   Math.round( iheave ) ;					

				//TTa2 = 45; 	


				//document.getElementById('container32').innerHTML +=  GZmaxx  ; 			
							//GZmax0 Recalc because may have been affected by scale-----------------------------------------------------							
							//GZmax01 =  +(Math.max.apply(null, GZ100wnd)).toFixed(2)+0.1; //GZ curve cadrage
							//GZmaxx =  Math.max(GZmax0, GZmax01); //GZ curve cadrage		
							
				//-----------------------------------------------------						
				/*
				document.getElementById('container32').innerHTML = document.getElementById('container32').innerHTML  
															  + '<BR>' + " T     / " + clock.getElapsedTime()  //SIMMON.T*s 
				document.getElementById('container3').innerHTML ='<pre>' + '<B>' + " T     / " + clock.getElapsedTime()  //SIMMON.T*s 
															  + '<BR>' + " Heave / " + abs((( heaveAmplitude )* cos( w0 * ts )).toFixed(8) )
															  + '<BR>' + " Pitch / " + abs((SIMMON.SimPitch*180/PI).toFixed(8) )
															  + '<BR>' + " Roll  / " + abs((SIMMON.SimRoll*180/PI).toFixed(8)  )				
															  + '<BR>' + " Time  / " + ts0  
															  + '<BR>' + "      "   ; 
				*/  
				}
				else if (SIMMON.SIMMON_id == 'MON' ) 	{
			
					SIMMON.Troll =  SIMMON.MonRoll*PI/180;  SIMMON.Tpitch = SIMMON.MonPitch*PI/180;  SIMMON.SimRoll = 0 ;	
					//SIMMON.dummy.position.set(0, iheave  ,0); 
					//SIMMON.dummy.rotation.set(SIMMON.Troll,0,-SIMMON.Tpitch,"YZX"); 
					dummy.rotation.set(SIMMON.Troll,0,-SIMMON.Tpitch,"YZX"); 
					
					level1.setValue (90- SIMMON.Troll*180/PI );   level2.setValue (90+ SIMMON.Tpitch *180/PI );  
					horizon1.setRoll(-SIMMON.Troll*180/PI );      horizon1.setPitch(-SIMMON.Tpitch *180/PI ); 
            	}		
						
				//SIMMON.Alarm(SIMMON.SimRoll,rollAlarm );
				SIMMON.newts  = SIMMON.newts + 1 ;
				//document.getElementById('container3').innerHTML = "ROLL=" + iroll.toFixed(2) + " <BR> PITCH= " + ipitch.toFixed(2)  //+ iroll "my <b>new</b> skill - <large>DOM maniuplation!</large>" ;
				//document.getElementById('container3').innerHTML = "ROLL=" + SIMMON.MonRoll
		        //document.getElementById('container3').innerHTML = "ts=" + Math.round(ts);  100000
				
				//SEA SOUND
				var audio = document.getElementById('audio1');
				//audio.setLoop(true); audio.play(); 
				if(SOUND){audio.play();	} //SOUND.innerHTML = "Pause";	
				else {audio.pause();   	} //SOUND.innerHTML = "Play";
				
				//	LIGHTS & AlarmWHEELHOUSE collision issue	
				//if (LIGHTS[0].style.visibility == "hidden" & LIGHTS[1].style.visibility == "hidden" & LIGHTS[2].style.visibility == "hidden") SIMMON.AlarmWHEELHOUSE('off');
 	
				//if (Area30_bool & Area40_bool & Area34_bool & GZ30_bool & GM0_bool & TTaGZmax_bool & Area_a < Area_b) {LightOff(0);} 

		    }()  );

        },
		
		affich : function( ) {
			 //var start = new Date().getTime();
			setInterval(function() {
				 var now = new Date().getTime();
				//document.getElementById("test").innerHTML = (now - start) + 'ms elapsed';
				//document.getElementById('buttonROLL').innerHTML ='<B>' +'ROLL...' + abs((SIMMON.Troll*180/PI).toFixed(2)) ;
				//document.getElementById('buttonPITCH').innerHTML ='<B>' +'PITCH.' +  abs((SIMMON.Tpitch *180/PI).toFixed(2));	
			},500);
		},

		//rotateAroundObjectAxis ///////////////////////////////////////////////////////////////////				
		rotateAroundObjectAxis: function( object , Angl ) { 
			var rotationMatrix = new THREE.Matrix4();
			rotationMatrix.makeRotationAxis( axis.normalize(), Angl);   //Math.PI/2
			object.matrix.multiply( rotationMatrix ); // post-multiply
			object.rotation.setFromRotationMatrix(object.matrix);
		},		
	
			  
		//Alarm /////////////////////////////////////////////////////////////////// 
		Alarm: function(roll,rollAlarm) {
		//var audio2 = document.getElementById('audio2');
		try { WheelHouse.material.emissive.setHex( WheelHouse.currentHex ); }catch(err){ }
			//if ( (roll > rollAlarm )||(roll < -rollAlarm) )  {play(200); LightOn(2); WheelHouse.material.emissive.setHex(0xff0000); }
			//else                                             {stop(); allOff();      WheelHouse.material.emissive.setHex( WheelHouse.currentHex) ; }
	
			//if ( (roll > rollAlarm )||(roll < -rollAlarm) )  {play2(200); LightOn(2); SIMMON.AlarmWHEELHOUSE('on'); }
			//else                                             {stop2(); allOff();      SIMMON.AlarmWHEELHOUSE('off');  }
			
			//if ( (roll > rollAlarm )||(roll < -rollAlarm) )  {audio4.play(); LightOn(2); SIMMON.AlarmWHEELHOUSE('on');  }
			//else                                             { allOff();  SIMMON.AlarmWHEELHOUSE('off'); }		
            var Rollx = (rollAmplitude*waveAmplitude);
			if ( (Rollx > rollAlarm )||(Rollx < -rollAlarm) )  {audio7.play(); LightOn(3);   SIMMON.AlarmWHEELHOUSE('on');  }//  }
			//else                                             {audio7.pause(); allOff();     SIMMON.AlarmWHEELHOUSE('off'); }		
			else                                               {audio7.pause(); LightOff(3); SIMMON.AlarmWHEELHOUSE('off'); }// }		
			
	        //alert("YOUR MESSAGE");
			//else if ( roll <  rollAlarm)   {stop(); allOff();}
			// if  ( roll < -rollAlarm)        {play(); LightOn(2);}
			// else if ( roll > -rollAlarm)   {stop(); allOff();}  
			/**/
		},
		
		AlarmWHEELHOUSE: function(onoff) {
		try { WheelHouse.material.emissive.setHex( WheelHouse.currentHex ); }catch(err){ }
			if  (onoff == 'on' )  { WheelHouse.material.emissive.setHex(0xff0000); }
			else                  { WheelHouse.material.emissive.setHex( WheelHouse.currentHex) ; }
		},		
				
		CAPSPEED :function( ) {
			document.gauges[1].value =  shipspeed ;  
			document.gauges[0].value = (waveHeading-shipheading)   ;  
		},	



	
    }  //----------------- SIMMON END -------------------	



 function  IKEDA2 (OPT, VOL, LPP, B, D, CB, Cm, KG, Rollp, Rolla, Vs, LBKL, BBKL, Bilge_Keel  )
 {
	/* 
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
         *  Simple Prediction Formula of Roll Damping                           *
         *                         on the Basis of Ikeda's Method               *
         *  Roll_Damping.for       coded by Yoshiho IKEDA                       *
         *                                       Yuki KAWAHARA                  *
         *                                       Kazuya MAEKAWA                 *
         *                                       Osaka Prefecture University    *
         *                                       Graduate School of Engineering *
         *  last up date 2009.07.08                                             *
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
	*/
    //PROGRAM  MAIN

    //var  PI = 3.1416;
    var  RO = 102;
    var  KVC = 1.14e-6 ; //KVC : Kinematic Viscosity Coefficient

    //var  LPP,LB,BD,CB,CMID,OGD,PHIa,WvT,LBKL,BBKB     As Double  as argument
    var  LB,BD,OGD,OMEGA,BRTH,DRAFT,OMEGAHAT,FN,BBKB,X1,X2,X3,X4,X5,x6,x7,x8 ;   
    var  OK ;
    var  CF,RF,SF,BF,BFHAT  ;
    var  A111,A112,A113,A121,A122,A123,A124,A131,A132,A133,A134,A11,A12,A13,AA111,AA112,AA113,AA121 ;    
    var  AA122,AA123,AA11,AA12,AA1,A1,A2,A31,A32,A33,A34,A35,A36,A37,AA311,AA31,AA32,XX4,AA3,A3,BWHAT ;
    var  FE1,FE2,AE,BE1,BE2,BE3,CR,BEHAT, FBK1,FBK2,FBK3,FBK5,ABK,BBK1,BBK2,BBK3,BBKHAT ;        

    Rolla = Rolla * 3.14 / 180;
    Vs = Vs * 0.515;
    LB = LPP / B;
    BD = B / D;
    OGD = 0.2; // KG / D;
    FN = Vs / (LPP**0.5) ;
    BRTH = B;
    DRAFT = D; // 'BRTH/BD:
    OMEGA = 2 * PI / Rollp ;//
    OMEGAHAT = OMEGA * sqrt(BRTH / (2 * 9.81));



   //     ^* Input Bilge Keel ^*
   /*
    If Bilge_Keel = 0 Then GoTo 700
    500:
    If LBKL <= 0.05 Or LBKL > 0.4  Then MsgBox("Please confirm the range of lBK/Lpp [0.05…lBK/Lpp…0.4]"): GoTo 500
    600:
    If BBKB <= 0.01 Or BBKB > 0.06  Then MsgBox("Please confirm the range of bBK/B [0.01…bBK/B…0.06]"):   GoTo 500

    '     ^* Data Confirmation ^*
    700:  '----- PRINCIPAL PARTICULARS -----'
    'write(*,710) LPP  write(*,720) LB  write(*,730) BD  write(*,740) CB  write(*,750) CMID   write(*,760) OGD   write(*,770) PHIa   write(*,780) WvT

    'If Bilge_Keel = 0 Then GoTo 900

    'var response = MsgBox("Is it OK ", MsgBoxStyle.YesNo)
    'If response = MsgBoxResult.No Then
    '  GoTo 90
    'End If
    */

    //     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    //     ^* Calculation of roll damping by the proposed predition method ^*
    //    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    var d0 = 1.01;

    //     ^* Frictional Component --------------------------------------------------------------
    RF = DRAFT * ((0.887 * d0 + 0.145 * d0 * CB) * (1.7 * d0 * DRAFT + CB * BRTH) - 2.0 * d0 * OGD) / PI;
    SF = LPP * (1.75 * d0 * DRAFT + CB * BRTH);
    CF = 1.328 * ((3.22 * RF**2 * (Rolla * PI / 180)**2) / (Rollp * KVC)) ** (-0.5);
	
    BF = (4 / (3 * PI)) * RO * SF * RF**3 * (Rolla * PI / 180) * OMEGA * CF;

    BFHAT = BF / (RO * LPP * BRTH**3 * DRAFT * CB) * Math.Sqrt(BRTH / 2.0 / 9.81)  //in form B.HAT = B / [(ro.V.B^2)*Sqrt(BRTH/2g)];
    //DATAOUT.add(BFHAT)


    //     ^* Wave Component ---------------------------------------------------------------------
    //If OPT = 2 Then   GoTo DENIZ
    X1 = BD, X2 = CB,  X3 = Cm,  X4 = 1 - OGD,   X5 = OMEGAHAT;
    //DATAOUT.add(OMEGAHAT)

    A111 = -0.002222 * d0 * X1**3 + 0.040871 * d0 * X1**2 - 0.286866 * d0 * X1 + 0.599424 * d0;
    A112 = 0.010185 * d0 * X1**3 - 0.161176 * d0 * X1**2 + 0.904989 * d0 * X1 - 1.641389 * d0;
    A113 = -0.015422 * d0 * X1**3 + 0.220371 * d0 * X1**2 - 1.084987 * d0 * X1 + 1.834167 * d0;
    A121 = -0.0628667 * d0 * X1**4 + 0.4989259 * d0 * X1**3 + 0.52735 * d0 * X1**2 - 10.7918672 * d0 * X1 + 16.616327 * d0;
    A122 = 0.1140667 * d0 * X1**4 - 0.8108963 * d0 * X1**3 - 2.2186833 * d0 * X1**2 + 25.1269741 * d0 * X1 - 37.7729778 * d0;
    A123 = -0.0589333 * d0 * X1**4 + 0.2639704 * d0 * X1**3 + 3.1949667 * d0 * X1**2 - 21.8126569 * d0 * X1 + 31.4113508 * d0;
    A124 = 0.0107667 * d0 * X1**4 + 0.0018704 * d0 * X1**3 - 1.2494083 * d0 * X1**2 + 6.9427931 * d0 * X1 - 10.2018992 * d0;
    A131 = 0.192207 * d0 * X1**3 - 2.787462 * d0 * X1**2 + 12.507855 * d0 * X1 - 14.764856 * d0;
    A132 = -0.350563 * d0 * X1**3 + 5.222348 * d0 * X1**2 - 23.974852 * d0 * X1 + 29.007851 * d0;
    A133 = 0.237096 * d0 * X1**3 - 3.535062 * d0 * X1**2 + 16.368376 * d0 * X1 - 20.539908 * d0;
    A134 = -0.067119 * d0 * X1**3 + 0.966362 * d0 * X1**2 - 4.407535 * d0 * X1 + 5.894703 * d0;
    A11 = A111 * X2**2 + A112 * X2 + A113;
    A12 = A121 * X2**3 + A122 * X2**2 + A123 * X2 + A124;
    A13 = A131 * X2**3 + A132 * X2**2 + A133 * X2 + A134;

    AA111 = 17.945 * d0 * X1**3 - 166.294 * d0 * X1**2 + 489.799 * d0 * X1 - 493.142 * d0;
    AA112 = -25.507 * d0 * X1**3 + 236.275 * d0 * X1**2 - 698.683 * d0 * X1 + 701.494 * d0;
    AA113 = 9.077 * d0 * X1**3 - 84.332 * d0 * X1**2 + 249.983 * d0 * X1 - 250.787 * d0;
    AA121 = -16.872 * d0 * X1**3 + 156.399 * d0 * X1**2 - 460.689 * d0 * X1 + 463.848 * d0;
    AA122 = 24.015 * d0 * X1**3 - 222.507 * d0 * X1**2 + 658.027 * d0 * X1 - 660.665 * d0;
    AA123 = -8.56 * d0 * X1**3 + 79.549 * d0 * X1**2 - 235.827 * d0 * X1 + 236.579 * d0;
    AA11 = AA111 * X2**2 + AA112 * X2 + AA113;
    AA12 = AA121 * X2**2 + AA122 * X2 + AA123;

    AA1 = (AA11 * X3 + AA12) * (1 - X4) + 1.0;

    A1 = (A11 * X4**2 + A12 * X4 + A13) * AA1;
    A2 = -1.402 * d0 * X4**3 + 7.189 * d0 * X4**2 - 10.993 * d0 * X4 + 9.45 * d0;

    A31 = -7686.0287 * d0 * X2**6 + 30131.5678 * d0 * X2**5 - 49048.9664 * d0 * X2**4 + 42480.7709 * d0 * X2**3 - 20665.147 * d0 * X2**2 + 5355.2035 * d0 * X2 - 577.8827 * d0;
    A32 = 61639.9103 * d0 * X2**6 - 241201.0598 * d0 * X2**5 + 392579.5937 * d0 * X2**4 - 340629.4699 * d0 * X2**3 + 166348.6917 * d0 * X2**2 - 43358.7938 * d0 * X2 + 4714.7918 * d0;
    A33 = -130677.4903 * d0 * X2**6 + 507996.2604 * d0 * X2**5 - 826728.7127 * d0 * X2**4 + 722677.104 * d0 * X2**3 - 358360.7392 * d0 * X2**2 + 95501.4948 * d0 * X2 - 10682.8619 * d0;
    A34 = -110034.6584 * d0 * X2**6 + 446051.22 * d0 * X2**5 - 724186.4643 * d0 * X2**4 + 599411.9264 * d0 * X2**3 - 264294.7189 * d0 * X2**2 + 58039.7328 * d0 * X2 - 4774.6414 * d0;
    A35 = 709672.0656 * d0 * X2**6 - 2803850.2395 * d0 * X2**5 + 4553780.5017 * d0 * X2**4 - 3888378.9905 * d0 * X2**3 + 1839829.259 * d0 * X2**2 - 457313.6939 * d0 * X2 + 46600.823 * d0;
    A36 = -822735.9289 * d0 * X2**6 + 3238899.7308 * d0 * X2**5 - 5256636.5472 * d0 * X2**4 + 4500543.147 * d0 * X2**3 - 2143487.3508 * d0 * X2**2 + 538548.1194 * d0 * X2 - 55751.1528 * d0;
    A37 = 299122.8727 * d0 * X2**6 - 1175773.1606 * d0 * X2**5 + 1907356.1357 * d0 * X2**4 - 1634256.8172 * d0 * X2**3 + 780020.9393 * d0 * X2**2 - 196679.7143 * d0 * X2 + 20467.0904 * d0;

    AA311 = (-17.102 * d0 * X2**3 + 41.495 * d0 * X2**2 - 33.234 * d0 * X2 + 8.8007 * d0) * X4 + 36.566 * d0 * X2**3 - 89.203 * d0 * X2**2 + 71.8 * d0 * X2 - 18.108 * d0;
    AA31 = (-0.3767 * d0 * X1**3 + 3.39 * d0 * X1**2 - 10.356 * d0 * X1 + 11.588 * d0) * AA311;
    AA32 = -0.0727 * d0 * X1**2 + 0.7 * d0 * X1 - 1.2818 * d0;

    XX4 = X4 - AA32;

    AA3 = AA31 * (-1.05584 * d0 * XX4**9 + 12.688 * d0 * XX4**8 - 63.70534 * d0 * XX4**7 + 172.84571 * d0 * XX4**6 - 274.05701 * d0 * XX4**5 
	      + 257.68705 * d0 * XX4**4 - 141.40915 * d0 * XX4**3 + 44.13177 * d0 * XX4**2 - 7.1654 * d0 * XX4 - 0.0495 * d0 * X1**2 + 0.4518 * d0 * X1 - 0.61655 * d0);
    A3 = A31 * X4**6 + A32 * X4**5 + A33 * X4**4 + A34 * X4**3 + A35 * X4**2 + A36 * X4 + A37 + AA3;
    A1 = (A11 * X4**2 + A12 * X4 + A13) * AA1;

    BWHAT = (A1 / X5) * Math.EXP(-A2 * (Math.LOG(X5) - A3)**2 / 1.44);
    //DATAOUT.add(BWHAT)


    //     ^ Eddy Component ------------------------------------------------------------------------------------------------
    X1 = BD, X2 = CB, X3 = Cm, X4 = OGD;

    FE1 = (-0.0182 * d0 * X2 + 0.0155 * d0) * (X1 - 1.8 * d0)**3;
    FE2 = -79.414 * d0 * X2**4 + 215.695 * d0 * X2**3 - 215.883 * d0 * X2**2 + 93.894 * d0 * X2 - 14.848 * d0;
    AE = FE1 + FE2;
    BE1 = (-0.2 * d0 * X1 + 1.6 * d0) * (3.98 * d0 * X2 - 5.1525 * d0) * X4 * ((0.9717 * d0 * x2**2 - 1.55 * d0 * x2 + 0.723 * d0) * x4 + 0.04567 * d0 * x2 + 0.9408 * d0);
    BE2 = (0.25 * x4 + 0.95) * x4 - 219.2 * d0 * x2**3 + 443.7 * d0 * x2**2 - 283.3 * d0 * x2 + 59.6 * d0;
    BE3 = (46.5 * d0 - 15 * d0 * x1) * x2 + 11.2 * d0 * X1 - 28.6 * d0;
    CR = AE * Math.EXP(BE1 + BE2 * x3**BE3);

    BEHAT = 4.0 * OMEGAHAT * Rolla * PI / 180 / (3 * PI * x2 * x1**3.0) * CR;
    //DATAOUT.add(BEHAT)


    //     ^ Bilge Keel Component --------------------------------------------------------------------------------------------
    X1 = BD, X2 = CB, X3 = Cm, X4 = OGD, X5 = OMEGAHAT, x6 = Rolla, x7 = BBKL / BRTH, x8 = LBKL / Lpp;

    if (Bilge_Keel == 0)  {   BBKHAT = 0.0; }
    else
	{	
      FBK1 = (-0.3651 * d0 * x2 + 0.3907 * d0) * (x1 - 2.83 * d0)**2 - 2.21 * d0 * x2 + 2.632 * d0;
      FBK2 = 0.00255 * d0 * x6**2 + 0.122 * d0 * x6 + 0.4794 * d0;
      FBK3 = (-0.8913 * d0 * x7**2 - 0.0733 * d0 * x7) * x8**2 + (5.2857 * d0 * x7**2 - 0.01185 * d0 * x7 + 0.00189 * d0) * x8;
      ABK = FBK1 * FBK2 * FBK3;

      BBK1 = (5.0 * d0 * x7 + 0.3 * d0 * x1 - 0.2 * d0 * x8 + 0.00125 * d0 * x6**2 - 0.0425 * d0 * x6 - 1.86 * d0) * x4;
      BBK2 = -15.0 * d0 * x7 + 1.2 * d0 * x2 - 0.1 * d0 * x1 - 0.0657 * d0 * x4**2 + 0.0586 * d0 * x4 + 1.6164 * d0;
      BBK3 = 2.5 * d0 * x4 + 15.75 * d0;
      BBKHAT = ABK * Math.EXP(BBK1 + BBK2 * X3**BBK3) * OMEGAHAT;
    }
    //DATAOUT.add(BBKHAT)


    //     ^ Lift Component -------------------------------------------------------------------------------------------------------
    var k  
    if  (Cm <= 0.92)               k = 0;
    if  (Cm <= 0.97 & Cm > 0.92)   k = 0.1;
    if  (Cm > 0.97)                k = 0.3;

    var Kn = (2 * PI * DRAFT / LPP) + k * (4.1 * BRTH / LPP - 0.045);
    var Sl = LPP * DRAFT;
    var I0 = 0.3 * DRAFT;
    var lR = 0.5 * DRAFT;
    var U = FN * (LPP * 9.81)**0.5;

    var BLHAT = ((Sl * U * Kn * I0 * lR) / (2 * VOL * BRTH**2 ));
    BLHAT = BLHAT * (1 - 1.4 * KG / lR + 0.7 * KG**2 / (I0 * lR)) * (BRTH / (2 * 9.81))**0.5;
    //DATAOUT.add(BLHAT)


    //     ^* Total Roll Damping -------------------------------------------------------------------------------------------------------
    var BHAT44 = BFHAT + BWHAT + BEHAT + BBKHAT + BLHAT;
    //DATAOUT.add(BHAT44)

    //IKEDA Normalisation
    var B44 = BHAT44 * 1025 * VOL * BRTH**2 * (2 * 9.81 / BRTH)**0.5;

    //DENIZ1 --------------------------------------------------------
    var BL = (BLHAT + BWHAT)// * 1025 * VOL * (BRTH**2) * (2 * 9.81 / BRTH)**0.5;
    var BN = (BEHAT + BFHAT + BBKHAT) //* 1025 * VOL * BRTH**2 * (2 * 9.81 / BRTH)**0.5;

    //DATAOUT.clear
    //DATAOUT.add(BHAT44) ' /ByRef B44  , ByRef BL  , ByRef BN As Single
    //DATAOUT.add(B44) '
    //DATAOUT.add(BHAT44) '

    //DATAOUT.add(BL)
    //DATAOUT.add(BN)


 }	