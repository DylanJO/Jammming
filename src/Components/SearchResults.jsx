import { useState } from 'react'
import Tracklist from'./Tracklist';

function SearchResults({ searchData, addTrack}) {

  return (
    <div>
    <Tracklist tracks={searchData} addTrack={addTrack}/>
    </div>
  )
}

export default SearchResults