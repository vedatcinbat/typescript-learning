/* const dog: {
    name: string;
    breed: string;
    age: number;
} = {
    name: "Elton",
    breed: "Australian Shepherd",
    age: 0.5
} */


function printName(person: {first: string, last: string}) {
    console.log(`${person.first} ${person.last}`)
}

//printName({first: "John"}); // Error: Argument of type '{ first: string; }' is not assignable to parameter of type '{ first: string; last: string; }'.
printName({first: "John", last: "Doe"});
printName({first: "Thomas", last:"Jenkins"})

//{x: number, y: number}
//let coordinate: {x: number, y: number} = {x: 10, y: 20, z: 30}; // Error: Object literal may only specify known properties, and 'z' does not exist in type '{ x: number; y: number; }'.
//let coordinate: {x: number, y: number} = {x: 10, y: 20}; // OK

// {x: number, y: number} is a return type
//function randomCoordinate(): {x: number, y: number} {
//    return {x: Math.random(), y: Math.random()};
//}

//printName({first: "Mick", last: "Jagger", age: 47}) // Error: Object literal may only specify known properties, and 'age' does not exist in type '{ first: string; last: string; }'.

const singer = {first: "Mick", last: "Jagger", age: 47, isAlive: true}

printName(singer) // OK




