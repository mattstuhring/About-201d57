'use strict';

alert('Welcome to a guessing game about me.  Hi my name is Matt.  I have provided some yes or no questions in hopes that you get to know me better.  Let\'s get started!');

// user question - Color?
var aboutColor = prompt('Am I a native Seattlite?').toLowerCase();

console.log('aboutColor: ', aboutColor);

if (aboutColor === 'yes' || aboutColor === 'y') {
  alert('Correct!  I would call Kirkland my hometown which is located on the eastside of Lake Washington.');
} else if (aboutColor === 'no' || aboutColor === 'n') {
  alert('Incorrect.  It is becoming rare to me a true Seattlite.');
} else {
  alert('Remember to answer with a yes or no.');
}


// user question - Soccer?
var aboutSport = prompt('Do I play soccer?').toLowerCase();

console.log('aboutSport: ', aboutSport);

if (aboutSport === 'yes' || aboutSport === 'y') {
  alert('Correct!  I\'m always down to kick the soccer ball around. . . unless I got some nice kicks on.');
} else if (aboutSport === 'no' || aboutSport === 'n') {
  alert('Incorrect.  I still play every Thursday.');
} else {
  alert('Remember to answer with a yes or no.');
}

// user question - Australia?
var aboutLocation = prompt('Have I been to Australia?').toLowerCase();

console.log('aboutLocation: ', aboutLocation);

if (aboutLocation === 'yes' || aboutLocation === 'y') {
  alert('Correct!  Australia is an epic place.  I got to hold a koala when I was there.');
} else if (aboutLocation === 'no' || aboutLocation === 'n') {
  alert('Incorrect.  The flight is long but so worth it.');
} else {
  alert('Remember to answer with a yes or no.');
}

// user question - Code?
var aboutCode = prompt('Do I have a background in JavaScript?').toLowerCase();

console.log('aboutCode: ', aboutCode);

if (aboutCode === 'yes' || aboutCode === 'y') {
  alert('Correct!  JavaScript is my jam!');
} else if (aboutCode === 'no' || aboutCode === 'n') {
  alert('Incorrect.  I actually went to school at Galvanize in Seattle where I learned JavaScript.');
} else {
  alert('Remember to answer with a yes or no.');
}

// user question - Tattoo?
var aboutTattoo = prompt('Am I the type of person who would have tattoos?').toLowerCase();

console.log('aboutTattoo: ', aboutTattoo);

if (aboutTattoo === 'yes' || aboutTattoo === 'y') {
  alert('Correct!  I got a collection of tattoos started but I always need more.');
} else if (aboutTattoo === 'no' || aboutTattoo === 'n') {
  alert('Incorrect.  To your surprise I actually have many tatoos.');
} else {
  alert('Remember to answer with a yes or no.');
}
