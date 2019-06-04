'use strict';

// user question - Color?
var aboutColor = prompt('Is your favorite color #201d57?');

aboutColor = aboutColor.toLowerCase();
console.log('aboutColor: ', aboutColor);

if (aboutColor === 'yes' || aboutColor === 'y') {
  alert('I just learned something new about you!');
} else if (aboutColor === 'no' || aboutColor === 'n') {
  alert('Yeah me too, not really my style.  I like the color #98ffcc.');
} else {
  alert('Maybe you made a mistake.  Next time answer with a Yes or No.');
}


// user question - Soccer?
var aboutSport = prompt('Do you like soccer?');

aboutSport = aboutSport.toLowerCase();
console.log('aboutSport: ', aboutSport);

if (aboutSport === 'yes' || aboutSport === 'y') {
  alert('Dang me too!  We should kick the ball around sometime.');
} else if (aboutSport === 'no' || aboutSport === 'n') {
  alert('Yeah I get it.  It is not everyone\'s sport.');
} else {
  alert('Not cool!  I would be cooler if you at least tried!  Next time please answer with a Yes or No.');
}

// user question - Australia?
var aboutLocation = prompt('Have you ever been to Australia?');

aboutLocation = aboutLocation.toLowerCase();
console.log('aboutLocation: ', aboutLocation);

if (aboutLocation === 'yes' || aboutLocation === 'y') {
  alert('Good day mate!  Australia is an epic place.  I got to hold a koala when I was there.');
} else if (aboutLocation === 'no' || aboutLocation === 'n') {
  alert('You should definitely go.  Long flight but well worth it.');
} else {
  alert('You should know the drill already.  I know you will do better next round.');
}

// user question - Code?
var aboutCode = prompt('Do you like to code with JavaScript?');

aboutCode = aboutCode.toLowerCase();
console.log('aboutCode: ', aboutCode);

if (aboutCode === 'yes' || aboutCode === 'y') {
  alert('That is the correct answer!  Here is a cookie.');
} else if (aboutCode === 'no' || aboutCode === 'n') {
  alert('Well we got the next couple of weeks to change that opinion.');
} else {
  alert('Dude I would really like a Yes or No next time.  All good though.');
}

// user question - Tattoo?
var aboutTattoo = prompt('Would you ever get a tattoo?');

aboutTattoo = aboutTattoo.toLowerCase();
console.log('aboutTattoo: ', aboutTattoo);

if (aboutTattoo === 'yes' || aboutTattoo === 'y') {
  alert('Nice!  I got a collection of tattoos started but I always need more.');
} else if (aboutTattoo === 'no' || aboutTattoo === 'n') {
  alert('Yeah tattoos are a big decision.  They are definitely not for everyone.');
} else {
  alert('Dude. . . Seriously all you got to do is answer with a Yes or No.');
}
