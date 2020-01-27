import React from 'react'

const RightDisplay = (props) => {
 return (
  <div id="searchMovie">
   <input
    id="inputMovie"
    type="text"
    onChange={props.searchMovieInput}
    value={props.searchVal}
    placeholder="Please enter your movie"
   >
   </input>
   <button id="submitSearch" type="submit" onClick={props.searchMovBtn}>
    Search Movie
  </button>
  </div>
 )
}

export default RightDisplay;