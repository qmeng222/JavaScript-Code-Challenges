/*
TOPIC:
1. asynchronous function & make API requsts

2. function declaration:
    function greet() { ... }
    async function greet() { ... }

3. function expression:
    const greet = function() { ... }
    const greet = async() => { ... }
--------------------------------------------------------------------------
Response.json():
• Used to extract the data from the response of a HTTP request. It is commonly used when making requests to RESTful APIs that return data in JSON format
• json() method convert JSON data into JavaScript object
--------------------------------------------------------------------------
JSON data vs. JS object:
JSON data and JavaScript objects are similar in many ways, but there are a few key differences between them:
1. Syntax:
   - JSON is a string format, and can be used in any programming language; - JavaScript objects can only be used in JavaScript
2. Data Types:
   - JSON supports strings, numbers, booleans, null, and arrays and objects made up of these types
   - JavaScript supports a wider range of data types, including functions, dates, and regular expressions
3. Properties:
   - in JSON, property names must be STRINGS enclosed in double quotes.
   - JS object properties can have any (spaces, special characters, ...)
4. Methods:
   - JSON data does not have methods
   - JS objects have methods that we can call directly
--------------------------------------------------------------------------
JavaScript object --> JSON data (string):

const person = {
  name: "John Doe",
  age: 30,
  city: "New York"
};

const json = JSON.stringify(person);
console.log(json);
*/

async function getUsers() {
  let people = await fetch("https://randomuser.me/api/?results=5"); // JSON data
  let data = await people.json(); // JavaScript object
  const timeline = document.querySelector("#timeline");
  data.results.forEach((person) => {
    let image = document.createElement("img");
    image.src = person.picture.medium;
    timeline.appendChild(image);
  });
}

getUsers(); // five friends profile photos
