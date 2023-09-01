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
console.log("ffnew", ffnew);
// let ff = myData.filter((item) => item.mobile);

const removed = ffnew.filter((item) => item !== undefined);

// console.log(ffnew.filter((item) => item !== undefined));

let empArr = [];

let arr1 = [100, 2, 43, 83];

empArr = [...arr1, ...arr1];

const totalArrItems = arr1.reduce((a, b) => a + b);

// console.log("item net", totalArrItems);

// Sorting - Ascending order

// const sortedAs = arr1.sort((a, b) => a - b);

const sortedDes = arr1.sort((a, b) => b - a);

// console.log('as',sortedAs);
// console.log('des',sortedDes);

// console.log("empArr", empArr);

// Task

// 01. arr = ['sdfd', 'tr', '23'] -- insert "hi" on secend positin

// 02. friends = ["don", "srk", "salman"] -- check if srk is present if present "I am SrK"

// 03. arr = [12323, 2343, 974394, 34343, 23434] find the greatest and smallest element

// Object Destructuring

let demoObj = {
  name: "Khushboo",
  address: "Haryna",
  mbl: "9877787",
  friends: ["fff", "ewre", "sdfd"],
};

const { name, address, mbl } = demoObj;

function getName(args) {
  // console.log(args);
  return args;
}

// getName(name);

// console.log(getName(name));

// console.log(name);
// console.log(address);

// console.log(demoObj.name);
// console.log(demoObj.address);

// String Replace

let hello = "Hi i am mr hacker, helo i am a good hacker...";

// const replaced = hello.replace(/HAcker/i, "software developer"); // incase sensitive

const replaced = hello.replace(/hacker/g, "software developer"); // global sensitive

console.log("=> ", replaced);

// String -- Concat

let newArrStr = hello.split(" ");
console.log(newArrStr);

// console.log(hello[0]);

let demoArr = [12, 3423, 12, 12, 343, 343];

// demoArr.map((item) => item);

const dataMapped = demoArr.map((item, index, arr) => {
  console.log(item);
  return item;
});

// Filter

const filteredItem = demoArr.filter((x, y, z) => x == 12);

// console.log(filteredItem);
// console.log(dataMapped);

// Reduce is used to total the values

const netTotalArr = demoArr.reduce((a, b) => {
  console.log(a);
  return a + b;
});
console.log("netTotalArr", netTotalArr);
