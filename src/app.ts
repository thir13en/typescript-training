const _ = require('lodash');
import add from './add';


const fruits = ['orange', 'strawberry', 'banana'];
const number1 = 5;
const number2 = 2.7;
const first = _.first(fruits);
console.log(first);

const result = add(number1, number2);
console.log(result);
