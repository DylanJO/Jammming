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

// todo:

function App() {
  const [selectedTracks, SetSelectedTracks] = useState([]);
  const [search, SetSearch] = useState('');

  const handleSearch = (searchValue) => {
    console.log(searchValue)
    SetSearch(searchValue)
  }

  const handleAddTrack = (track) => {
    let isNewTrack = true;
    for (let i = 0; i < selectedTracks.length; i++) {
      if (selectedTracks[i].song === track.song && selectedTracks[i].artist === track.artist) {
        isNewTrack = false
      }
    }
    if (isNewTrack) {
      SetSelectedTracks(prev => [
        ...prev, track]);
    }
  }

  const handleRemoveTrack = (listId) => {
    SetSelectedTracks(prev => 
      prev.filter((track, index) => index !== listId));
  }

  const handleSavePlaylist = () => {
    SetSelectedTracks([]);
  }

  return (
    <>
      <SearchBar searchEvent={handleSearch}/>
      <div className='container'>
        <SearchResults searchData={TrackData} addTrack={handleAddTrack}/>
        <Playlist tracks={selectedTracks} removeTrack={handleRemoveTrack} savePlaylist={handleSavePlaylist}/>
      </div>
    </>
  )
}

export default App
