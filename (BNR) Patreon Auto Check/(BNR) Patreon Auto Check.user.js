// ==UserScript==
// @name         (BNR) Patreon Auto Check
// @author       Taazar
// @version      2.0
// @description  Auto allow patreon check while opening BNR and then close tab again
// @namespace    https://github.com/Taazar
// @homepage     https://github.com/Taazar/Userscripts/tree/master/(BNR)%20Patreon%20Auto%20Check
// @updateURL    https://raw.githubusercontent.com/Taazar/Userscripts/master/(BNR)%20Patreon%20Auto%20Check/(BNR)%20Patreon%20Auto%20Check.meta.js
// @downloadURL  https://raw.githubusercontent.com/Taazar/Userscripts/master/(BNR)%20Patreon%20Auto%20Check/(BNR)%20Patreon%20Auto%20Check.user.js
// @include      https://www.patreon.com/oauth2/authorize?response_type=code&client_id=*
// @include      http://localhost:8080/?code=*
// @grant        none
// ==/UserScript==

//2.0 - Add checks to accept only BNR patreon requests

(function() {
    'use strict';
    if(window.location.href.indexOf("http://localhost:8080/?code=") > -1 && document.body.innerText.replace(/[^a-zA-z ]/g, "") == "CONNECTEDYou can close this page") {
        var win = window.open("","_self");
        win.close();
    } else if(document.getElementsByClassName("patreon-oauth-component--heading")[0].innerText == "Battle Nations Unity Auth would like to ...") {
        document.getElementsByClassName("patreon-button patreon-button-action")[0].click();
    }
})();
