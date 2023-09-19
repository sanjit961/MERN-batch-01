// Call
const animal = {
  petName: "Cat",
  function: () => {
    return "Hi am Mr I am Indian...";
  },
};

const animal2 = {
  petName: "Dog",
};

function getPetName(name) {
  console.log(`Hi I am ${name}, and I am ${this.petName}`);
}

// getPetName(animal, "fox");

getPetName.call(animal2, "deer");

// Apply

const myArr = ["cow", "rat", "mosquito"];

// const myArr2 = [102, 303, 404];

const domesticAnimal = {
  myName: "Krishna",
};

function displayArr(a, b, c) {
  console.log(`${a}, ${b} ${c}, ${this.myName}`);
  console.log(...arguments);
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

displayArr.apply(domesticAnimal, myArr);

// Bind

function sayHello(message) {
  console.log(`${message}, ${this.petName}`);
}

const greet = sayHello.bind(animal);

// greet("Hi");

// greet("Hello");

// async - await

// async function myFunction() {
//   return animal;
// }

// myFunction().then((res) => {
//   console.log("res", res.petName);
// });

async function myFunction() {
  let testData = new Promise((resolve, reject) => {
    if (true) {
      resolve(animal);
    } else {
      reject("something went wrong!");
    }
  });
  return await testData;
}

let res = myFunction()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

function testName(cb, cb2) {
  console.log(cb());
  cb2();
}

function myName2() {
  console.log("this is test...");
}
function myName() {
  return "Snjit";
}
testName(myName, myName2);
