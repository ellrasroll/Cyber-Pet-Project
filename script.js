class Animal {
    constructor(health, hunger, thirst, happiness ) {
    this.health = health;
    this.hunger = hunger;
    this.thirst = thirst;
    this.happiness = happiness;
}

feed() {
    this.health += 3;
    this.hunger += 5;
    this.thirst += 0;
    this.happiness += 2;
}

drink() {
    this.health += 3;
    this.hunger += 0;
    this.thirst += 5;
    this.happiness += 2;
}

stroke() {
    this.health += 2;
    this.hunger += 0;
    this.thirst += 0;
    this.happiness += 5;
}

play () {
    this.health += 3;
    this.hunger += -1;
    this.thirst += -1;
    this.happiness += 7;
}

updateStats() {
    this.health -= 1;
    this.hunger -= 2;
    this.thirst -= 2;
    this.happiness -= 1;
}
}

class Cat extends Animal {
    constructor() {
        super(8, 12, 15)
        this.color = 'Black'
    }


FurBall() {
    this.health += 5;
    this.hunger += 0;
    this.thirst += 0;
    this.happiness += 5;
}
}