/*
TOPICS:
1. the reduce function: only pass through the array once
2. template literals
*/

function coffeeCalc(coffeeArr) {
  let totalNumCoffees = coffeeArr.reduce((total, elmt) => (total += elmt));
  return `The total bill is $${totalNumCoffees * 3.25}`; // the fist $ sign is a currency symbol
}

console.log(coffeeCalc([2, 5, 7, 1, 4]));
