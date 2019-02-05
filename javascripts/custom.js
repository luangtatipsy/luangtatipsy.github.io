window.onscroll = function() { handleStickyNavbar() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function handleStickyNavbar() 
{	
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("fixed-top");
	} else {
		navbar.classList.remove("fixed-top");
	}
}

$(function(){
	$(".progress-bar").each(function(){
		var each_bar_width = $(this).attr('aria-valuenow');
		$(this).width(each_bar_width + '%');
		// $(this).animate({
		//     width: each_bar_width + '%'
		// }, 1000);	
		$(this).find('span').attr('title', each_bar_width + '%');

		var width_px = Math.ceil($(this).width() / 2);
		$(this).find('span').attr('data-offset', width_px + 'px');
	});

	$('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');

	$(".navbar ul li a.nav-link").click(function() {
		var scroll_to = $(this).attr("href");
		$('body').scrollTo(scroll_to, 1000);
	});

	$('#hire-btn').click(function(){
		var scroll_to = $(this).attr("href");
		$('body').scrollTo(scroll_to, 1000);
	});

	$("#certificates-slider").owlCarousel({
            items: 3,
            center: true,
            margin: 20,
            loop: false,
            dots: true,
            nav: true
          });
          
          $('.image-link').magnificPopup({
            type: 'image',
            gallery: {
              enabled: true, // set to true to enable gallery

              preload: [0,2], // read about this option in next Lazy-loading section

              navigateByImgClick: true,

              arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button

              tPrev: 'Previous (Left arrow key)', // title for left button
              tNext: 'Next (Right arrow key)', // title for right button
              tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
            }
          });
});