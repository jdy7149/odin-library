// Initial elements
const myLibrary = [
    new Book('To Kill a Mockingbird',
        'Harper Lee',
        281,
        true
    ),
    new Book('1984',
        'George Orwell',
        328,
        false
    ),
    new Book('The Great Gatsby',
        'F. Scott Fitzgerald',
        180,
        true
    )
];

// Book's constructor
function Book(title, author, pages, isRead) {
    if (!new.target) 
        throw Error("Need to use 'new' operator to call the constructor");
    
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

// Components
const contentContainer = document.querySelector('.content');
const modal = document.querySelector('#addBookModal');

// Functions
function addBookToLibrary(title, author, pages, isRead) {
    myLibrary.push(new Book(title, author, pages, isRead));
}

const clearBooks = function () {
    while (contentContainer.lastElementChild) {
        contentContainer.removeChild(contentContainer.lastElementChild);
    }
};

const getCardByBook = function (book) {
    const card = document.createElement('div');
    card.classList.add('card');

    // Add p
    const p = document.createElement('p');
    p.innerHTML = `Title: ${book.title}<br>Author: ${book.author}<br>Pages: ${book.pages}<br>`;
    card.appendChild(p);

    // Add buttons
    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');

    const toggleReadBtn = document.createElement('button');
    toggleReadBtn.classList.add(book.isRead? 'read' : 'unread');
    toggleReadBtn.type = 'button';
    toggleReadBtn.textContent = book.isRead ? 'Read' : 'Not read';
    btnContainer.appendChild(toggleReadBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('.delete');
    deleteBtn.type = 'button';
    deleteBtn.textContent = 'Delete';
    btnContainer.appendChild(deleteBtn);

    card.appendChild(btnContainer);
    return card;
};

const displayBooks = function () {
    clearBooks();

    myLibrary
        .map(getCardByBook)
        .forEach(card => contentContainer.appendChild(card));
};

const deleteBook = function (bookId) {
    const idx = myLibrary.findIndex(book => book.id === bookId);
    if (idx !== 1){
        myLibrary.splice(idx, 1);
    }
};

// Events

// Open modal
document.querySelector('#add').addEventListener('click', () => {
    document.querySelector('#addBookModal').showModal();
});

// Submit new book's info through modal's form
const modalForm = modal.querySelector('form');
modalForm.addEventListener('submit', e => {
    e.preventDefault();

    const title = modal.querySelector('#title').value;
    const author = modal.querySelector('#author').value;
    const pages = parseInt(modal.querySelector('#pages').value);
    const isRead = modal.querySelector('#read').checked;

    addBookToLibrary(title, author, pages, isRead);
    modal.close();
    displayBooks();
});

// Close modal
modal.querySelector('#cancel').addEventListener('click', () => {
    modal.close();
});

// Clear inputs of modal
modal.addEventListener('close', () => modalForm.reset());




displayBooks();