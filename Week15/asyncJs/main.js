// SetTimeout
console.log(2+3)
console.log(2+3)
setTimeout(() => {
    console.log(3*5)
}, 5000)
console.log(2+3)
console.log(2+3)
console.log(2+3)


// setInterval(() => {}, 4000)


// let inter = setInterval(() => {
//     console.log("Hell0")
// }, 2000)

// console.log(`interID = ${inter}`)



// let int = setInterval(() => {
//     console.log("Hell0")
// }, 2000)

// console.log(`interID = ${int}`)

let run = 3;
let inter = setInterval(() => {
    console.log("Hell0")
    run -= 1
    if (run < 1) {                      // use the termination condition in the body of set interval function
        clearInterval(inter)    
    }
}, 2000)

console.log(`interID = ${inter}`)


// WEB APIs
// Helps us communicate with applications that are not browser native, e.g camera, mic, bluetooths.

// Promise
// Promise has three states, pending, fulfilled(resolve function), reject(reject function)
// It takes a callback function the takes the resolve and reject functions as arguments

let sendEmail = new Promise((resolve, reject) => {
    // try sending mail
    let isSent  = true;

    if(isSent) {
        resolve("Email sent sucessfully")
    }else{
        reject("Email not sent")
    }

})
console.log(sendEmail)

// promise methods. By default, results of promise are wrapped and we use these methods to unwrap them.
// then() = When it resolves
// catch() = When it rejected.

let sendText = new Promise((resolve, reject) => {
    // try sending text
    let isSent  = "failed";

    if(isSent == "pending") {
        resolve({success: true,
            message: "email is still pending",
            status: isSent
        })
    }

    if(isSent == "sent") {
        resolve({success: true,
            message: "email is sent sucessfully",
            status: isSent
        })
    }
    
    if(isSent == "failed"){
        reject({success: true,
            message: "email not sent",
            status: isSent
        })
    }

})
sendText.then((data) => {
    console.log(data.message)
}).catch((error) => {
    console.log(error)
})


let users = [
    {
        id: 1,
        balance: 20000,
        name: "MP"
    },
    {
        id: 2,
        balance: 20000,
        name: "Solex"
    },
    {
        id: 3,
        balance: 20000,
        name: "K9"
    }
]

// check user balance
// check recipient
//  withdraw from sender
//  add to recipient balance

function checkUser(id) {
    return new Promise((resolve, reject) => {
        let user = users.find((user) => user.id == id)
        if (user) {
            resolve({
                status: true,
                data: user,
                message: "user retrieved sucessfully"
            })
        }
        reject({
                status: false,
                data: user,
                message: "user not found!"
            })
    }).then((data) => {
        return data
    }).catch((error) => {
        return error
    })

}

function updateBalance(id, amount, op) {
    return new Promise((resolve, reject) => {
        users.forEach((user) => {
            if (user.id == id) {
                if (op == "withdraw") {

                    if (amount > user.balance) {
                        reject({
                            status: false,
                            message: "Insufficient funds"
                        })
                    }

                    if ((user.balance - amount) < 0) {
                        user.balance = 0
                        resolve({
                            status: true,
                            message: "withdrawal successful"
                        })
                    }

                    user.balance -= amount
                    resolve({
                        status: true,
                        message: "withdrawal successful"
                    })

                } else if (op == "deposit") {
                    user.balance += amount
                    resolve({
                        status: true,
                        message: "deposit successful"
                    })
                }
            }
        })
    })

}

function mainLogic() {
    let sender = checkUser(2);
    let amount = 2000;
    

    sender.then((senderData) => {
        console.log(`Receiver check: ${senderData.message}`)

        let receiver = checkUser(3)

        receiver.then((receiverData) => {
            console.log(`Receiver check: ${receiverData.message}`);

            let updateSenderBalance = updateBalance(senderData.data.id, amount, "withdraw")
            updateSenderBalance.then((response) => {
                console.log(response.message)
                console.log(users)

            })

            let updateReceiverBalance = updateBalance(senderData.data.id, amount, "withdraw")
            updateReceiverBalance.then((receiverResponse) => {
                console.log(receiverResponse.message)
                console.log(users)
            })
        })
    })
        

    // updateBalance(2, 3000, "withdraw")
    // updateBalance(1, 3000, "deposit")

    // console.log("Hereeeeeee",user)
    // console.log(users)
}

mainLogic()






   
