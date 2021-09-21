// ==UserScript==
// @name         (Steam) Agree Key Terms
// @author       Taazar
// @version      0.3
// @description  Automatically agree to terms and conditions when activating keys
// @namespace    https://github.com/Taazar
// @homepage     https://github.com/Taazar/Userscripts/tree/master/(Steam)%20Agree%20Key%20Terms
// @updateURL    https://raw.githubusercontent.com/Taazar/Userscripts/master/(Steam)%20Agree%20Key%20Terms/(Steam)%20Agree%20Key%20Terms.meta.js
// @downloadURL  https://raw.githubusercontent.com/Taazar/Userscripts/master/(Steam)%20Agree%20Key%20Terms/(Steam)%20Agree%20Key%20Terms.user.js
// @match        https://store.steampowered.com/account/registerkey*
// @icon         https://www.google.com/s2/favicons?domain=steampowered.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.getElementById("accept_ssa").click();
    if(window.location.href.indexOf("https://store.steampowered.com/account/registerkey?key=") > -1) {
        var steamKey = new URLSearchParams(window.location.search).get("key")
        if (/[A-Z0-9]{5}-[A-Z0-9]{5}-[A-Z0-9]{5}/.test(steamKey)) {
            document.getElementById('register_btn').click()
        }
    }
})();
