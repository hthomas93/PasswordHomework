var pwLength = prompt("How long would you like for the password to be? Enter a number from 8 to 128.")
console.log(pwLength);

var specChar = confirm("Would you like special characters?");
var numChar = confirm("Would you like numeric characters?");
var lwrChar = confirm("Would you like lowercase characters?");
var uprChar = confirm("Would you like uppercase characters?");


var specCharSet = ["!#$%&'()*+,-./:;<=>?@\][^_`{|}~"];
var numCharSet = ["1234567890"];
var lwrCharSet = ["abcdefghijklmnopqrstuvwxyz"]
var uprCharSet = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]


var password = "";
// userChoices is a boolean array of the prompt responses
var userChoices = [specChar, numChar, lwrChar, uprChar];
// charChoices is a collection of strings representing different characters the user can select for the password
var charChoices = [specCharSet, numCharSet, lwrCharSet, uprCharSet];
var pwChoices = "";

// this function prevents the user from entering incorrect criteria for the pw
function userPrompt() {
    if (pwLength < 8 || pwLength > 128) {
        alert("Please enter a number between 8 and 128.")
        window.location.href = "index.html";
    }
    if (specChar === false && numChar === false && lwrChar === false && uprChar === false) {
        alert("Please at least one criteria for the password.")
        window.location.href = "index.html";
    }
}
userPrompt();

//then choose randomly from those character sets
//then fill the password array with those characters

function findPwChoices() {
    if (specChar === true) {
        pwChoices = pwChoices + specCharSet;
    }
    if (lwrChar === true) {
        pwChoices = pwChoices + lwrCharSet;
    }
    if (uprChar === true) {
        pwChoices = pwChoices + uprCharSet;
    }
    if (numChar === true) {
        pwChoices = pwChoices + numCharSet;
    }
    return pwChoices;
}
findPwChoices();


// this function fills the password array
function pwFill(arr1, arr2) {
    // this goes counts up to the pwLength until it reaches the desired number
    for (i = 0; i <= (arr2 - 1); i++) {
        // the password character is a random number between 1 and the pwChoices array
        pwChar = Math.floor(Math.random() * (pwChoices.length - 1));
        // password is updated with the character in pwChoices' index that has pwChar's value
        password = password + pwChoices.charAt(pwChar);
    }
    console.log(password);
    console.log(password.length);
    return password;
}

pwFill(pwChoices, pwLength);








