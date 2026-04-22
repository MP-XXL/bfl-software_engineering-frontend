// GM guys, here is your task.

// 1. Given a set of numbers in an array, sum all the numbers in an array and return the total.

// NOTE: If an element is not a number, do not sum it

// 2. Create a simple shopping cart, add some items to cart and also remove some items, then print all items in the cart. 

// 3. Given a list of names, you find the longest name in the array

// Please avoid the use of AI as these tasks are very simple *only if you think*


// Question 1

let data = [2, 4, "2", 5, "0"]

sum = 0;
data.forEach(function(num, index) {
    if (typeof(num) !== "number") {
        // console.log(`oops! ${num} at ${index} is not a number`) 
        return  //Why does continue not work here?
    }else {
        sum += num
    }
    return sum
})
console.log(sum)


// Question 2

let cart = [];
console.log("Before shopping... Cart =", cart);
console.log("Adding items to cart...")

cart.push(
    {name: "bread", price: 2000, fresh: true},
    {name: "milk", price: 1000, fresh: true},
    {name: "sugar", price: 500, fresh: null},
    {name: "granola", price: 8000, fresh: true}
)
console.log("Added items to cart ===>", cart)

let itemToRemove = "sugar";

for(let item of cart) {
    if (item.name == itemToRemove) {
        let itemIndex = cart.indexOf(item)
        cart.splice(itemIndex, 1)
    }
}
console.log("Removed an item from the cart ===> ",cart)


// Question 3

let peopleNames = ["MP", "Andrew", "Solex", "QA"]

let longestName = 0;

peopleNames.forEach(function(name) {
    if (name.length <= longestName.length) {
        return
    }else {
        longestName = name
    }    
})
console.log(`Longest name in the array ==> ${longestName}`)
