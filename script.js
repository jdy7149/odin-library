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