'use strict';

// Array Demo

/*
  Arrays store their values at an index
  An index is a number that starts at 0 and increases by one for every new item in the array
  The first item ALWAYS starts at 0

  We access items in an array with bracket notation
  ex. array[2];
  I would say this access the array at <position || index> 2
*/

var emptyArray = [];
var quizAnswers = ['a', 'b', 'c', 'd', 'e'];
var arrayOfThings = ['string', {}, ['thing'], console.log, undefined, null, 0, 2, true, false];

console.log('10th thing in the array: ', arrayOfThings[9]);
console.log('9th index in the array: ', arrayOfThings[9]);

console.log(quizAnswers);
console.log(quizAnswers[2] === 'c');
console.log(quizAnswers);
quizAnswers[2] = 'z';
console.log(quizAnswers);

// console.log(arrayOfThings);


