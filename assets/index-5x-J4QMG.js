var y=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)};var l=(e,t,n)=>(y(e,t,"read from private field"),n?n.call(e):t.get(e)),u=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)};(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();const h=(e=0)=>()=>++e,p=h();class b{constructor(t,n,o){this.id=p(),this.title=t,this.artist=n,this.album=o}}var c,d;const a=class a{constructor(t){u(this,d,[]);this.id=p(),this.name=t,l(a,c).push(this)}addSong(t,n,o){l(this,d).push(new b(t,n,o))}getSongs(){return[...l(this,d)]}static getAllPlaylists(){return[...l(a,c)]}};c=new WeakMap,d=new WeakMap,u(a,c,[]);let i=a;const S=()=>{const e=document.querySelector("#app"),t=document.createElement("div");t.innerHTML=`
      <h2>Add Playlist</h2>
      <form id="playlist-form">
          <label for="playlist-name">Playlist Name:</label>
          <input type="text" name='name' id="playlist-name" required>
          <button type="submit">Add Playlist</button>
      </form>
  `,e.append(t);const n=document.createElement("div");n.id="songForm",n.innerHTML=`
  <h2>Add Song</h2>
  <form id="song-form">
      <label for="playlists">Select Playlist:</label>
      <select id="playlists" name="name" required>
          ${i.getAllPlaylists().map(o=>`<option value="${o.name}">${o.name}</option>`).join("")}
      </select>
      <label for="song-title">Song Title:</label>
      <input type="text" name="title" id="song-title" required>
      <button type="submit">Add Song</button>
  </form>
  `,e.append(t,n)},P=e=>{const t=document.createElement("div");t.id=`playlistNum${e.id}`;const n=document.createElement("h3");n.textContent=e.name;const o=document.createElement("ul");o.id=`playlistUL${e.id}`,console.log(e.id,e),o.innerHTML=g(e.name),t.append(n,o),document.querySelector("#app").append(t)},f=e=>i.getAllPlaylists().filter(t=>t.name===e),g=e=>{const n=f(e)[0].getSongs();return n[0]?n.map(o=>`<li>${o.title}</li>`).join(""):"No songs have been added for this playlist."},L=()=>{document.querySelector("#playlists").innerHTML=`
  ${i.getAllPlaylists().map(e=>`<option value="${e.name}">${e.name}</option>`).join("")}
  `},E=e=>{e.preventDefault();const t=Object.fromEntries(new FormData(e.target)),n=new i(t.name);P(n),L(),e.target.reset()},v=e=>{e.preventDefault();const t=Object.fromEntries(new FormData(e.target)),n=f(t.name);n[0].addSong(t.title,t.name),document.querySelector(`#playlistUL${n[0].id}`).innerHTML=g(t.name),e.target.reset()},A=()=>{S(),document.getElementById("playlist-form").addEventListener("submit",E),document.getElementById("song-form").addEventListener("submit",v)};A();
