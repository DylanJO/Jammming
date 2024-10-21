import { useState } from 'react'
import Tracklist from'./Tracklist';

function Playlist({ tracks, removeTrack }) {

  return (
    <div>
      <Tracklist tracks={tracks} event={removeTrack}/>
      <button>Save to Spotify</button>
    </div>
  )
}

export default Playlist