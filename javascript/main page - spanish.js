
$(document).ready(function() {

	/*--------------------Main Text Fade In/Out Function-------------------------*/
	$(window).scroll(function() {    
	    var scroll = $(window).scrollTop();
	    $('#myText , #arrow').stop().animate(
	        {opacity: (( 300-scroll )/100)+0.5},
	        
	    );
	});

	/*-------------------Mobile Menu Toggle---------------------------------------*/
	$('.menu_container').hover(function() {
		$('.dropdown_menu , .dropdown_menu a').stop(true , false).slideToggle(400);
	})

	quote(); //--------------Call Random Quote Function---------------------------*/



	/*---------------------Scroll To Top Button Function--------------------------*/
	$('#scroll_btn').hide();

	$(window).scroll(function(){
			if ($(this).scrollTop() > 400) {
				$('#scroll_btn').fadeIn();
			} else {
				$('#scroll_btn').fadeOut();
			}
		});
		
		$('#scroll_btn').click(function(){
			$('html , body').animate({scrollTop : 0},800);
			return false;
		});

	});
	/*-------------------Main Function ends Here------------------------------------*/

	/*-------------------Function To Randomly Change Quotes on refresh------------------------*/
	function quote() {

		var random_num = Math.floor(Math.random(1) * 5);

		switch(random_num) {
			case 1 : $('#main_quote').append("\"La vida no es un problema a ser resuelto, sino una realidad a experimentar\" - Soren Kierkegaard"); break;

			case 2 : $('#main_quote').append("\"El &eacute;xito tiene una simple f&oacute;rmula\: da lo mejor de ti y puede que a la gente le guste\" - Sam Ewing"); break;

			case 3 : $('#main_quote').append("\"C&aacute;ete siete veces y lev&aacute;ntate ocho\" - proverbio japones"); break;

			case 4 : $('#main_quote').append("\"Antes que nada, la preparaci&oacute;n es la llave del &eacute;xito\" - Alexander Graham Bell"); break;

			case 5 : $('#main_quote').append("\"Pierdes el 100% de los disparos que no usas\" - Wayne Gretzky"); break;

			default : $('#main_quote').append("\"El hombre necesita dificultades porque son necesarias para disfrutar el &eacute;xito\" - A.P.J. Abdul Kalam");

		}
}


