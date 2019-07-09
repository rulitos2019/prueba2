$(function (){

	$('.main_nav__icon').on('click', function(e) {
		event.preventDefault()
		$('.main_nav__list').toggleClass('open')
	});

});
