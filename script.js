  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var symbols = "^!$%&|[](){}:;.,*+-#@<>~";
  var generateBtn = document.querySelector("#generate");
  


function generatePassword() {
  var generatedPassword = "";
  var passwordLength = prompt ("How long do you want your password to be? Enter a number between 8 and 128");
    if (passwordLength < 8 || passwordLength > 128 ){
      alert ("Not enough characters please enter a number between 8 and 128");
      
    return;
      }
  var checkLower = confirm ("Do you want to include lowercase letters?");
  var checkUpper = confirm ("Do you want to include uppercase letters?");
  var checkNumbers = confirm ("Do you want to include numbers?");
  var checkSymbols = confirm ("Do you want to include symbols?");

    if (checkLower === false && checkUpper === false && checkNumbers === false && checkSymbols === false){
      alert ("Need to select at least one other Character type")
    
    return;
    }

  for (let index = 0; index < passwordLength; index++) {
    if (checkLower === true && generatedPassword.length < passwordLength){
      var postion = Math.floor(Math.random() * lowercase.length);
      generatedPassword = generatedPassword+lowercase[postion];
    }
    if (checkUpper === true && generatedPassword.length < passwordLength){
      var postion = Math.floor(Math.random() * uppercase.length);
      generatedPassword = generatedPassword + uppercase[postion];
    }
    if (checkNumbers === true && generatedPassword.length < passwordLength){
      var postion = Math.floor(Math.random() * numbers.length);
      generatedPassword = generatedPassword + numbers[postion];
    }
    if (checkSymbols === true && generatedPassword.length < passwordLength){
      var postion = Math.floor(Math.random() * symbols.length);
      generatedPassword = generatedPassword + symbols[postion];
    }
  }
return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
    if(password !== undefined) {
    passwordText.value = password;
  } else {
    passwordText.value = "";
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

