$(document).ready(function() {
	var TEAPOT_IMAGES = [
		'images/teapot1.jpg',
		'images/teapot2.jpg',		
		'images/teapot3.jpg',
		'images/teapot4.jpg',		
		'images/teapot5.jpg',
		'images/teapot6.jpg',
		'images/teapot7.jpg',
		'images/teapot8.jpg',		
		'images/teapot9.jpg',
		'images/teapot10.jpg',		
		'images/teapot11.jpg',
		'images/teapot12.jpg',
		'images/teapot13.jpg',		
		'images/teapot14.jpg'
	]

	var replaceImages = function() {
		var images = $('img').not('.a-teapot').each(function(idx, img) {
			var selectedImage = TEAPOT_IMAGES[Math.floor((Math.random() * TEAPOT_IMAGES.length))];
			var originalHeight = $(img).height();
			var originalWidth = $(img).width();
			img.src = chrome.extension.getURL(selectedImage);
			img.width = originalWidth;
			img.height = originalHeight;
			$(img).addClass('a-teapot');
		});	
	}

	replaceImages();
	window.setInterval(function() {
		replaceImages();		
	}, 1000);
});