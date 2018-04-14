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

// Call the function with the following parameters:
// onViewport(selector, classNameToBeAdded, offset, callback);

// Example:
// onViewport("#about-me", "animated bounce", 500);
// onViewport('#education', '', 500, function(){
// 	$('.timeline li').each(function () {
// 		onViewport(this, "animated bounce", 500);
// 	});
// });
// onViewport('#skills', '', 500, function(){
// 	$('.col').each(function () {
// 		onViewport(this, "animated bounce", 500);
// 	});
// });

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
});