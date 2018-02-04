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