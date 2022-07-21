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
generateBtn.addEventListener("click", writePassword);

// generating the password using the conditions
function generatePassword() {

// setting the password length with validation
  var string_length = Number(prompt("What would be your password length? The length must be between 8 and 128 characters."));
    if (string_length < 8) {
      return "Password lengh must be between 8 and 128 characters.";
    } else if (string_length > 128) {
      return "Password lengh must be between 8 and 128 characters.";
    }

// defining the variables for the character sets
  var chars = ''; //= "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var specialChars = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  
  
  //lowercase check
  var lowerCaseIn = confirm("Do you want to include lowercase characters?");
  if (lowerCaseIn == 1) {
    chars = chars + lowerCase;
  }

  //Uppercase check
  var upperCaseIn = confirm("Do you want to include UPPERCASE characters?")
  if (upperCaseIn == 1) {
    chars = chars + upperCase;
  }

  //numeric check
  var numericIn = confirm("Do you want to include numbers?")
  if (numericIn == 1) {
    chars = chars + numeric;
  }

  //Sepcial character check
  var specialCharsIn = confirm("Do you want to include speical characters?");
  if (specialCharsIn == 1) {
    chars = chars + specialChars;
  } else {
    chars = chars;
  }
  
  var randomstring = '';
  for (var i=0; i<string_length; i++) {
      var rnum = Math.floor(Math.random() * chars.length);
      randomstring += chars.substring(rnum,rnum+1);
  }
  return randomstring;
}

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
