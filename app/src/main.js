import './style.css'
import { renderMain, renderAllAuthors, renderAuthor, updateDropDown} from './utils/render-functions.js';
import { Author } from './models/has-many.js';
import { addNewBook } from './utils/handler.js';

const handleAuthorSubmit = (e) => {
  e.preventDefault();

  const formObj = Object.fromEntries(new FormData(e.target));
  const author = new Author(formObj.name);
  renderAuthor(author);
  updateDropDown();
  e.target.reset();
}

const handleBookSubmit = (e) => {
  e.preventDefault();

  const formObj = Object.fromEntries(new FormData(e.target));
  console.log(formObj);
  addNewBook(formObj);
}

const main = () => {
  new Author('Gonzalo Romero');
  renderMain();
  renderAllAuthors();
  document.querySelector('#author-form').addEventListener('submit', handleAuthorSubmit);
  document .querySelector('#book-form').addEventListener('submit', handleBookSubmit);
}

main();