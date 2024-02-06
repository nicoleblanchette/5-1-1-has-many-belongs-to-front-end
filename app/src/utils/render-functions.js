import { Author } from "../models/has-many.js";

export const renderAllAuthors = () => {
  Author.getAllAuthors().forEach((author) => {
      renderAuthor(author);
  });
};

export const renderMain = () => {
  const form = document.querySelector('#app');
  const authorSection = document.createElement('div');

  authorSection.innerHTML = `
      <h2>Add Author</h2>
      <form id="author-form">
          <label for="author-name">Author Name:</label>
          <input type="text" name='name' id="author-name" required>
          <button type="submit">Add Author</button>
      </form>
  `;
  form.append(authorSection);

  const bookSection = document.createElement('div');
  bookSection.id = 'bookForm';
  bookSection.innerHTML = `
  <h2>Add Book</h2>
  <form id="book-form">
      <label for="author">Select Author:</label>
      <select id="author" name="name" required>
          ${Author.getAllAuthors().map(author => `<option value="${author.name}">${author.name}</option>`).join('')}
      </select>
      <label for="book-title">Book Title:</label>
      <input type="text" name="title" id="book-title" required>
      <button type="submit">Add Book</button>
  </form>
  `;
  form.append(bookSection);
};

export const renderAuthor = (author) => {
  const authorElement = document.createElement('div');

  const h3 = document.createElement('h3');
  h3.textContent = author.name;

  const ul = document.createElement('ul');
  ul.id = `authorNum${author.id}`;
  console.log(author.id, author);
  ul.innerHTML = renderBooks(author.name);
  authorElement.append(h3, ul);
  document.querySelector('#app').append(authorElement);
};

export const renderBooks = (authorName) => {
  // console.log(authorName)
  const allAuthors = Author.getAllAuthors();
  const thisAuthor = allAuthors.filter((el) => el.name === authorName);
  const books = thisAuthor[0].getBooks();
  return books[0] ? books.map((book) => `<li>${book.title}</li>`).join('') : 'No books have been added for this author.'
};

export const updateDropDown = () =>{
  document.querySelector('#bookForm').innerHTML = `
  <h2>Add Book</h2>
      <form id="book-form">
          <label for="author">Select Author:</label>
          <select id="author" required>
              ${Author.getAllAuthors().map(author => `<option value="${author.id}">${author.name}</option>`).join('')}
          </select>
          <label for="book-title">Book Title:</label>
          <input type="text" id="book-title" required>
          <button type="submit">Add Book</button>
      </form>
  `
}
