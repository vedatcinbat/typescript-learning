interface Chicken {
    breed: string;
    eggsPerWeek: number;
    name: string;
    age: number;
}

const norma: Chicken = {
    breed: 'Rhode Island Red',
    eggsPerWeek: 5,
    name: 'Norma',
    age: 2
}

const juniper: Chicken = {
    breed: 'Buff Orpington',
    eggsPerWeek: 3,
    name: 'Juniper',
    age: 1
}

console.log(norma);

function doThing(thing) {
    console.log(thing);
}