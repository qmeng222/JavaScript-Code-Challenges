/*
TOPIC: callback functions, DOM manipulation

callback function: a function passed into another function as an argument and get called at a later point in time
*/

function clock() {
  const clockNode = document.querySelector("#clock"); // id="clock" in index.html

  // get clock updated every second (1000ms) using setInterval:
  return setInterval(() => {
    let date = new Date();
    let tick = date.toLocaleDateString();
    clockNode.textContent = tick;
  }, 1000);
}

clock(); // 10:27:09, automatically update every sec
