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

//Creates the choices variable to be used later for user-selected criteria

var choices;

var toUpper = function(x) {
  return x.toUpperCase();
}


// used to generate uppercase letters 
charUpper = charLower.map(toUpper);

// Create an objecto out of the Generate button element

var generateBtn = document.querySelector("#generate");

// Add event listener to generate button

generateBtn.addEventListener("click", function() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
});

// Write password to the #password input
function generatePassword () {
  enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
// used to confirm user engagement
  if (!enter) {
   
    alert("You must enter a value!");
  
  } else if (enter < 8 || enter > 128) {
    
    enter = parseInt(prompt("You must select a value between 8 and 128"));
  
  } else {
    confirmSpecial = confirm("Do you want to include special characters?")
    confirmUpper = confirm("Do you want to include uppercase characters?")
    confirmLower = confirm("Do you want to include lowercase characters?")
    confirmNumber = confirm("Do you want to include numbers?")


  }

  //To confirm user selects a criteria of some sort

  if (!confirmSpecial && !confirmUpper && !confirmLower && !confirmNumber) {
      
    parseInt(prompt("You must choose criteria!"));
  
  }

  // If all criteria are selected

  else if (confirmSpecial && confirmUpper && confirmLower && confirmNumber) {

choices = charSpecial.concat(charUpper, charLower, charNumber);

  }

  // Else for three chosen criteria

  else if (confirmSpecial && confirmUpper && confirmLower ) {

    choices = charSpecial.concat(charUpper, charLower);

  }

  else if (confirmSpecial && confirmUpper && confirmNumber) {

    choices = charSpecial.concat(charUpper, charNumber);

  }
  
  else if (confirmSpecial && confirLower && confirmNumber) {

    choices = charSpecial.concat(charLower, charNumber);

  }

  else if (confirmUpper && confirmLower && confirmNumber) {

    choices = charUpper.concat(charLower, charNumber);

  }

  // Else for two chosen criteria

  else if (confirmSpecial && confirmNumber) {

    choices = charSpecial.concat(charNumber);

  }

  else if (confirmSpecial && confirmUpper) {

    choices = charSpecial.concat(charUpper);

  }

  else if (confirmSpecial && confirmLower) {

    choices = charSpecial.concat(charLower);

  }

  else if (confirmUpper && confirmLower) {

    choices = charUpper.concat(charLower);

  }

  else if (confirmUpper && confirmNumber) {

    choices = charUpper.concat(charNumber);

  }

  else if (condirmLower && confirmNumber) {

    choices = charLower.concat(charNumber);

  }

  // Else for one chosen criteria

  else if (confirmSpecial) {

    choices = charSpecial;

  }

  else if (confirmNumber) {

    choices = charNumber;

  }

  else if (charUpper) {

    choices = charUpper;

  }

  else if (charLower) {

    choices = charLower;

  }

  var password = []

  // for-loop to select random items from the array of designated choices

  for ( i = 0; i < enter; i++) {

    var selChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(selChoices);

  }

  // Define ps variable to be used in function to fill password element text

  var ps = password.join("");
    UserInput(ps);
    return ps;
}

function UserInput(ps) {
  document.getElementById("password").textContent = ps;

}





