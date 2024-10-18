import { useState } from 'react'
import Tracklist from'./Tracklist';

function Playlist({ tracks }) {

  return (
    <div>
      <Tracklist tracks={tracks}/>
      <button>Save to Spotify</button>
    </div>
  )
}

export default Playlist