// Day 6 - date 04/09/2023

// Callback function
let arr = ["Krishna", "Khusboo", "sanjit "];

const myName = (myname) => {
  console.log("my name", myname);
  //   arr.map((item, index) => {
  //     console.log(item);
  //     // return item;
  //   });
};

// console.log(myName());

const final = (cb) => {
  cb("sanjit");
  setTimeout(() => {
    console.log("test...");
  }, [1000]);
};

// final(myName);

const simpleCalculator = (cbFn, cb2) => {
  const result = cbFn(10, 20);
  const result2 = cb2(2, 5);
  console.log("sum => ", result);
  console.log("Prodocut=> ", result2);
};

const sumFun = (num1, num2) => num1 + num2;
const product = (num1, num2) => num1 * num2;
simpleCalculator(sumFun, product);

// JavaScript Promise

const myPromise = new Promise((resolve, reject) => {
  let loading = true;

  if (loading) {
    resolve(arr);
  } else {
    reject("failed");
  }
});

// myPromise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const myFriend = async () => {
  let text = "test!!!";
  return text;
};

const print = async () => {
  try {
    const result = await myFriend();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
  console.log("called");
};

// print();

// Ternary operator

let isLoading = false;
let arrived = "ok";
// if (isLoading) {
//   console.log("loading...");
// } else {
//   console.log("..finished..");
// }

isLoading ? console.log("loding..") : console.log("not loading");
