var canvas = $('#particles').get(0);
canvas.width = 1920;
canvas.height = 920;
var ctx = canvas.getContext('2d');

var particles = [];

var mousePosition = {
  x: 950,
  y: 460
}


$('#particles').mousemove(function(e) {
  var position = {
    x: e.pageX,
    y: e.pageY
  }
  
  drawParticles(position);
});



function Particle(x,y) {
  this.pos = {
    x: x,
    y: y
  };
  this.size = Math.random() * 100;
  this.luminosity = Math.random() *.5;
  this.z = this.size*0.05;
}

Particle.prototype.draw = function(ctx, positionDelta) {
  ctx.beginPath();
  ctx.arc(this.pos.x - (positionDelta.x*this.z), this.pos.y - (positionDelta.y*this.z), this.size, 0, 2 * Math.PI, false);
  ctx.fillStyle = 'rgba(255,255,255,' + this.luminosity + ')';
  ctx.fill();
};


function initParticles() {
  for(var i = 0; i < 50; i++) {
    var particle = new Particle(canvas.width*Math.random(), canvas.height*Math.random());
    particle.draw(ctx, {x:0, y:0});
    particles.push(particle);
  }
};

initParticles();


function drawParticles(position) {
  canvas.width = canvas.width;
  var i = 0, numStars = this.particles.length;
  for(; i < numStars; i++) {
   
      this.particles[i].draw(ctx, positionDelta(mousePosition, position));
   
  }
};



function positionDelta(before, after) {
  /* Returns the difference between two position vectors */
  return {x: (after.x - before.x)/10, y: (after.y - before.y)/10};
};

