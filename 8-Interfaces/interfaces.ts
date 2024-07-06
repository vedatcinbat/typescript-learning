/* type Point = {
    x: number,
    y: number
}

const pt: Point = { x: 10, y: 20 }; */



// Interfaces
/* interface Point {
    x: number;
    y: number;
}

const pt: Point = { x: 123, y: 1234 };
 */


/* interface Person {
    readonly id: number;
    first: string;
    last: string;
    nickname?: string;
    //sayHi: () => string;
    sayHi(): string;
}

const thomas: Person = {
    id: 123123,
    first: 'Thomas',
    last: 'Jefferson',
    nickname: "Tom",
    sayHi: () => {
        return `Hello, my name is ${this.first} ${this.last}`;
    }
}; */

/* const john: Person = { 
    id: 123123123, 
    first: 'John', 
    last: 'Adams', 
    nickname: 'The Atlas of Independence' 
}; */

//thomas.first = "Tommy";
//thomas.id = 123; // Error: Cannot assign to 'id' because it is a read-only property.


interface Product {
    name: string,
    price: number,
    applyDiscount(discount: number): number;
}


const shoes: Product = {
    name: 'Nike Air Max',
    price: 100,
    applyDiscount(amount: number): number {
        const newPrice = this.price * (1-amount);
        this.price = newPrice;
        return this.price;
    }
};

console.log(shoes.applyDiscount(0.4));


interface Dog {
    name: string;
    age: number;
}

interface Dog {
    breed: string;
    bark(): string;
}

const fido: Dog = {
    name: 'Fido',
    age: 3,
    breed: 'Golden Retriever',
    //bark: () => 'Woof'
    bark() {
        return "Woof Woof!"
    }
};

/* interface ServiceDog extends Dog {
    isTrained: boolean;
    performTask(): string;
}

const buddy: ServiceDog = {
    name: 'Buddy',
    age: 5,
    breed: 'Labrador',
    isTrained: true,
    bark() {
        return "Woof Woof!";
    },
    performTask() {
        return "I'm helping my human!";
    }
};


console.log(buddy);
console.log(buddy.performTask());
console.log(buddy.bark()); */


/* interface ServiceDog extends Dog {
    job: "drug sniffer" | "bomb" | "guide dog";
}

const chewy: ServiceDog = {
    name: 'Chewy',
    age: 4.5,
    breed: 'German Shepherd',
    job: 'bomb',
    bark() {
        return "Woof Woof!";
    }
}

console.log(chewy); */


interface Person {
    name: string;
}

interface Employee {
    readonly id: number;
    email: string;
}

interface Engineer extends Person, Employee {
    level: string
    languages: string[];
}

const pierre: Engineer = {
    name: 'Pierre',
    id: 123,
    email: 'pierre@gmail.com',
    level: 'Senior',
    languages: ['JavaScript', 'TypeScript', 'Python']
}

console.log(pierre);



