/* function square(num) {
    num.toUpperCase();
    return num * num;
}


square(3); // 9
square("asd"); // Error: Argument of type '"asd"' is not assignable to parameter of type 'number'.
square(true); // Error: Argument of type 'true' is not assignable to parameter of type 'number'.
*/
function square(num) {
    return num * num;
}
function greet(person) {
    if (person === void 0) { person = "stranger"; }
    return "Hi there, ".concat(person, "!");
}
var doSomething = function (person, age, isFunny) {
    return "Hi there, ".concat(person, "! You are ").concat(age, " years old. Are you funny? ").concat(isFunny);
};
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
function add(a, b) {
    return a + b;
}
function rando(num) {
    if (Math.random() < 0.5) {
        return num.toString();
    }
    return num;
}
console.log(rando(5));
