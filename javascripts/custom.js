window.onscroll = function() { handleStickyNavbar() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function handleStickyNavbar() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky")
	} else {
		navbar.classList.remove("sticky");
	}
}