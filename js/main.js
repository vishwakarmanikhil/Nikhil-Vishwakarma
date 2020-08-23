function myFunction() {
		$( "nav.navbar-light" ).toggleClass( 'bg-custom');
	}

$(window).on('resize', function() {
	if($(window).height() > 425) {
	    $('.footer-logo').addClass('d-flex justify-content-center');
	    }
	else{
		$('#body').removeClass('d-flex justify-content-center');
	}
});