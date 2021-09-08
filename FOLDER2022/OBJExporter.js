THREE.OBJExporter = function () {};

THREE.OBJExporter.prototype = {

	constructor: THREE.OBJExporter,

	parse: function (object) {

		var output = '';

		var indexVertex = 0;
		var indexVertexUvs = 0;
		var indexNormals = 0;

		var vertex = new THREE.Vector3();
		var normal = new THREE.Vector3();
		var uv = new THREE.Vector2();

		var i,
		j,
		l,
		m,
		face = [];

		var parseMesh = function (mesh) {

			var nbVertex = 0;
			var nbNormals = 0;
			var nbVertexUvs = 0;

			var geometry = mesh.geometry;

			var normalMatrixWorld = new THREE.Matrix3();

			if (geometry instanceof THREE.Geometry) {

				geometry = new THREE.BufferGeometry().setFromObject(mesh);

			}

			if (geometry instanceof THREE.BufferGeometry) {

				var vertices = geometry.getAttribute('position');
				var normals = geometry.getAttribute('normal');
				var uvs = geometry.getAttribute('uv');
				var indices = geometry.getIndex();
				var skinIndices = geometry.getAttribute('skinIndex');
				var weights = geometry.getAttribute('skinWeight');
				var morphVector;
				// name of the mesh object
				output += 'o ' + mesh.name + '\n';

				// vertices

				if (vertices !== undefined) {

					for (i = 0, l = vertices.count; i < l; i++, nbVertex++) {
						if (skinIndices == undefined) {

							vertex.x = vertices.getX(i);
							vertex.y = vertices.getY(i);
							vertex.z = vertices.getZ(i);

							//vertex.applyMatrix4(mesh.matrixWorld);
							output += 'v ' + vertex.x + ' ' + vertex.y + ' ' + vertex.z + '\n';
						} else {

							vertex.x = vertices.getX(i);
							vertex.y = vertices.getY(i);
							vertex.z = vertices.getZ(i);
							//vertex.applyMatrix4(mesh.matrixWorld);

							skinIndex = [];
							skinIndex[0] = skinIndices.getX(i);
							skinIndex[1] = skinIndices.getY(i);
							skinIndex[2] = skinIndices.getZ(i);
							skinIndex[3] = skinIndices.getW(i);

							skinWeight = [];
							skinWeight[0] = weights.getX(i);
							skinWeight[1] = weights.getY(i);
							skinWeight[2] = weights.getZ(i);
							skinWeight[3] = weights.getW(i);

							inverses = [];
							inverses[0] = mesh.skeleton.boneInverses[skinIndex[0]];
							inverses[1] = mesh.skeleton.boneInverses[skinIndex[1]];
							inverses[2] = mesh.skeleton.boneInverses[skinIndex[2]];
							inverses[3] = mesh.skeleton.boneInverses[skinIndex[3]];

							skinMatrices = [];
							skinMatrices[0] = mesh.skeleton.bones[skinIndex[0]].matrixWorld;
							skinMatrices[1] = mesh.skeleton.bones[skinIndex[1]].matrixWorld;
							skinMatrices[2] = mesh.skeleton.bones[skinIndex[2]].matrixWorld;
							skinMatrices[3] = mesh.skeleton.bones[skinIndex[3]].matrixWorld;

							var finalVector = new THREE.Vector4();

							if (geometry.morphTargetInfluences !== undefined) {
								var morphAttributes = geometry.morphAttributes.position;
								//console.log("Mesh Name:" + mesh.name);
								morphMatricesX = [];
								morphMatricesY = [];
								morphMatricesZ = [];
								morphMatricesInfluence = [];

								var morphLength = geometry.morphAttributes.position.length;
								//console.log("Morph Length " + morphLength);
								for (var mt = 0; mt < morphLength; mt++) {
									//collect the needed vertex info
									morphMatricesX[mt] = morphAttributes[mt].getX(i);
									morphMatricesY[mt] = morphAttributes[mt].getY(i);
									morphMatricesZ[mt] = morphAttributes[mt].getZ(i);
									morphMatricesInfluence[mt] = mesh.morphTargetInfluences[mt];

								}

							}

							if (geometry.morphTargetInfluences !== undefined) {

								morphVector = new THREE.Vector4(vertex.x, vertex.y, vertex.z);
								var morphLength = geometry.morphAttributes.position.length;
								for (var mt = 0; mt < morphLength; mt++) {
									//not pretty, but it gets the job done
									morphVector.lerp(new THREE.Vector4(morphMatricesX[mt], morphMatricesY[mt], morphMatricesZ[mt], 1), morphMatricesInfluence[mt]);
								}

							}

							for (var k = 0; k < 4; k++) {
								if (geometry.morphTargetInfluences !== undefined) {
									var tempVector = new THREE.Vector4(morphVector.x, morphVector.y, morphVector.z);
								} else {
									var tempVector = new THREE.Vector4(vertex.x, vertex.y, vertex.z);
								}

								tempVector.multiplyScalar(skinWeight[k]);
								//the inverse takes the vector into local bone space
								//which is then transformed to the appropriate world space
								tempVector.applyMatrix4(inverses[k]).applyMatrix4(skinMatrices[k]);
								finalVector.add(tempVector);

							}

							// transform the vertex to export format
							output += 'v ' + finalVector.x + ' ' + finalVector.y + ' ' + finalVector.z + '\n';
						}

					}

				}

				// uvs

				if (uvs !== undefined) {

					for (i = 0, l = uvs.count; i < l; i++, nbVertexUvs++) {

						uv.x = uvs.getX(i);
						uv.y = uvs.getY(i);

						// transform the uv to export format
						output += 'vt ' + uv.x + ' ' + uv.y + '\n';

					}

				}

				// normals

				if (normals !== undefined) {

					normalMatrixWorld.getNormalMatrix(mesh.matrixWorld);

					for (i = 0, l = normals.count; i < l; i++, nbNormals++) {

						normal.x = normals.getX(i);
						normal.y = normals.getY(i);
						normal.z = normals.getZ(i);

						// transfrom the normal to world space
						normal.applyMatrix3(normalMatrixWorld);

						// transform the normal to export format
						output += 'vn ' + normal.x + ' ' + normal.y + ' ' + normal.z + '\n';

					}

				}

				// faces

				if (indices !== null) {

					for (i = 0, l = indices.count; i < l; i += 3) {

						for (m = 0; m < 3; m++) {

							j = indices.getX(i + m) + 1;

							face[m] = (indexVertex + j) + '/' + (uvs ? (indexVertexUvs + j) : '') + '/' + (indexNormals + j);

						}

						// transform the face to export format
						output += 'f ' + face.join(' ') + "\n";

					}

				} else {

					for (i = 0, l = vertices.count; i < l; i += 3) {

						for (m = 0; m < 3; m++) {

							j = i + m + 1;

							face[m] = (indexVertex + j) + '/' + (uvs ? (indexVertexUvs + j) : '') + '/' + (indexNormals + j);

						}

						// transform the face to export format
						output += 'f ' + face.join(' ') + "\n";

					}

				}

			} else {

				console.warn('THREE.OBJExporter.parseMesh(): geometry type unsupported', geometry);

			}

			// update index
			indexVertex += nbVertex;
			indexVertexUvs += nbVertexUvs;
			indexNormals += nbNormals;

		};

		var parseLine = function (line) {

			var nbVertex = 0;

			var geometry = line.geometry;
			var type = line.type;

			if (geometry instanceof THREE.Geometry) {

				geometry = new THREE.BufferGeometry().setFromObject(line);

			}

			if (geometry instanceof THREE.BufferGeometry) {

				// shortcuts
				var vertices = geometry.getAttribute('position');
				var indices = geometry.getIndex();

				// name of the line object
				output += 'o ' + line.name + '\n';

				if (vertices !== undefined) {

					for (i = 0, l = vertices.count; i < l; i++, nbVertex++) {

						vertex.x = vertices.getX(i);
						vertex.y = vertices.getY(i);
						vertex.z = vertices.getZ(i);

						// transfrom the vertex to world space
						vertex.applyMatrix4(line.matrixWorld);

						// transform the vertex to export format
						output += 'v ' + vertex.x + ' ' + vertex.y + ' ' + vertex.z + '\n';

					}

				}

				if (type === 'Line') {

					output += 'l ';

					for (j = 1, l = vertices.count; j <= l; j++) {

						output += (indexVertex + j) + ' ';

					}

					output += '\n';

				}

				if (type === 'LineSegments') {

					for (j = 1, k = j + 1, l = vertices.count; j < l; j += 2, k = j + 1) {

						output += 'l ' + (indexVertex + j) + ' ' + (indexVertex + k) + '\n';

					}

				}

			} else {

				console.warn('THREE.OBJExporter.parseLine(): geometry type unsupported', geometry);

			}

			// update index
			indexVertex += nbVertex;

		};

		object.traverse(function (child) {

			if (child instanceof THREE.Mesh) {

				parseMesh(child);

			}

			if (child instanceof THREE.Line) {

				parseLine(child);

			}

		});

		return output;

	}

};
