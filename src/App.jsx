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
  const [selectedTracks, SetSelectedTracks] = useState([]);
  const [search, SetSearch] = useState('');

  const handleSearch = (searchValue) => {
    console.log(searchValue)
  }

  const handleAddTrack = (track) => {
    SetSelectedTracks(prev => [
      ...prev, track]);
  }

  const handleRemoveTrack = (listId) => {
    SetSelectedTracks(prev => 
      prev.filter((track, index) => index !== listId));
  }

  return (
    <>
      <SearchBar searchEvent={handleSearch}/>
      <div className='container'>
        <SearchResults searchData={TrackData} addTrack={handleAddTrack}/>
        <Playlist tracks={selectedTracks} removeTrack={handleRemoveTrack}/>
      </div>
    </>
  )
}

export default App
