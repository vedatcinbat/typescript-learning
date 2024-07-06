type Circle = {
    radius: number;
}

type Colorful = {
    color: string;
}

type ColorfulCircle = Circle & Colorful;    

const happyFace: ColorfulCircle = {
    radius: 42,
    color: "yellow"
}

const sadFace: ColorfulCircle = {
    radius: 50,
    color: "blue"
}

console.log(happyFace);
console.log(sadFace);

type Cat = {
    numLives: number;
}

type Dog = {
    breed: string;
}


type CatDog = Cat & Dog & {
    age: number
};

const christy: CatDog = {
    numLives: 79,
    breed: "Husky",
    age: 9
}

console.log(christy);
