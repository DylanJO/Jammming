import { useState } from 'react'

function Track({ song, artist, album, event, listId }) {

  const handleAddtrack = () => {
    event({
      artist: artist,
      song: song,
      album: album
    })
  }

  const handleRemoveTrack = () => {
    event(listId)
  }

  return (
    <div className='track'>
      <h3>{song}</h3>
      <p>{artist}</p>
      <p>{album}</p>
      {event.name === 'handleAddTrack' ? <button onClick={handleAddtrack}>+</button> :
      <button onClick={handleRemoveTrack}>-</button>}
    </div>
  )
}

export default Track