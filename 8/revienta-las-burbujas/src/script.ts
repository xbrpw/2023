const explosionWords = ['Pop!', 'Snap!', 'Crack!'];
const bubblesPopped = 0;
const $score = document.getElementById('score')

function updateScore(offset) {
   bubblesPopped += offset;
   $score.innerHTML = 'Popped ' + bubblesPopped + ' bubbles!';
}

function createBubble() {
   // create bubble graphic
   const $bubble = document.createElement('div');
   $bubble.classList.add('bubble');
   
   // wrap in a larger div so bubbles are easy to pop while moving
   const $boundingBox = document.createElement('div');
   $boundingBox.classList.add('bubble-wrap');
   $boundingBox.style.left = (5 + (Math.random() * 90))  + 'vw';
   $boundingBox.appendChild($bubble);
   $boundingBox.addEventListener('click', destroyBubble($boundingBox));
   
   // attach to doc and return
   document.body.appendChild($boundingBox);
   return $boundingBox;
}

function createExplosion(x, y) {
    // create explosion at the coordinates
    const $explosion = document.createElement('div');
    $explosion.classList.add('explosion');
    $explosion.style.left = x + 'px';
    $explosion.style.top = y + 'px';
    $explosion.innerHTML = explosionWords[Math.floor(Math.random() * 3)];
    document.body.appendChild($explosion);
   
    // animate cartoon pop on words
    just.animate({
       targets: $explosion,
       to: 600,
       fill: 'forwards',
       easing: 'ease-out',
       css: [
          { scale: 1 },
          { offset: 0.2, scale: 1.4, opacity: 1 },
          { scale: .7, opacity: 0 }
       ]
    })
    .on('finish', () => document.body.removeChild($explosion));
}

function destroyBubble($bubble) {
   return () => {
      // create explosion at bubbles old position
      const rect = $bubble.getBoundingClientRect();
      const centerX = (rect.right - rect.left) * .45 + rect.left;
      const centerY = (rect.bottom - rect.top) * .45 + rect.top;
      createExplosion(centerX, centerY);
      updateScore(1);
      // remove bubble
      $bubble.style.display = 'none';
   }
}

function generateBubbles(min, max) {
   const length = min + (Math.round(Math.random() * (max - min)));
   const targets = []
   for (let i = 0; i < length; i++) {
      targets.push(createBubble());
   }
   return targets;
}

function animateBubbles() {
   const bubbles = generateBubbles(12, 20);
   const player = just.animate({
      targets: bubbles,
      to: '5s',
      easing: 'ease-in',
      css: {
         transform() {
            const endTranslateY = just.random(100, 110, 'vh', true);
            const startScale = just.random(80, 100, null, true);
            const endScale = just.random(40, 80, null, true);
            
            return [
               'translateY(0) scale(0.' + startScale + ')', 
               'translatey(-' + endTranslateY + ') scale(0.' + endScale + ')'
            ];
         }
      },
      delay() {
         return just.random(0, 10000);
      }
   })
   .on('finish', () => {
      bubbles.forEach(bubble => {
         document.body.removeChild(bubble);
      });
   });
   
   return player;
}

function startBubbles() {
   animateBubbles().on('finish', startBubbles);
}

function startWaves() {
   just.animate({
      targets: document.body,
      to: '10s',
      fill: 'both',
      css: {
         backgroundColor: [
            'hsl(196, 92.2%, 20%)',
            'hsl(196, 92.2%, 15%)'
         ]
      },
      direction: 'alternate',
      iterations: Infinity
   });
}

startBubbles();
startWaves();
