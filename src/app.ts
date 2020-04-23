// we can import with require once we have @types/node package
const old_ = require('lodash');

// import custom type definition
const jQuery: jQuery = require('jquery');

// we can install es6 way once wwe have @types/lodash package
import * as _ from 'lodash';


import add from './add';


const fruits = ['orange', 'strawberry', 'banana'];
const number1 = 5;
const number2 = 2.7;
const first = _.first(fruits);
console.log(first);

const result = add(number1, number2);
console.log(result);
