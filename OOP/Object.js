const obj1 = 'Hello';
// console.log(typeof obj1);

const obj2 = new String('Hello');
// console.log(typeof obj2);

// DOM objct
// console.log(window);
// alert('hello world');

// console.log(navigator.appVersion);

// Object literal
const book1 = {
    title: 'John Doe',
    author: 'Pedro Picapiedra',
    year: 2018,
    // Adding a method to call the object
    getInfo: function(){
        return `${this.title} was written by
        ${this.author} in ${this.year}`;
    }
};

const book2 = {
    title: 'John Doe',
    author: 'Pedro Picapiedra',
    year: 2018,
    // Adding a method to call the object
    getInfo: function(){
        return `${this.title} was written by
        ${this.author} in ${this.year}`;
    }
};

// console.log(book1.getInfo());
// console.log(Object.values(books));