# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by [Dani Spinosa] (https://github.com/danispinxo) as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @danispin/lotide`

**Require it:**

`const _ = require('@danispin/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: returns the first item in an array
* `tail(...)`: returns all but the first item in an array
* `middle(...)`: returns the middle of an array
* `eqArrays(...)`: determines if two arrays are equal
* `assertArraysEqual(...)`: asserts whether or not arrays are equal
* `assertEqual(...)`: asserts if two strings or numbers or booleans are equal
* `eqObjects(...)`: determines if two objects are equal
* `countLetters(...)`: creates an object that contains the number of times each letter appears in a string
* `flatten(...)`: takes an array of nested arrays and returns a single-level array
* `countOnly(...)`: creates an object from an array that counts how many times each item appears in the array
* `letterPositions(...)`: returns the indexes of each appearance of a given letter in a string
* `findKeyByValue(...)`: returns a key from an object when given the key's value