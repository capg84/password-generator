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

//Validation for at least one character set is selected
  if (lowerCaseIn == 0 && upperCaseIn == 0 && numericIn ==0 && specialCharsIn == 0) {
    return "At least one type of character must be selected. Please try again.";
  }
  
  var randomstring = '';
  for (var i=0; i<string_length; i++) {
      var rnum = Math.floor(Math.random() * chars.length);
      randomstring += chars.substring(rnum,rnum+1);
  }
  return randomstring;
}
