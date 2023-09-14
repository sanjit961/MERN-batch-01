// 10. Write a JavaScript function that takes a string with both lowercase
// and upper case letters as a parameter. It converts upper case letters to
// lower case, and lower case letters to upper case.
// Test Data :
// console.log(swapcase('AaBbc'));
// "aAbBC"

// sanjit
const swapString = (input) => {
  let swapped = input.replace(/([a-z]+)|([A-Z]+)/g, (match, chr) => {
    return chr ? match.toUpperCase() : match.toLowerCase();
  });
  console.log(swapped);
};

// swapString("SanJit");

// 11. Write a JavaScript function to convert a string into camel case.

// camel-case-the-isOk

// my my name // kebab case

const camelize = (input) => {
  let result = input.replace(/\W+(.)/g, (match, chr) => {
    return chr.toUpperCase();
  });

  return result.charAt(0).toLowerCase() + result.slice(1);
};

console.log(camelize("Test-camel-gere"));

// Task

// 12. Write a JavaScript function to uncommelize a string.
// Test Data :
// console.log(uncamelize('helloWorld'));
// console.log(uncamelize('helloWorld','-'));
// console.log(uncamelize('helloWorld','_'));
// "hello world"
// "hello-world"
// "hello_world"

// 13. Write a JavaScript function to concatenate a given string n times (default is 1).
// Test Data :
// console.log(repeat('Ha!'));
// console.log(repeat('Ha!',2));
// console.log(repeat('Ha!',3));
// "Ha!"
// "Ha!Ha!"
// "Ha!Ha!Ha!"

// sanjit, 5

const repeatString = (input, count) => {
  if (typeof count == "undefined") {
    return (count = 1);
  }
  return count < 1 ? "" : new Array(count + 1).join(input);
};

// console.log(repeatString("sanjit!", 8));

// 14. Write a JavaScript function to insert a string within a string at a particular position (default is 1).
// Test Data :
// console.log(insert('We are doing some exercises.'));
// console.log(insert('We are doing some exercises.','JavaScript '));
// console.log(insert('We are doing some exercises.','JavaScript ',18));

// 15. Write a JavaScript function that format a number in a human-readable
// string with the correct suffix, such as 1st, 2nd, 3rd, etc.

// 101 -> 1st, 2nd, 3rd, 4th,...10th, 11th, 12th, 21st, 22nd, 101st

// 1st, 2nd, 3rd, 4th ... 10th
// 21st, 22nd...
// 11th, 12th, 13th, 14th... 20th

const humanReadableNumber = (input) => {
  if (typeof input == "undefined") return;
  if (input % 100 >= 11 && input % 100 <= 13) return input + "th";
  switch (input % 10) {
    case 1:
      return input + "st";
    case 2:
      return input + "nd";
    case 3:
      return input + "rd";
  }
  return input + "th";
};

// console.log(humanReadableNumber(1001));

// 16. Write a JavaScript function to truncate a string if it is 
// longer than the specified number of characters. Truncated strings will end with a translatable
//  ellipsis sequence ("...") (by default) or specified characters.

// Test Data :
// console.log(text_truncate('We are doing JS string exercises.'))
// console.log(text_truncate('We are doing JS string exercises.',19))
// console.log(text_truncate('We are doing JS string exercises.',15,'!!'))
// "We are doing JS string exercises."
// "We are doing JS ..."
// "We are doing !!"

// 18. Write a JavaScript function to count substrings in a string.
// Test Data :
// console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
// Output : 2
// console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));
// Output : 1

// 20. Write a JavaScript function that can pad (left, right) a string to get to a specific length.
// Test Data :
// console.log(formatted_string('0000',123,'l'));
// console.log(formatted_string('00000000',123,''));
// Output :
// "0123"
// "12300000"