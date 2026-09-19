function calculateResult() {
    const name = document.getElementById("studentName").value.trim();

    const mark1 = Number(document.getElementById("mark1").value);
    const mark2 = Number(document.getElementById("mark2").value);
    const mark3 = Number(document.getElementById("mark3").value);
    const mark4 = Number(document.getElementById("mark4").value);
    const mark5 = Number(document.getElementById("mark5").value);

    if (name === "") {
        alert("Please enter student name.");
        return;
    }

    const marks = [mark1, mark2, mark3, mark4, mark5];

    if (marks.some(mark => isNaN(mark) || mark < 0 || mark > 100)) {
        alert("Please enter valid marks between 0 and 100.");
        return;
    }

    const total = mark1 + mark2 + mark3 + mark4 + mark5;
    const percentage = total / 5;

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

    const result = marks.every(mark => mark >= 35)
        ? "PASS"
        : "FAIL";

    document.getElementById("resultName").textContent = name;
    document.getElementById("totalMarks").textContent = total;
    document.getElementById("percentage").textContent =
        percentage.toFixed(2) + "%";
    document.getElementById("grade").textContent = grade;
    document.getElementById("resultStatus").textContent = result;

    document.getElementById("resultSection").classList.remove("hidden");

    const statusElement = document.getElementById("resultStatus");

    statusElement.classList.remove("pass", "fail");

    if (result === "PASS") {
        statusElement.classList.add("pass");
    } else {
        statusElement.classList.add("fail");
    }
}

function resetForm() {
    document.getElementById("gradeForm").reset();
    document.getElementById("resultSection").classList.add("hidden");
}
document.getElementById("gradeForm").addEventListener("submit", function(event) {
    event.preventDefault();
    calculateResult();
});
document.addEventListener("DOMContentLoaded", function() {
    const resultSection = document.getElementById("resultSection");

    if (resultSection) {
        resultSection.classList.add("hidden");
    }
});
document.getElementById("resetBtn").addEventListener("click", function() {
    resetForm();
});
const markInputs = document.querySelectorAll(".mark-input");

markInputs.forEach(function(input) {
    input.addEventListener("input", function() {
        if (this.value > 100) {
            this.value = 100;
        }

        if (this.value < 0) {
            this.value = 0;
        }
    });
});
document.querySelectorAll("#gradeForm input").forEach(function(input) {
    input.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            calculateResult();
        }
    });
});
window.addEventListener("load", function() {
    const studentName = document.getElementById("studentName");

    if (studentName) {
        studentName.focus();
    }
});
console.log("Student Grade Calculator loaded successfully!");