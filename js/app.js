'use strict';

// Global variables
var userCorrectAnswers = 0;
var numberOfQuestions = 0;
var userName = '';

// Message - Introduction message to the user
alert('Do you want to play a guessing game?  Too bad this is happening.  Hi my name is Matt.  I have provided some yes or no questions in hopes that you get to know me better.  Let\'s get started!');

// Save the users first name
userName = prompt('Cool!  First things first what is your first name?');

// If user hits cancel set default name to 'User'
if (userName === null) {
  userName = 'User';
}

// Message - Thank the user
alert('Nice to meet you ' + userName + '!');

// ---------------------------------------------------------------------------
// User Question - Seattle?
// ---------------------------------------------------------------------------

var aboutSeattleFunc = function(){

  // Save the user's response
  var aboutSeattle = prompt('Am I a native Seattlite?').toLowerCase();

  // Insert user response into the DOM
  document.querySelector('section.section-games li.seattle li:nth-child(1)').innerHTML = 'Response: ' + aboutSeattle;

  // Increment number of questions
  numberOfQuestions++;

  // log user response to the console for debugging
  console.log('aboutSeattle: ', aboutSeattle);

  if (aboutSeattle === 'yes' || aboutSeattle === 'y') {
    alert('Correct!  I would call Kirkland my hometown which is located on the eastside of Lake Washington.');
    userCorrectAnswers++; // increment correct answer
  } else if (aboutSeattle === 'no' || aboutSeattle === 'n') {
    alert('Incorrect.  It is becoming rare to me a true Seattlite.');
  } else {
    alert('Remember to answer with a yes or no.');
  }
};

// ---------------------------------------------------------------------------
// User Question - Soccer?
// ---------------------------------------------------------------------------

var aboutSportFunc = function(){
  // Save the user's response
  var aboutSport = prompt('Do I play soccer?').toLowerCase();

  // Insert user response into the DOM
  document.querySelector('section.section-games li.soccer li:nth-child(1)').innerHTML = 'Response: ' + aboutSport;

  // Increment number of questions
  numberOfQuestions++;

  // log user response to the console for debugging
  console.log('aboutSport: ', aboutSport);

  if (aboutSport === 'yes' || aboutSport === 'y') {
    alert('Correct!  I\'m always down to kick the soccer ball around. . . unless I got some nice kicks on.');
    userCorrectAnswers++; // increment correct answer

  } else if (aboutSport === 'no' || aboutSport === 'n') {
    alert('Incorrect.  I still play every Thursday.');

  } else {
    alert('Remember to answer with a yes or no.');
  }
};

// ---------------------------------------------------------------------------
// User Question - Australia?
// ----------------------------------------------------------------------------
var aboutLocationFunc = function(){
  // Save the user's response
  var aboutLocation = prompt('Have I been to Australia?').toLowerCase();

  // Insert user response into the DOM
  document.querySelector('section.section-games li.australia li:nth-child(1)').innerHTML = 'Response: ' + aboutLocation;

  // Increment number of questions
  numberOfQuestions++;

  // log user response to the console for debugging
  console.log('aboutLocation: ', aboutLocation);

  if (aboutLocation === 'yes' || aboutLocation === 'y') {
    alert('Correct!  Australia is an epic place.  I got to hold a koala when I was there.');
    userCorrectAnswers++;// increment correct answer

  } else if (aboutLocation === 'no' || aboutLocation === 'n') {
    alert('Incorrect.  The flight is long but so worth it.');

  } else {
    alert('Remember to answer with a yes or no.');
  }
};


// ---------------------------------------------------------------------------
// User Question - Code?
// ---------------------------------------------------------------------------
var aboutCodeFunc = function(){
  // Save the user's response
  var aboutCode = prompt('Do I have a background in JavaScript?').toLowerCase();

  // Insert user response into the DOM
  document.querySelector('section.section-games li.javascript li:nth-child(1)').innerHTML = 'Response: ' + aboutCode;

  // Increment number of questions
  numberOfQuestions++;

  // log user response to the console for debugging
  console.log('aboutCode: ', aboutCode);

  if (aboutCode === 'yes' || aboutCode === 'y') {
    alert('Correct!  JavaScript is my jam!');
    userCorrectAnswers++; // increment correct answer

  } else if (aboutCode === 'no' || aboutCode === 'n') {
    alert('Incorrect.  I actually went to school at Galvanize in Seattle where I learned JavaScript.');

  } else {
    alert('Remember to answer with a yes or no.');
  }
};

// ---------------------------------------------------------------------------
// User Question - Tattoo?
// ---------------------------------------------------------------------------
var aboutTattooFunc = function(){
  // Save the user's response
  var aboutTattoo = prompt('Am I the type of person who would have tattoos?').toLowerCase();

  // Insert user response into the DOM
  document.querySelector('section.section-games li.tattoos li:nth-child(1)').innerHTML = 'Response: ' + aboutTattoo;

  // Increment number of questions
  numberOfQuestions++;

  // log user response to the console for debugging
  console.log('aboutTattoo: ', aboutTattoo);

  if (aboutTattoo === 'yes' || aboutTattoo === 'y') {
    alert('Correct!  I got a collection of tattoos started but I always need more.');
    userCorrectAnswers++; // increment correct answer

  } else if (aboutTattoo === 'no' || aboutTattoo === 'n') {
    alert('Incorrect.  To your surprise I actually have many tatoos.');

  } else {
    alert('Remember to answer with a yes or no.');
  }
};

// ---------------------------------------------------------------------------
// User Question - I am think of a number between 1 & 10.  What number is it?
// ---------------------------------------------------------------------------
var numberOfQuestionsFunc = function(){
  // Message - new game!
  alert('It\'s time to play a new game.  This game involves you guessing the number that I am thinking of.  I will give you 4 attempts.');

  // Increment number of questions
  numberOfQuestions++;

  // Setup variables
  var numberAttempts = 4;
  var randomNumber = Math.floor(Math.random() * 10) + 1; // create random number between 1 & 10
  var userNumberGuessArray = [];

  // log random number to the console for debugging
  console.log('randomNumber: ', randomNumber);

  do {
    // if the user has no attempts left - break!
    if (numberAttempts === 0) {
      alert('Sorry you have run out of attempts.  Better luck next time.');
      break;
    }

    // Message - what number?
    var userNumberGuess = prompt('I\'m thinking of a number between 1 & 10.  What number is it?');

    // parse string into number
    userNumberGuess = parseInt(userNumberGuess);
    console.log('userNumberGuess: ', userNumberGuess); // log random number to console for debugging

    // Add number to array to display in the DOM
    userNumberGuessArray.push(userNumberGuess);

    // if user does NOT guess the correct number
    if (userNumberGuess !== randomNumber) {

      // Decrement the number of attemtps left
      numberAttempts--;

      // Check if number is too high or too low
      if (userNumberGuess > randomNumber) {
        alert('Too high!  You have ' + numberAttempts + ' attempt(s) left.');
      } else {
        alert('Too low!.  You have ' + numberAttempts + ' attempt(s) left.');
      }

    } else {
      alert('You are correct!  I was thinking of the number ' + randomNumber + '.  Nice work!');
      userCorrectAnswers++; // increment user's correct answers
      break;
    }

  } while (numberAttempts >= 0);

  // Insert user response into the DOM
  document.querySelector('section.section-games li.numbers li:nth-child(1)').innerHTML = 'Response: ' + userNumberGuessArray.join(', ');
  document.querySelector('section.section-games li.numbers li:nth-child(2)').innerHTML = 'Answer: ' + randomNumber;
};

// ----------------------------------------------------------------------------------------
// User Question - What coding languages have I worked with prior to starting CodeFellows?
// ----------------------------------------------------------------------------------------
var myCodingLanguagesFunc = function(){
  // Message - new game!
  alert('Here is a game that has multiple correct answers.  Try and guess them all.  This time you will get 6 chances and please enter 1 answer at a time.');

  // Increment number of questions
  numberOfQuestions++;

  // Setup languages
  var myCodingLanguages = ['html', 'css', 'javascript'];
  var codingLanguages = ['SQL', 'HTML', 'CSS', 'Java', 'Python', 'JavaScript', 'C#', 'C++', 'PHP'];
  var userCorrectLanguageAnswers = 0;
  var userLanguagesGuessArray = [];

  // Begin the 7 user attempts
  for (var i = 6; i >= 0; i--) {

    // if the user has answered 3 then they are correct
    if (userCorrectLanguageAnswers === 3) {
      userCorrectAnswers++;
      alert('Wow you got 3 correct!  Well done!');
      break;
    }

    // if there are zero attempts - break!
    if (i === 0) {
      alert('Sorry you have 0 attempts left.  Better luck next time.');
      break;
    }

    // Save the user response
    var userLanguageGuess = prompt('What coding languages have I worked with prior to starting CodeFellows?  Choose from: ' + codingLanguages.join(', ') + '.  You have ' + i + ' attempts left.').toLowerCase();

    // Add user guess to array for displaying to the DOM
    userLanguagesGuessArray.push(userLanguageGuess);

    // log the user's guess to the console for debugging
    console.log('userLanguageGuess ' + i + ': ' + userLanguageGuess);

    // iterate through my coding languages and verify if there is a match
    for (var j = 0; j < myCodingLanguages.length; j++) {
      var myLowerCaseLanguage = myCodingLanguages[j].toLowerCase();

      // if there is a match!
      if (myLowerCaseLanguage === userLanguageGuess) {
        userCorrectLanguageAnswers++; // increment user's correct language answers

        myCodingLanguages.splice(j, 1); // remove that element from myCodingLanguages array
        alert('Nice work!  I have previous experience working with ' + userLanguageGuess + '.');

        // EXTRA - remove coding language from the available choices provided to the user
        for (var k = 0; k < codingLanguages.length; k++) {
          var lowerCaseLanguage = codingLanguages[k].toLowerCase();

          if (lowerCaseLanguage === myLowerCaseLanguage) {
            codingLanguages.splice(k, 1);
            break;
          }
        }

        break;
      }

      // if at the end of the array and NO match then there is no match
      if (j === myCodingLanguages.length - 1) {
        alert('Incorrect.  Let\'s try again.');
      }
    }
  }

  // Insert user response into the DOM
  document.querySelector('section.section-games li.languages li:nth-child(1)').innerHTML = 'Response: ' + userLanguagesGuessArray.join(', ');
};

//Call all question function
aboutSeattleFunc();
aboutSportFunc();
aboutLocationFunc();
aboutCodeFunc();
aboutTattooFunc();
numberOfQuestionsFunc();
myCodingLanguagesFunc();

// ---------------------------------------------------------------------------
// Display the user's final score
// ---------------------------------------------------------------------------

// Personalized message
var userMessageScore = 'You got ' + userCorrectAnswers + ' out of ' + numberOfQuestions + ' questions correct.  Nice work ' + userName + '!';

// Insert user response into the DOM
document.querySelector('section.section-score p').innerHTML = userMessageScore;

// Message - display personalized score
alert(userMessageScore);
