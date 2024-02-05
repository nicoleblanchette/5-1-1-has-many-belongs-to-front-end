import Book from "../models/belongs-to.js";
import { Author } from "../models/has-many.js";
import { renderBooks } from "./render-functions.js";


export const addAuthor = (name) => {
  const author = new Author(name);
  authors.push(author);
  renderAuthor(author);
  renderAuthorsDropdown(authors);
};

export const addNewBook = (formObj) => {
  console.log(formObj.name);
  const allAuthors = Author.getAllAuthors();
  const author = allAuthors.filter(author => author.name === formObj.name);
  console.log(author[0])
  author[0].addBook(formObj.title, formObj.name);
  renderBooks(formObj.name);
 
};

export const handleAuthor =(e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const authorName = formData.get('authorName');
      if (authorName) {
          addAuthor(authorName);
          document.getElementById('authorName').value = '';
      }
  };

export const handleBook = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const authorId = formData.get('author');
      const bookTitle = formData.get('bookTitle');
      if (authorId && bookTitle) {
          addBook(authorId, bookTitle);
          document.getElementById('bookTitle').value = '';
      }
  };

