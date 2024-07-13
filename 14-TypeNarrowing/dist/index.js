"use strict";
function triple(value) {
    if (typeof value === 'string') {
        return value.repeat(3);
    }
    return value * 3;
}
console.log(triple(3)); // 9
console.log(triple('hi')); // 333
const el = document.getElementById('idk');
if (el) {
    el.textContent = 'Hello';
}
else if (!el) {
    console.log('Element not found');
}
const printLetters = (word) => {
    if (!word) {
        console.log('No word provided');
    }
    else {
        for (const char of word) {
            console.log(char);
        }
    }
};
printLetters('Hello');
printLetters(null); // No word provided
const someDemo = (x, y) => {
    if (x === y) {
        x.toUpperCase();
    }
    else {
        console.log('No match');
    }
};
someDemo('hi', 'hi'); // Match
someDemo('hi', true); // No match
someDemo(3, "3"); // No match
function getRuntime(media) {
    if ("numEpisodes" in media) {
        return media.numEpisodes * media.episodeDuration;
    }
    return media.duration;
}
const movie = { title: 'Inception', duration: 120 };
const show = { title: 'Breaking Bad', numEpisodes: 62, episodeDuration: 45 };
console.log(getRuntime(movie)); // 120
console.log(getRuntime(show)); // 2790
// Instanceof
function printFullDate(date) {
    if (date instanceof Date) {
        console.log(date.toUTCString());
    }
    else {
        console.log(new Date(date).toUTCString());
    }
}
const date1 = Date.now();
const date2 = '2021-09-01';
class User {
    constructor(name) {
        this.name = name;
    }
}
class Company {
    constructor(name) {
        this.name = name;
    }
}
function printName(entity) {
    if (entity instanceof User) {
        console.log(entity.name);
    }
    else {
        console.log(entity.name);
    }
}
function getFarmAnimalSound(animal) {
    switch (animal.kind) {
        case 'rooster':
            console.log("Cockadoooodle doo");
            break;
        case 'cow':
            console.log("Moo");
            break;
        case 'pig':
            console.log("Oink");
            break;
        case 'sheep':
            console.log("Baa");
            break;
        default:
            /* const shouldNeverGetHere: never = animal;
            return shouldNeverGetHere; */
            const _exhaustiveCheck = animal;
            return _exhaustiveCheck;
    }
}
const cow = { name: 'Betsy', weight: 500, age: 5, kind: 'cow' };
const rooster = { name: 'Rufus', weight: 5, age: 1, kind: 'rooster' };
const pig = { name: 'Porky', weight: 200, age: 3, kind: 'pig' };
getFarmAnimalSound(cow);
getFarmAnimalSound(rooster);
getFarmAnimalSound(pig);
