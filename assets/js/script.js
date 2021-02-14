// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(passwordText.value);
  passwordText.value = password;
  console.log(passwordText.value);
}
// VAR section
let lowercaseEL = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let uppercaseEL = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numbersEL = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let symbolsEL = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "~", "?", "<", ">", "/"];
let rayRay = [];
let randomPassword = "";


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword() {
  randomPassword = ""; // generated password is cleared on every new button click

  // Yes or no parameters
  let passwordLength = prompt("Please enter the number of characters you would like your password to be (Value must be between 8 and 128)");
  if (!passwordLength || passwordLength <= 7 || passwordLength >= 129) {
    return alert("Invalid Response. Please try again."); // incorrect responses not accepted
  }
  let uselowercaseEL = confirm("Would you like to include lowercase letters in your password?");
  if (uselowercaseEL === true) {
    rayRay = rayRay.concat(lowercaseEL);
  }

  let useuppercaseEL = confirm("Would you like to include uppercase letters in your password?");
  if (useuppercaseEL === true) {
    rayRay = rayRay.concat(uppercaseEL);
  }

  let usenumbersEL = confirm("Would you like to include numbers in your password?");
  if (usenumbersEL === true) {
    rayRay = rayRay.concat(numbersEL);
  }

  let usesymbolsEL = confirm("Would you like to include symbols in your password?");
  if (usesymbolsEL === true) {
    rayRay = rayRay.concat(symbolsEL);
  }
// Yes or no random combination
  for (let i = 0; i < passwordLength; i++) {
    randomPassword += rayRay[Math.floor(Math.random() * (rayRay.length))];
  }

  return randomPassword;

}