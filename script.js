// An array to store books
const myLibrary = [];

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
        // Insert a row
        var newRow = tableRef.insertRow();

        // Add a cell to the row for the title
        var newCell = newRow.insertCell();
        newCell.innerHTML = book.title;

        // Add a cell for the author
        newCell = newRow.insertCell();
        newCell.innerHTML = book.author;
        
        // Add a cell for the number of pages
        newCell = newRow.insertCell();
        newCell.innerHTML = book.pages;

        // Add a cell for the read status
        newCell = newRow.insertCell();

        newCell.innerHTML = book.read;
    });
}

// Books added for testing
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 346, true);
addBookToLibrary("The Starter Villain", "John Scalzi", 264, true);
addBookToLibrary("The Three-Body Problem", "Liu Cixin", 448, true);
addBookToLibrary("Team of Five", "Kate Anderson Brower", 320, false);

displayAllBooks();
