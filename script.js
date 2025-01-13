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