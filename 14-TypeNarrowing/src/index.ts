function triple(value: number | string) {
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
} else if (!el) {
    console.log('Element not found');
}


const printLetters = (word: string | null) => {
    if (!word) {
        console.log('No word provided')
    } else {
        for (const char of word) {
            console.log(char);
        }
    }
}

printLetters('Hello');
printLetters(null); // No word provided


const someDemo = (x: string | number, y: string | boolean) => {
    if (x === y) {
        x.toUpperCase()
    } else {
        console.log('No match');
    }
}

someDemo('hi', 'hi'); // Match
someDemo('hi', true); // No match
someDemo(3, "3"); // No match


/* type Cat = {meow: () => void};
type Dog = {bark: () => void};

const talk = (creature: Cat | Dog) => {
    if("meow" in creature) {
        console.log(creature.meow())
    }else {
        console.log(creature.bark())
    }
}

const kitty: Cat = {meow: () => "MEOOW"};
const doggy: Dog = {bark: () => "WOOF"};
talk(kitty)
talk(doggy) */



interface Movie {
    title: string;
    duration: number;
}

interface TVShow {
    title: string;
    numEpisodes: number;
    episodeDuration: number;
}

function getRuntime(media: Movie | TVShow) {
    if ("numEpisodes" in media) {
        return media.numEpisodes * media.episodeDuration;
    }
    return media.duration;
}

const movie: Movie = { title: 'Inception', duration: 120 };
const show: TVShow = { title: 'Breaking Bad', numEpisodes: 62, episodeDuration: 45 };

console.log(getRuntime(movie)); // 120
console.log(getRuntime(show)); // 2790

// Instanceof
function printFullDate(date: Date | string) {
    if (date instanceof Date) {
        console.log(date.toUTCString());
    } else {
        console.log(new Date(date).toUTCString());
    }
}

const date1 = Date.now();
const date2 = '2021-09-01';



class User {
    constructor(public name: string) { }
}

class Company {
    constructor(public name: string) { }
}

function printName(entity: User | Company) {
    if (entity instanceof User) {
        console.log(entity.name);
    } else {
        console.log(entity.name);
    }
}


/* interface Cat {
    name: string;
    numLives: number;
}

interface Dog {
    name: string;
    breed: string;
}

function isCat(animal: Cat | Dog): animal is Cat {
    return (animal as Cat).numLives !== undefined;
}

function makeNoise(animal: Cat | Dog): string {
    if(isCat(animal)) {
        return "Meow"
    }
    return "Woof"
} */


// Discriminated Unions
interface Rooster {
    name: string;
    weight: number;
    age: number;
    kind: 'rooster';
}

interface Cow {
    name: string;
    weight: number;
    age: number;
    kind: 'cow';
}

interface Pig {
    name: string;
    weight: number;
    age: number;
    kind: 'pig';
}

interface Sheep {
    name: string;
    weight: number;
    age: number;
    kind: 'sheep';
}

type FarmAnimal = Pig | Cow | Rooster | Sheep;


function getFarmAnimalSound(animal: FarmAnimal) {
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
            const _exhaustiveCheck: never = animal;
            return _exhaustiveCheck;
    }
}


const cow: Cow = { name: 'Betsy', weight: 500, age: 5, kind: 'cow' };
const rooster: Rooster = { name: 'Rufus', weight: 5, age: 1, kind: 'rooster' };
const pig: Pig = { name: 'Porky', weight: 200, age: 3, kind: 'pig' };

getFarmAnimalSound(cow);
getFarmAnimalSound(rooster);
getFarmAnimalSound(pig);


