/* let age: number | string = 21;

age = 23;
age = "24";


type Point = {
    x: number;
    y: number;
}

type Loc = {
    lat: number;
    long: number;
}


let coordinates: Point | Loc = { x: 1, y: 34 };

coordinates = { lat: 34, long: 56 }; // Its valid because coordinates is a union type of Point and Loc



function printAge(age: number | string): void {
    console.log(`You are ${age} years old`);
}


printAge(23);


function calculateTax(price: number | string, tax: number) {
    //return price * tax; // Error: Operator '*' cannot be applied to types 'string | number' and 'number'.
    //price.replace("$", ""); // Error: Property 'replace' does not exist on type 'string | number'.

    if (typeof price === 'string') {
        price = parseFloat(price.replace("$", ""));
        // price = .... // Now price is a number
    }

    return price * tax;
}


const nums: number[] = [1, 2, 3, 4];
// const stuff: any[] = [1,2,3,4, "hello", true, [1,2,3,4], {name: "John"}];
// const stuff: number[] | string[] = [1,2,3] or ["hello", "world"];
// number[] | string[] means that stuff can be either an array of numbers or an array of strings

const stuff: (number | string)[] = [1, 2, 3, 4, "hello", "world"];
const coords: (Point | Loc)[] = [{ x: 1, y: 2 }, { lat: 34, long: 56 }];

console.log(stuff);
console.log(coords);



// Literal Types
let zero: 0 = 0
//zero = 2; // Error: Type '2' is not assignable to type '0'

let hi: "hi" = "hi";
//hi = "hello"; // Error: Type '"hello"' is not assignable to type '"hi"'

let answer: "yes" | "no" | "maybe" = "yes";
answer = "no";
answer = "maybe";
//answer = "ok"; // Error: Type '"ok"' is not assignable to type '"yes" | "no" | "maybe"'

let mood: "happy" | "sad" | "angry" | "meh" = "happy";
mood = "sad";
mood = "angry";
mood = "meh";
//mood = "ok"; // Error: Type '"ok"' is not assignable to type '"happy" | "sad" | "angry" | "meh"'

type DayOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

let today: DayOfWeek = "Monday";
// today = "Holiday"; // Error: Type '"Holiday"' is not assignable to type 'DayOfWeek'
// Because "Holiday" is not a valid value for DayOfWeek (Monday-Tuesday-Wednesday-Thursday-Friday-Saturday-Sunday)





 */