const rands = ["Hello", "", 6]
for(let rand of rands) {
    console.log(Boolean(rand))
}

const rank = {
    ranks: "Emeritus"
}

var name = "rr";
var name = "oo"; //JavaScript interpreter uses the last value it remembers
console.log(name)

let person = {
    "name": "Solex",
    "name": "Gratiz",
    "position": "protocol",
    "isAdmin": true
}

console.log(person["name"])
console.log(person.name)


for(let prop in person) {
    console.log(`${prop} = ${person[prop]}`)
} 

console.log(person)

person = {...person, name: "Kojo", height: 150, ...rank}

console.log(person)

let numero = 2n;
const result = numero + 2n;
console.log(result)