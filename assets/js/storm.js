$(document).ready(function() {
	//Scroll to Top
	$(".totop").hide();
	$(window).scroll(function(){
		if ($(this).scrollTop() > 300) {
			$('.totop').fadeIn();
		} else {
			$('.totop').fadeOut();
		}
	});
	$(".totop a").click(function(e) {
		e.preventDefault();
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});
	
    //Fixed Navigation
    $('.navbar').affix({
        offset: {
            top: $('header').height()
        }
    });

    //Owl Carousel For CLient List
	$("#owl-example").owlCarousel({
		items: 8
	});	

	$(".navbar li a").each(function() {
		if(document.URL.indexOf(this.getAttribute('href'))>0)
		{
			$(".navbar li a").removeClass('current');
			$(this).addClass('current');
		}
		if(document.URL.indexOf('/documentation/')>0)
		{
			$(".navbar li a").removeClass('current');
			$('#documentation').addClass('current');
		}
		if(document.URL.indexOf('/contribute/')>0)
		{
			$(".navbar li a").removeClass('current');
			$('#contribute').addClass('current');
		}

	});
	$(".news li a").each(function() {
		if(document.URL.indexOf(this.getAttribute('href'))>0 && !($("#news-list li a").hasClass('current'))){
			$("#news-list li a").removeClass('current');
			$(this).addClass('current');
		}
	});

});;