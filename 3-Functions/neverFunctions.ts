function makeError(msg: string): never {
  throw new Error(msg);
}

function gameLoop(): never {
    while(true) {
        console.log("Game is running...");
    }
    // return true; // Error: Type 'true' is not assignable to type 'never'.
}

//makeError("Something went wrong...");

gameLoop(); // Infinite loop