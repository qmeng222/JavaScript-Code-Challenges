/*
eg:
"My blog name!" => "my-blog-name"
"Emma's blog" => "emmas-blog"
*/

function urlify(blogTitle) {
  // // method 1 - remove punctuation using the replace function:
  // blogTitle.repalce(toReplace, replaceWith);
  // // method 2 - regular expression (regex):
  // const punctuation = /regex/;
  // // method 3 - create regex using the constructor function:
  // const punctuation = new RegExp("regex");
  // method 4 - create regex using the literal notation:
  const punctuations = /[.,:;!?'"`'^#$%@&+\-*/\_()[\]{}]/g;
  // here, the [] have been escaped with a backslash to ensure that they are interpreted as literal characters to be matched in the regular expression

  const blogTitleWithoutPunctuation = blogTitle.replace(punctuations, "");
  // removes whitespace from both sides of the string & replace all whitespaces with hyphens:
  return blogTitleWithoutPunctuation.toLowerCase().trim().replaceAll(" ", "-");
}

console.log(urlify("How I got into programming!!!"));
console.log(urlify("I've got a new job :)"));
console.log(urlify("I've got a [new] job :)"));
