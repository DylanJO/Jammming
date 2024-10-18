import { useState } from 'react'

function Track({ song, artist, album, addTrack}) {

  const handleAddtrack = () => {
    addTrack({
      artist: artist,
      song: song,
      album: album
    })
  }

  return (
    <div className='track'>
      <h3>{song}</h3>
      <p>{artist}</p>
      <p>{album}</p>
      <button onClick={handleAddtrack}>+</button>
    </div>
  )
}

export default Track