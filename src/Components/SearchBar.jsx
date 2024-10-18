import { useState } from 'react'

function SearchBar() {

    const submitHandler = (e) => {
        e.preventDefault();
    }

  return (
    <div className='container'>
      <form onSubmit={submitHandler}>
        <input type="text" id="search" name="search" placeholder="Search for songs"/>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  )
}

export default SearchBar