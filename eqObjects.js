const eqArrays = require('./eqArrays');
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

module.exports = eqObjects;