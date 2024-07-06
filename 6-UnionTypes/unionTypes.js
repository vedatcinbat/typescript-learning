var age = 21;
age = 23;
age = "24";
var coordinates = { x: 1, y: 34 };
coordinates = { lat: 34, long: 56 }; // Its valid because coordinates is a union type of Point and Loc
function printAge(age) {
    console.log("You are ".concat(age, " years old"));
}
printAge(23);
function calculateTax(price, tax) {
    //return price * tax; // Error: Operator '*' cannot be applied to types 'string | number' and 'number'.
    //price.replace("$", ""); // Error: Property 'replace' does not exist on type 'string | number'.
    if (typeof price === 'string') {
        price = parseFloat(price.replace("$", ""));
        // price = .... // Now price is a number
    }
    return price * tax;
}
var nums = [1, 2, 3, 4];
// const stuff: any[] = [1,2,3,4, "hello", true, [1,2,3,4], {name: "John"}];
// const stuff: number[] | string[] = [1,2,3] or ["hello", "world"];
// number[] | string[] means that stuff can be either an array of numbers or an array of strings
var stuff = [1, 2, 3, 4, "hello", "world"];
var coords = [{ x: 1, y: 2 }, { lat: 34, long: 56 }];
console.log(stuff);
console.log(coords);
