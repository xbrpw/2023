var lastUpdate;
var container;
var camera, scene, renderer;
var uniforms;

function init(showStats) {
  // stats
  if (showStats) {
    var stats = new Stats();
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0';
    stats.domElement.style.top = '0';
    document.body.appendChild(stats.domElement);
    requestAnimationFrame(function updateStats(){
      stats.update();
      requestAnimationFrame(updateStats);
    });
  }
  
  // basic setup
  container = document.getElementById( 'container' );
  camera = new THREE.Camera();
  camera.position.z = 1;
  scene = new THREE.Scene();
  var geometry = new THREE.PlaneBufferGeometry( 2, 2 );

  // shader stuff
  uniforms = {
    time: { type: "f", value: 1.0 },
    resolution: { type: "v2", value: new THREE.Vector2() }
  };
  var material = new THREE.ShaderMaterial( {
    uniforms: uniforms,
    vertexShader: document.getElementById( 'vertexShader' ).textContent,
    fragmentShader: document.getElementById( 'fragmentShader' ).textContent
  } );
  lastUpdate = new Date().getTime();

  // put it together for rendering
  var mesh = new THREE.Mesh( geometry, material );
  scene.add( mesh );
  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio( window.devicePixelRatio / 2 );
  container.appendChild( renderer.domElement );
  
  // event listeners
  onWindowResize();
  window.addEventListener( 'resize', onWindowResize, false);
  document.getElementById('resolution').addEventListener('change', onResolutionChange, false);
}

// events
function onWindowResize(evt) {
  renderer.setSize( window.innerWidth, Math.max(window.innerHeight/5,100) );
  uniforms.resolution.value.x = renderer.domElement.width;
  uniforms.resolution.value.y = renderer.domElement.height;
}
function onResolutionChange(evt) {
  var newResolutionScale = parseFloat(evt.target.value);
  renderer.setPixelRatio( window.devicePixelRatio / newResolutionScale );
  uniforms.resolution.value.x = renderer.domElement.width;
  uniforms.resolution.value.y = renderer.domElement.height;
}
function animate() {
  var currentTime = new Date().getTime()
  var timeSinceLastUpdate = currentTime - lastUpdate;
  lastUpdate = currentTime;
  
  requestAnimationFrame( animate );
  render(timeSinceLastUpdate);
}
function render(timeDelta) {
  uniforms.time.value += (timeDelta ? timeDelta / 1000 : 0.05);
  renderer.render( scene, camera );
}

// boot
init(false);
animate();