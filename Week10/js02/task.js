// TASK
// ===========
// 1. Create variables for:
// - your name
// - your age
// - whether you are a student

// Print them to the console

// -

let myName = "MP";
let myAge = 200;
let isStudent = true

console.log(`Name == ${myName}`)
console.log(`Age == ${myAge}`)
console.log(`isStudent == ${isStudent}`)

// 2. Fix the Error and explain what it failed

let name = "John"
let age = 20

// console.log(Name)

// -

/* Answer:
The code above fails because of case sensitivity in variable naming
*/
console.log(name)

// 3. Evaluate:

console.log(true + false) //-> true (1)
console.log(true + true) //-> true (2)
console.log(false + false) //-> false (0)

// -

// 4. Create variables for:

// - studentName
// - studentAge
// - isGraduated

// -

let studentName;
let studentAge;
let isGraduated;

// 5. Consider a person object

// let person = {
//   name: "John",
//   age: 25,
//   isStudent: true
// }

// - Print each property
// - Change the age
// - Add a new property: country

// -


let person = {
  name: "John",
  age: 25,
  isStudent: true
}

for(let prop in person) {
    console.log(`${prop} ===> ${person[prop]}`)
}

person.age = 34;
console.log(person)

person.country = "Nigeria"
console.log(person)

// 6. Create an object for a phone having at least 3 properties

// -

let phone = {
    brand: "Xiaomi",
    model: "Black Shark 3",
    battery: 5000,
    hasWifi: true,
    screenSize: "6''"
}

// 7. Consider a user object

// let user = {
//   username: "admin",
//   password: "1234"
// }

// - Print username
// - Print password

// -

let user = {
  username: "admin",
  password: "1234"
}

console.log(user.username)
console.log(user.password)

// 8. Create:

// - a variable with no value
// - a variable intentionally set to empty

// Then explain the difference

// -
let nonVar;
let emptyVar = null;

/* The "nonVar" is different from the "emptyVar" in such a way that the nonVar was not initialized with a value and at execution the 
javascript interpreter will render it as a variable with a non-existent value while the emptyVar was initialized with an empty value of null. At execution the javascript 
interpreter will treat the variable as an empty variable.  */

// 9. Create:

// - a person object

// inside it include:

// - name (string)
// - age (number)
// - isStudent (boolean)

// -

let personObj = {
    name: "Tom",
    age: 100,
    isStudent: false
}

// 10. What is the output for each data logged:

let x = null;
let y;

console.log(x) //-> null
console.log(y) //->  undefined
console.log(typeof x) // type = object
console.log(typeof y) // type = undefined