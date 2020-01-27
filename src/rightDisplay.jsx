import React from 'react'

const RightDisplay=(props)=>{
 return(
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

  <div className="searchWholePage">
    <button className="back" onClick={props.forePage}>
      Back
    </button>
    {props.movies.map((item, index) => {
      return (
        <button
          key={new Date().getTime() + index}
          className="showPageBtn"
          onClick={props.pageChoose}
        >
          {parseInt(props.nextPage) + index}
        </button>
      );
    })}
    <button className="go" onClick={props.nextPage}>
      Next
    </button>
  </div>
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
            onClick={()=>{props.addVoteMovie.bind(this, index)}}
          >
            Vote this movie
          </button>
        </div>
      </div>
    );
  })}
  <div className="searchWholePage">
    <button className="back" onClick={props.forePage}>
      Back
    </button>
    {props.movies.map((item, index) => {
      return (
        <button
          key={new Date().getTime() + index}
          className="showPageBtn"
          onClick={props.pageChoose}
        >
          {parseInt(props.nextPage) + index}
        </button>
      );
    })}
    <button className="go" onClick={props.nextPage}>
      Next
    </button>
  </div>
</div>
 )
}

export default RightDisplay;