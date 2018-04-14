 // Initialized class
class Human {
    // properties
    constructor(name, age){
        this.arms = 2;
        this.head = 1;
        this.myName = name;
        this.myAge = age;
    }
}

// Instances of a class

const species = new Human('Israel', 42);
const person = new Human('Audra', 40);

console.log('The human has ' + species.arms + ' arms');
console.log(person.myName + ' is my wife, she is ' + person.myAge + ' years old!');

console.log('The human is ' + species.myName);

console.log(species.myName + ' is ' + species.myAge + ' years old!');