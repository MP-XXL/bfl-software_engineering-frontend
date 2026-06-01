// string, number, boolean, undefined, null
// Declaring  variables with associated types
// String
// let fullName = "Solex";
let fullName: string = "Solex Protocol";
console.log(fullName);

let age: number = 50;
console.log(age);

let id: string | number = "user:1000"; // 1000

let fruits: string[] = ["Mango", "Guava", "Pear"]; //You can use the "any" data type

/*
{
    name: "Solex",
    age: 50,
    isStudent: true,
    skills: ["HTML", "CSS", "JS"]
}
*/

let user: {
    name: string;
    age: number;
    isStudent: boolean; // You can use "?" mark to define types that are optional and work even if not provided.
    skills: string[];
} = {
    name: "Solex",
    age: 50,
    isStudent: true,
    skills: ["HTML", "CSS", "JS"]
}

console.log(fullName, age, id, fruits, user);


