/*This component uses EmailJs as a server
Register at https://www.emailjs.com/ to generate key
*/
window.onload = function() {
            document.getElementById('contact-form').addEventListener('submit', function(event) {
                event.preventDefault();

                // these IDs from the previous steps
                emailjs.sendForm('service_vtd1bur', 'template_hytfjyp', this)
                    .then(function() {
                        alert('Enviado con éxito');
                    }, function(error) {
                        alert('Error... favor de verificar', error);
                    });
            });
        }