const myLibrary = [];
addBookToLibrary();
displayBooks();

function Book(title, author, pages) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
    this.info = () => {
        let text = `${this.title}, ${this.pages} pages`
        if (this.read) {
            text = text + ", book read."
        } else {
            text = text + ", book not read"
        }
        return text
    }
}



function addBookToLibrary() {
    myLibrary.push(new Book("The Fellowship of the Ring", "J.R.R Tolkien", "1000"));
    myLibrary.push(new Book("The Expanse", " James S. A. Corey", "800"));
}



function displayBooks() {
    const bookDisplay = document.querySelector('tbody');
    myLibrary.forEach((e) => {
        const bookRow = document.createElement('tr');
        const bookName = document.createElement('td');
        const bookAuthor = document.createElement('td');
        const bookPages = document.createElement('td');

        bookName.innerText = e.title;
        bookAuthor.innerText = e.author;
        bookPages.innerText = e.pages;
        bookRow.append(bookName);
        bookRow.append(bookAuthor);
        bookRow.append(bookPages);
        bookDisplay.append(bookRow);
    });
    
}

