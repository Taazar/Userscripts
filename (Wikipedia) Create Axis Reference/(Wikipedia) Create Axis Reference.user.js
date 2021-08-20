// ==UserScript==
// @name         (Wikipedia) Create Axis Reference
// @author       Taazar
// @version      1.0
// @description  Generate wikipedia reference link and copy it to clipboard
// @namespace    https://github.com/Taazar
// @match        https://www.axishistory.com/list-all-categories/*
// @icon         https://www.google.com/s2/favicons?domain=wikipedia.org
// @grant        GM_setClipboard
// ==/UserScript==

//1.0 - Generate wikipedia reference link from axis history page and copy it to clipboard

(function() {
    'use strict';
    var refText = ' {{refn|An Italian Infantry Division normally consisted of two Infantry Regiments (three Battalions each), an Artillery Regiment, a Mortar Battalion (two Companies), and an Anti Tank Company. A Blackshirt Legion (essentially an Infantry Regiment of two Battalions instead of three) was sometimes attached. Each Division had only about 7,000 men, The Infantry and Artillery Regiments contained 1,650 men, the Blackshirt Legion 1,200, each company 150 men.<ref name="paoletti">{{cite book|title=A Military History of Italy|last=Paoletti|first=Ciro|publisher=Greenwood Publishing Group|year=2008|isbn=0-275-98505-9|pages=170}}</ref>|group=nb}}';
    refText += '<ref name="ax">{{cite web|date=<<wDate>>|title=<<title>>|url=<<url>>|url-status=live|access-date=<<aDate>>|website=Axis History}}</ref>';
    refText = refText.replace("<<wDate>>", document.getElementsByClassName("visible-phone")[0].innerText);
    refText = refText.replace("<<title>>", document.getElementsByClassName("page-header")[0].innerText);
    refText = refText.replace("<<url>>", window.location.href);
    refText = refText.replace("<<aDate>>", new Date().toLocaleDateString('en-GB', {year: 'numeric', month: 'long', day: 'numeric'}));
    navigator.clipboard.writeText(refText);
})();
