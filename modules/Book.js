const booksContainer = document.querySelector('.book-container');


export default class Book {
    static collection = [];

    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    static saveDataLocally = () => {
        const stringifiedLibrary = JSON.stringify(Book.collection);
        localStorage.setItem('library', stringifiedLibrary);
    }

    removeBook = () => {
        Book.collection = Book.collection.filter((book) => book.title !== this.title
            || book.author !== this.author);
        Book.saveDataLocally();
    };

    addBook = () => {
        Book.collection.push(this);
        Book.saveDataLocally();
        this.displayBook();
    }

    displayBook = () => {
        const bookCard = document.createElement('div');
        const cardTitle = document.createElement('p');
        const removeButton = document.createElement('button');

        bookCard.classList.add('book-Card');

        cardTitle.textContent = `"${this.title}"   by   ${this.author}`;
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove');

        bookCard.appendChild(cardTitle);
        bookCard.appendChild(removeButton);

        booksContainer.appendChild(bookCard);

        removeButton.addEventListener('click', () => {
            this.removeBook();
            Book.saveDataLocally();
            booksContainer.removeChild(bookCard);
        });
    }
}