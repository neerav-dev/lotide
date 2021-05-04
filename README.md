# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@neerav-dev/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: function for arrays is to retrieve the first element from the array.
* `tail(...)`: function for arrays is to retrieve every element except the head (first element) of the array.
* `middle(...)`: function for arrays is to retrieve the middle-most element(s) of the given array.
  * For arrays with one or two elements, there is no middle so will return an empty array.
  * For arrays with odd number of elements, an array containing a single middle element will be returned.
  * For arrays with an even number of elements, an array containing the two elements in the middle will be returned.
* `flatten(...)`: function will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
* `countOnly(...)`: function will be given an array and an object. It will return an object containing counts of everything that the input object listed.
* `letterPositions(...)`: function will return all the indices (zero-based positions) in the string where each character is found.
* `findKeyByValue(...)`: function takes in an object and a value. It will scan the object and return the first key which contains the given value. If no key with that given value is found, then it will return undefined
* `eqObjects(...)`: function will take in two objects and returns true or false, based on a perfect match
* `eqArrays(...)`: function will takes in two arrays and returns true or false, based on a perfect match.
* `without(...)`: function will take an array and will return a subset of a given array, removing unwanted elements.
* `countLetters(...)`:function will take in a sentence (as a string) and then return a count of each of the letters in that sentence.
* `map(...)`: function take in two arguments, an array and a callback function will return a new array based on the results of the callback function.
* `takeUntil(...)`:function will take in two arguments, an array and a callback function, and will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.
* `findKey(...)`: function will takes in an object and a callback. It will scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.