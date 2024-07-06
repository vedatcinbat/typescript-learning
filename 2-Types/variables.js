var movieTitle = "The Dark Knight";
movieTitle = "The Dark Knight Rises";
//movieTitle = 9; // Error: Type '9' is not assignable to type 'string'.
//movieTitle.upper(); // Error: Property 'upper' does not exist on type 'string'.
movieTitle.toUpperCase(); // OK
var numCatLives = 9;
numCatLives += 1;
//numCatLives = "zero"; // Error: Type '"zero"' is not assignable to type 'number'.
var gameOver = false;
gameOver = true;
//gameOver = "true"; // Error: Type '"yes"' is not assignable to type 'boolean'.
console.log(movieTitle);
console.log(numCatLives);
console.log(gameOver);
// Type Inference
var tvShow = "Olive Kitteridge";
tvShow = "The Other Two";
//tvShow = false; // NOT OK : Type '9' is not assignable to type 'string'.
var isFunny = false;
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
var movies = ["The Dark Knight", "The Dark Knight Rises", "Inception"];
var foundMovie = "Not Found";
for (var movie in movies) {
    if (movie === "Inception") {
        foundMovie = "Inection is found!";
    }
}
console.log(foundMovie);
