// Assignment code here
//arrays of possible characters
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialChars = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".",];

var LowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var UppercaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var allChars = numbers + specialChars + LowercaseChars + UppercaseChars;

 //define the function 
function generatePassword() {
    var passwordLength = parseInt(prompt("How many characters would you like your password to be?"));
    if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        alert("Password must more than 8 characters and less than 128 characters. Please try again."); return null
    }
      //confirms windows
    var numbers = confirm("Click OK to include numbers");
  
    var specialChars = confirm("Click OK to include special characters");
  
    var LowercaseChars = confirm("Click OK to include lower case characters");
  
    var UppercaseChars = confirm("Click OK to include upper case characters");
  
    //object
    var options = {
      passwordLength: passwordLength,
      numbers: numbers,
      specialChars: specialChars,
      LowercaseChars: LowercaseChars,
      UppercaseChars: UppercaseChars,
    };
    return options;
}
    // random generator for array
    function selectRandChar(array) {
      var randomIndex = Math.floor(Math.random() * array.length);
      return array[randomIndex];
    }
    //store created password
    var result = []
    //array holds possible characters
    var possibleChars = []

    if (options.numbers){
        (possibleChars.concat(numbers));
        result.push(selectRandChar(numbers));
    }
    if (options.specialChars){
        (possibleChars.concat(specialChars));
        result.push(selectRandChar(specialChars));
    }
    if (options.LowercaseChars){
        (possibleChars.concat(LowercaseChars));
        result.push(selectRandChar(LowercaseChars));
    }
    if (options.UppercaseChars){
        (possibleChars.concat(UppercaseChars));
        result.push(selectRandChar(UppercaseChars));
    }

    //for loop
    for (var i = 0; i < options.passwordLength; i++) {
        result.push(selectRandChar(possibleChars));
      }
      return result.join("");
   
  }
  
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);