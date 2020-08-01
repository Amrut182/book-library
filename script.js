let myLibrary = [
    {title: "The Hobbit", author:"JRR Tolkien", pages: 120, read: "Yes"}
];
let count = 0;

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
    while(true) {
        if(read === 'Yes' || read === 'No') {
            break;
        } else read = prompt("Please enter 'Yes' or 'No'")
    }
    
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
    alert(myLibrary[id].read);
    myLibrary.splice(id, 1); //removing from array
    let elem = document.getElementById(`${id}`); 
    elem.remove(); //removing object
    count--;
}

function toggle(id, realId){
    console.log(id);
    let item = myLibrary[realId].read;

    if(document.getElementById(`${id}`).innerHTML=="Yes"){
        item = "No"; console.log(item);
        document.getElementById(`${id}`).innerHTML=item;
    }

    else if(document.getElementById(`${id}`).innerHTML=="No"){
        item = "Yes"; console.log(item);
        document.getElementById(`${id}`).innerHTML=item;
    }
}

function createRecord(item, size) {
    let record = document.createElement('div');
    record.id = `${size}`;
    record.innerHTML = `<p>Book Title: ${item.title} <br>Author: 
                ${item.author} <br>No. of Pages: ${item.pages} <br>  
                Read(Yes/No)?: <button id="a${size}" onclick="toggle(this.id, ${size});">${item.read}</button>
                <button id="${size}" onclick="removeRecord(this.id)">Remove</button></p>`;
    container.appendChild(record);
}

function render(count) {
    for(let i = count; i < myLibrary.length; i++) {
        createRecord(myLibrary[i], i);
    }
}

render(count);