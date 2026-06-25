function greeting(name){
    return name
}

function welcomeBack(){
    let name = greeting("MP");
    return `Welcome to Blockfuse Labs, ${name}`
}
console.log(welcomeBack())