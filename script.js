let myLibrary = [
    {title: "The Hobbit", author:"JRR Tolkien", pages: 120, read: "Yes"}
];
let count = 0;

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
    let title = prompt("Enter title of the book");
    let author = prompt("Enter author of the book");
    let pages = prompt("Enter total no. of pages");
    let read = prompt("Have you read the book? Yes/No");
    let newBook = new book(title, author, pages, read);
    myLibrary.push(newBook);
    count++;
    render(count);
}

document.getElementById("add").onclick = function() {
    addToLibrary();
    console.log(myLibrary);
}

// document.getElementById("container").onclick = function() {
//     // let id = document.querySelector("this.id");
//     myLibrary.splice(id, 1);
//     console.log(id);
// }

function createRecord(item, size) {
    let record = document.createElement('div');
    record.id = `${size}`;
    record.innerHTML = `<p>Book Title: ${item.title} <br>Author: 
                ${item.author} <br>No. of Pages: ${item.pages} <br>Read? (Yes/No): ${item.read}
                 <br> <button id="${size}">Remove</button></p>`;
    container.appendChild(record);
}

function render(count) {
    for(let i = count; i < myLibrary.length; i++) {
        createRecord(myLibrary[i], i);
    }
}


render(count);