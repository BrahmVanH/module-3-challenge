// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());


var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordLength = 12;
var password = "";
for (var i = 0; i < passwordLength; i++) {
var randomNumner = Math.floor(Math.random() * chars.length);
password += chars.substring(randomNumber, randomNumber +1)

// characters:  !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~

//references for window prompts 
//var options = ["R", "P", "S"];

//var playGame = function() {
  // Ask user for their choice
 // var userChoice = window.prompt("Enter R, P, or S:");

  // If user pressed Cancel, immediately end function
  //if (!userChoice) {
   // return;
  //}

  // Convert to uppercase to make comparisons easier
  //userChoice = userChoice.toUpperCase();

  // Get random index from array of options
 // var index = Math.floor(Math.random() * options.length);
  //var computerChoice = options[index];

 // window.alert("The computer chose " + computerChoice);