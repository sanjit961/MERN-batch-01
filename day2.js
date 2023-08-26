// Day 2 - 26/08/23

// shift - removes the first element

// Unshift - add new element on the beginning of the array

// let fruits = ["Orange", "Mango", "Banana"];
// let veg = ["tata", "iodin"];

// fruits.unshift("tomato");

// console.log(fruits);

// splice - adds new element

// fruits.splice(2, 0, "guava", "potato", "sfsd");

// fruits.splice(2, 1, "guava", "potato", "sfsd"); // deleted the item

// console.log(fruits);

// Delete the elment

// delete fruits[1];
// console.log(fruits);

// Concat() - Merge two or more arrays
// let fruits = ["Orange", "Mango", "Banana"];
// let veg = ["tata", "iodin"];
// let non_veg = ["Mutton", "Chicken"];
// let newItem = fruits.concat(veg, non_veg);

// console.log(newItem);

//Using splice() to Remove Elements

// fruits.splice(0, 1);
// fruits.splice(1, 1);
// fruits.splice(1, 2);

// Sorting an Array - Rearranging element in order

// Sort()
// console.log(fruits.sort());

// Numeric Sort

// const nums = [12, 100, 40, 50, 3, 4];

// Sort in Ascending Order

// const ascendingOrder = nums.sort(function (a, b) {
//   return a - b;
// });
// const sortAscending = nums.sort(function (a, b) {
//   return a - b;
// });

// console.log(ascendingOrder);

// Sort Numbers in Descending Order

// const sortDecending = nums.sort(function (a, b) {
//   return b - a;
// });

// console.log(sortDecending);

// JavaScript Array forEach()

// map and for each is similar
// nums.forEach((item, key) => {
//   console.log(item);
// });

// JavaScript Array filter()

// const nums = [12, 100, 40, 50, 3, 4];

// let filtereditem = nums.filter((item) => item === 100);

// console.log(filtereditem)

// JavaScript Array reduce()
// The reduce() method runs a function on each array element to produce (reduce it to) a single value.

// The reduce() method works from left-to-right in the array. See also reduceRight().

// const total = nums.reduce((a, b) => a + b);

// const sortedArr = nums.sort((a, b) => a - b); // ascending order sorts
// const sortedArrDec = nums.sort((a, b) => b - a); // ascending order sorts

// const net = nums.reduce(function (a, b) {
//   return a + b;
// });
// console.log(sortedArrDec);

// JavaScript Array every()

// const nums = [12, 100, 40, 50, 3, 4];

// const nums = [12, 12, 12, 12, 12, 12];

// const check = nums.every((item) => item == 12);

// console.log(check)

// Some()

// const check = nums.some((item) => item == 12);
// console.log(check)

// Task

// 01. arr = ['sdfd', 'tr', '23'] -- insert "hi" on secend positin

// 02. friends = ["don", "srk", "salman"] -- check if srk is present if present "I am SrK"

// 03. arr = [12323, 2343, 974394, 34343, 23434] find the greatest and smallest element


