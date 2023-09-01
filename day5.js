// Day 05 -- 01/09/23

// Some method

let arr = [12, 88, 12, 5, 5, 6, 7, 88, 12, 99];

// let found = arr.some((item) => item == 12); // atleast 1 item

// console.log(found);

// every method

let found = arr.every((item) => item == 12); // all items should be 12

// console.log(found);

// true or false

// indexOf

//console.log(arr.indexOf(12, 1)); // 12 -> value, 1 -> position

// console.log(arr.lastIndexOf(12)); // 12 -> value, 1 -> position

let foundIndex = arr.findIndex((item) => item == 12);
// console.log(foundIndex);

// Find method

const founded = arr.find((item) => item == 5); // returns the first occurence

console.log("founded", founded);

// keys

let arrKey = arr.keys();

console.log("arrKey", arrKey);

for (let x of arrKey) {
  console.log(x);
}

// Spread

let sentence = "i am string.."
let empArrItem = [];

empArrItem = [...arr, ...sentence];

console.log(empArrItem);

