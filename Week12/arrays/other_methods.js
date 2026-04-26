// .splice(index, delete_count, items to add)
let numbers = [1, 3, 4, 7];

numbers.splice(7, 0, "Cole")

console.log(numbers)
console.log(numbers.length)

let arr = new Array(7)

console.log(arr.push("ooo"))
console.log(arr)

// .find()

let fruits = [["Banana", "Guava"], ["Banana", "Pear", "Grape"], "Banana", "Pin", "Grape"]

let mango = fruits.find((fruit, index) => {
    console.log(fruit, index)
    // return fruit == "Banana"
    return fruit[index] == "Banana"
})

console.log(`Element found is ${mango}`)


let items = [
    {
        name: "milk",
        price: 400,
        stock: 5
    },
    {
        name: "sugar",
        price: 800,
        stock: 20
    },
    {
        name: "bread",
        price: 2800,
        stock: 2
    },
    {
        name: "butter",
        price: 300,
        stock: 4
    }

]

let sugar = items.find((item, index) => {
    return item.name == "sugar" && item.stock > 0
})

console.log(sugar)

function checkItem(name) {
    return items.find(item => item.name == name)
}

function buyItem(name, qty) {
    let item = checkItem(name)
    if(item == undefined || typeof(item) != "object" || item instanceof Array){
        console.log(`The item ${name} is not available`)
        return
    }

    if(item.stock < qty) {
        console.log(`Quantity required for ${item.name} is not available. We have ${item.stock} in stock`)
        return
    }


}

buyItem("Sugar", 30)