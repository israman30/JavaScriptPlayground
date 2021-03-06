 // Initialized class
class Human {
    // properties
    constructor(name, age){
        this.arms = 2;
        this.head = 1;
        this.myName = name;
        this.myAge = age;
    }

    walk() {
        return `${this.myName} is ${this.myAge} years old and walks...!`;
    }
}

// Extending classes
class Man extends Human {
    // Constructor
    constructor(name, age, last){
        super(name, age);
        this.lastName = last;
    }
}

class Woman extends Human {
    constructor(name, age, color) {
        super(name, age);
        this.hair = color;
    }
}
// Instances of a class

const person1 = new Human('Israel', 42);
const person2 = new Human('Audra', 40);
const man1 = new Man('Oliver', 1,'Manzo');

const woman1 = new Woman('Audra', 40, 'brown hair color');

console.log(woman1.myName + ' is ' + woman1.myAge + ' years old, and has ' + woman1.hair);
// console.log(man1.myName + ' ' + man1.lastName + ' is ' + man1.myAge + ' year old ');
// console.log(man1.walk());