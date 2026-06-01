// let  users:{
//     name: string;
//     email: string;
//     phone: string;
//     siblings: {
//         name:string
//     }[]
// }[] = [{
//     name: "Solex",
//     email: "protocol@mail.com",
//     phone: "080111111111",
//     siblings:[
//         {name: "Lucky"}
//     ]
// },
// {
//     name: "Ngutial",
//     email: "protocol@mail.com",
//     phone: "080111111111",
//     siblings:[
//         {name: "Lucky"}
//     ]
// }

// ]

// console.log(users)

// Using Type 
// 1. Works for any data type
// 2. Cannot be declared twice

type School = {
    name: string;
    address: string;
    teachers: {
        name: string
    }[]
} 

let schools: School[] = [
    {
        name: "Kolat",
        address: "No:1",
        teachers: [
            {
                name: "Tosin"
            }
        ]
    }
]

console.log(schools)

// Interface is strictly for objects
// 1. Works with only objects 
// 2. Merges into one when defined twice

interface LLM {
    name: string;
    provider: string;
    cities: {
        name: string
    }[]
}

let ai: LLM[] = [
    {
        name: "GPT5",
        provider: "OpenAI",
        cities: [
            {
                name: "Jos"
            }
        ]
    }
]

console.log(ai[0].cities)


interface User {
    name: string;
    email: string;
    phone: string;
    siblings: {
        name:string
    }[]
}


let users: User []= [{
    name: "Solex",
    email: "protocol@mail.com",
    phone: "080111111111",
    siblings:[
        {name: "Lucky"}
    ]
},
{
    name: "Ngutial",
    email: "protocol@mail.com",
    phone: "080111111111",
    siblings:[
        {name: "Lucky"}
    ]
}

]

console.log(users)
