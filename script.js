function calculateGrade() {
    const name = document.getElementById("studentName").value.trim();

    const mark1 = parseFloat(document.getElementById("mark1").value);
    const mark2 = parseFloat(document.getElementById("mark2").value);
    const mark3 = parseFloat(document.getElementById("mark3").value);
    const mark4 = parseFloat(document.getElementById("mark4").value);
    const mark5 = parseFloat(document.getElementById("mark5").value);

    const resultBox = document.getElementById("result");

    if (name === "") {
        alert("Please enter student name.");
        return;
    }

    if (
        isNaN(mark1) ||
        isNaN(mark2) ||
        isNaN(mark3) ||
        isNaN(mark4) ||
        isNaN(mark5)
    ) {
        alert("Please enter all subject marks.");
        return;
    }

    if (
        mark1 < 0 || mark1 > 100 ||
        mark2 < 0 || mark2 > 100 ||
        mark3 < 0 || mark3 > 100 ||
        mark4 < 0 || mark4 > 100 ||
        mark5 < 0 || mark5 > 100
    ) {
        alert("Marks must be between 0 and 100.");
        return;
    }

    const total = mark1 + mark2 + mark3 + mark4 + mark5;
    const percentage = (total / 500) * 100;

    let grade;

    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    let result;

    if (
        mark1 >= 35 &&
        mark2 >= 35 &&
        mark3 >= 35 &&
        mark4 >= 35 &&
        mark5 >= 35
    ) {
        result = "PASS";
    } else {
        result = "FAIL";
    }

    resultBox.style.display = "block";

    resultBox.innerHTML =
        "<h2>Student Result</h2>" +
        "<strong>Student Name:</strong> " + name + "<br>" +
        "<strong>Total Marks:</strong> " + total + " / 500<br>" +
        "<strong>Percentage:</strong> " + percentage.toFixed(2) + "%<br>" +
        "<strong>Grade:</strong> " + grade + "<br>" +
        "<strong>Result:</strong> " + result;
    }
