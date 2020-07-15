// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercaseRange = ["abcdefghijklmnopqrstuvwxyz"];
var uppercaseRange = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numbersRange = ["1234567890"];
var specialRange = ["!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"];

var passwordResult = "";
var charRange = "";



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add generate password function

function generatePassword() {

  
  // User Password Prompts for Condition
  var passwordLengthInput = prompt("Length of password between 8 - 128 characters");
  var passwordLength = parseInt(passwordLengthInput);
  var passwordLowercase = confirm("Do you want lower case characters?");
  var passwordUppercase = confirm("Do you want upper case characters?");
  var passwordNumbers = confirm("Do you want numbers?");
  var passwordSpecial = confirm("Do you want special characters?");

  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("You must enter a valid number between 8 and 128");
    return;
  }

  if (passwordLowercase) {
    charRange += lowercaseRange;
  }

  if (passwordUppercase) {
    charRange += uppercaseRange;
  }

  if (passwordNumbers) {
    charRange += numbersRange;
  }

  if (passwordSpecial) {
    charRange += specialRange;
  }

  else {
    if (charRange < 1) {
      alert("You must choose at least one character set")
    }
  }

  var charSetLength = charRange.length;

  function randomize(length) {
    for (i = 0; i <= length; i++) {
      passwordResult += charRange.charAt(
        Math.floor(Math.random() * charSetLength)
      );
    }
    return passwordResult;
  }

  password = randomize(passwordLengthInput - 1)
  
  return password;

}