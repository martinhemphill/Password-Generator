// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercaseRange = ["abcdefghijklmnopqrstuvwxyz"];
var uppercaseRange = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numbersRange = ["1234567890"];
var specialRange = ["!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"];

var passwordResult = "";
var charRange = "";

// User Password Prompts for Condition
var passwordLengthInput = prompt("Length of password between 8 - 128 characters");
var passwordLength = parseInt(passwordLengthInput);
var passwordLowercase = confirm("Do you want lower case characters?");
var passwordUppercase = confirm("Do you want upper case characters?");
var passwordNumbers = confirm("Do you want numbers?");
var passwordSpecial = confirm("Do you want special characters?");

console.log (passwordLength);
console.log (passwordLowercase);
console.log (passwordUppercase);
console.log (passwordNumbers);
console.log (passwordSpecial);



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

  
}