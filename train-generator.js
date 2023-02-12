/*
TOPIC: generator functions

- Def:
Generator functions in JavaScript are special functions that can be paused in the middle of execution and resumed later, allowing them to produce a sequence of values over time rather than computing everything at once. They are defined using the function* syntax and use the yield keyword to produce a value each time the function is called.


- Example 1:
function* myGeneratorFunc() {
  yield "value 1"
  yield "value 2"
}

const myGenerator = myGeneratorFunc();
myGenerator.next(); // {value: "value1", done: false}
myGenerator.next(); // {value: "value2", done: false}
myGenerator.next(); // {value: null, done: true}


- Example 2:
function* counter() {
  let i = 0;
  while (i <= 3) {
    yield ++i;
  }
}

// 0 1 2 3

i++ vs. ++i:
• i++ operator is known as the postfix increment operator, it first returns the current value of i, and then increments the value of i by 1:
i = 0;
while (i <= 3) {
  console.log(i++);
}
// 0 1 2 3
• ++i operator would be known as the prefix increment operator, and it would first increment the value of i by 1, and then return the incremented value to the console.log():
i = 0;
while (i <= 3) {
  console.log(++i);
}
// 1 2 3 4

*/

function* getStop() {
  yield "Poughkeepsie";
  yield "Newburgh";
  yield "Peekskill";
  yield "Yonkers";
  yield "Bronx";
  yield "Bronx";
  yield "Grand Central";
}

const nextStopBtn = document.querySelector("#next-stop");
const nycTrainline = getStop();
nextStopBtn.addEventListener("click", () => {
  let currStop = nycTrainline.next();
  if (currStop.done) {
    console.log("We made it!");
    nextStopBtn.setAttribute("disabled", true);
  } else {
    console.log(currStop.value);
  }
});

/*
Poughkeepsie
Newburgh
...
Grand Central
We made it! // and the Next Stop button is disabled
*/
