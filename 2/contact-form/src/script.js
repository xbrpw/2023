/**
* Switch out the php url for your own. Very simplified example PHP found at the bottom of this script
*/
var phpURL = "YOUR PHP URL GOES HERE";

$(".contact-icon").on("click", toggleContactForm);
$(".cross").on("click", closeForm);

//Show/Hide
function toggleContactForm(){
	var form = $(".contact-form");
	var bottom = $(form).css("bottom");
	
	if(bottom == "0px"){
		$(form).css("bottom", "-400px");
	}
	else{
		$(form).css("bottom", "0px");
	}
}

function closeForm(){
		$(".contact-form").css("bottom", "-400px");
}

//Resize
$(window).on('resize', onResize);
onResize();

function onResize(){
	var buttonPos = $(".submit")[0].getBoundingClientRect();					
	console.log("POS:", buttonPos);
	
	var width = ($(window).width() - buttonPos.right) - 26;
	
	$(".horline").css("left", buttonPos.right);
	$(".horline").css("width", width);

	$(".vertline").css("left", buttonPos.right + width);
}
	

//Focus
$("input[type=text]").focus(onFocus);
$("input[type=email]").focus(onFocus);
$("textarea").focus(onFocus);

$("input[type=text]").focusout(onFocusOut);
$("input[type=email]").focusout(onFocusOut);
$("textarea").focusout(onFocusOut);

function onFocus(){
		$(this).parent().find("label").addClass("active");
}

function onFocusOut(){
	if($(this).val() === "")
		$(this).parent().find("label").removeClass("active");
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validateForm(){

		var email = $("input[type=email]").val();
		var validEmail = validateEmail(email);
		var validName = $("input[type=text]").val() ? true : false;
		var validMsg = $("textarea").val() ? true : false;
				
		var nameError = $("input[type=text]").parent().find(".error-mark");
		var emailError = $("input[type=email]").parent().find(".error-mark");
		var msgError = $("textarea").parent().find(".error-mark");
		
		TweenLite.to(nameError, 0.5, {opacity: validName ? 0 : 1});
		TweenLite.to(emailError, 0.5, {opacity: validEmail ? 0 : 1});
		TweenLite.to(msgError, 0.5, {opacity: validMsg ? 0 : 1});
	
	return (validEmail && validName && validMsg);
}

function sentAnimation(message, color) {
		
		flashButton(color);
		var sentElement = $(".result-message");
		$(sentElement).text(message);
		var sentTween = new TimelineLite();
		sentTween.fromTo(sentElement, 0.6, {x:0},{ x:100});
		sentTween.to(sentElement, 0.6, {x:200, delay:1});
		
		var envelopeElement = $(".submit-icon");
		var envelopeTween = new TimelineLite();
		envelopeTween.fromTo(envelopeElement, 0.6, {x:0}, {x:100});
		envelopeTween.fromTo(envelopeElement, 0.6, {x:-100}, {x:0, delay:1});
	
}

function flashButton(color){
	var originalColor = $(".submit").css("background-color");
	
	setTimeout(function(){
		$(".submit").css("background-color", color);
	},300);
	
	setTimeout(function(){
		$(".submit").css("background-color", originalColor);
	},1000);
	
} 

function clearForm(){
	$("input[type=email]").val("");
	$("input[type=text]").val("");
	$("textarea").val("");
	
	$("input[type=text]").focusout();
	$("input[type=email]").focusout();
	$("textarea").focusout();
}

$(function() {
  $('#contact').submit(function(event) {
    event.preventDefault();
		
		if(validateForm()){
			sentAnimation("Sent", "green");
			
			//post form
			var formEl = $(this);
			console.log(formEl.serialize());
			var submitButton = $('input[type=submit]', formEl);

			$.ajax({
				type: 'POST',
				url: phpURL,
				accept: {
					javascript: 'application/javascript'
				},
				data: formEl.serialize(),
				beforeSend: function() {
					submitButton.prop('disabled', 'disabled');
				}
			}).done(function(data) {
				submitButton.prop('disabled', false);
			});
			
			clearForm();
			
		}
		else{
			sentAnimation("Error", "red");
		}
  });
});


/** Drop this PHP script on the server
 
 <?php
	$email_to = "[YOUR EMAIL GOES HERE]";
	$email_subject = "[YOUR SUBJECT GOES HERE]";
	$name = $_POST['name'];
	$email_from = $_POST['email'];
	$msg = $_POST['msg'];
	$email_msg = "
		Form Details

		Name:$name
		Email:$email_from
		Message:

		$msg
	";
	$headers = 'From: '.$email_from."\r\n".
 	'Reply-To: '.$email_from."\r\n" .
 	'X-Mailer: PHP/' . phpversion();
 	
	 @mail($email_to, $email_subject, $email_msg, $headers);
?>

**/
