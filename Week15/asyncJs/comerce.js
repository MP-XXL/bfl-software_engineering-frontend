let users = [
    {
        id: 1,
        name: "k9",
        balance: 30000
    },
    {
        id: 2,
        name: "Wallex",
        balance: 4000
    },
    {
        id: 3,
        name: "Tosin",
        balance: 30000
    }
]

let products = [
    {
        prodID: 1,
        name: "boot",
        stock: 3,
        price: 4000
    },
    {
        prodID: 2,
        name: "hat",
        stock: 3,
        price: 4000
    },
    {
        prodID: 3,
        name: "chair",
        stock: 3,
        price: 4000
    }
]

function checkUser(userId) {
    return new Promise((resolve, reject) => {
        let foundUser = users.find((singleUser) => singleUser.id == userId)
        if (foundUser) {
            resolve({
                status: true,
                data: foundUser,
                message: "User found"
            })
        }

        reject({
            status: false,
            data: foundUser,
            message: "User does not exist!"
        })
    })
}

function checkProduct(product) {
    return new Promise((resolve, reject) => {
        let findProduct = products.find((singleProduct) => singleProduct.name == product)
        if (findProduct) {
            resolve({
                status: true,
                data: findProduct,
                message: "Order pending"
            })
        }

        reject({
            status: false,
            data: findProduct,
            message: "product not found!"
        })
    })
}

function checkProductQty(product, buyQuantity) {
    return new Promise((resolve, reject) => {
        let foundQty = products.find((singleProduct) => singleProduct.name == product)
        if ((foundQty.stock > 0) && (foundQty.stock > buyQuantity)) {
            resolve({
                status: true,
                data: foundQty,
                message: "Product in stock"
            })
        }

        reject({
            status: false,
            data: foundQty,
            message: "product out of stock"
        })
    })
}

function checkUserBalance(userId, buyQuantity, product) {
    return new Promise((resolve, reject) => {
        let foundProduct = products.find((singleProduct) => singleProduct.name == product)
        let foundUser = users.find((user) => user.id == userId)
        if (foundUser.balance >= (foundProduct.price * buyQuantity)) {
            foundUser.balance -= (foundProduct.price * buyQuantity)

            resolve({
                status: true,
                data: foundUser,
                message: "Order processing"
            })
        }

        reject({
            status: false,
            data: foundUser,
            message: "Insufficient funds!"
        })
    })
}

function updateStock(product, buyQuantity) {
    return new Promise((resolve, reject) => {
        let foundProduct = products.find((singleProduct) => singleProduct.name == product)
        foundProduct.stock -= buyQuantity
        if (foundProduct) {
            resolve({
                status: true,
                data: foundProduct,
                message: "Order processed!"
            })
        }

        reject({
            status: false,
            data: foundProduct,
            message: "oops! something went wrong!"
        })

    })
}


// function orderProduct({ product, userId, buyQuantity }) {
//     checkUser(userId).then((user) => {
//         console.log(user.message)
//         let checkProductResponse = checkProduct(product)
//         checkProductResponse.then((productResponse) => {
//             console.log(productResponse.message)

//             let productQtyResponse = checkProductQty(product, buyQuantity)
//             productQtyResponse.then((qtyResponse) => {
//                 console.log(qtyResponse.message)

//                 let userBalanceResponse = checkUserBalance(userId, buyQuantity, product)
//                 userBalanceResponse.then((balanceResponse) => {
//                     console.log(balanceResponse.message)

//                     let updateStockResponse = updateStock(product, buyQuantity)
//                     updateStockResponse.then((stockResponse) => {
//                         console.log(stockResponse.message)
//                         console.log("Delivery in progress...")
//                         setTimeout(() => {
//                             console.log("Order delivered!")
//                         }, 5000)

//                     }).catch((stockResponse) => {
//                         console.log(stockResponse.message)
//                     })
//                 }).catch((balanceResponse) => {
//                     console.log(balanceResponse.message)
//                 })
//             }).catch((qtyResponse) => {
//                 console.log(qtyResponse.message)
//             })
//         }).catch((productResponse) => {
//             console.log(productResponse.message)
//         })
//     }).catch((user) => {
//         console.log(user.message)
//     })

// }

// orderProduct({ product: "chair", userId: 3, buyQuantity: 2 })

function orderProduct({ product, userId, buyQuantity }) {
    checkUser(userId).then((user) => {
        console.log(user.message)
        return checkProduct(product)
    }).then((productResponse) => {
        console.log(productResponse.message)
        return checkProductQty(product, buyQuantity)
    }).then((qtyResponse) => {
        console.log(qtyResponse.message)
        return checkUserBalance(userId, buyQuantity, product)
    }).then((balanceResponse) => {
        console.log(balanceResponse.message)
        return updateStock(product, buyQuantity)
    }).then((stockResponse) => {
        console.log(stockResponse.message)
        console.log("Delivery in progress...")
        setTimeout(() => {
            console.log("Order delivered!")
        }, 5000)

    }).catch((stockResponse) => {
        console.log(stockResponse.message)
    }).catch((balanceResponse) => {
        console.log(balanceResponse.message)
    }).catch((qtyResponse) => {
        console.log(qtyResponse.message)
    }).catch((productResponse) => {
        console.log(productResponse.message)
    }).catch((user) => {
        console.log(user.message)
    })

}

orderProduct({ product: "chai", userId: 3, buyQuantity: 2 })





// How to make request with CURL

