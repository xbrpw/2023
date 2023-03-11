// Code from https://codepen.io/AllThingsSmitty/pen/KgxmXv/, see http://allthingssmitty.com/2016/10/24/show-my-password-please/ for details
(function () {
  
  
  var togglePassword = function (e) {
    e.preventDefault();
    let passwordInput = document.getElementById('txtPassword'),
        toggle = document.getElementById('btnToggle');

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      toggle.innerHTML = 'hide';
    } else {
      passwordInput.type = 'password';
      toggle.innerHTML = 'show';
    }

    this.previousElementSibling.focus();

    return false;
  };
  
  let toggle = document.getElementById('btnToggle');
  toggle.addEventListener('mousedown', togglePassword, false);
  
})();