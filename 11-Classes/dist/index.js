class Player {
    static description = "Player In Our Game";
    #score = 0;
    numLives = 10;

    constructor(first, last) {
        this.first = first;
        this.last = last;
        this.#secret();
    }

    static randomPlayer() {
        const firstNames = ["Charlie", "Lucy", "Linus", "Schroeder", "Snoopy"];
        const lastNames = ["Brown", "van Pelt", "van Pelt", "van Pelt", "Brown"];
        const first = firstNames[Math.floor(Math.random() * firstNames.length)];
        const last = lastNames[Math.floor(Math.random() * lastNames.length)];
        return new Player(first, last);
    }

    get fullName() {
        return this.first + " " + this.last;
    }

    set fullName(newFullName) {
        const names = newFullName.trim().split(" ");
        this.first = names[0];
        this.last = names[1];

        console.log("New Full Name: " + this.first + " " + this.last);
    }

    get score() {
        return this.#score;
    }

    set score(newScore) {
        if (newScore > 1000) {
            console.log("Cheater!!! You cannot score more than 1000 points!" + newScore);
            return;
        }
        if(newScore < 0) {
            console.log("Score can't be negative!");
            return;
        }
        this.#score = newScore;
    }

    taunt() {
        console.log("BOO!")
    }

    loseLife() {
        this.numLives--;
    }

    #secret() {
        console.log("This is a secret method");
    
    }
}

class AdminPlayer extends Player {
    isAdmin = true;

    constructor(first, last, powers) {
        super(first, last);
        this.powers = powers;
    }
};

const adminPlayer = new AdminPlayer("mick", "cinbat", ["create", "delete", "update"]);

const player1 = new Player("vedat", "cinbat");
//player1.taunt();
console.log("Player1 numLives : " + player1.numLives);
player1.loseLife();
console.log("Player1 numLives : " + player1.numLives);

console.log(player1.score);
console.log("Player1 score : " + player1.score);
player1.score = 100123123
console.log(player1.score);

console.log("FullName Player1: " + player1.fullName);
console.log("Score Player1: " + player1.score)

player1.fullName = "John Cinbat";

console.log(player1)

// player1.#secret();

/* 
console.log("Player1 first : " + player1.first);
console.log("Player1 last : " + player1.last);

console.log(player1) */


/* const player2 = new Player("charlie", "brown");
player2.taunt();
console.log(player2) */

console.log(adminPlayer);
adminPlayer.taunt();
console.log(player1);