// An array to store books
const myLibrary = [];

// DOM elements for the add book dialog
const addBookDialog = document.querySelector("#addBookDialog");
const addBookButton = document.querySelector("#btnAddBook");
const cancelButton = document.querySelector("#btnCancel");
const outputBox = document.querySelector("output");
const confirmButton = document.querySelector("#btnConfirm");
const authorInput = document.querySelector("#author");
const titleInput = document.querySelector("#title");
const pagesInput = document.querySelector("#pages");
const readCheckbox = document.querySelector("#read");

// Add event listeners
addBookButton.addEventListener("click", () => {
    addBookDialog.showModal();
});

cancelButton.addEventListener("click", () => {
    addBookDialog.close("cancel");
});

confirmButton.addEventListener("click", (event) => {
    event.preventDefault();
    addBookDialog.close("confirm");
});

addBookDialog.addEventListener("close", (e) => {
    if (addBookDialog.returnValue === "confirm") {
        const book = new Book(titleInput.value, authorInput.value, pagesInput.value, readCheckbox.checked);
        myLibrary.push(book);
        displayOneBook(book);
    }  
    clearDialog();  
})

// The book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        let readString = "not read yet";
        if (read === true) {
            readString = "already read";
        }
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readString}.`
    }
}

// A function to create a book and add it to the library
function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
}

// Display all books in library
function displayAllBooks() {
    var tableRef = document.getElementById("table");
    myLibrary.forEach(book => {
       displayOneBook(book);
    });
}

// Display one (more) book
function displayOneBook(book) {
    var tableRef = document.getElementById("table");

    // Insert a row
    var newRow = tableRef.insertRow();

    // Add a cell to the row for the title
    var newCell = newRow.insertCell();
    newCell.innerText = book.title;

    // Add a cell for the author
    newCell = newRow.insertCell();
    newCell.innerText = book.author;
    
    // Add a cell for the number of pages
    newCell = newRow.insertCell();
    newCell.innerText = book.pages;

    // Add a cell for the read status
    newCell = newRow.insertCell();
    var newTextNode = document.createTextNode(book.read);
    newCell.appendChild(newTextNode);
}

// Function to clear the dialog fields
function clearDialog() {
    authorInput.value = "";
    titleInput.value = "";
    pagesInput.value = "";
    readCheckbox.checked = false;
}

// Books added for testing
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 346, true);
addBookToLibrary("The Starter Villain", "John Scalzi", 264, true);
addBookToLibrary("The Three-Body Problem", "Liu Cixin", 448, true);
addBookToLibrary("Team of Five", "Kate Anderson Brower", 320, false);

displayAllBooks();
