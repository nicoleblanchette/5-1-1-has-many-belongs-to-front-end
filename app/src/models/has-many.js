import getId from "../utils/getId.js";
import Book from "./belongs-to.js"

// build the class that would have many things
export class Author {
  static #allAuthors = []; 
  #books = [];

  constructor(name) {
      this.id = getId();
      this.name = name; // Array to store books
      Author.#allAuthors.push(this);
  };

  addBook(title, author) {
    this.#books.push(new Book(title, author));
    return;
    
  };

  getBooks(){
    return [...this.#books];
  };

  static getAllAuthors(){
    return [...Author.#allAuthors];
  }
}
