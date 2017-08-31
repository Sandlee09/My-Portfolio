$(document).ready(function() {
	$(window).scroll(function() {    
	    var scroll = $(window).scrollTop();
	    $('#myText , #arrow').stop().animate(
	        {opacity: (( 300-scroll )/100)+0.5},
	        
	    );
	});

	

});