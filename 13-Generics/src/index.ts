/* function doThing(thing: number | string): number | string {
    return thing;
}

// const nums: number[] = [];
const nums: Array<number> = [];
const colors: Array<string> = [];

const inputEl = document.querySelector<HTMLInputElement>('#username')!;
inputEl.value = "Hacked"

console.dir(inputEl);

const button = document.querySelector<HTMLButtonElement>(".btn")!;

button.addEventListener('click', () => {
    console.log("Button was clicked");
}); */


/* function numberIdentity(item: number): number {
    return item;
}
function stringIdentity(item: string): string {
    return item;
}
function booleanIdentity(item: boolean): boolean {
    return item;
} */

/* function identity(item: any): any {
    return item;
}
 */
/* function identity<T>(item: T): T {
    return item;
}

identity<number>(1);
identity<string>("Hello");
identity<boolean>(true);



function returnArr<T>(items: T[]): T[] {
    return items;
}

returnArr<number>([1, 2, 3]);
returnArr<string>(["a", "b", "c"]);
returnArr<boolean>([true, false, true]); */


function getRandomElement<T>(items: T[]): T {
    return items[Math.floor(Math.random() * items.length)];
}

const randomStr = getRandomElement<string>(["a", "b", "c"]);
const randomNum = getRandomElement<number>([1, 2, 3]);
const randomBool = getRandomElement<boolean>([true, false, true]);

console.log(randomStr);
console.log(randomNum);
console.log(randomBool);




/* type Cat = {
    name: string;
    age: number;
}

function getRandomCat<Cat>(cats: Cat[]): Cat {
    const randomCat = cats[Math.floor(Math.random() * cats.length)];
    return randomCat;
}

const catArr = [
    {
        name: "Fluffy",
        age: 2
    },
    {
        name: "Whiskers",
        age: 3
    },
    {
        name: "Socks",
        age: 4
    }
] */

//const randomCat = getRandomCat<Cat>(catArr);

//console.log(randomCat);


function merge<T extends object, U extends object>(obj1: T, obj2: U): T & U {
    return {
        ...obj1,
        ...obj2
    }
}

//const wrongComboObj = merge({name: "Vedat"}, 9); // Error: Argument of type '9' is not assignable to parameter of type 'object'
const wrongComboObj = merge({name: "Vedat"}, {num: 9});
console.log(wrongComboObj);

const comboObj = merge(
    {
        name: "Vedat"
    },
    {
        pets: ["a", "b", "c"]
    }
)

console.log(comboObj);



// We can extends multiple types with interfaces
interface Lengthy {
    length: number;
}
/* 
function printDoubleLength<T extends Lengthy>(thing: T): number {
    return thing.length * 2;
}
 */

function printDoubleLength(thing: Lengthy): number {
    return thing.length * 2;
}
printDoubleLength("Hello");
//printDoubleLength(234);


function makeEmptyArray<T = number>(): T[] {
    return [];
}

const nums = makeEmptyArray(); // It is number[] by default
const bools = makeEmptyArray<boolean>(); // It is boolean[]



interface Song {
    title: string;
    artist: string;
}

interface Video {
    title: string;
    creator: string;
    resolution: string;
}

class VideoPlaylist {
    public videos: Video[] = [];
}

class SongPlaylist {
    public songs: Song[] = [];
}


class Playlist<T> {
    public queue: T[] = [];

    add(el: T) {
        this.queue.push(el);
    }

}

const songs = new Playlist<Song>();
const videos = new Playlist<Video>();

songs.add({
    title: "Song1",
    artist: "Artist1"
});

videos.add({
    title: "Video1",
    creator: "Creator1",
    resolution: "1080p"
});

console.log(songs.queue);
console.log(videos.queue);









