const username = Symbol("username");
const password = Symbol("password");

// 1:
// const user = {
//   username: "zen",
//   password: "123456",
//   age: 32,
// };

// console.log(user.username, user.password); // "zen"  "123456"

// 2. use defined symbols as the object keys:
const user = {
  [username]: "zen",
  [password]: "123456",
  age: 32,
};

console.log(user.username, user.password); // undefined  undefined

/*
symbol:
• symbols are useful for creating private variables
• unique identifiers, just like other primitives (Number, String, Boolean)
• can be created using the factory function Symbol(), the optional string-valued parameter is a descriptive string that is shown when printing the symbol.

primitive: NOT an object, and has no methods or properties.
There are 7 primitive data types:
• string
• number
• bigint
• boolean
• undefined
• null
• symbol
*/
