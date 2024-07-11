/* const activeUsers: string[] = ['John', 'Doe', 'Jane'];
const activeNumbers: number[] = [1, 2, 3];
// const aciteveUserse: string[] = ['John', 'Doe', 'Jane', 2]; 
// Error: Type 'number' is not assignable to type 'string'. 

activeUsers.push('Smith');
//activeUsers.push(4); // Error: Argument of type '4' is not assignable to parameter of type 'string'. 


console.log(activeUsers);
console.log(activeNumbers);


let username: string = "Vedat";
let usernames: string[] = ["Vedat", "John", "Doe"];

console.log(username);



const ageList: number[] = [25, 30, 35, 40];

ageList[0] = 99;
// ageList[0] = "99"; // Error: Type 'string' is not assignable to type 'number'.

const bools: boolean[] = [true, false, true, true];

console.log(bools);

type Point = {
    x: number;
    y: number;
}

const coords: Point[] = []
coords.push({ x: 10, y: 20 });
//coords.push({x: 8}) // Error: Property 'y' is missing in type '{ x: number; }' but required in type 'Point'.

// Multidimensional Arrays
// 3x3 board 
const board: string[][] = [
    ["X", "O", "X"], 
    ["O", "X", "O"], 
    ["X", "O", "X"]
] */