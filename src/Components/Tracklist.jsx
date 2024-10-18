import { useState } from 'react'
import Track from'./Track';

function Tracklist({ tracks, addTrack }) {

  return (
    <>
    {tracks.map((track, i) => {
      return <Track key={i} song={track.song} artist={track.artist} album={track.album} addTrack={addTrack}/>
    })}
    </>
  )
}

export default Tracklist