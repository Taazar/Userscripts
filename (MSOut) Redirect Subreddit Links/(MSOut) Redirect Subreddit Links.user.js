// ==UserScript==
// @name         (MSOut) Redirect Subreddit Links
// @author       Taazar
// @version      1.0
// @description  Redirect any follow subreddit links to proper reddit URLS
// @namespace    https://github.com/Taazar
// @homepage     https://github.com/Taazar/Userscripts/tree/master/(MSOut)%20Redirect%20Subreddit%20Links
// @updateURL    https://raw.githubusercontent.com/Taazar/Userscripts/master/(MSOut)%20Redirect%20Subreddit%20Links/(MSOut)%20Redirect%20Subreddit%20Links.meta.js
// @downloadURL  https://raw.githubusercontent.com/Taazar/Userscripts/master/(MSOut)%20Redirect%20Subreddit%20Links/(MSOut)%20Redirect%20Subreddit%20Links.user.js
// @match        https://pcottle.github.io/r/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

//1.0 Redirect any follow subreddit links to proper reddit URLS

window.location.replace(window.location.href.replace("pcottle.github.io", "reddit.com"));
