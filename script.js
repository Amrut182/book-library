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

function removeRecord(id) {
    myLibrary.splice(id, 1); //removing from array
    let elem = document.getElementById(`${id}`); 
    elem.remove(); //removing object
    count--;
}

// function ifRead(id, item) {
//     // let x = document.getElementById(`${id}`);
//     if(item === "Yes") {
//         item = "No";
//     }
//     else if(item === "No") {
//         item = "Yes";
//     }
// } 

function createRecord(item, size) {
    let record = document.createElement('div');
    record.id = `${size}`;
    let ifread = item.read; console.log(ifread);
    record.innerHTML = `<p>Book Title: ${item.title} <br>Author: 
                ${item.author} <br>No. of Pages: ${item.pages} <br> 
                <button id="${size}" onclick="removeRecord(thils.id)">Remove</button> 
                <button id="${size}">
                Read(Yes/No)?: ${item.read}</button></p>`;
    container.appendChild(record);
}

function render(count) {
    for(let i = count; i < myLibrary.length; i++) {
        createRecord(myLibrary[i], i);
    }
}

render(count);