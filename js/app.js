var params = {
	src: 'images/test.jpg',
	position: 'center'
};

$(document).ready(function() {
	designMatch();
	designMatchNav();
});

var src = ''; // path to design screenshot

function designMatch() {
	init();
}
function init() {
	var currentCN = $('body').html();
	$('body').html( currentCN + getHTML() );
	currentCN = $('body').html();
	$('body').html( currentCN + buildCSS() );
	$('.designMatchWrapper img').remove();
}
function getHTML() {
	var DOM = new Array(
		"<div class=\"designMatchWrapper\">",
			"<img src="+params.src+" />",
		"</div>",
		"<div class=\"nav\">",
			"<a href=\"javascript:;\" class=\"nav_link\">Orig to Front</a>",
			"<a href=\"javascript:;\" class=\"nav_link\" id=\"opacityOn\">Opacity On</a>",
			"<a href=\"javascript:;\" class=\"nav_link\" id=\"opacityOff\">Opacity Off</a>",
		"</div>"
	);
	var html = '';
	$.each(DOM, function(i) {
		html += this;
	});
	return html;
}
function buildCSS() {
	var imgW = $('.designMatchWrapper img').width();
	var imgH = $('.designMatchWrapper img').height();
	var position = '0px';
	if(params.position) {
		if(params.position == 'center') {
			position = 'left:'+($(window).width() - imgW)/2+'px';
		} else
		if(params.position == 'left') {
			position = 'left:0px'
		} else
		if(params.position == 'right') {
			position = 'right:0px';
		} else {
			position = params.position;
		}
	}
	var cssDOM = new Array(
		"<style type=\"text/css\">",
		".designMatchWrapper {width:"+imgW+"px; height:"+imgH+"px; position:absolute; "+position+"; top:0px; background:url("+params.src+") 0 0 no-repeat; font-family:Arial; font-size:11px;}",
		".nav {position:absolute; width:100%; text-align:center; background:none #fff; opacity:0;}",
		".nav_visible {opacity:0.7;}",
		".nav a {margin:0 10px;}",
		"</style>"
	);
	var css = '';
	$.each(cssDOM, function() {
		css += this;
	});
	var currentCN = $('body').html();
	css += currentCN;
	return css;
}

function designMatchNav() {
	$('.nav').live('hover', function() {
		$(this).toggleClass('nav_visible');
	});
	$('#opacityOn').live('click', function() {
		opacityOn();
	});
	$('#opacityOff').live('click', function() {
		opacityOff();
	});
}
function opacityOn() {
	$('.designMatchWrapper').css('opacity', 0.5);
}
function opacityOff() {
	$('.designMatchWrapper').css('opacity', 1);
}