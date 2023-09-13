// 6. Write a JavaScript function that hides email addresses to prevent unauthorized access.

// console.log(protect_email("robin_singh@example.com"));
// "robin...@example.com"

const protect_email = (input) => {
  let splitted = input.split("@");
  let avgLength = splitted[0].length / 2;

  let slicedString = splitted[0].slice(0, Math.floor(avgLength));

  return slicedString + "...@" + splitted[1];
};

// protect_email("robin_singh@example.com");
// console.log(protect_email("sanjitlungeli12323@gmail.com"));

// 8. Write a JavaScript function to capitalize the first letter of a string.
// Test Data :
// console.log(capitalize('js string exercises'));
// "Js string exercises"

const capitalizeLetter = (input) => {
  let splittedText = input.split(" ");
  // console.log(splittedText);
  let firstLetter = splittedText.map(
    (item) => `${item.charAt(0).toUpperCase()}${item.slice(1)}`
  );
  // console.log(firstLetter.toString().replace(/,/g, " "));
  return firstLetter.toString().replace(/,/g, " ");
};
//   capitalizeLetter("i am mr indian hacker...");

//   console.log(capitalizeLetter("i am mr indian hacker..."));

// 10. Write a JavaScript function that takes a string with both lowercase and upper case letters as a parameter. It converts upper case letters to lower case, and lower case letters to upper case.
// Test Data :
// console.log(swapcase('AaBbc'));
// "aAbBC"

// regular expression

// 7398704987

// sanjit2343@gmail.com
// sdfsfs@yahoo.xyz

// let testCheck = new RegExp('[abc]');
let testCheck = /[^xyz]/g;

let numberCheck = /[0-9]/g;

// const numCheck = new RegExp('[0-9]');

// console.log(testCheck.test('xyz'));
// console.log(numberCheck.test('hhh'));
// console.log(numCheck.test("00"));

const abCheck = new RegExp("(a|b)");

// console.log(abCheck.test("afbc"));

const isLetter = new RegExp("^[a-zA-Z0-9]+$");

console.log(isLetter.test("Sanjit23"));
