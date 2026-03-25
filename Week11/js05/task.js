// INDIVIDUAL TASK
// ==================
// 1. Create an initials generator program

// - Ask for full name
// - Output initials

// Example:
// Andrew Solex → A.S

let fullName = prompt("Enter your full name e.g 'Andrew Solex'");

let firstInitial = fullName[0];
let index = fullName.indexOf(" ") + 1;
let secondInitial = fullName[index];
console.log(`${firstInitial}.${secondInitial}`);


// 2. Create a word position finder

// - Ask for a sentence
// - Ask for a letter
// - Show the position of that letter


let sentence = prompt("Enter a sentence e.g 'I am a boy'");
let word = prompt("Enter a letter or word  e.g 'k', 'key'");
let position = sentence.indexOf(word);
console.log(`The word you entered is at position ${position}!`);

// 3. Build a username generator

// - Ask for:
// -> First name
// -> Last name

// - Create a username like:
// andrewsolex_11

// (11 = total number of characters in first name and last name)

let firstName = prompt("Enter your first name e.g 'John'").toLowerCase();
let lastName = prompt("Enter your last name e.g 'Shaks'").toLowerCase();
let nameLength = firstName.length + lastName.length;
console.log(`Your username is : ${firstName}${lastName}_${nameLength}`);


// To be submitted here: https://docs.google.com/forms/d/e/1FAIpQLSchcwvmfWZCFg5mhfcVwzvYpkVYaFN2pSFFhwvIDm0SyYP2Yg/viewform