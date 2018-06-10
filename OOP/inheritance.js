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

// Magazzine constructor
function Magazzine(title, author, year, month) {
    Book.call(this, title, author, year);

    this.month = month;
}

// Inheritate Prototype
Magazzine.prototype = Object.create(Book.prototype);

// Inheritate Magazzine
const mag1 = new Magazzine('Magzzine Super', 'John Doe', '2018', 'Jan');

console.log(mag1.getInfo());