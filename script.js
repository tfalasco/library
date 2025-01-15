const myLibrary = [];

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

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
}

// Books added for testing
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 346, true);
addBookToLibrary("The Starter Villain", "John Scalzi", 264, true);
addBookToLibrary("The Three-Body Problem", "Liu Cixin", 448, true);
addBookToLibrary("Team of Five", "Kate Anderson Brower", 320, false);
