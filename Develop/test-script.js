
var generateBtn = document.querySelector("#generate");
document.getElementById("password").value = password;

generateBtn.addEventListener("click", generatePassword() {
  var length = Number(prompt("Enter a password length between 8 and 128"));
  charCase = prompt("Enter uppercase or lowercase");
  charType = prompt("Enter special or numeric to use characters");
  password = generatePassword;}

 
  function generatePassword() {
  var charSets = {
          lowercase: 'abcdefghijklmnopqrstuvwxyz',
          uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
          numeric: '0123456789',
          special: ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
      };
      var charSet = charSets[charType.toLowerCase()] + charSets[charCase.toLowerCase()];
      var retVal = "";
      for (var i = 0; i < length; i++) {
          retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
      }
      return retVal;
  }
)
    



