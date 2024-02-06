import { Playlist } from "../models/has-many.js";

export const renderMain = () => {
  const form = document.querySelector('#app');
  const playlistSection = document.createElement('div');

  playlistSection.innerHTML = `
      <h2>Add Playlist</h2>
      <form id="playlist-form">
          <label for="playlist-name">Playlist Name:</label>
          <input type="text" name='name' id="playlist-name" required>
          <button type="submit">Add Playlist</button>
      </form>
  `;
  form.append(playlistSection);

  const songSection = document.createElement('div');
  songSection.id = 'songForm';
  songSection.innerHTML = `
  <h2>Add Song</h2>
  <form id="song-form">
      <label for="playlists">Select Playlist:</label>
      <select id="playlists" name="name" required>
          ${Playlist.getAllPlaylists().map(playlist => `<option value="${playlist.name}">${playlist.name}</option>`).join('')}
      </select>
      <label for="song-title">Song Title:</label>
      <input type="text" name="title" id="song-title" required>
      <button type="submit">Add Song</button>
  </form>
  `;
  form.append(playlistSection, songSection);
};

export const renderPlaylist = (playlist) => {
  const playlistElement = document.createElement('div');
  playlistElement.id = `playlistNum${playlist.id}`;

  const h3 = document.createElement('h3');
  h3.textContent = playlist.name;

  const ul = document.createElement('ul');
  ul.id = `playlistUL${playlist.id}`;
  console.log(playlist.id, playlist);
  ul.innerHTML = renderSongs(playlist.name);

  playlistElement.append(h3, ul);

  document.querySelector('#app').append(playlistElement);
};
export const findPlaylistHelper = (playlistName) => {
  return Playlist.getAllPlaylists().filter((el) => el.name === playlistName)
}
export const renderSongs = (playlistName) => {
  const thisPlaylist = findPlaylistHelper(playlistName);
  const songs = thisPlaylist[0].getSongs();
  return songs[0] ? songs.map((song) => `<li>${song.title}</li>`).join('') : 'No songs have been added for this playlist.'
};

export const updateDropDown = () =>{
  document.querySelector('#playlists').innerHTML = `
  ${Playlist.getAllPlaylists().map(playlist => `<option value="${playlist.name}">${playlist.name}</option>`).join('')}
  `
}
