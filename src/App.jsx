import { useState } from 'react'
import './App.css'
import SearchBar from'./Components/SearchBar';
import SearchResults from'./Components/SearchResults';
import Playlist from'./Components/Playlist';

const TrackData = [{
  artist: 'DocumentOne',
  song: '7th dimension',
  album: '7th dimension'
},
{
  artist: 'Gorillaz',
  song: 'Feels Good inc.',
  album: 'Demon Dayz'
},
{
  artist: 'Flowidus',
  song: 'Shelter',
  album: 'Shelter'
},
{
  artist: 'Ownglow',
  song: 'do U?',
  album: 'single'
},
]

function App() {
  const [selectedTracks, SetSelectedTracks] = useState([{artist: 'song',
    song: 'artist',
    album: 'album'}]);
  const [search, SetSearch] = useState([]);

  const handleAddTrack = (track) => {
    SetSelectedTracks(prev => [
      ...prev, track]);
  }

  return (
    <>
      <SearchBar/>
      <div className='container'>
        <SearchResults searchData={TrackData} addTrack={handleAddTrack}/>
        <Playlist tracks={selectedTracks}/>
        {/* <button onClick={handleAddTrack}>test</button>
        <p>{JSON.stringify(selectedTracks)}</p> */}
      </div>
    </>
  )
}

export default App
