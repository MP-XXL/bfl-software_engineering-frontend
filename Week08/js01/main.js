// function tellDay(){
    // let day = 1;
    // if (day = 1){
    //     console.log("sun")
    // }
    // else if (day = 2){
    //     console.log("mon")
    // }
    // else if (day = 3){
    //     console.log("tue")
    // }
    // else if (day = 4){
    //     console.log("wed")
    // }
    // else if (day = 5){
    //     console.log("thur")
    // }
    // else if (day = 6){
    //     console.log("fri")
    // }
    // else if (day = 7){
    //     console.log("sat")
    // }
    // else {
    //     console.log("error")
    // }

    // let day = 5;
    // switch (day) {
    //     case 1:
    //         console.log("sun")
    //         break
    //     case 2:
    //         console.log("mon")
    //         break
    //     case 3:
    //         console.log("tue")
    //         break
    //     case 4:
    //         console.log("wed")
    //         break
    //     case 5:
    //         console.log("thur")
    //         break
    //     case 6:
    //         console.log("fri")
    //         break
    //     case 7:
    //         console.log("sat")
    //         break
    //     default:
    //         console.log("error")
    // }


    // for(let i = 1; i <= 100; i++){
    //     console.log(`Number ${i}`)
    // }
    

    // let i = 0;
    // while(i <= 100){
    //     console.log(i)
    //     i++
    // }

    // let dayOfWeek = 0;
    // do {
    //     if(dayOfWeek >= 1 && dayOfWeek <7)
    //     console.log("weekday")
    //     day++
        
    // } while (day >7);

    // let daysOfweek = 0;
    // while (daysOfweek >1 && daysOfweek <7) {
    //     console.log("Week Day!")
    //     daysOfweek++
    // }


// }
// tellDay()

// for(let day = 0; day < 7; day++){
//     switch(day){
//         case 0:
//             console.log("sun")
//             break

//         case 1:
//             console.log("mon")
//             break
//         case 2:
//             console.log("tue")
//             break
//         case 3:
//             console.log("wed")
//             break
//         case 4:
//             console.log("thur")
//             break
//         case 5:
//             console.log("fri")
//             break
//         case 6:
//             console.log("sat")
//             break
//         default:
//             console.log("error")
//             break
//     }
// }


// let dayOfWeek = 0;
// do {
//     if(dayOfWeek >= 1 && dayOfWeek > 7){
//         console.log("weekday");
//     }
//     dayOfWeek++;
        
// }while (dayOfWeek > 7);

    // let daysOfweek = 0;
    // while (daysOfweek >1 && daysOfweek <7) {
    //     console.log("Week Day!")
    //     daysOfweek++
    // }


class Account {
    constructor(fname, lname){
        this.firstName = fname;
        this.lastname = lname
        this.startingBalance = 1000
    }

    widthdraw(amount) {
        if(amount > this.startingBalance){
            console.log("Insufficient funds")
        }
        else{this.startingBalance -= amount
        let balance = this.startingBalance
        console.log(balance)
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
        if(receiver instanceof Account){
            this.startingBalance -= amount
            receiver.startingBalance += amount
            console.log(this.startingBalance)
            console.log(receiver.startingBalance)
        }else{
            console.log("Not an account")
        }
        
    }
}

account1 = new Account("Solex", "Protocol")
account2 = new Account("Wal", "Dan")
account3 = new Account("Sught", "And")
account4 = new Account("Waya", "Cholo")

account1.widthdraw(1200)
account2.transfer(account3, 200)