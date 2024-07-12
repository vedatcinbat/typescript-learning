"use strict";
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
class Bike {
    // public color: string;
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    // public color: string;
    // public brand: string;
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log(`This is a ${this.color} ${this.brand} jacket.`);
    }
}
const jacket1 = new Jacket('Nike', 'Blue');
const bike1 = new Bike('Red');
console.log(jacket1);
console.log(bike1);
jacket1.print();
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    greet() {
        console.log(`Hello ${this.first} ${this.last}`);
    }
}
class FullTimeEmployee extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
}
class PartTimeEmployee extends Employee {
    constructor(first, last, hourlyRate, hoursWorked) {
        super(first, last);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    getSalary() {
        return this.hourlyRate * this.hoursWorked;
    }
}
const fullTimeEmployee = new FullTimeEmployee('Vedat', 'Cinbat', 100000);
const partTimeEmployee = new PartTimeEmployee('Elton', 'John', 50, 100);
console.log(fullTimeEmployee);
console.log(partTimeEmployee);
// Employee -> FullTimeEmployee | PartTimeEmployee
//new Cat(); // Error: Cannot create an instance of an abstract class.
