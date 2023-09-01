// Day 3 -- 29/08/23

// JavaScript Objects

// const myInfo = {
//   myName: "Sanjit Lungeli",
//   pincode: 785601,
//   myFavActor: ["Salman", "Sarukk"],
//   myFunc: function (data) {
//     return this.myName + " " + data;
//   },
// };

// console.log(myInfo.myName);
// console.log(myInfo["myName"]);
// console.log(myInfo.myFavActor);
// console.log(myInfo.myFunc("hey"));

// myInfo.myName = "Krishna";

// myInfo["myName"] = "K Chakraborty";

// console.log(myInfo);

// Strings methods

// const my_name = "my name is krishna..., hyhsf i am krishna...";

// In Js array and string are similar in most cases

// console.log(my_name.length);

// console.log(my_name[0]);

//  const item = my_name.toLocaleUpperCase();
//  const item = my_name.toUpperCase();
//  const item = my_name.toLowerCase();
//  const item = my_name.toUpperCase();

// console.log(item)

// const nwItem = my_name.slice(0, 4);
// console.log(nwItem);

// const newSubs = my_name.substring(0, 4);

// console.log(newSubs);

// const replacedSubstring = my_name.toLocaleUpperCase().replace("KRISHNA", "Sanjit");

// To replace case insensitive, use a regular expression with an /i flag (insensitive):

// const replacedSubstring = my_name.replace(/KRisHna/i, "Sanjit");

//JavaScript String ReplaceAll()

// const replacedSubstringG = my_name.replace(/krishna/g, "Sanjit");
// console.log(replacedSubstringG);
// console.log(my_name);

// JavaScript String concat()

const str1 = "test1,sdfsfs,sdfsfdsf,sfddsf,sdfsfs";
const str2 = "   test lastname   ";
const str3 = "test 3";

const merged = str1.concat(str2, str3);

// console.log(merged);

// String to Array

const converted_arr = str1.split("");

// console.log(converted_arr.length);

// JavaScript String trim() -- remove trailing spaces

const trimmedSentence = str2.trim();
// console.log(trimmedSentence);

// JavaScript String Padding

// user id 100001
// user id 100002
// user id 100003


let text = '1';
// let userId = text.padStart(4, '0')
// let userId = text.padEnd(4, '0')

// console.log(userId)

// Task 1
// create an object with details like firstName, lastName, Mobile, address,
//  friends (array), secretDetails (objects), getMySecret (functions)

// Task 2
// String - paragraph (200 words) - keyword ( 5 times);
// create a function which takes keyword as args 
// countRepeat(keyword) - return x times count 

