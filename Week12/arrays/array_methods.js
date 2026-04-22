let numbers = [1, 2, 3, 4, 5, 6]
// .filter() method
// let even = numbers.filter((number) => {
//     if(number % 2 == 0) {
//         return number
//     }
// })

// or
//  let even = numbers.filter((number) => number % 2 == 0)
// console.log(even)

// or

 console.log(numbers.filter((number) => number % 2 == 0))

 let fruits = ["Mango", "Guava", "Banana", "Pear", "Grape", "Banana", "Pin", " "]
 let longest;
 fruits.forEach((fruit) => {
    if(!longest || fruit.length > longest.length) {
        longest = fruit;
    }
 })
 console.log(longest)

// .join()
 let names = ["Solex","Temi"]

 console.log(fruits.join())

//  .map()

let mapTest = numbers.map((number) => {
    if(number % 2 == 0) {
        return number
    }
    return 0
})
console.log(mapTest)

// .reduce(acc, value, intitial value)

let sum = numbers.reduce((acc, value) => {
    return acc + value
})
console.log(sum)

let allFruits = fruits.reduce((acc, value) => {
    return acc + "-" + value
})
console.log(allFruits)

// .slice(start, end)

let newNumbers = numbers.slice(1, 5)
console.log(newNumbers)

// .some()
let someTest = numbers.some((n) => n % 2 == 0)
// Will return true if at least one number is an even number
console.log(someTest)

// .sort()
// fruits.sort()
fruits.sort((first, second) => {
    return first.localeCompare(second) //Suitable for strings
})
console.log(fruits)

numbers.sort((first, second) => second - first)
console.log(numbers)

