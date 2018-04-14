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

// Instances of a class

const person1 = new Human('Israel', 42);
const person2 = new Human('Audra', 40);

// console.log('The human has ' + species.arms + ' arms');
// console.log(person.myName + ' is my wife, she is ' + person.myAge + ' years old!');

// console.log('The human is ' + species.myName);

// console.log(species.myName + ' is ' + species.myAge + ' years old!');
console.log(person1.walk());