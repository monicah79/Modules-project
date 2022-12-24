import dateFunction from './modules/date.js';
import Book from './modules/class.js';
import { listContact, addList } from './modules/navlinks.js';

let booksList = JSON.parse(localStorage.getItem('book')) || [];

const books = document.querySelector('.books');

//  get books from localStorage
const getBooks = () => {
  const storageData = localStorage.getItem('books');
  if (storageData === undefined || storageData === null) {
    return;
  }
  const storageBooks = JSON.parse(storageData);
  booksList = storageBooks;
  books.innerHTML = storageBooks
    .map(
      (book, index) => `<div class=" highlight ${index % 2 === 0 ? 'highlight-bg' : ''}">
                      <div>
                        "${book.title}" by ${book.author}
                        <button type="button" onclick='removeBook(${book.id})'>Remove</button>
                      </div>
                  </div>`,
    )
    .join('');
};

// function to remove book from books collections
window.removeBook = (id) => {
  if (id === null) return;
  const newBooks = booksList.filter((book) => book.id !== id);
  localStorage.setItem('books', JSON.stringify(newBooks));
  getBooks();
};

// to add book from books collection
const booksForm = document.querySelector('.form');
booksForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const id = Math.floor(Math.random() * 10000); // Asign random Id for each
  const item = new Book(id, title, author); // Add book for the class Book
  booksList = [...booksList, item];
  localStorage.setItem('books', JSON.stringify(booksList)); // Add the new bookList to the local storage
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  getBooks();
});

window.addEventListener('load', () => {
  getBooks();
  window.removeBook(null);
});

const liA = document.querySelector('.li-a');
const lb = document.querySelector('.li-b');
//   const contact = document.querySelector('.contact-section');
//   const container = document.querySelector('.container');
//   const can = document.querySelector('.cont-se');
//   const date = document.querySelector('.time');

liA.addEventListener('click', (e) => {
  e.preventDefault();
  listContact();
});

lb.addEventListener('click', (e) => {
  e.preventDefault();
  addList();
});

dateFunction();
