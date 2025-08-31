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

const clearContent = function () {
    while (contentContainer.lastElementChild) {
        contentContainer.removeChild(contentContainer.lastElementChild);
    }
};

const displayBooks = function () {
    clearContent();
    
    myLibrary.forEach(book => {
        const card = document.createElement('div');
        
        for (const prop in book) {
            if (prop === 'id') continue;

            if (prop === 'isRead') {
                
            }

            const p = document.createElement('p');
            p.textContent = book[prop];
            card.appendChild(p);
        }

        contentContainer.appendChild(card);
    });
};

// Events
document.querySelector('#add').addEventListener('click', () => {
    document.querySelector('#addBookModal').showModal();
});

const modalForm = modal.querySelector('form');
modalForm.addEventListener('submit', e => {
    e.preventDefault();

    const title = modal.querySelector('#title').value;
    const author = modal.querySelector('#author').value;
    const pages = parseInt(modal.querySelector('#pages').value);
    const isRead = modal.querySelector('#read').checked;

    myLibrary.push(new Book(title, author, pages, isRead));
    modal.close();
    displayBooks();
});

modal.querySelector('#cancel').addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('close', () => modalForm.reset());




displayBooks();