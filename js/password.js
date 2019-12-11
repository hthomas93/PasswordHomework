var pwLength = prompt("How long would you like for the password to be? Enter a number from 8 to 128.")
var specChar = confirm("Would you like special characters?");
var specCharSet = ["!", "#", "$", " % ", " & ", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", ",", "^", ",", "_", "`", "{", "|", "}", "~"]
var numChar = confirm("Would you like numeric characters?");
var numCharSet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var lwrChar = confirm("Would you like lowercase characters?");
var lwrCharSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uprChar = confirm("Would you like uppercase characters?");
var uprCharSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var password = "";

// random number pw generator

// for (i = 0; i <= (pwLength - 1); i++) {
//     num = Math.floor(Math.random() * 10) + 1;
//     password = password + String(num);
// }

// random specChar generator
// for (i = 0; i <= (pwLength - 1); i++) {
//     specCharVal = Math.floor(Math.random() * 31) + 1;
//     password = password + specCharSet[specCharVal];
// }

// // random lwrChar generator
// for (i = 0; i <= (pwLength - 1); i++) {
//     lwrCharVal = Math.floor(Math.random() * 25) + 1;
//     password = password + lwrCharSet[lwrCharVal];
// }

// random uprChar generator
for (i = 0; i <= (pwLength - 1); i++) {
    uprCharVal = Math.floor(Math.random() * 25) + 1;
    password = password + uprCharSet[uprCharVal];
}

console.log(password);

