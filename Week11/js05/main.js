console.log("Hello")

let str1 = "cat";
let str2 = "mice";

console.log(str1.concat(null + null + str2))


let email = "UnnkOWNUSER@GAMIL.COM"

console.log(email.toLocaleLowerCase())

console.log("Lox".padEnd(4, "0x"))

let factorial = n => n > 1 ? n * factorial(n - 1) : 1;

console.log(factorial(5)); // -> 120


let names = ['Alice', 'Eve', 'John'];
let showName = element => console.log(element);
names.forEach(showName); // -> Alice, Eve, John

let numbers = [50, 10, 40, 30, 20];
let retVal = 0;
let compareNumbers = (a, b) => a > b ? retVal = -1 : retVal = 1;
let sorted = numbers.sort(compareNumbers);
console.log(sorted); // [10, 20, 30, 40, 50]

let add = (a, b) => (!Number.isInteger(a) || !Number.isInteger(b)) ? NaN : a + b;
console.log(add(12, 10)); // -> 22

let sub = (a, b) => (!Number.isInteger(a) || !Number.isInteger(b)) ? NaN : a - b;
console.log(sub(10,12))

let mult = (a, b) => (!Number.isInteger(a) || !Number.isInteger(b)) ? NaN : a * b;
console.log(mult(5,5))

let action = function(callback, a, b) {
    return callback(a, b)

};

console.log(action(add, 12, 10));


// console.log("Before debugger");
// debugger;
// console.log("After debugger");

function outer() {
    let name = "outer";
    let str = inner();
    return str;
}

function inner() {
    let name = "inner";
    return "Hello !";
}

let msg1 = 'hello';
let msg2 = msg1.slice(-3);
console.log(msg2 ? msg2 : msg2 + msg1);
