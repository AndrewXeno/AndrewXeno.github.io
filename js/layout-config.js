function changePos(id) { /*set position according to element height */
	"use strict";
	var obj = document.getElementById(id),
		scrollTop = document.documentElement.scrollTop || document.body.scrollTop,
		scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft,
		yOffset = document.getElementById('header-title').offsetHeight;
	if (scrollTop < yOffset) {
		obj.style.position = 'relative';
		obj.style.left = 0;
		obj.style.top = 0;
	} else {
		obj.style.position = 'fixed';
		obj.style.top = 0;
		obj.style.left = -scrollLeft + "px";
		obj.style.width = '100%';
	}
}


window.onload = function() {};

window.onscroll = function() {
	changePos('header-inner');
};
window.onresize = function() {
	changePos('header-inner');
};