const chai = require('chai');
const assertEqual = require('./assertEqual');
const assert = chai.assert;


assert.equal(assertEqual("Lighthouse Labs", "Bootcamp"));
assertEqual(1, 1);
assertEqual("wth", "wth");

assertEqual(2,2)