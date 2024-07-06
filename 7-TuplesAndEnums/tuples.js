var stuff = [1, 2, 'hello', 'world', 'this', 'is', 'a', 'test'];
// Tuples
//const color: number[] = [255, 0, 0];
//const color: [number, number, number] = [255, 0]; // Error: Type 'string' is not assignable to type 'number'.
//const color: [number, number, number] = [255, 0, 0, 0, 2]; // Error: Type 'number' is not assignable to type 'undefined'. 
//const color: [number, number, number] = [255, 0, 0, 2]; // Source has 4 elements, target expects 3.
var color = [255, 0, 0];
var goodRes = [200, 'OK'];
//goodRes[0] = "200"; // Error: Type 'string' is not assignable to type 'number'.
/* goodRes.push(123); // No error
goodRes.pop(); // No error
goodRes.pop();
goodRes.pop();
*/
console.log(goodRes);
var goodResObj = { code: 200, message: 'OK' };
var responses = [
    [200, 'OK'],
    [404, 'Not Found'],
    [500, 'Internal Server Error']
];
console.log(responses);
