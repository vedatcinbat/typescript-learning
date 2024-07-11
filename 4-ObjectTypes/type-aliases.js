var coordinate = { x: 10, y: 20 };
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
randomCoordinate();
doublePoint(coordinate); // OK
/* type MyNum = number;
let age: MyNum = 47;

console.log(age); */ 
