var length = Number(prompt("Enter a password length between 8 and 128")),
  charType = prompt("Enter a character type: special, numeric, uppercase, lowercase."),
  password = generatePassword();
document.getElementById("password").value = password;
// document.getElementById('copy-btn').addEventListener('click', copyPassword);

function generatePassword() {
  var charSets = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numeric: '0123456789',
    special: ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
  };
  var charSet = charSets[charType.toLowerCase()] || charSets.lowercase;
  var retVal = "";
  for (var i = 0; i < length; i++) {
    retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return retVal;
}

function copyPassword() {
  document.getElementById("display").select();
  document.execCommand("Copy");
  alert("Password copied to clipboard!");
}


var length = Number(prompt("Enter a password length between 8 and 128"));
   charCase = prompt("Enter uppercase or lowercase");
   charType = prompt("Enter special or numeric to use characters");
   password = generatePassword();
document.getElementById("password").value = password;

function generatePassword() {
    var banana = {
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        numeric: '0123456789',
        special: ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
    };
    var charSet = banana[charType.toLowerCase()] + banana[charCase.toLowerCase()];
    var retVal = "";
    for (var i = 0; i < length; i++) {
        retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
      }
      return retVal;
}




 
 
 
