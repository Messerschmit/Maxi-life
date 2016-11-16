window.onload = function (){
	var scrollUp = document.getElementById('back-top');
	// show button scroll-up
	window.onscroll = function () {
		if ( window.pageYOffset > 0 ) {
		scrollUp.style.display = 'block';
		} else {
		scrollUp.style.display = 'none';
		}
	};
}
