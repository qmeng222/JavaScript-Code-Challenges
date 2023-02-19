/*
TOPIC: reguar expression literal & ternary operator

pw requirements:
1. at least one lowercase letter
2. at least one uppercase letter
3. at least one digit
4. at least one special char
5. at least eight chars long
*/

function checkPw(pw) {
  let hasLowercase = /(?=.+[a-z])/;
  let hasUppercase = /(?=.+[A-Z])/;
  let hasOneDigit = /(?=.+[0-9])/;
  let hasOneSpecialChar = /(?=.+[!@#$%^&*])/;
  let hasMinLen = /(?=.{8,})/; // no upper bound
  let isValid =
    hasLowercase.test(pw) &&
    hasUppercase.test(pw) &&
    hasOneDigit.test(pw) &&
    hasOneSpecialChar.test(pw) &&
    hasMinLen.test(pw);

  return isValid ? "Your password is valid." : "Your password is invalid.";
}

console.log(checkPw("abc123")); // invalid
console.log(checkPw("9Ab!45&67")); // valid
