// Assignment Code
var generateBtn = document.querySelector("#generate");


console.log (passwordLength);
console.log (passwordLowercase);
console.log (passwordUppercase);
console.log (passwordSpecial);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  // User Password Prompts for Condition
  var passwordLength = prompt("Length of password between 8 - 128 characters");
  var passwordLowercase = confirm("Do you want lower case characters?");
  var passwordUppercase = confirm("Do you want upper case characters?");
  var passwordSpecial = confirm("Do you want special characters?");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add generate password function

function generatePassword() {
  var newpassword = 1234567;
  alert(newpassword);
  


  
}