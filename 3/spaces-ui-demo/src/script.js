Spaces.init({showMap: true, useRouter: true});
  var mySpaces = document.querySelectorAll('#spaces ul li');
  for (var i = 0; i < mySpaces.length; i++) {
    mySpaces[i].style.background = '#' + Math.floor(Math.random()*16777215).toString(16); // Setting the random color on your div element.
  }
  document.getElementById('OMG').addEventListener('click', function(){ Spaces.moveTo('#omg-home') });
  document.getElementById('WTF').addEventListener('click', function(){ Spaces.moveTo('#wtf-home') });
  document.getElementById('BBQ').addEventListener('click', function(){ Spaces.moveTo('#bbq-home') });
  document.getElementById('LOL').addEventListener('click', function(){ Spaces.moveTo('#lol-home') });
  document.querySelector('.up').addEventListener('click', function(){ Spaces.move('up') });
  document.querySelector('.down').addEventListener('click', function(){ Spaces.move('down') });
  document.querySelector('.left').addEventListener('click', function(){ Spaces.move('left') });
  document.querySelector('.right').addEventListener('click', function(){ Spaces.move('right') });
  document.querySelector('.top').addEventListener('click', function(){ Spaces.move('top') });