/*
TOPIC: set (to remove duplicated elements)
----------------------------------------------------------
Use the JavaScript Array flat() method to flat an array:
const numbers = [1, 2, [3, [4, 5]]];
const flat1 = numbers.flat();
console.log(flat1); // [ 1, 2, 3, [ 4, 5 ] ]
const flat2 = flat1.flat();
console.log(flat2); // [ 1, 2, 3, 4, 5 ]
----------------------------------------------------------
nums  = [1, 2, 2, 3];
uniq = new Set(nums);
console.log(uniq); // Set(3) { 1, 2, 3 }
*/

function foodTruckFestival(menus) {
  let flatMenus = menus.flat();

  // find unique items:
  // let combinedMenu = new Set(flatMenus);
  let combinedMenu = new Set();
  flatMenus.forEach((item) => combinedMenu.add(item));
}

const menuNode = document.querySelector("#combined-menu");
for (let item of combinedMenu) {
  let foodNode = document.createElement("li");
  foodNode.innerText = item;
  menuNode.appendChild(foodNode);
}

foodTruckFestival([["Tacos", "Burgers"], ["Pizza"], ["Burgers", "Fries"]]);
/*
• Tacos
• Burgers
• Pizza
• Fries
*/
