// ==UserScript==
// @name         (Steam) Agree Key Terms
// @author       Taazar
// @version      0.1
// @description  Automatically agree to terms and conditions when activating keys
// @namespace    https://github.com/Taazar
// @homepage     https://github.com/Taazar/Userscripts/tree/master/(Steam)%20Agree%20Key%20Terms
// @updateURL    https://raw.githubusercontent.com/Taazar/Userscripts/master/(Steam)%20Agree%20Key%20Terms/(Steam)%20Agree%20Key%20Terms.meta.js
// @downloadURL  https://raw.githubusercontent.com/Taazar/Userscripts/master/(Steam)%20Agree%20Key%20Terms/(Steam)%20Agree%20Key%20Terms.user.js
// @match        https://store.steampowered.com/account/registerkey*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.getElementById("accept_ssa").click();
})();