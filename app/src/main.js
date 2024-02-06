import './style.css'
import { renderMain, renderSongs, renderPlaylist, updateDropDown, findPlaylistHelper} from './utils/render-functions.js';
import { Playlist } from './models/has-many.js';

const handlePlaylistSubmit = (e) => {
  e.preventDefault();
  const newPlaylist = Object.fromEntries(new FormData(e.target));
  const playlist = new Playlist(newPlaylist.name);
  renderPlaylist(playlist);
  updateDropDown();
  e.target.reset();
}

const handleSongSubmit = (e) => {
  e.preventDefault();
  const playlistAndSong = Object.fromEntries(new FormData(e.target));
  const playlist = findPlaylistHelper(playlistAndSong.name);
  playlist[0].addSong(playlistAndSong.title, playlistAndSong.name);
  document.querySelector(`#playlistUL${playlist[0].id}`).innerHTML = renderSongs(playlistAndSong.name);
  e.target.reset();
}

const main = () => {
  renderMain();

  document.getElementById('playlist-form').addEventListener('submit', handlePlaylistSubmit);
  document.getElementById('song-form').addEventListener('submit', handleSongSubmit);
}

main();