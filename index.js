const _ = require('lodash');

const numbers = [1, 2, 3, 4, 5];
const doubled = _.map(numbers, (num) => num * 2);
const last = _.last(numbers);

console.log('Doubled numbers:', doubled);
console.log('Last number:', last);
