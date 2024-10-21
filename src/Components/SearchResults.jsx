import { useState } from 'react'
import Tracklist from'./Tracklist';

function SearchResults({ searchData, addTrack}) {

  return (
    <div>
    <Tracklist tracks={searchData} event={addTrack}/>
    </div>
  )
}

export default SearchResults