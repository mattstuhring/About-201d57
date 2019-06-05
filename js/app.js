'use strict';

// Introduction message to the user
alert('Welcome to a guessing game about me.  Hi my name is Matt.  I have provided some yes or no questions in hopes that you get to know me better.  Let\'s get started!');

// user question - Seattle?
var aboutSeattle = prompt('Am I a native Seattlite?').toLowerCase();

// log user response to the console
console.log('aboutSeattle: ', aboutSeattle);

if (aboutSeattle === 'yes' || aboutSeattle === 'y') {
  alert('Correct!  I would call Kirkland my hometown which is located on the eastside of Lake Washington.');
} else if (aboutSeattle === 'no' || aboutSeattle === 'n') {
  alert('Incorrect.  It is becoming rare to me a true Seattlite.');
} else {
  alert('Remember to answer with a yes or no.');
}

// user question - Soccer?
var aboutSport = prompt('Do I play soccer?').toLowerCase();

// log user response to the console
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

// log user response to the console
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

// log user response to the console
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

// log user response to the console
console.log('aboutTattoo: ', aboutTattoo);

if (aboutTattoo === 'yes' || aboutTattoo === 'y') {
  alert('Correct!  I got a collection of tattoos started but I always need more.');
} else if (aboutTattoo === 'no' || aboutTattoo === 'n') {
  alert('Incorrect.  To your surprise I actually have many tatoos.');
} else {
  alert('Remember to answer with a yes or no.');
}
