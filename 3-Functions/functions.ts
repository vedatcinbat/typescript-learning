/* function square(num) {
    num.toUpperCase();
    return num * num;
}


square(3); // 9
square("asd"); // Error: Argument of type '"asd"' is not assignable to parameter of type 'number'.
square(true); // Error: Argument of type 'true' is not assignable to parameter of type 'number'. 
*/

function square(num: number): number {
    return num * num;
}

function greet(person: string = "stranger"): string {
    return `Hi there, ${person}!`;
}

const doSomething = (person: string, age: number, isFunny: boolean) => {
    return `Hi there, ${person}! You are ${age} years old. Are you funny? ${isFunny}`;
}

console.log(greet("John")); // Hi, John!
console.log(greet()); // Hi, stranger!

console.log(square(3)); // 9
//console.log(square("asd")); // Error: Argument of type '"asd"' is not assignable to parameter of type 'number'.
//console.log(square(true)); // Error: Argument of type 'true' is not assignable to parameter of type 'number'.

//console.log(doSomething("VedatCinbat")) // Error: Expected 3 arguments, but got 1.
//console.log(doSomething("VedatCinbat", 24)); // Error: Expected 3 arguments, but got 2.
//console.log(doSomething("VedatCinbat", 24, true)); // Hi there, VedatCinbat! You are 24 years old. Are you funny? true
//console.log(doSomething("VedatCinbat", 24, true, 1)); // Error: Expected 3 arguments, but got 4.
console.log(doSomething("VedatCinbat", 24, true));


// Function Return Types

function add(a: number, b: number): number {
    return a + b;
}

function rando(num: number): number | string {
    if(Math.random() < 0.5) {
        return num.toString();
    }

    return num;
}


console.log(rando(5));





