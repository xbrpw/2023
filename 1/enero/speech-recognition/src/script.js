(function() {
   'use strict';
   
   var body = document.querySelector('body'),
       message = document.querySelector('.message-output');

   Array.from(document.querySelectorAll('.colors li'))
      .forEach(function(el) {
         el.style.backgroundColor = el.textContent;
      });
   
   if ( !annyang ) return;
   
   var commands = {
      ':color' : function (color) {
         body.style.backgroundColor = color;
         message.innerHTML = color;
      }
   };
   
   annyang.addCommands(commands);
   annyang.start();
} ());