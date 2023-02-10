/*
TOPIC: destructuring
const nums = [1, 2, 3]

const [n1] = nums
console.log(n1) // 1

const [n1, n2] = nums
console.log(n1, n2) // 1 2

const [n1, n2, n3] = nums
console.log(n1, n2, n3) // 1 2 3

const [n1, , n3] = nums
console.log(n1, n3) // 1 3

const [n1, ...n2] = nums
console.log(n1, n2) // 1  [ 2, 3 ]
*/

function getStudents(classroom) {
  let { hasTA, classList } = classroom;
  let teacher, TA, student;

  if (hasTA) {
    [teacher, TA, ...students] = classList;
  } else {
    [teacher, ...students] = classList;
  }

  return students;
}

// console.log(
//   getStudents({
//     hasTA: false,
//     classList: ["Tan", "Meng", "Zen", "Trin", "Juan"],
//   })
// );
// // ["Meng", "Zen", "Trin", "Juan"];

console.log(
  getStudents({
    hasTA: true,
    classList: ["Tan", "Meng", "Zen", "Trin", "Juan"],
  })
);
// ["Zen", "Trin", "Juan"];
