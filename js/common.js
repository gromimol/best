$(document).ready(function () {
	
	$('.mobile-btn').on('click',function () {
		$('.mobile-menu').addClass('active');
	});

	$('.close').on('click',function (e) {
		e.preventDefault();

		$('#overlay').hide();
		$(this).parent().removeClass('active');
	});

})