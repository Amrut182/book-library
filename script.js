let myLibrary = [
    {title: "The Hobbit", author:"JRR Tolkien", pages: 120, read: "Yes"}
];

console.log(myLibrary);

function Book() {
}

function book(title, author, pages, read ) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`; 
    }
}

function addToLibrary() {
    let title1 = prompt("Enter title of the book");
    let author1 = prompt("Enter author of the book");
    let pages1 = prompt("Enter total no. of pages");
    let read1 = prompt("Have you read the book? Yes/No");
    let newBook = new book(title1, author1, pages1, read1);
    myLibrary.push(newBook);
}

document.getElementById("add").onclick = function() {
    addToLibrary();
    console.log(myLibrary);
}

function createRecord(item) {
    let record = document.createElement('div');
    record.id = 'container';

    container.appendChild(div);
    turnOpaque(div);
}