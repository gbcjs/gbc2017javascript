"use strict";

function calculateGrades() {
	// Take input from 0 to 100
	// 0 - 49 F
	// 50 - 59 D
	// 60 - 69 C
	// 70 - 79 B
	// 80 - 100 A

	var gradeA = document.getElementById('gradeA').value;
	var gradeB = document.getElementById('gradeB').value;
	var gradeC = document.getElementById('gradeC').value;
	var gradeD = document.getElementById('gradeD').value;

	var grades = [gradeA, gradeB, gradeC, gradeD];
	//				0		1       2        3
	//				49       50      70
	var output = "";
	for (var i = 0; i <= grades.length - 1; i++) {
		var current = grades[i]; //49
		if (current <= 49) {
			output = output + ("Grade for Class " + (i+1) + " is F" + "<br>");
		} else if (current >= 50 && current <= 59) {
			output = output + ("Grade for Class " + (i+1) + " is D" + "<br>");
		} else if (current >= 60 && current <= 69) {
			output = output + ("Grade for Class " + (i+1) + " is C" + "<br>");
		} else if (current >= 70 && current <= 79) {
			output = output + ("Grade for Class " + (i+1) + " is B" + "<br>");			
		} else if (current >= 80 && current <= 100) {
			output = output + ("Grade for Class " + (i+1) + " is A" + "<br>");			
		} else {
			output = output + ("Grade for Class" + (i+1) + " was not between 0 to 100");
		}
	}

	document.getElementById('output').innerHTML = output;

	
}