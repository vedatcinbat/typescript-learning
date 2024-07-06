/* type Point = {
    x: number,
    y: number
}

const pt: Point = { x: 10, y: 20 }; */
var shoes = {
    name: 'Nike Air Max',
    price: 100,
    applyDiscount: function (amount) {
        var newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    }
};
console.log(shoes.applyDiscount(0.4));
var fido = {
    name: 'Fido',
    age: 3,
    breed: 'Golden Retriever',
    //bark: () => 'Woof'
    bark: function () {
        return "Woof Woof!";
    }
};
var pierre = {
    name: 'Pierre',
    id: 123,
    email: 'pierre@gmail.com',
    level: 'Senior',
    languages: ['JavaScript', 'TypeScript', 'Python']
};
console.log(pierre);
