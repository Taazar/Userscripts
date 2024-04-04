// ==UserScript==
// @name         (DVA) Sort & Colour MOT Dates
// @author       Mesidast
// @version      1.2
// @description  Sort and colour code DVA MOT available dates list
// @namespace    https://github.com/Taazar
// @homepage     https://github.com/Taazar/Userscripts/tree/master/(DVA)%20Sort%20%26%20Colour%20MOT%20Dates
// @updateURL    https://raw.githubusercontent.com/Taazar/Userscripts/master/(DVA)%20Sort%20%26%20Colour%20MOT%20Dates/(DVA)%20Sort%20%26%20Colour%20MOT%20Dates.meta.js
// @downloadURL  https://raw.githubusercontent.com/Taazar/Userscripts/master/(DVA)%20Sort%20%26%20Colour%20MOT%20Dates/(DVA)%20Sort%20%26%20Colour%20MOT%20Dates.user.js
// @match        https://dva-bookings.nidirect.gov.uk/BookVehicle/Appointment
// @icon         https://www.google.com/s2/favicons?sz=64&domain=nidirect.gov.uk
// @grant        none
// @run-at       document-end
// ==/UserScript==

'use strict';
window.onload = function () {
	var dropClick = document.getElementsByClassName("btn dropdown-toggle btn-default bs-placeholder")[0];
	dropClick.onclick = function () {
		var expiryText = document.getElementById("certExpiryNotice").getElementsByClassName("info-notice")[0].innerText;
		var expiryDateDMY = /(\d{2})\/(\d{2})\/(\d{4})/.exec(expiryText);
		var expiryDate = Date.parse(expiryDateDMY[2] + "-" + expiryDateDMY[1] + "-" + expiryDateDMY[3]);

		var dropDowns = document.getElementById("bs-select-1").getElementsByClassName("text-muted");
		var results = "";
		var resultArray = [];

		for (var i = 0; i < dropDowns.length; i++) {
			var nextDate = dropDowns[i].innerText;
			//Sort (collect)
			dropDowns[i].parentElement.parentElement.parentElement.id = "Sorter" + i;
			resultArray.push([Date.parse(nextDate), i]);

			//Colour code
			if (Date.parse(nextDate) >= expiryDate) {
				dropDowns[i].innerHTML = '<span style="background-color:red;color:white">' + nextDate + '</span>';
			} else if (Date.parse(dropDowns[i].innerText) < expiryDate) {
				dropDowns[i].innerHTML = '<span style="background-color:green;color:white">' + nextDate + '</span>';
				results = results + "\n" + dropDowns[i].parentElement.innerText + " : " + nextDate;
			}
		}
		setTimeout(() => {
			//Sort (actual)
			resultArray = resultArray.sort(function (a, b) {
				if (a[0] == b[0]) {
					return a[1] - b[1];
				}
				return a[0] - b[0] || isNaN(a[0]) - isNaN(b[0]);
			});
			//remove any previous outputs
			$(".sticky-footer").contents(".optgroup-1").remove();
			//add new sorted output to bottom of page
			var container = document.getElementsByClassName("dropdown-menu inner ")[0];
			var freeSpace = document.getElementsByClassName("pb-3")[0];
			for (var j = resultArray.length - 1; j >= 0; j--) {
				var a = document.getElementById("Sorter" + resultArray[j][1]).cloneNode(true);
				freeSpace.after(a);
			}
		}, 500);
	}
	setTimeout(() => {
		dropClick.click();
	}, 700);
}