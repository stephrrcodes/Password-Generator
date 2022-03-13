// Assignment code here

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialChars = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".",];

var LowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var UppercaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    //define the function 
  var password = generatePassword(); {
  var passwordLength = prompt("How long would you like your password to be?");
  if (passwordLength < 8 || passwordLength > 128) {
      alert("Password must be no less than 8 characters and no more than 128 characters. Please try again.")
  }

  var numbers = confirm("Click OK to include numbers");

  var specialChars = confirm("Click OK to include special characters");

  var LowercaseChars = confirm("Click OK to include lower case characters");

  var UppercaseChars = confirm("Click OK to include upper case characters");

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);