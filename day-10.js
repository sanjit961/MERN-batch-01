// 6. Write a JavaScript program that returns a subset of a string.
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]

const makeSubstring = (input) => {
  const subset = [];

  for (let i = 0; i < input.length; i++) {
    // console.log("i", i);
    // 0

    for (let j = i + 1; j <= input.length; j++) {
      // 1
      let sub = input.slice(i, j);
      //   console.log(sub);
      subset.push(sub);
    }
  }
  //   console.log(subset);
  return subset;
};
// console.log(makeSubstring("dog"));

// Write a JavaScript function to print all the methods in a JavaScript object.

const getAllMethods = (input) => {
  //   console.log(Object.getOwnPropertyNames(input));
  return Object.getOwnPropertyNames(input);
};

// console.log(getAllMethods(Array));

// 11. Write a JavaScript function to parse an URL.

// https://www.google.com:8080/path/to/resource?query=example#secton

const parseUrl = (url) => {
  try {
    const parsedUrl = new URL(url);
    // console.log(parsedUrl);

    // console.log(parsedUrl.host);

    return {
      urlHost: parsedUrl.host,
      urlProcotol: parsedUrl.protocol,
      searchQuery: parsedUrl.search,
    };
  } catch (err) {
    console.log("eer", err);
  }
};

let urlParsedCustom = parseUrl(
  "https://www.google.com:9090/xyx-path/to-value/test-teess?query=sanjit"
);
// parseUrl('')

// console.log(urlParsedCustom);

// 12. Write a JavaScript function to retrieve all the names of an object's own and inherited properties.

let obj = {
  name: "sanjit",
  email: "sanjit@gmail.com",
};

class Student {
  constructor(school) {
    this.school = school;
  }
}

Student.prototype = obj;

const student = new Student("coding school");

// console.log(student);

const getProperty = (obj) => {
  const propertNames = [];
  const ownedProperty = Object.getOwnPropertyNames(obj);
  console.log("ownedProperty", ownedProperty);
};

// getProperty(student);

// Write a JavaScript function to retrieve all the values of an object's properties.

const getAllValues = (obj) => {
  const values = [];
  for (const key in obj) {
    // console.log(obj.name);
    // console.log(obj[key]);
    values.push(obj[key]);
  }
  return values;
};

// console.log(getAllValues(obj));

// Write a JavaScript function to check whether an object contains a given property.

const checkProperty = (input, checkProper) => {
  const properties = Object.getOwnPropertyNames(input);
  console.log(properties);
  console.log(checkProper);
  const found = properties.indexOf(checkProper);
  console.log(found);
  if (found != -1) {
    return "The property " + checkProper + " exists!";
  } else {
    return "The property " + checkProper + " does not exists!";
  }
};

let testt = checkProperty(obj, "name");
console.log(testt)

// Write a JavaScript function to convert an object into a list of `[key, value]` pairs.
// Write a JavaScript function to get a copy of the object where the keys become the values and the values are the keys.