// Assignment code here
//arrays of characters
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialChars = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".",];

var LowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var UppercaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var allChars = numbers + specialChars + LowercaseChars + UppercaseChars;

 //define the function 
 var password = generatePassword(); {
    var passwordLength = prompt("How many characters would you like your password to be?");
    if (passwordLength < 8 || passwordLength > 128) {
        window.alert("Password must more than 8 characters and less than 128 characters. Please try again.");
        return generatePassword ();
        console.log (generatePassword)

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
    // random function generator
    function selectRandChar(array) {
      var randomIndex = Math.floor(Math.random() * array.length);
      return array[randomIndex];
    }
    //arrays
    var result = []
    var possibleCharacters = []
    var guaranteedCharacters = []


    if (options.numbers){
        (possiblePasswordChars.numbers);
        .push ( selectRandChar (possibleCharacters));

        )

    }
    if (options.specialChars){
        (possiblePasswordChars.specialChars)
    }
    if (options.LowercaseChars){
        (possiblePasswordChars.LowercaseChars)
    }
    if (options.UppercaseChars){
        (possiblePasswordChars.UppercaseChars)
    }
   
  }
  
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);