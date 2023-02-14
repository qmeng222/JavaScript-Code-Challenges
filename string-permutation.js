/*
TOPIC: recursion (break a complex problem down into smaller sub-problems that can be easily solved)

abc, acb, bac, bca, cab, cba --> 3 x 2 x 1 = 6

function numPermutations(word) {
  let total;
  for (let i = 1; i <= word.length; i++) {
    if (total === undefined) {
      total = i;
      continue;
    }
    total *= i;
  }
  return total;
}
*/

function numPermutations(word) {
  // base case to avoid a stack overflow error:
  if (word.length === 1) {
    return 1;
  }
  return (word.length *= numPermutations(word.slice(1)));
}

console.log(numPermutations("hello"));
