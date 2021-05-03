const assertEqual = require('../assertEqual');
const head = require('../head');
// check with number array
assertEqual(head([5, 6, 7]), 5);
// check with string array
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// check for one element
assertEqual(head(["one"]), "one");
// check empty array
assertEqual(head([]), undefined);