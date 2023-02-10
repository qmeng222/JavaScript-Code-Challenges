/*
TOPIC: closures
• JavaScript variables can belong to the local or global scope
• global variables can be made local (private) with closures
• closure gives you access to an outer function's scope from an inner function
• in JavaScript, closures are created every time a function is created


// Solution 1:
function makeBodyBlue() {
  document.body.style.background = "#0f62fe"; // blue
}

function makeBodyPink() {
  document.body.style.background = "#ff7eb6"; // pink
}

function makeBodyGreen() {
  document.body.style.background = "#42be65"; // green
}

// click a specific button to change bg to that specific color:
document.querySelector("#blue").addEventListener("click", makeBodyBlue);
document.querySelector("#pink").addEventListener("click", makeBodyPink);
document.querySelector("#green").addEventListener("click", makeBodyGreen);


// Solution 2: refactor solution for scalabilty
function changeColor(color) {
  document.body.style.background = color;
}

document
  .querySelector("#blue")
  .addEventListener("click", () => changeColor("#0f62fe"));

document
  .querySelector("#pink")
  .addEventListener("click", () => changeColor("#ff7eb6"));

document
  .querySelector("#green")
  .addEventListener("click", () => changeColor("#42be65"));
*/

// Solution 3:
function changeColor(color) {
  return function () {
    document.body.style.bakcground = color;
  };
}

const makeBgBlue = changeColor("#0f62fe");
document.querySelector("#Blue").addEventListener("click", makeBgBlue);
