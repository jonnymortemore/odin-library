const myLibrary = [];
addBookToLibrary("The Fellowship of the Ring", "J.R.R Tolkien", "1000");
addBookToLibrary("The Expanse", " James S. A. Corey", "800");
displayBooks();



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

    



function Book(title, author, pages) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
    this.info = () => {
        if (this.read) {
            return "Book read.";
        } else {
            return "Book not read";
        }
    }
}

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
        const bookRead = document.createElement('td');
        const button = document.createElement('button');
        const buttonTd = document.createElement('td');
        const buttonTdRead = document.createElement('td');
        const buttonRead = document.createElement('button');

        button.className = "deleteBook";
        button.innerText = "Delete Book";
        button.dataset.id = e.id;
        //event listener to delete row on click
        button.addEventListener('click', (event) => {
            // loop through all book objects in array - on id match - splice list
            myLibrary.forEach((book, index) => {
                console.log(book);
                if (book.id === event.target.dataset.id) {
                    //splice(start, deleteCount)
                    myLibrary.splice(index, 1);
                }
            });
            displayBooks();
        });
        buttonTd.append(button);

        buttonRead.className = "setRead";
        buttonRead.innerText = "Set Read";
        buttonRead.dataset.id = e.id;
        buttonRead.addEventListener('click', (event) => {
            // loop through all book objects in array - on id match - splice list
            myLibrary.forEach((book, index) => {
                console.log(book);
                if (book.id === event.target.dataset.id) {
                    //this toggles the boolean
                    book.read = !book.read;
                }
            });
            displayBooks();
        });



        buttonTdRead.append(buttonRead);


        bookRow.className = "bookRow";
        bookName.innerText = e.title;
        bookAuthor.innerText = e.author;
        bookPages.innerText = e.pages;
        bookRead.innerText = e.info();

        bookRow.append(bookName);
        bookRow.append(bookAuthor);
        bookRow.append(bookPages);
        bookRow.append(bookRead);
        bookRow.append(buttonTdRead);
        bookRow.append(buttonTd);
        bookDisplay.append(bookRow);
    });
    
}

