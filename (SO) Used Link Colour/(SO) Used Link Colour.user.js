// ==UserScript==
// @name         (SO) Used Link Colour
// @namespace    http://ostermiller.org/
// @version      2.0
// @description  Change the color of followed links on all StackExchange sites so they they are easily distinguishable.
// @include      /https?\:\/\/([a-z\.]*\.)?stackexchange\.com\/.*/
// @include      /https?\:\/\/([a-z\.]*\.)?askubuntu\.com\/.*/
// @include      /https?\:\/\/([a-z\.]*\.)?superuser\.com\/.*/
// @include      /https?\:\/\/([a-z\.]*\.)?serverfault\.com\/.*/
// @include      /https?\:\/\/([a-z\.]*\.)?stackoverflow\.com\/.*/
// @grant        none
// ==/UserScript==

function addCss(cssString) {
    var newCss = document.createElement('style');
    newCss.type = "text/css";
    newCss.innerHTML = cssString;
    document.getElementsByTagName('head')[0].appendChild(newCss);
}

addCss ('.question-hyperlink:visited, .answer-hyperlink:visited {color: #B00000;}');
