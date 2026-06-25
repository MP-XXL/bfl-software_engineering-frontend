// Area of circle
function areaOfCircle(radius: number, pi: number = 3.142): number {
    let area: number;

    return (area = pi * radius**2)
}

console.log(areaOfCircle(4))


// Check odd or even
function oddOrEven(num: number): string {
    if(num % 2 == 0){
        return "even"
    }

    return "odd"
}

console.log(oddOrEven(3))


// Generic function

function generic<Type>(arg: Type[]): Type[] {
    return(arg.slice(0, 2))
}

console.log(generic([4, 5, 8, 70]))


// Quote generate

let outPutQuote: HTMLElement | null  = document.getElementById("quoteOutput");
let generateBtn: HTMLElement | null = document.getElementById("generateBtn");

generateBtn!.addEventListener("click", () => {
    generateBtn!.setAttribute("disabled", "true")
    generateBtn!.textContent = "Loading..."

    async function qutoeMaker(): Promise<void> {
        let quotes = await fetch("https://api.kanye.rest", {
            method: "GET"
        })

        if (!quotes) {
            throw new Error("Error getting quote");

        }

        let quote = await quotes.json();
        outPutQuote!.textContent = quote.quote;
        generateBtn!.removeAttribute("disabled")
        generateBtn!.textContent = "Generate"
    }

    qutoeMaker()
})

