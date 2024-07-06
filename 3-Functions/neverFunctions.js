function makeError(msg) {
    throw new Error(msg);
}
function gameLoop() {
    while (true) {
        console.log("Game is running...");
    }
    // return true; // Error: Type 'true' is not assignable to type 'never'.
}
//makeError("Something went wrong...");
gameLoop(); // Infinite loop
