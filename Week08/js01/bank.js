class Account {
    static all_transactions=[]

    constructor(fname, lname){
        this.firstName = fname;
        this.lastname = lname;
        this.startingBalance = 1000;
        this.indivdual_transactions = []
        this.overdraft = 0.05 * this.startingBalance
        this.bonus = 0.05 * this.startingBalance       
        
    }  

    applyOverdraft(amount) {
        if(amount <= 0){
            console.log("Invalid amount")
        }
        else if(amount > this.overdraft + this.startingBalance){
            console.log("Insufficient funds!!")
        
        }
        else if(amount === this.overdraft + this.startingBalance){
            this.startingBalance = this.overdraft-(this.overdraft * 2);
            this.indivdual_transactions.push(`accountName: ${this.lastname}`, `amount: ${amount}`)
            Account.all_transactions.push(`accountName: ${this.lastname}`, `amount: ${amount}`)
            console.log(this.startingBalance)
        }
        else{
            this.startingBalance -= amount
            let balance = this.startingBalance
            this.indivdual_transactions.push(`accountName: ${this.lastname}`, `amount: ${amount}`)
            Account.all_transactions.push(`accountName: ${this.lastname}`, `amount: ${amount}`)
            console.log(balance)
        }
        
        
    }

    applyBonus(amount) {
        this.startingBalance += this.bonus
        if(amount > this.startingBalance){
            console.log("Insufficient funds")
        }
        else{this.startingBalance -= amount
        let balance = this.startingBalance
        this.indivdual_transactions.push(`accountName: ${this.lastname}`, `amount: ${amount}`)
        Account.all_transactions.push(`accountName: ${this.lastname}`, `amount: ${amount}`)
        console.log(balance)
        }
    }


    withdraw(amount) {
        if(this.accountType == "current"){
            this.applyOverdraft(amount)

        }
        else if(this.accountType == "savings"){
            this.applyOverdraft(amount)

        }
        else{
            return "Invalid account"
        }
        
       
        
    }

    deposit(amount) {
        if(amount <= 0){
            console.log("Invalid amount")
        }
        else{
            this.startingBalance += amount
            let balance = this.startingBalance
            console.log(balance)
        }
    }

    transfer(receiver, amount){
        if(amount <= 0){
            console.log("Invalid amount")
        }
        else if(receiver instanceof Account){
            this.startingBalance -= amount;
            receiver.startingBalance += amount;
            this.indivdual_transactions.push(`accountName: ${this.lastname}`, `amount: ${amount}`)
            Account.all_transactions.push(`accountName: ${this.lastname}`, `amount: ${amount}`)
            console.log(this.startingBalance);
            console.log(receiver.startingBalance);
        }else{
            console.log("Not an account")
        }
        
    }
}

class SavingsAccount extends Account {
    constructor(fname, lname) {
        super(fname, lname)
        this.accountType = "savings";
    }
}

class CurrentAccount extends Account {
    constructor(fname, lname) {
        super(fname, lname)
        this.accountType = "current";
    }
}


let account1 = new CurrentAccount("Solex", "Protocol")
let account2 = new CurrentAccount("Wal", "Dan")
let account3 = new SavingsAccount("Sught", "And")
let account4 = new SavingsAccount("Waya", "Cholo")
account1.withdraw(1050)
account2.transfer(account3, 200)
account3.withdraw(1050)
console.log(account3.indivdual_transactions)
console.log(Account.all_transactions)
