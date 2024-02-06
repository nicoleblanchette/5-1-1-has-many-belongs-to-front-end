import { Author } from "../models/has-many.js";
import { renderBooks } from "./render-functions.js";

export const addNewBook = (authorAndBook) => {
  const allAuthors = Author.getAllAuthors();
  const author = allAuthors.filter(author => author.name === authorAndBook.name);
  author[0].addBook(authorAndBook.title, authorAndBook.name);
  document.querySelector(`#authorNum${author[0].id}`).innerHTML = renderBooks(authorAndBook.name);
};



