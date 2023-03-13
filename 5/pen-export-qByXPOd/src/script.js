 var i = 0;
        var txt = 'designer luisangel.maciel';
        var speed = 65;

        function typeWriter() {
            if (i < txt.length) {
                document.getElementById("powered ").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }