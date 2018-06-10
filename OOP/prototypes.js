// constructor
function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}

// prototype
// getInfo
Book.prototype.getInfo = function() {
    return `${this.title} was written by
    ${this.author} in ${this.year}`;
}

// getAge
Book.prototype.getAge = function(){
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old.`
}

// Initialize
const book5 = new Book('Jungle Book', 'Someone', '2016');
const book6 = new Book('Peter Pan', 'Another person', '2000');

console.log(book5.getInfo());
console.log(book5.getAge());