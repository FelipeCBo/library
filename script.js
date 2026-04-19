const myLibrary = [];

function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function displayBooks() {
    const container = document.getElementById("library");
    container.innerHTML = "";

    myLibrary.forEach(book => {
        const div = document.createElement("div");
        div.classList.add("book-card")

        div.innerHTML = `
            <h3>${book.title}</h3>
            <p>by ${book.author}</p>
            <p>${book.pages} pages</p>
            <p>${book.read ? "Read" : "Not read"}</p>

            <button class="remove-button" onclick="removeBook('${book.id}')">Remove</button>
            <button class="toggleRead" onclick="toggleRead('${book.id}')">Toggle Read</button>
        `;

        container.appendChild(div);
    });
}

const form = document.getElementById("bookForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;

    addBookToLibrary(title, author, pages, read);
    displayBooks();
    form.reset();
});

function removeBook(id) {
    const index = myLibrary.findIndex(book => book.id === id);
    if (index !== -1) { 
        myLibrary.splice(index, 1);
    }
    displayBooks();
};

Book.prototype.toggleRead = function() {
    this.read = !this.read;
};

function toggleRead(id) {
    const book = myLibrary.find(book => book.id === id);
    if (book) {
        book.toggleRead();
    };
    displayBooks();
};

addBookToLibrary("Dom Casmurro", "Miguel de Cervantes", 300, true)
displayBooks()