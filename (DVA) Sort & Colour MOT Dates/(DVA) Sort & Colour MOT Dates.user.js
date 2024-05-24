// ==UserScript==
// @name         (DVA) Sort & Colour MOT Dates
// @author       Mesidast
// @version      1.3
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
const reloadOnNone = true;
const reloadOnInvalidDates = true;
const matchOnlySpecificDate = false;
const specificDate = Date.parse("24 May 2024");

window.onload = function () {
	//Get dropdown combo box
	const dropClick = document.getElementsByClassName("btn dropdown-toggle btn-default bs-placeholder")[0];
	dropClick.onclick = function () {
		const expiryText = document.getElementById("certExpiryNotice").getElementsByClassName("info-notice")[0].innerText;
		const expiryDateDMY = /(\d{2})\/(\d{2})\/(\d{4})/.exec(expiryText); //split dmy date into parts
		const expiryDate = Date.parse(expiryDateDMY[2] + "-" + expiryDateDMY[1] + "-" + expiryDateDMY[3]); //rebuild as mdy and dateparse

		const dropDowns = document.getElementById("bs-select-1").getElementsByClassName("text-muted");
		var resultArray = [];
		var anyValidDates = false;

		for (var i = 0; i < dropDowns.length; i++) {
			var nextDate = dropDowns[i].innerText; //mdy convert not needed, implicit from dd mmm yyyy
			//Pre-Sort (collect and add IDs to fields for later)
			dropDowns[i].parentElement.parentElement.parentElement.id = "Sorter" + i;
			resultArray.push([Date.parse(nextDate), i]);

			//Colour code
			if (matchOnlySpecificDate) {
				if (Date.parse(nextDate) == specificDate) { //Matches specific date
					dropDowns[i].innerHTML = '<span style="background-color:green;color:white">' + nextDate + '</span>';
					anyValidDates = true;
				} else if (!isNaN(Date.parse(nextDate))) { //If not (not a number/date) / If valid date
					dropDowns[i].innerHTML = '<span style="background-color:red;color:white">' + nextDate + '</span>';
				}
			} else {
				if (Date.parse(nextDate) >= expiryDate) { //After expiry date
					dropDowns[i].innerHTML = '<span style="background-color:red;color:white">' + nextDate + '</span>';
				} else if (Date.parse(nextDate) < expiryDate) { //Before or on expiry date
					dropDowns[i].innerHTML = '<span style="background-color:green;color:white">' + nextDate + '</span>';
					anyValidDates = true;
				}
			}
		}
		setTimeout(() => { //
			//Sort (actual)
			resultArray = resultArray.sort(function (a, b) {
				if (a[0] == b[0]) {
					return a[1] - b[1];
				}
				return a[0] - b[0] || isNaN(a[0]) - isNaN(b[0]);
			});

			//remove any previous outputs
			$("#SortedList").remove();

			//add new sorted output to bottom of page
			var newDiv = document.createElement("div");
			newDiv.id = "SortedList";
			for (var i = 0; i < resultArray.length; i++) {
				var liClone = document.getElementById("Sorter" + resultArray[i][1]).cloneNode(true);
				newDiv.appendChild(liClone);
			}
			document.getElementsByClassName("pb-3")[0].after(newDiv);

			//if all "None Available" or "Invalid Dates" then refresh page
			if (
				(reloadOnNone && newDiv.firstChild.getElementsByClassName("text-muted")[0].innerText === "None Available")
				|| (reloadOnInvalidDates && !anyValidDates)
			) {
				setTimeout(() => {
					location.reload();
				}, 5000);
			}
		}, 500);
	}
	//Auto click combo box after 700ms
	setTimeout(() => {
		dropClick.click();
	}, 700);
}