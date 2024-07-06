let movieTitle: string = "The Dark Knight";
movieTitle = "The Dark Knight Rises";
//movieTitle = 9; // Error: Type '9' is not assignable to type 'string'.
//movieTitle.upper(); // Error: Property 'upper' does not exist on type 'string'.
movieTitle.toUpperCase(); // OK



let numCatLives: number = 9;
numCatLives += 1;
//numCatLives = "zero"; // Error: Type '"zero"' is not assignable to type 'number'.

let gameOver: boolean = false;
gameOver = true;
//gameOver = "true"; // Error: Type '"yes"' is not assignable to type 'boolean'.


console.log(movieTitle);
console.log(numCatLives);
console.log(gameOver);

// Type Inference
let tvShow = "Olive Kitteridge";
tvShow = "The Other Two";
//tvShow = false; // NOT OK : Type '9' is not assignable to type 'string'.


let isFunny = false;
isFunny = true;
//isFunny = "true"; // NOT OK : Type '"true"' is not assignable to type 'boolean'.

console.log(tvShow);
console.log(isFunny);


// Any Type
/* let thing: any = "hello";
thing = 9;
thing = true;
thing()
thing.toUpperCase(); */

//let thing = "hello";

//thing(); // not OK : Error: Cannot invoke an object which is possibly 'undefined'.


const movies = ["The Dark Knight", "The Dark Knight Rises", "Inception"];

let foundMovie; // Type: any : not recommended

for(let movie in movies) {
    if(movie === "Inception") {
        foundMovie = "Inception";
    }
}

console.log(foundMovie);