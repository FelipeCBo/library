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

        div.innerHTML = `
            <h3>${book.title}</h3>
            <p>by ${book.author}</p>
            <p>${book.pages} pages</p>
            <p>${book.read ? "Read" : "Not read"}</p>

            <button onclick="removeBook('${book.id}')">Remove</button>
            <button onclick="toggleRead('${book.id}')">Toggle Read</button>
        `;

        container.appendChild(div);
    });
}

const Form = document.getElementById("bookForm");

Form.addEventListener("submit", function(e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;

    addBookToLibrary(title, author, pages, read);
    displayBooks();
});

function removeBook(id) {
    const index = myLibrary.findIndex(book => book.id === id);
    myLibrary.splice(index, 1);
    displayBooks();
};

Book.prototype.toggleRead = function() {
    this.read = !this.read;
};

<button onclick="toggleRead('%(book.id}')">Toggle Read</button>

function toggleRead(id) {
    const book = myLibrary.find(book => book.id === id);
    book.toggleRead();
    displayBooks();
};