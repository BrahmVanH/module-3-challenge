// Assignment Code

// Create use input objects
var enter;
var confirmSpecial;
var confirmUpper;
var confirmLower;
var confirmNumber;

// Create arrays for password characters

charSpecial = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

charLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

charNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

space = [];

var choices;

var toUpper = function(x) {
  return x.toUpperCase();
}
// used to generate uppercase letters 
charUpper = charLower.map(toUpper);


var generateBtn = document.querySelector("#generate");

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
})

// Write password to the #password input
function writePassword () {
  enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
// used to confirm user engagement

  if (!enter) {
    alert("You must enter a value!");
  } else if (enter < 8 || enter > 128) {
    enter = parseInt(prompt("You must select a value between 8 and 128"));
  }

}
