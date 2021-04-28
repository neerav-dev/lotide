
const assertEqual = function(actual, expected) {
  console.log(actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

let eqLength = function(array1, array2) {
  return array1.length === array2.length;
};

let isEmpty = function(array) {
  return Array.isArray(array) && (array.length === 0);
};

let eqArrays = function(array1, array2) {
  let equals = false;
  
  equals = (isEmpty(array1) && isEmpty(array2))  && true;

  if (eqLength(array1, array2)) {
    for (let i = 0; i < array1.length; i++) {
      equals = array1[i] === array2[i];
    }
  }
  return equals;
};

// FUNCTION IMPLEMENTATION
const eqKeys = function(object1, object2) {
  return Object.keys(object1).length === Object.keys(object2).length ? true : false;
};

const eqObjects = function(object1, object2) {
  if (eqKeys(object1, object2)) {
    for (const key1 in object1) {
      if (object1[key1] !== object2[key1]) {
        if (Array.isArray(object1[key1]) && Array.isArray(object2[key1])) {
          return eqArrays(object1[key1], object2[key1]);
        }
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc),true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);