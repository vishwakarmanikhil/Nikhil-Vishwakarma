function myFunction() {
	$( "nav.navbar-light" ).toggleClass( 'bg-custom');
}

$(window).on('resize', function() {
	if($(window).height() > 425) {
	    $('.footer-logo').addClass('d-flex justify-content-center');
	}else{
		$('#body').removeClass('d-flex justify-content-center');
	}
});

// Init AOS
  function aos_init() {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });
  

// Activate smooth scroll on page load with hash links in the url
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });