import './style.css'
import { renderMain, renderBooks, renderAuthor, updateDropDown, findAuthorHelper} from './utils/render-functions.js';
import { Author } from './models/has-many.js';

const handleAuthorSubmit = (e) => {
  e.preventDefault();
  const newAuthor = Object.fromEntries(new FormData(e.target));
  const author = new Author(newAuthor.name);
  renderAuthor(author);
  updateDropDown();
  e.target.reset();
}

const handleBookSubmit = (e) => {
  e.preventDefault();
  const authorAndBook = Object.fromEntries(new FormData(e.target));
  const author = findAuthorHelper(authorAndBook.name);
  author[0].addBook(authorAndBook.title, authorAndBook.name);
  document.querySelector(`#authorUL${author[0].id}`).innerHTML = renderBooks(authorAndBook.name);
  e.target.reset();
}

const main = () => {
  renderMain();

  document.getElementById('author-form').addEventListener('submit', handleAuthorSubmit);
  document.getElementById('book-form').addEventListener('submit', handleBookSubmit);
}

main();