$('.scroller').click(function(){
	$('html, body').animate({
		scrollTop: $( $(this).attr('href') ).offset().top
	}, 'slow');
});
