/* const dog: {
    name: string;
    breed: string;
    age: number;
} = {
    name: "Elton",
    breed: "Australian Shepherd",
    age: 0.5
} */
function printName(person) {
    console.log("".concat(person.first, " ").concat(person.last));
}
//printName({first: "John"}); // Error: Argument of type '{ first: string; }' is not assignable to parameter of type '{ first: string; last: string; }'.
printName({ first: "John", last: "Doe" });
printName({ first: "Thomas", last: "Jenkins" });
//{x: number, y: number}
//let coordinate: {x: number, y: number} = {x: 10, y: 20, z: 30}; // Error: Object literal may only specify known properties, and 'z' does not exist in type '{ x: number; y: number; }'.
var coordinate = { x: 10, y: 20 }; // OK
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
var point = randomCoordinate();
console.log(point.x, point.y);
