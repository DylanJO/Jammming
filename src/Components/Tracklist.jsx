import { useState } from 'react'
import Track from'./Track';

function Tracklist({ tracks, event }) {

  return (
    <>
    {tracks.map((track, i) => {
      return <Track key={track.song+track.artist} song={track.song} artist={track.artist} album={track.album} event={event} listId={i}/>
    })}
    </>
  )
}

export default Tracklist