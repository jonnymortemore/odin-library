const myLibrary = [];
addBookToLibrary("The Fellowship of the Ring", "J.R.R Tolkien", "1000");
addBookToLibrary("The Expanse", " James S. A. Corey", "800");
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

document.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    addBookToLibrary(form.get("book-name"), form.get("author"), form.get("pages"));
    displayBooks();
});

document.querySelector("#showBookForm").addEventListener("click",  () => {
    const form = document.querySelector("form");
    if (form.className == "visible") {
        form.className = "hidden";
        return;
    }
    if (form.className == "hidden") {
        form.className = "visible";
    }
});


function addBookToLibrary(title, author, pages) {
    myLibrary.push(new Book(title, author, pages));
}



function displayBooks() {
    const bookDisplay = document.querySelector('tbody');
    document.querySelectorAll(".bookRow").forEach((el) => {
        el.remove();
    })
    myLibrary.forEach((e) => {
        const bookRow = document.createElement('tr');
        const bookName = document.createElement('td');
        const bookAuthor = document.createElement('td');
        const bookPages = document.createElement('td');
        bookRow.className = "bookRow";
        bookName.innerText = e.title;
        bookAuthor.innerText = e.author;
        bookPages.innerText = e.pages;
        bookRow.append(bookName);
        bookRow.append(bookAuthor);
        bookRow.append(bookPages);
        bookDisplay.append(bookRow);
    });
    
}

