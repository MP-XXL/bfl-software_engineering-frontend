// Array methods
let arr = [2, 4, 5];

result = arr.shift()

console.log(result)
console.log(arr)

let users = [];

users.push({
    name: "MP",
    age: 50
    }
)

let func = function(){
    console.log("Yo!")
}

users.push({name: "Wallex", age: 20}, true)
users.push("apple".toUpperCase())
users.push(func)
console.log(users)
console.log(users[users.length - 1])

let fruits = ["Mango", "Guava", "Banana", "Pear", "Grape", "Banana"]
console.log(fruits, fruits.length)
console.log(typeof (fruits.pop()))
console.log(fruits)

fruits.forEach(function(fruit, index) {
    console.log(fruit, index)
})

fruits.forEach((fruit) => console.log(fruit))


// let outer = function() {
//     let result = "outter_scope"
//     let inner = function() {
//         console.log(result)
//         result = "inner_scope"
//     }
//     return inner
// }

// const closure = outer()
// closure()
// closure()
// closure()

fruits.forEach(function(fruit, index) {
    if(index %2 == 0) {
        console.log(`${fruit}: No`)
    } else {
        console.log(`${fruit}: Yes`)
    }
})