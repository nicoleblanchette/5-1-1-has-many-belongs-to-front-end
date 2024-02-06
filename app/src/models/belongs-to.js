import getId from "../utils/getId.js";

// build the class that would belong to the things that has many things
class Song {
  constructor(title, artist, album) {
    this.id = getId();
    this.title = title;
    this.artist = artist;
    this.album = album
  }
}

export default Song;
