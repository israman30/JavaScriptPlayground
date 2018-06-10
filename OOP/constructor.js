// constructor
function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;

    this.getInfo = function(){
        return `${this.title} was written by
        ${this.author} in ${this.year}`;
    }
}

// Initialize
const book3 = new Book('Jungle Book', 'Someone', '2016');
const book4 = new Book('Peter Pan', 'Another person', '2000');

// console.log(book3.getInfo());