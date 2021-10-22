// ==UserScript==
// @name         (Hotmail) Remove Advert Banner
// @author       Taazar
// @version      1.0
// @description  Remove advert banner on the right of the screen
// @namespace    https://github.com/Taazar
// @homepage     https://github.com/Taazar/Userscripts/tree/master/(Hotmail)%20Remove%20Advert%20Banner
// @updateURL    https://raw.githubusercontent.com/Taazar/Userscripts/master/(Hotmail)%20Remove%20Advert%20Banner/(Hotmail)%20Remove%20Advert%20Banner.meta.js
// @downloadURL  https://raw.githubusercontent.com/Taazar/Userscripts/master/(Hotmail)%20Remove%20Advert%20Banner/(Hotmail)%20Remove%20Advert%20Banner.user.js
// @match        https://outlook.live.com/mail/0/inbox*
// @icon         https://www.google.com/s2/favicons?domain=live.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(() => { document.getElementsByClassName("_1fti_QgAzqGWPGlqh_FSvI")[0].remove(); }, 2000);
})();
