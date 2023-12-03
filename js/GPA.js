var $ = function (id) {
	return document.getElementById(id);
};

function isValidGrade(grade) {
	const validGrades = ['A', 'B', 'C', 'D', 'F'];
	return validGrades.includes(grade.toUpperCase());
}

function getGradePoint(grade) {
	if (grade) {
		switch (grade.toUpperCase()) {
			case 'A':
				return 4.0;
			case 'B':
				return 3.0;
			case 'C':
				return 2.0;
			case 'D':
				return 1.0;
			case 'F':
				return 0.0;
			default:
				return 0.0;
		}
	}
}

function calculateGpaScore() {
	const creditHours1 = parseInt($('courseHourse1').value);
	const grade1 = $('grade1').value.toUpperCase();

	const creditHours2 = parseInt($('courseHourse2').value);
	const grade2 = $('grade2').value.toUpperCase();

	if (!creditHours1 || !grade1 || !creditHours2 || !grade2) {
		alert('Minimum 2 courses are required to calculate GPA.');
		return;
	}

	if (isNaN(creditHours1) || isNaN(creditHours2) ||
		!isValidGrade(grade1) || !isValidGrade(grade2)) {
		alert('Invalide details. Please varify the data once.');
		return;
	}

	const creditHours3 = parseInt($('courseHourse3').value);
	const grade3 = $('grade3').value.toUpperCase();

	const creditHours4 = parseInt($('courseHourse4').value);
	const grade4 = $('grade4').value.toUpperCase();

	const creditHours5 = parseInt($('courseHourse5').value);
	const grade5 = $('grade5').value.toUpperCase();

	let gpa = (getGradePoint(grade1) * creditHours1 +
		getGradePoint(grade2) * creditHours2) / (creditHours1 + creditHours2);

	if (!isNaN(creditHours3) || isValidGrade(grade3)) {
		gpa = (
			getGradePoint(grade1) * creditHours1 +
			getGradePoint(grade2) * creditHours2 +
			getGradePoint(grade3) * creditHours3
		) / (creditHours1 + creditHours2 + creditHours3);
	}

	if (!isNaN(creditHours4) || isValidGrade(grade4)) {
		gpa = (
			getGradePoint(grade1) * creditHours1 +
			getGradePoint(grade2) * creditHours2 +
			getGradePoint(grade3) * creditHours3 +
			getGradePoint(grade4) * creditHours4
		) / (creditHours1 + creditHours2 + creditHours3 + creditHours4);
	}

	if (!isNaN(creditHours5) || isValidGrade(grade5)) {
		gpa = (
			getGradePoint(grade1) * creditHours1 +
			getGradePoint(grade2) * creditHours2 +
			getGradePoint(grade3) * creditHours3 +
			getGradePoint(grade4) * creditHours4 +
			getGradePoint(grade5) * creditHours5
		) / (creditHours1 + creditHours2 + creditHours3 + creditHours4 + creditHours5)
	}

	$('grade').value = gpa.toFixed(2);
}

function resetFormData() {
	$('courseHourse1').value = "";
	$('courseHourse2').value = "";
	$('courseHourse3').value = "";
	$('courseHourse4').value = "";
	$('courseHourse5').value = "";
	$('grade1').value = null;
	$('grade2').value = null;
	$('grade3').value = null;
	$('grade4').value = null;
	$('grade5').value = null;
	$('grade').value = "";
}