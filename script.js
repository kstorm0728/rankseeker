$(function(){
	$('#header-accordion dd').hide();
	$('.menu-icon').on('click', function() {
		$('#header-accordion ul').slideToggle();
	});

	$('#login-show').click(function() {
		$('#login-modal').fadeIn();
	});

	$('.close-modal').click(function() {
		$('#login-modal').fadeOut();
	});

	$('#signup-show').click(function() {
		$('#signup-modal').fadeIn();
	});

	$('.close-modal').click(function() {
		$('#signup-modal').fadeOut();
	});

	

});

