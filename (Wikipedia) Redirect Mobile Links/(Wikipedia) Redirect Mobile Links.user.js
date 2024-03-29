// ==UserScript==
// @name         (Wikipedia) Redirect Mobile Links
// @author       Taazar
// @version      1.1
// @description  Redirect any mobile wikipedia links to the standard webpage
// @namespace    https://github.com/Taazar
// @homepage     https://github.com/Taazar/Userscripts/tree/master/(Wikipedia)%20Redirect%20Mobile%20Links
// @updateURL    https://raw.githubusercontent.com/Taazar/Userscripts/master/(Wikipedia)%20Redirect%20Mobile%20Links/(Wikipedia)%20Redirect%20Mobile%20Links.meta.js
// @downloadURL  https://raw.githubusercontent.com/Taazar/Userscripts/master/(Wikipedia)%20Redirect%20Mobile%20Links/(Wikipedia)%20Redirect%20Mobile%20Links.user.js
// @match        https://*.m.wikipedia.org/*
// @icon         https://www.google.com/s2/favicons?domain=wikipedia.org
// @grant        none
// @run-at       document-start
// ==/UserScript==

//1.0 Redirect any mobile wikipedia links to proper standard wikipedia links
//1.1 Add wikipedia icon

window.location.replace(window.location.href.replace(".m.wikipedia.org", ".wikipedia.org"));
