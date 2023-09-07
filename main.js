let button = document.getElementById("button1");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let input4 = document.getElementById("input4");
let input5 = document.getElementById("input5");
let total = 0;

button.addEventListener("click", calculate);

function calculate() {
  // Inputs
  let mark1 = +input1.value;
  let mark2 = +input2.value;
  let mark3 = +input3.value;
  let mark4 = +input4.value;
  let mark5 = +input5.value;

  // Calculate Average
  let total = (mark1 + mark2 + mark3 + mark4 + mark5) / 5;

  // Output the Final Grade & Letter Grades
  document.getElementById(
    "finalmark"
  ).innerHTML = `YOUR MARK : ${total} % ${getLetterGrade(total)}`;

  document.getElementById("letter1").innerHTML = getLetterGrade(mark1);
  document.getElementById("letter2").innerHTML = getLetterGrade(mark2);
  document.getElementById("letter3").innerHTML = getLetterGrade(mark3);
  document.getElementById("letter4").innerHTML = getLetterGrade(mark4);
  document.getElementById("letter5").innerHTML = getLetterGrade(mark5);
}

function getLetterGrade(grade) {
  if (grade >= 90) {
    return "A";
  } else if (grade >= 75) {
    return "B";
  } else if (grade >= 60) {
    return "C";
  } else if (grade >= 50) {
    return "D";
  } else {
    return "F";
  }
}
