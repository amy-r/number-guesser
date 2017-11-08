
var userNumberObject = document.querySelector('.user-input');
var userNumber = parseInt(userNumberObject.value);
var minValue = 0;
var maxValue = 20;
var adviceLine = document.querySelector('.advice');
var clearButton = document.querySelector('.clear');
var submitClick = document.querySelector('.submit');
var guess = document.querySelector('.guess');
var resetButton = document.querySelector('.reset-button');

// Enable clear button when input is entered//
clearButton.disabled = true;
userNumberObject.addEventListener('keydown', function() {
  clearButton.disabled = !clearButton.disabled
});


// Make reset button clear the page //
resetButton.addEventListener('click', function() {
  location.reload(true)
});


// Enable reset button when input is entered //
resetButton.disabled = true;
userNumberObject.addEventListener('keydown', function() {
  resetButton.disabled = !resetButton.disabled
});    

// Random number generator //
function randomNumberGenerator() {
  randomNumber = parseInt(Math.round(Math.random() * (maxValue - minValue) + minValue));
}

// Declaring functions that will be used when the user number is compared to the random number
function tooSmall() {
  adviceLine.innerText = "That is too low" 
}
function tooBig() {
  adviceLine.innerText = "That is too high"
}
function muchTooSmall() {
  adviceLine.innerText = "Hey now, that's outside the box. Guess between " + minValue + " and " + maxValue;
}
function muchTooBig() {
  adviceLine.innerText = "Hey now, that's outside the box. Guess between " + minValue + " and" + maxValue;
}
function notANumber() {
  adviceLine.innerText = "That is not a number!"
}
function justRight() {
  adviceLine.innerText = "BOOM!";
  var newMinValue = (minValue - 10);
  var newMaxValue = (maxValue + 10);
  randomNumberGenerator(newMinValue,newMaxValue);
  document.querySelector('.min-value').value = newMinValue; 
  document.querySelector('.max-value').value = newMaxValue;
}

//Calls random generator function
randomNumberGenerator();

//Runs function userGuess when the button is clicked
submitClick.addEventListener('click', userGuess); 

//Function that compares the user's guess to the random number and runs a particular function based on that comparison 
function userGuess() {
  event.preventDefault();
  guess.innerText = userNumberObject.value;
  var userNumber = parseInt(userNumberObject.value);
  
    if (isNaN(userNumber)) {
      notANumber();
      }
      else if (userNumber < minValue) {
      muchTooSmall();
      } 
      else if (userNumber > maxValue) {
        muchTooBig ();
      } 
      else if (userNumber < randomNumber && userNumber >= minValue) {
        tooSmall();
      } 
      else if (userNumber > randomNumber && userNumber <= maxValue) {
        tooBig();
      } 
      else if (userNumber === randomNumber) {
        justRight();
    }
   userNumberObject.value = "";
   userNumberObject.focus();
};

// Target Submit Button
var valueSubmitButton = document.querySelector('.submit-values');

// Create an event listener on the submit button that runs a funciton of reassigning the min and max values
valueSubmitButton.addEventListener('click', function(event) {
  event.preventDefault();
   minValue = parseInt(document.querySelector('.min-value').value);
   maxValue = parseInt(document.querySelector('.max-value').value);
   randomNumberGenerator(minValue, maxValue);
   console.log(minValue, maxValue, randomNumber)

});











