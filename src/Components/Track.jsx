import { useState, useEffect } from 'react'

function Track({ song, artist, album, event, listId }) {

  const [ fade, setFade ] = useState({
    opacity: '0',
    height: '0px',
    margin: '0px 0px',
    padding: '0px 20px'
  });

  const handleAddtrack = () => {
    event({
      artist: artist,
      song: song,
      album: album
    })
  }

  const handleRemoveTrack = () => {
    setFade({
      opacity: '0',
      height: '0px',
      margin: '0px 0px',
      padding: '0px 20px'
    });
    setTimeout(() => event(listId), 200)
  }

  useEffect(() => {
    setTimeout(() => setFade({
      opacity: '1',
      height: '8rem',
      margin: '5px 0px',
      padding: '10px 20px'
    }), 100);
  },[])

  return (
    <div className='track' style={fade}>
      <h3>{song}</h3>
      <div>
        <p>{artist} | {album}</p>
        {event.name === 'handleAddTrack' ? <button onClick={handleAddtrack}>+</button> :
        <button onClick={handleRemoveTrack}>-</button>}
      </div>
    </div>
  )
}

export default Track