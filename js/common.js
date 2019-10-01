$(document).ready(function () {
	
	$('.mobile-btn').on('click',function () {
		$('.mobile-menu').addClass('active');
	});

	$('.close').on('click',function (e) {
		e.preventDefault();

		$('#overlay').hide();
		$(this).parent().removeClass('active');
	});

	$(".menu").on("click","a", function (event) {
        event.preventDefault();

        var id  = $(this).attr('href'),

            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
        $('.mobile-menu').removeClass('active');
    });

    $(".test").on("click", function (event) {
        event.preventDefault();

        var id  = $(this).attr('href'),

            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $('.service__item').on('click',function () {

    	$('body').addClass('noscroll');
    	$('#overlay').show();
    	$('.popup').addClass('active');

    });

    $('.popup-close').on('click',function (e) {
    	e.preventDefault();

    	$('body').removeClass('noscroll');
    	$('#overlay').hide();
    	$('.popup').removeClass('active');
    })


	// input
	$('.input__field').change(function() {
		var $this = $(this);
		var $thisInput = $this.find('input');        
		if ($this.val() !== "") {
			$this.addClass('input--filled');
		} else {
			$this.removeClass('input--filled');
		}
	});

	$("#phone").mask("+38(999) 999-9999");

	$('.photos__row').slick({
		variableWidth: true,
		cssEase: 'linear',
		autoplay: true,
		autoplaySpeed: 0,
		speed: 12000
	});

	$('.photos__row--reverse').slick({
		rtl: true,
		variableWidth: true,
		cssEase: 'linear',
		autoplay: true,
		autoplaySpeed: 0,
		speed: 12000
	});

	$('.reviews-slider').slick({
		fade: true,
		adaptiveHeight: true,
		dots: true,
		prevArrow: '<span class="prev-arrow"><svg width="50" height="12" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:avocode="https://avocode.com/" viewBox="0 0 50 12"><g><g><path d="M49.9998,5v1.99994l-41.99985,0v5.00047l-7.99993,-5.99921l7.99993,-6.00044v4.99923z" fill="currentColor" fill-opacity="1"></path></g></g></svg></span>',
		nextArrow: '<span class="next-arrow"><svg width="50" height="12" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:avocode="https://avocode.com/" viewBox="0 0 50 12"><g><g><path d="M-0.00006,5l41.99954,0v-4.99923l8.00024,6.00044l-8.00024,5.99921l0,-5.00047h-41.99954z" fill="currentColor" fill-opacity="1"></path></g></g></svg></span>'
	});

})