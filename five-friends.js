/*
TOPIC:
1. asynchronous function & make API requsts

2. function declaration:
    function greet() { ... }
    async function greet() { ... }

3. function expression:
    const greet = function() { ... }
    const greet = async() => { ... }
-------------------------------------------
Response.json():
• Used to extract the data from the response of a HTTP request. It is commonly used when making requests to RESTful APIs that return data in JSON format
• json() method convert JSON data into JavaScript object
*/

async function getUsers() {
  let people = await fetch("https://randomuser.me/api/?results=5");
  let data = await people.json();
  const timeline = document.querySelector("#timeline");
  data.results.forEach((person) => {
    let image = document.createElement("img");
    image.src = person.picture.medium;
    timeline.appendChild(image);
  });
}

getUsers(); // five friends profile photos
