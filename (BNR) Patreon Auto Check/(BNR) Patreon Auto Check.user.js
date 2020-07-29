// ==UserScript==
// @name         (BNR) Patreon Auto Check
// @author       Taazar
// @version      1.0
// @description  Auto allow patreon check while opening BNR and then close tab again
// @namespace    https://github.com/Taazar
// @homepage     https://github.com/Taazar/Userscripts/tree/master/
// @updateURL    https://raw.githubusercontent.com/Taazar/Userscripts/master/
// @downloadURL  https://raw.githubusercontent.com/Taazar/Userscripts/master/
// @include      https://www.patreon.com/oauth2/authorize?response_type=code&client_id=*
// @include      http://localhost:8080/?code=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if(window.location.href.indexOf("http://localhost:8080/?code=") > -1) {
        var win = window.open("","_self");
        win.close();
    } else {
        document.getElementsByClassName("patreon-button patreon-button-action")[0].click();
    }
})();
