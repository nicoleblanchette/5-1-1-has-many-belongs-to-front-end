import getId from "../utils/getId.js";

// build the class that would belong to the things that has many
class Book {
  constructor(title, author) {
      this.id = getId();
      this.title = title;
      this.author = author;
  }
}

export default Book;
