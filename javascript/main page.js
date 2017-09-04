
$(document).ready(function() {
	$(window).scroll(function() {    
	    var scroll = $(window).scrollTop();
	    $('#myText , #arrow').stop().animate(
	        {opacity: (( 300-scroll )/100)+0.5},
	        
	    );
	});

	quote();


$(window).scroll(function(){
		if ($(this).scrollTop() > 400) {
			$('#scroll_btn').fadeIn();
		} else {
			$('#scroll_btn').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('#scroll_btn').click(function(){
		$('html , body').animate({scrollTop : 0},800);
		return false;
	});

});



function quote() {

	var random_num = Math.floor(Math.random(1) * 5);

	switch(random_num) {
		case 1 : $('#main_quote').append("\"Creativity is a habit, and the best creativity is the result of good work habits.\" - Twyla Tharp"); break;

		case 2 : $('#main_quote').append("\"Anyone who has ever made anything of importance was disciplined.\" - Andrew Hendrixson"); break;

		case 3 : $('#main_quote').append("\"Creativity is intelligence having fun.\" - Albert Einstein"); break;

		case 4 : $('#main_quote').append("\"Genius is 1% inspiration, 99% perspiration.\" - Thomas Edison"); break;

		case 5 : $('#main_quote').append("\"You must be the change you wish to see in the world.\" - Mahatma Gandhi"); break;

		default : $('#main_quote').append("\"Do it with passion, or not at all.\" - Rosa Nouchette Carey");

	}
}


