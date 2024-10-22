import { useState } from 'react'
import Tracklist from'./Tracklist';

function SearchResults({ searchData, addTrack}) {

  return (
    <div className='listContainer'>
      <h2>Results</h2>
      <Tracklist tracks={searchData} event={addTrack}/>
    </div>
  )
}

export default SearchResults