// Day 4
// Date 30/08/23

// => install node
// https://nodejs.org/dist/v20.5.1/node-v20.5.1-x64.msi

const data = {};

data.firstName = "Sanjit";
data.lastName = "Lungeli";
data.firstName = "Krishna";
data.lastName = "Chakraboty";

// console.log(data);

// Array like objects

const myData = [
  { firstName: "sanjit", lastName: "lungeli", mobile: 979786868 },
  { firstName: "krishna", lastName: "chakarbir", mobile: 879786868 },
  { firstName: "shivam", lastName: "thapa", mobile: 679786868 },
  { firstName: "ranjit", lastName: "lsdfdungeli", mobile: 579786868 },
  { firstName: "shivam", lastName: "xxdslungeli", mobile: 49979786868 },
];

// console.log(myData.length);
// console.log(myData[0]);

// let dataLength = myData.length - 1;

// console.log(myData[dataLength]);

// find shivam and print his/her info

// const found = myData.find((item) => item.firstName === "shivam");

// const found = myData.filter(
//   (item) => item.firstName === "shivam" && item.lastName === "thapa"
// );
// console.log(found);

// for (let i = 0; i < myData.length; i++) {
//   console.log(myData[i].mobile);
// }

// myData.map((item, key) =>{
//     console.log(item.mobile);
// })
// myData.map((item, key) => console.log(item.mobile));

// Number methods

let num = 5;
// let num2 = '599.6565';
// let num2 = 'xyz';
// The toString() Method
// console.log(num.toString());

// let num2 = 55.9945353;

// console.log(parseInt(num2));
// console.log(parseFloat(num2));

// console.log(num2.toFixed(3));
// console.log(Number(num2));

// merge array - Spread operator

const arr1 = ["sdfds", "vbvb", "sdfdf"];
const arr2 = ["454", "5656", "7878"];
const arr3 = ["454", "5656", "7878"];

// const newArr = [...arr1, ...arr2, ...arr3];

// console.log(newArr);
// console.log(...arr1);

// Object destructuring

let myDetails = {
  fName: "Krishna",
  lName: "chakraborty",
  mobile: 97979797,
  data1: [123, 4343, 3434],
};

const { fName, lName, mobile, data1 } = myDetails;

// console.log(myDetails.fName)
console.log(fName);
console.log(lName);
console.log(data1);

{
  /**

Q1. How to remove duplicate elements from JavaScript Array ?

let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

Q2. How to get the highest and lowest number from an array in JavaScript?

// number array
const numberArr = [23, 122, 1, 23, 4, 56];

Q3. Define a function called cleanNames that accepts an array of strings containing additional 
space characters at the beginning and end. The cleanNames() function should use the array map 
method to return a new array full of trimmed names. For example:

cleanNames([" avengers", "   captain_america", "ironman   ", " black panther   "]) 

should give ["avengers", "captain_america", "ironman", "black panther"]

Q4. Write a function that converts an array of values from miles to kilometres using the map method. 
In the end, add the kilometres up in a new variable called "totalDistanceInKilometers" and return this variable.


Q5. Square and sum the array elements using the arrow function and then find the average of the array.

Q6. Create a new array using the map function whose each element is equal to the original element plus 4.

Q7. From the array of numbers, choose even double even numbers and compute the sum using Array's filter, map and reduce methods.

Q8. Create a new array whose elements is in uppercase of words present in the original array.

Q10. Consider the following array:

const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

Write JavaScript statements that will produce the following output:

["exuberant", destruction", "present"]

Q11. Starting with an array containing the numbers 1 through 10, use filter, map, and reduce to produce the following. 
Use console.log to display the results.

An array of odd numbers.
An array of numbers divisible by 2 or 5.
An array of numbers divisible by 3 and then squared those numbers.
The sum of the following: square the numbers divisible by 5.

Q12. Consider the following array:

let nums = [11, 22, 33, 46, 75, 86, 97, 98];

Use filter then map functions to filter even numbers then square them. 
Assign the result to a variable named squaredEvenNums and display it. The output should be:

squaredEvenNums: [484, 2116, 7396, 9604]
Use the reduce function to calculate the sum of nums array. The output should be:

Sum of array elements: 468

Q13. Write a function Myfunc that takes in an array of numbers and multiply each of the elements by 2.

Q14. How do you check if an element exists in an array?

Q15. How do you remove an element from an array at a specific index?

Q16: Write a function to flatten a nested array in JavaScript.

Q17: Can you explain how the flat() method can be used to flatten an array in JavaScript?

Q18: What is the difference between .map() and .forEach()?

Q19: How do you remove an element from an array in JavaScript?

Q20: What is the difference between .filter() and .find()?

Q21: How do you sort an array in JavaScript?

Q22: How do you flatten a nested array in JavaScript?


*/
}

{/*

1. Write a JavaScript program to list the properties of a JavaScript object.
Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
Sample Output: name,sclass,rollno


2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };


3. Write a JavaScript program to get the length of a JavaScript object.
Sample object :
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };


4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];


5. Write a JavaScript program to get the volume of a cylindrical with four decimal places using object classes.
Volume of a cylinder : V = πr2h
where r is the radius and h is the height of the cylinder.

6. Write a JavaScript program that returns a subset of a string.
Sample Data: dog
Expected Output: ["d", "do", "dog", "o", "og", "g"]


7. Write a JavaScript program to create a clock.
Note: The output will come every second.
Expected Console Output :
"14:37:42"
"14:37:43"
"14:37:44"
"14:37:45"
"14:37:46"
"14:37:47"


8. Write a JavaScript program to calculate circle area and perimeter.
Note : Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.


9. Write a JavaScript program to sort an array of JavaScript objects.
Sample Object :

var library = [ 
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];
Expected Output:

[[object Object] {
  author: "Walter Isaacson",
  libraryID: 4264,
  title: "Steve Jobs"
}, [object Object] {
  author: "Suzanne Collins",
  libraryID: 3245,
  title: "Mockingjay: The Final Book of The Hunger Games"
}, [object Object] {
  author: "The Road Ahead",
  libraryID: 1254,
  title: "Bill Gates"
}]


10. Write a JavaScript function to print all the methods in a JavaScript object.
Test Data :
console.log(all_properties(Array));
["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"]


11. Write a JavaScript function to parse an URL.


12. Write a JavaScript function to retrieve all the names of an object's own and inherited properties.


13. Write a JavaScript function to retrieve all the values of an object's properties.


14. Write a JavaScript function to convert an object into a list of `[key, value]` pairs.


15. Write a JavaScript function to get a copy of the object where the keys become the values and the values are the keys.


16. Write a JavaScript function to check whether an object contains a given property.
*/}