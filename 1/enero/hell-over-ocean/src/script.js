class World {
  constructor(width, height) {

    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(width, height);
    this.container = document.getElementsByClassName("world")[0];
    this.scene = new THREE.Scene();
    this.width = width;
    this.height = height;
    this.aspectRatio = width / height;
    this.fieldOfView = 50;
    var nearPlane = .1;
    var farPlane = 20000;
		this.targetRotX1 = Math.PI/3;
		this.targetRotX2 = -Math.PI/3;
		this.targetRotY1 = 0;
		this.targetRotY2 = 0;
		
    this.camera = new THREE.PerspectiveCamera(this.fieldOfView, this.aspectRatio, nearPlane, farPlane);
		this.camera.position.z = 250;
		this.container.appendChild(this.renderer.domElement);
    this.timer = 0;
    this.createPlanes();
		this.render();
  }

  createPlanes(){
    this.material = new THREE.RawShaderMaterial({
      vertexShader: document.getElementById( 'vertexShader' ).textContent,
      fragmentShader: document.getElementById('fragmentShader').textContent,
			uniforms: { 
				time: { type: 'f', value: 5 },
				uHue: { type: 'f', value: .95 },
				mousePosition: {type: 'v2', value: new THREE.Vector2( 0.5, 0.5 ) }
    	}
    });
		
		this.material2 = this.material.clone();
		this.material2.uniforms.time.value = 5;
		this.material2.uniforms.uHue.value = .6;
		
    this.shapeGeometry = new  THREE.PlaneGeometry(200, 200, 256, 256);
		
    this.shape = new THREE.Mesh(this.shapeGeometry, this.material);
		this.shape.position.y = 50;
		this.shape.rotation.x = Math.PI/3;
		this.shape.rotation.z = Math.PI;
		
		this.shape2 = new THREE.Mesh(this.shapeGeometry, this.material2);
		this.shape2.position.y = -50;
		this.shape2.rotation.x = -Math.PI/3;
		
		
		this.scene.add(this.shape);
		this.scene.add(this.shape2);
  }
	
  render() {
    this.timer+=.01;
		
		this.shape2.rotation.y += (this.targetRotY2 - this.shape2.rotation.y) * .05;
		this.shape2.rotation.x += (this.targetRotX2 - this.shape2.rotation.x) * .05;
		
		this.shape.rotation.y += (this.targetRotY1 - this.shape.rotation.y) * .05;
		this.shape.rotation.x += (this.targetRotX1 - this.shape.rotation.x) * .05;
		
		
		this.shape.material.uniforms.time.value = this.timer;
		this.shape2.material.uniforms.time.value = this.timer;
    this.renderer.render(this.scene, this.camera);
  }

  loop() {
    this.render();
		//this.shape.rotation.z += .005;
		requestAnimationFrame(this.loop.bind(this));
  }

  updateSize(w, h) {
    this.renderer.setSize(w, h);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }
  mouseMove(mousePos) {
		if (this.shape){
			this.shape.material.uniforms.mousePosition.value = new THREE.Vector2(-mousePos.px, -mousePos.py);
			this.targetRotY1 = mousePos.px * .5;
			this.targetRotX1 = Math.PI/3 - mousePos.py * .3;
			
			this.shape2.material.uniforms.mousePosition.value = new THREE.Vector2(mousePos.px, mousePos.py);
			this.targetRotY2 = mousePos.px * .5;
			this.targetRotX2 = -Math.PI/3 - mousePos.py * .3;
		}
  }
};

document.addEventListener("DOMContentLoaded", domIsReady);
let mousePos = {x:0, y:0, px:0, py:0};
let PI = Math.PI;
let world;

function domIsReady() {
    world = new World(this.container, this.renderer, window.innerWidth, window.innerHeight);
    window.addEventListener('resize', handleWindowResize, false);
    document.addEventListener("mousemove", handleMouseMove, false);
		document.addEventListener("touchmove", handleMouseMove, false);
    handleWindowResize();
    world.loop();
}

function handleWindowResize() {
    world.updateSize(window.innerWidth, window.innerHeight);
}

function handleMouseMove(e) {
   if ((e.clientX)&&(e.clientY)) {  
		mousePos.x = e.clientX;
    mousePos.y = e.clientY;
		mousePos.px = mousePos.x / window.innerWidth * 2 - 1;
  	mousePos.py = mousePos.y / window.innerHeight * 2 - 1;
	}else if (e.targetTouches) {
		mousePos.x = e.targetTouches[0].clientX;
		mousePos.y = e.targetTouches[0].clientY;
		mousePos.px = mousePos.x / window.innerWidth * 2 - 1;
  	mousePos.py = mousePos.y / window.innerHeight * 2 - 1;
		mousePos.px *= 1.5;
  	mousePos.py *= 1.5;
		e.preventDefault();
	}
  world.mouseMove(mousePos);
}