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