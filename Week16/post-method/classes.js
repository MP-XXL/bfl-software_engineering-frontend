class Bank {
    // properties -> attributes
    name = ""
    address = ""
    type = ""
    #users = []
    // methods -> behaviours
    constructor(name, address, type) {
        this.name = name
        this.address = address
        this.type = type

    }

    createAccount(name, age, address, oBalance, accNo){
        this.#users.push({
            name,
            age,
            address,
            accNo,
            balance: oBalance
        })
    }

    deposit(account, amount){
        let user = this.#users.find(user => user.accNo == account)

        if(!user) return "Account not found!"
        
        user.balance += amount
        return this.#users
    }

    withdraw(account, amount){
        let user = this.#users.find(user => user.accNo == account)

        if(!user) return "Account not found!"
        if(user.balance < amount){
            return "Insuffucient funds!"
        }
        user.balance -= amount
        return this.#users
    }

    getUsers(){
        return this.#users
    }

    version(){  //polymorphism
        return 1.2
    }


}

class Opay extends Bank{
    constructor(name, address,type) {
        super(name, address, type)
    }

    users = this.getUsers()
    checkBalancce(account){
        let user = users.find((user) => user.accNo == account)
        return user.balance
    }
} //Basic inheritance



let fbn = new Bank("First Bank", "Terminus", "Commercial")
let gtco = new Bank("Guaranty Trust Bank", "Terminus", "Commercial")
let opay = new Opay("opay", "Phototek", "Neo")
// console.log(fbn)
// console.log(gtco) // Users field will not appear unless being called in a method of the object, since the users property is encapsulated
gtco.createAccount("Solex", 30, "Rayfield", 2000, 112345555)
gtco.createAccount("MP", 30, "Rayfield", 5000, 112345555)
// console.log(gtco)
console.log(gtco.deposit(112345555, 500000))
console.log(gtco.withdraw(112345555, 10000000000))
console.log(gtco.getUsers())
