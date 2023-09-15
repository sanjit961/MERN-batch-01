// Q1. How to remove duplicate elements from JavaScript Array ?

let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

const removeDuplicate = (arr) => {
  let output = arr.filter((item, index) => arr.indexOf(item) === index);
  return output;
};

// console.log(removeDuplicate(arr));

// Q14. How do you check if an element exists in an array?

const checkElement = (input) => {
  //   let found = arr.filter((item) => item == input);
  let found = arr.indexOf(input);

  //   console.log(found);

  if (found == -1) {
    return "element does not exist";
  } else {
    return "Element found!";
  }
  //   return arr.map((item) => item == input);
};

// console.log(checkElement("mango"));

let demo = {
  myName: "Khusboo Sharma",
  myAge: 40,
  myParents: {
    fName: "Test Father",
    lName: "Test Mother",
  },
  myFunc: function () {
    return "test function";
  },
};

// console.log(demo.myAge);
// delete demo["myParents"]["fName"];
// let testOutput = demo["myFunc"];
// console.log(demo["myFunc"]());

// console.log(testOutput());
let arrDe = [];
let objLength;
for (const key in demo) {
  //   console.log(key);
  arrDe.push(key);
  //   console.log(arrDe.length);
  objLength = arrDe.length;
}
// console.log(objLength)

// Write a JavaScript program to display the reading status (i.e. display book name,
// author name and reading status) of the following books.
var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

let display = library.map((item, index) => {
  return {
    Title: item.title,
    Author: item.author,
    readingStatus: item.readingStatus,
  };
});

// console.log(display)

// 6. Write a JavaScript program that returns a subset of a string.
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]
let dog = "dog";
let splitDog = dog.split("");
console.log(splitDog)

