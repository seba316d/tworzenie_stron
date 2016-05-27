$(document).ready(function(){
	$("#login").click(function(event){
		event.preventDefault(); //blokowanie domyslych wartosci po kliknieciu na przycisk
		var name = $("#name").val();//zapisywanie pole #name do zmiennej
		var email = $("#email").val();
		var password = $("#password").val();
		$("#contact-right").html(name + "<br>" + email + "<br>" + password);

	});

	$("p,h1,h2,h3,h4,a,img,button,label").hide().fadeIn(2000);
});
