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

function Book(title, author, pages, isRead) {
    if (!new.target) 
        throw Error("Need to use 'new' operator to call the constructor");
    
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(title, author, pages, isRead) {
    myLibrary.push(new Book(title, author, pages, isRead));
}

const contentContainer = document.querySelector('.content');

const displayBooks = function () {
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

document.querySelector('#add').addEventListener('click', () => {
    document.querySelector('#addBookModal').showModal();
});


displayBooks();