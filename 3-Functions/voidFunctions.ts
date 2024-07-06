function printTwice(msg: string): void {
    console.log(msg);
    console.log(msg);

    // return ""; // Error: Type '""' is not assignable to type 'void'.
}

printTwice("Hello, World!");