// ==UserScript==
// @name         (SO) Improved Top Bar
// @author       Taazar
// @version      1.0
// @description  Add text below each top bar button and improve spacing
// @namespace    https://github.com/Taazar
// @homepage     https://github.com/Taazar/Userscripts/tree/master/(SO)%20Improved%20Top%20Bar
// @updateURL    https://raw.githubusercontent.com/Taazar/Userscripts/master/(SO)%20Improved%20Top%20Bar/(SO)%20Improved%20Top%20Bar.meta.js
// @downloadURL  https://raw.githubusercontent.com/Taazar/Userscripts/master/(SO)%20Improved%20Top%20Bar/(SO)%20Improved%20Top%20Bar.user.js
// @include      https://*stackoverflow.com/*
// @include      https://*serverfault.com/*
// @include      https://*superuser.com/*
// @include      https://*askubuntu.com/*
// @include      https://*mathoverflow.net/*
// @include      https://*stackapps.com/*
// @include      https://*.stackexchange.com/*
// @grant        none
// ==/UserScript==

(function() {
	'use strict';
	((d,o,c,s) => {
	  c = d.createElement("style");
	  c.textContent = '.-link{display:flex;flex-direction:column;justify-content:center;}.-menuitem-caption{font-size: 10px;}';
	  d.head.appendChild(c);
	  for (let n in o) {
		s = d.querySelector(o[n]);
		if (!s) continue;
		c = d.createElement("span");
		c.className = "-menuitem-caption";
		c.textContent = n;
		s.appendChild(c);
	  }
	})(document, {
	  inbox: ".js-inbox-button",
	  awards: ".js-achievements-button",
	  review: ".js-review-button",
	  help: ".js-help-button",
	  network: ".js-site-switcher-button",
	  hats: ".-link.icon-winterbash"
	})
})();
