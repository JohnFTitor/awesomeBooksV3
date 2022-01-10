import Book from './modules/Book.js';
import { addBookToLibrary, renderBooks } from './modules/AddBook.js';
import startTime from './modules/Date.js';

const inputTitle = document.querySelector('#title');
const inputAuthor = document.querySelector('#author');
const indicator = document.querySelector('#indicator');

const addForm = document.querySelector('form');
addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addBookToLibrary();
  inputTitle.value = '';
  inputAuthor.value = '';
});

window.onload = () => {
  if (localStorage.getItem('library') !== null) {
    const myStorageLibrary = JSON.parse(localStorage.getItem('library'));
    myStorageLibrary.forEach((book) => {
      const newBook = new Book(book.title, book.author);
      Book.collection.push(newBook);
    });
  }
  renderBooks();
};

const aTags = document.querySelectorAll('a');
const sections = document.querySelectorAll('section');
const reGex = /#[\w-]+/g;

aTags.forEach((a) => {
  a.addEventListener('click', (event) => {
    const currentId = event.target.href.match(reGex)[0];
    const currentSection = document.querySelector(currentId);
    indicator.textContent = '';

    let currentLink = document.querySelector('.selected');
    currentLink.classList.remove('selected');

    currentLink = event.target;

    sections.forEach((section) => {
      if (section === currentSection) {
        section.classList.remove('d-none');
        currentLink.classList.add('selected');
      } else {
        section.classList.add('d-none');
      }
    });
  });
});

startTime();