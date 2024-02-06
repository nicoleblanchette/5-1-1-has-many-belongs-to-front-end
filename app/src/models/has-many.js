import getId from "../utils/getId.js";
import Song from "./belongs-to.js"

// build the class that would have many things
export class Playlist {
  static #allPlaylists = []; 
  #songs = [];

  constructor(name) {
      this.id = getId();
      this.name = name; // Array to store songs
      Playlist.#allPlaylists.push(this);
  };

  addSong(title, artist, album) {
    this.#songs.push(new Song(title, artist, album));
  };

  getSongs(){
    return [...this.#songs];
  };

  static getAllPlaylists(){
    return [...Playlist.#allPlaylists];
  }
}
