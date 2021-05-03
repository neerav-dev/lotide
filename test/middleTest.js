const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

//Return empty array, if less than 3 elements
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

//Return single element, if odd number of elements
assertArraysEqual(middle([1, 2, 3]) , [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]) , [3]);

//Return two elements, if even number of elements
assertArraysEqual(middle([1, 2, 3, 4]) , [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]) , [3, 4]);