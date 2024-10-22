import { useState } from 'react'
import Tracklist from'./Tracklist';

function Playlist({ tracks, removeTrack }) {
  const [playlistName, setPlaylistName] = useState('')

  const handleChange = (e) => {
    const name = e.target.value;
    setPlaylistName(name);
    console.log(playlistName);
  };

  const test = () => {
    console.log(playlistName);
  }

  return (
    <div className='listContainer'>
      <form>
        <input type="text" id="playlist" name="playlist" placeholder="Playlist Name" onChange={handleChange}/>
      </form>
      <Tracklist tracks={tracks} event={removeTrack}/>
      <button onClick={test}>Save to Spotify</button>
    </div>
  )
}

export default Playlist