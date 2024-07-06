type Song = { 
    title: string, 
    artist: string, 
    numStreams: number, 
    credits: { 
        producer: string, 
        writer: string 
    } 
}

function calculatePayout(song: Song): number {
    return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
    console.log(`Title: ${song.title} - Artist: ${song.artist}`);
}

const mySong: Song = {
    title: "Unchained Melody",
    artist: "The Righteous Brothers",
    numStreams: 1236573,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North"
    }
}

const earnings = calculatePayout(mySong); // OK
console.log(earnings);
printSong(mySong); // OK


// Optional Properties

type Point = {
    x: number,
    y: number,
    z?: number // Optional property
}

const point1: Point = { x: 1, y: 2 }; // OK
const point2: Point = { x: 1, y: 2, z: 3 }; // OK
//const point3: Point = { x: 1 }; // Error: Property 'y' is missing


// Readonly Properties
type User = {
    readonly id: number,
    username: string,
    readonly hobbies: string[]
}

const user: User = {
    id: 1,
    username: "johndoe",
    hobbies: ["reading", "swimming"]
}

//user.id = 2; // Error: Cannot assign to 'id' because it is a read-only property
user.username = "janedoe"; // OK
user.hobbies.push("running"); // OK