console.log('lodash');

// _.merge(object, [sources])
console.log('merge');
var object = {
  'a': [{'b': 2}, {'d': 4}]
};

var other = {
  'a': [{'c': 3}, {'e': 5}]
};

_.merge(object, other);
console.log(object); // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }

/* ------------------------------------------ */

// _.union([arrays])
console.log('union');
var result = _.union([2], [1, 2, 3], [2, 3, 4]);
console.log(result);

/* ------------------------------------------ */

// _.zip([arrays])
console.log('zip');
var result = _.zip(['a', 'b'], [1, 2], [true, false]);
console.log(result); // => [['a', 1, true], ['b', 2, false]]

// join
// _.join(array, [separator=','])
console.log('join');
var result = _.join(['a', 'b', 'c'], '~');
console.log(result); // => 'a~b~c'
