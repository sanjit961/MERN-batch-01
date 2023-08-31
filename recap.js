// Functions

function mySum(num1, num2, num3) {
  let sum = num1 + num2 + num3;
  return `The sum of: ${num1}, ${num1} and ${num3} is: ${sum}`;
}

let x = mySum(10, 10, 10);
let y = mySum(40, 50, 98);
console.log(x);
console.log(y);

let arr = [];

function addItem(a) {
  arr.push(a);
  return;
}

// console.log(arr);
addItem("Khusboo");
// console.log(arr);

let myName = "Khusboo";

{
  let myName = "Sanjit";
  //   console.log(myName);
}

// console.log(myName);

myName = "Sanjit";

// console.log(myName);

myFriend = "Krishna";

var myFriend;

// hoisting in js
// console.log(myFriend);

var fName = "Sharma";

var fName = "Bugs";

// Array methods

let arrItem = [10, 343, 10, 5435, 2432];

// arrItem.pop();
// arrItem.shift();
// arrItem.shift();

// arrItem.splice(2, 2) // first args position, second -> number of items to delete

// let newArr = arrItem.slice(0, 2); // it does not change the original array

// console.log(arrItem);
// console.log(newArr);

// arrItem.map((item, index, arr) => {
//   console.log(item, index, arr);
// });

// let found = arrItem.filter((item) => item == "10");

// let found = arrItem.find((item) => item == "10");

// console.log(found);

const sumTotal = arrItem.reduce((x, y) => x + y);

console.log(sumTotal);

// Merge -- spread operator

let arr2 = [123, 232, 23432];

let newArrItems = [...arrItem, ...arr2];

// console.log(newArrItems);

// Objects

let myInfo = {
  name: "Sanjit",
  mobile: 9623434,
  friends: ["ff", "dd", "dfd"],
  personalDetails: { name: "kkk" },
};

myInfo.name = "Khusboo";
myInfo.name = "Khusboo1";
// console.log(myInfo);

// console.log(myInfo.mobile);

// console.log(myInfo.personalDetails.name);

// myInfo.friends.map((item) => console.log(item));

let myData = [
  { name: "sdfd", mobile: 98989 },
  { name: "3454" },
  { name: "dfg" },
  { name: "3454" },
];

// console.log(myData[0].mobile);
// console.log(myData.map((item) => item.mobile));

let ffnew = myData.map((item) => {
 return item.mobile;
});

// let ff = myData.filter((item) => item.mobile);

console.log(ffnew.filter((item) => item !== undefined));


// Task

// 01. arr = ['sdfd', 'tr', '23'] -- insert "hi" on secend positin

// 02. friends = ["don", "srk", "salman"] -- check if srk is present if present "I am SrK"

// 03. arr = [12323, 2343, 974394, 34343, 23434] find the greatest and smallest element