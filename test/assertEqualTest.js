const assertEqual = require('../assertEqual');

// Comparing identical strings
assertEqual("Code", "Code");
// Comparing non-identical strings
assertEqual("Lighthouse Labs", "Bootcamp");
// Comparing identical numbers
assertEqual(1, 1);
// Comparing non-identical numbers
assertEqual(1, 12);