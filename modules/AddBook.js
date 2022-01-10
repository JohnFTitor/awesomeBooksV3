import Book from './Book.js';

const inputTitle = document.querySelector('#title');
const inputAuthor = document.querySelector('#author');
const indicator = document.querySelector('#indicator');

const checkRepetition = (book) => { //function checkREpetition(book)
  for (let i = 0; i < Book.collection.length; i += 1) {
    const currentBook = Book.collection[i];
    if (currentBook.title.toLowerCase() === book.title.toLowerCase()
            && currentBook.author.toLowerCase() === book.author.toLowerCase()) {
      indicator.textContent = 'Book already added';
      return false;
    }
  }
  return true;
}

const addBookToLibrary = () => {
  const inputTitleValue = inputTitle.value;
  const inputAuthorValue = inputAuthor.value;
  const book = new Book(inputTitleValue.trim(), inputAuthorValue.trim());
  if (checkRepetition(book)) {
    book.addBook();
    indicator.textContent = 'Book added succesfully';
  }
}

const renderBooks = () => {
  Book.collection.forEach((book) => {
    book.displayBook();
  });
};

export { addBookToLibrary, renderBooks };