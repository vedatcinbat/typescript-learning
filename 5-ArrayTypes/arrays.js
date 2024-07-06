var activeUsers = ['John', 'Doe', 'Jane'];
var activeNumbers = [1, 2, 3];
// const aciteveUserse: string[] = ['John', 'Doe', 'Jane', 2]; 
// Error: Type 'number' is not assignable to type 'string'. 
activeUsers.push('Smith');
//activeUsers.push(4); // Error: Argument of type '4' is not assignable to parameter of type 'string'. 
console.log(activeUsers);
console.log(activeNumbers);
var username = "Vedat";
var usernames = ["Vedat", "John", "Doe"];
console.log(username);
var ageList = [25, 30, 35, 40];
ageList[0] = 99;
// ageList[0] = "99"; // Error: Type 'string' is not assignable to type 'number'.
var bools = [true, false, true, true];
console.log(bools);
var points = [
    { x: 10, y: 20 },
    { x: 20, y: 30 },
    { x: 30, y: 40 }
];
points.forEach(function (point) {
    console.log(point);
});
