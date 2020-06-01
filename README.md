# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ahladun/lotide`

**Require it:**

`const _ = require('@ahladun/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(val1, val2)` : Checks two non-array values and returns true if they are identical, or false if they are not. 
* `assertObjectsEqual(obj1, obj2)` : Compares two objects to see if they are identical. Supports 1 level of array nesting within the object. Supports unlimited nested objects. 
* `countLetters(str)` : Returns an object with a list and number of occurences fo characters in the supplied str. 
* `countOnly(arr, elem)`: Returns a count of how many times the element appears in the array. 
* `eqArrays(arr1, arr2)` : Compares two arrays, returns true if they are identical. Supports unlimited nesting of arrays. 
* `findKey(obj, cb())` : Given an object and callback function, finds the first key for which that value occurs. E.g. ```findKey(obj, x => x.stars === 2)```.
* `findKeyByValue(obj, valueStr)` : Given an object and value, finds the first key for which that value occurs. No callback function necessary. 
* `flatten(arr)` : Removes 1 level of nesting from the given array. 
* `head(arr)` : Returns the first item in an array.
* `letterPositions(str)` : Given a string, returns an object with the position(s) of each letter in the string. 
* `map(arr, cb)` : Given an array, returns a new array which meets the conditions of the supplied callback function. 
* `middle(arr)` : Returns the middle element(s) of an array. If array size < 2, returns an empty array. 
* `tail(arr)` : Removes first element and returns the rest of the array.
* `takeUntil(arr, cb)`: Given an array, returns a new array with all elements (from left to right) until the callback function criteria is met. 
* `without(arr1, arr2)`: Returns a new array where values of array 2 are not present in array 1. 