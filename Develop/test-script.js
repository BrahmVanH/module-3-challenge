var generateBtn = document.querySelector("#generate");

var length = Number(prompt("Enter a password length between 8 and 128")),
charCase = prompt("Enter uppercase or lowercase to select type-case")
charType = prompt("Enter a character type: special or numeric"),
password = generatePassword();
document.getElementById("password").value = password;
//document.getElementById('copy-btn').addEventListener('click', copyPassword);

function generatePassword() {
  var charSets = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numeric: '0123456789',
    special: ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
  };
  var charSet = charSets[charType.toLowerCase()] + charSets[charCase.toLowerCase()]  // || charSets.lowercase;
  var retVal = "";
  for (var i = 0; i < length; i++) {
    retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return retVal;
}


//change "display" element ID to index'd element ID"  ---DONE**

