// ==UserScript==
// @name         (SO) Link Colour Fixer
// @author       Taazar
// @version      3.0
// @description  Change the color of followed links and removed links so they they are easily distinguishable.
// @namespace    https://github.com/Taazar
// @homepage     https://github.com/Taazar/Userscripts/tree/master/(SO)%20Link%20Colour%20Fixer
// @updateURL    https://raw.githubusercontent.com/Taazar/Userscripts/master/(SO)%20Link%20Colour%20Fixer/(SO)%20Link%20Colour%20Fixer.meta.js
// @downloadURL  https://raw.githubusercontent.com/Taazar/Userscripts/master/(SO)%20Link%20Colour%20Fixer/(SO)%20Link%20Colour%20Fixer.user.js
// @include      https://*stackoverflow.com/*
// @include      https://*serverfault.com/*
// @include      https://*superuser.com/*
// @include      https://*askubuntu.com/*
// @include      https://*mathoverflow.net/*
// @include      https://*stackapps.com/*
// @include      https://*.stackexchange.com/*
// @grant        none
// ==/UserScript==

//2.0 - Update followed link colour to red
//3.0 - Darken removed link background colour

function addCss(cssString) {
	var newCss = document.createElement('style');
	newCss.type = "text/css";
	newCss.innerHTML = cssString;
	document.getElementsByTagName('head')[0].appendChild(newCss);
}

addCss ('.question-hyperlink:visited, .answer-hyperlink:visited {color: #B00000;}'); //Change clicked link colour (light blue to red)
addCss ('.bg-red-050 {background-color: #ffdede !important;}'); //Darken deleted link background colour (red)
