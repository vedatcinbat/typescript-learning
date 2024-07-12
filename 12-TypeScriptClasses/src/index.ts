/* class Player {
    public readonly first: string;
    public readonly last: string;
    public score: number = 0;
    //private score: number = 0;

    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
        this.secretMothod();
    }

    private calculateExp(): number {
        return this.score * 2;
    }

    public getExp(): string {
        return `${this.first} ${this.last} has ${this.calculateExp()} experience points.`;
    }

    private secretMothod(): void {
        console.log('This is a secret method.');
    }
} */

/* const player1 = new Player('Vedat', 'Cinbat');
// player1.score = 10; // Error: Property 'score' is private and only accessible within class 'Player'.
// player1.score = "10"; // Error: "Type 'string' is not assignable to type 'number'.

console.log(player1);
//player1.first = player1.first.toUpperCase(); // Error: Cannot assign to 'first' because it is a read-only property.

const elton = new Player('Elton', 'John');
console.log(`Player ${elton.first} ${elton.last} has a score of ${elton.score}.`); */


/* class Player {
    //public score: number = 0;
    //private score: number = 0;

    constructor(public first: string, private last: string, protected _score: number) { }

    private secretMothod(): void {
        console.log('This is a secret method.');
    }

    get FullName(): string {
        return `${this.first} ${this.last}`;
    }

    get score(): number {   
        return this._score;
    }

    set score(newScore: number) {
        if(newScore < 0) {
            throw new Error('Score cannot be negative.');
        }
        if(newScore > 10000) {
            throw new Error('Score cannot be greater than 10000.');
        }
        this._score = newScore;
    }

    set FullName(value: string) {
        const parts = value.split(' ');
        this.first = parts[0];
        this.last = parts[1];
    }
}

class SuperPlayer extends Player {
    public isAdmin: boolean = true;
    
    constructor(first: string, last: string, score: number) {
        super(first, last, score);
    }

    maxScore() {
        this._score = 999999;
    }

    get getMaxScore(): string {
        return `The maximum score of ${this.FullName} is ${this.score * 10}.`;
    }
}

const player1 = new Player('Vedat', 'Cinbat', 100);
console.log(player1);
//player1.score = 10;
console.log(player1);

console.log(player1.FullName);
console.log(player1.score);
player1.FullName = 'Elton John';
//player1.score = -1000; // Error: Score cannot be negative.
player1.score = 1000;
console.log(player1.FullName);
console.log(player1.score);

const vedat = new SuperPlayer('Vedat', 'Cinbat', 100);
vedat.maxScore();
console.log(vedat.getMaxScore); */


interface Colorful {
    color: string;
}

interface Printable {
    print(): void;
}

class Bike implements Colorful {
    // public color: string;
    constructor(public color: string) {}
}

class Jacket implements Colorful, Printable {
    // public color: string;
    // public brand: string;
    constructor(public brand: string, public color: string) {}
    print() {
        console.log(`This is a ${this.color} ${this.brand} jacket.`);
    }
}

const jacket1 = new Jacket('Nike', 'Blue');
const bike1 = new Bike('Red');

console.log(jacket1);
console.log(bike1);
jacket1.print();


abstract class Employee {
    constructor(public first: string, public last: string) {}
    abstract getSalary(): number;
    greet(){
        console.log(`Hello ${this.first} ${this.last}`);
    }
}

class FullTimeEmployee extends Employee {
    constructor(first: string, last: string, public salary: number) {
        super(first, last);
    }
    getSalary(): number {
        return this.salary;
    }
}

class PartTimeEmployee extends Employee {
    constructor(first: string, last: string, public hourlyRate: number, public hoursWorked: number) {
        super(first, last);
    }
    getSalary(): number {
        return this.hourlyRate * this.hoursWorked;
    }
}

const fullTimeEmployee = new FullTimeEmployee('Vedat', 'Cinbat', 100000);
const partTimeEmployee = new PartTimeEmployee('Elton', 'John', 50, 100);

console.log(fullTimeEmployee);
console.log(partTimeEmployee);



// Employee -> FullTimeEmployee | PartTimeEmployee

//new Cat(); // Error: Cannot create an instance of an abstract class.


