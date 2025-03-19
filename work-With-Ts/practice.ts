import { string } from "three/tsl";

let hobbies: string[];

hobbies = ['sports', 'cooking']

type Person ={  // Alias  example
    name: string,
    age: number;
}

let person: {
    name: string,
    age: number;
}

person = {
    name: 'Max',
    age: 30
}

// person = {
//     isEmployee: true   // This is not allowed because its type is boolean and it not defines in person
// };


// Type inference : In Ts compiler to automatically determine the type of a variable without explicitly specifying it

let learn = 'React'

// learn = "yashvi"  Allowed
// learn = 58  Not allowed


// Alias Using type

let people: Person[];


// function and return type

// After parameter type is gives the return type of function(number or string)... (not compulsory to Add)

function add (a: number, b: number): number | string {
    return a + b;
}

// Any allowed all types or this function is void not return any types
function print(value: any){
    console.log(value)
}


