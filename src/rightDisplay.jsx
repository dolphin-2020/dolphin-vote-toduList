import React from 'react'

const RightDisplay = (props) => {
 return (
  <div id="searchMovie">
   {props.movies.map((item, index) => {
    return (
     <div key={item.imdbID} className="displayMovies">
      <img className="pic" src={item.Poster} alt="" />

      <div className="moviesInfo">
       <h4 className="moviesName">{item.Title}</h4>
       <p className="moviesYears">{item.Year}</p>
       <p className="addInfo">
        If you want vote this movie you need add this movie
          </p>
       <button
        className="addToComment"
        onClick={() => { props.addVoteMovie(index) }}
       >
        Add and vote this movie
          </button>
      </div>
     </div>
    );
   })}
  </div>
 )
}

export default RightDisplay;