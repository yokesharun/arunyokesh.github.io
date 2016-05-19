$(document).ready(function(){

	$('#toggle-switcher').click(function(){
		if($(this).hasClass('opened')){
			$(this).removeClass('opened');
			$('#style-switcher').animate({'right':'-175px'});
		}else{
			$(this).addClass('opened');
			$('#style-switcher').animate({'right':'-15px'});
		}
	});
	
	$('#style-switcher li').click(function(e){
		e.preventDefault();
		
		var stylesheet = 'styles-'+($(this).index()+1)+'.css';
		
		
		$('link#theme').attr('href', 'assets/css/' + stylesheet);
		
		$('.navbar-brand img').attr('src','assets/images/logo-'+($(this).index()+1)+'.png');
		
		$('link#theme').load(function(){
			bgcolor = $('.bg-color2').css('background-color');
			
			$('link#main').attr('href', 'assets/css/' + stylesheet);
			$('#toggle-switcher .fa').css({'color':bgcolor});
		
		});
	});
});