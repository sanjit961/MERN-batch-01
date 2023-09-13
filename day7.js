// 1. Write a JavaScript function to check whether an 'input' is a string or not.

// Call, Apply, Bind

const checkString = (input) => {
  //   let testString = Object.prototype.toString.call(input);
  //   console.log(testString);
  if (Object.prototype.toString.call(input) === "[object String]") {
    return true;
  } else {
    return false;
  }
};

// const isString = checkString({name:"sdf"});
// const isString = checkString("sdf");

// console.log(isString);

// 2. Write a JavaScript function to check whether a string is blank or not.

const isBlankString = (input) => {
  if (input.length === 0) {
    return true;
  } else {
    return false;
  }
};

const testIsBlank = isBlankString("");

// console.log(testIsBlank);

// 3. Write a JavaScript function to split a string and convert it into an array of words.

let string = "My Name is Khusboo Sharma";

const splittedString = (input) => {
  return input.split(" ");
};

// console.log(splittedString(string));

// 4. Write a JavaScript function to extract a specified number of characters from a string.

let myString = "Sanjit Lungeli";

function extraction(string, numberOfCharacter) {
  let excracted = string.slice(0, numberOfCharacter);
  //   console.log(excracted);
  return excracted;
}

// let resultExtracted = extraction(myString, 4);
// console.log(resultExtracted);

// 5. Write a JavaScript function to convert a string into abbreviated form.

let myName = "Khusboo Sharma";

function abbreviatedName(input) {
  let splittedName = input.split(" ");
//   console.log(splittedName);
//   console.log(splittedName[0]);
//   console.log(splittedName[1].slice(0, 1));
  return `${splittedName[0]} ${splittedName[1].slice(0, 1)}.`

}

// let shortName = abbreviatedName(myName);

// console.log(abbreviatedName(myName));







