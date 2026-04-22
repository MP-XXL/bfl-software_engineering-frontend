let numbers = [0.2, 0, 1000, 1, 5, 100, 400, 300, 50, 10]
let newNumbersArray = []
for (let i = 0; i < numbers.length; i++) {
    let nextNum = numbers[i + 1] 
    if(numbers[i] > numbers[i + 1]) {
        numbers[i + 1] = numbers[i]
        numbers[i] = nextNum
        i = 0
    }else if(numbers[i] < numbers[0]){
            let currentIter = numbers[i]
            numbers[i] = numbers[0]
            numbers[0] = currentIter
            i = 0        
    }else{
        continue
    }
}
console.log(numbers)

let strings = ["Ball", "park", "beat", "Solex", "MP", "Andrew"]
let newstringsArray = []
for (let i = 0; i < strings.length; i++) {
    let nextString = strings[i + 1] 
    if(strings[i] > strings[i + 1]) {
        strings[i + 1] = strings[i]
        strings[i] = nextString
        i = 0
    }else if(strings[i] < strings[0]){
            let currentIter = strings[i]
            strings[i] = strings[0]
            strings[0] = currentIter
            i = 0        
    }else{
        continue
    }
}
console.log(strings)
