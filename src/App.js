import React, { Component, Fragment } from "react";
import "./App.css";
import Header from './header'
// import Movie from './movie'
import LeftDisplay from './leftDisplay'
import Axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: [
        {
          Title: "Avengers: Infinity War",
          Year: "2018",
          imdbID: "tt4154756",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
          vote: 32,
          submitted: "./img/02.jpg"
        },
        {
          Title: "Captain America: Civil War",
          Year: "2016",
          imdbID: "tt3498820",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg",
          vote: 31,
          submitted: "./img/07.jpg"
        },
        {
          Title: "World War Z",
          Year: "2013",
          imdbID: "tt0816711",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
          vote: 28,
          submitted: "./img/07.jpg"
        },
        {
          Title: "War of the Worlds",
          Year: "2005",
          imdbID: "tt0407304",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNDUyODAzNDI1Nl5BMl5BanBnXkFtZTcwMDA2NDAzMw@@._V1_SX300.jpg",
          vote: 26,
          submitted: "./img/07.jpg"
        },
        {
          Title: "Lord of War",
          Year: "2005",
          imdbID: "tt0399295",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
          vote: 23,
          submitted: "./img/07.jpg"
        },
        {
          Title: "War for the Planet of the Apes",
          Year: "2017",
          imdbID: "tt3450958",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNDNmYTQzMDEtMmY0MS00OTNjLTk4MjItMDZhMzkzOGI3MzA0XkEyXkFqcGdeQXVyNjk5NDA3OTk@._V1_SX300.jpg",
          vote: 21,
          submitted: "./img/07.jpg"
        },
        {
          Title: "This Means War",
          Year: "2012",
          imdbID: "tt1596350",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTYyOTQ4MDE2MV5BMl5BanBnXkFtZTcwOTE0MTgwNw@@._V1_SX300.jpg",
          vote: 19,
          submitted: "./img/07.jpg"
        },
        {
          Title: "War Dogs",
          Year: "2016",
          imdbID: "tt2005151",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMjEyNzQ0NzM4MV5BMl5BanBnXkFtZTgwMDI0ODM2OTE@._V1_SX300.jpg",
          vote: 12,
          submitted: "./img/07.jpg"
        },
        {
          Title: "War Horse",
          Year: "2011",
          imdbID: "tt1568911",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMjExNzkxOTYyNl5BMl5BanBnXkFtZTcwODA0MjU4Ng@@._V1_SX300.jpg",
          vote: 10,
          submitted: "./img/07.jpg"
        },
        {
          Title: "Charlie Wilson's War",
          Year: "2007",
          imdbID: "tt0472062",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTgwMDgwMDc4MF5BMl5BanBnXkFtZTYwOTU3MDM4._V1_SX300.jpg",
          vote: 2,
          submitted: "./img/07.jpg"
        }
      ],
      movies: [
        {
          Title: "Crazy, Stupid, Love.",
          Year: "2011",
          imdbID: "tt1570728",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTg2MjkwMTM0NF5BMl5BanBnXkFtZTcwMzc4NDg2NQ@@._V1_SX300.jpg"
        },
        {
          Title:
            "Dr. Strangelove",
          Year: "1964",
          imdbID: "tt0057012",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BZWI3ZTMxNjctMjdlNS00NmUwLWFiM2YtZDUyY2I3N2MxYTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
        },
        {
          Title: "Love, Actually",
          Year: "2003",
          imdbID: "tt0314331",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_SX300.jpg"
        },
        {
          Title: "Shakespeare in Love",
          Year: "1998",
          imdbID: "tt0138097",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BM2ZkNjM5MjEtNTBlMC00OTI5LTgyYmEtZDljMzNmNzhiNzY0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg"
        },
        {
          Title: "P.S. I Love You",
          Year: "2007",
          imdbID: "tt0431308",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNTg2MDg4MjI5NV5BMl5BanBnXkFtZTcwMzQ0MDczMw@@._V1_SX300.jpg"
        },
        {
          Title: "I Love You, Man",
          Year: "2009",
          imdbID: "tt1155056",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTU4MjI5NTEyNV5BMl5BanBnXkFtZTcwNjQ1NTMzMg@@._V1_SX300.jpg"
        },
        {
          Title: "Love & Other Drugs",
          Year: "2010",
          imdbID: "tt0758752",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTgxOTczODEyMF5BMl5BanBnXkFtZTcwMDc0NDY4Mw@@._V1_SX300.jpg"
        },
        {
          Title: "Punch-Drunk Love",
          Year: "2002",
          imdbID: "tt0272338",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BYmE1OTY4NjgtYjcwNC00NWE4LWJiNGMtZmVhYTdlMWE1YzIxXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
          Title: "In the Mood for Love",
          Year: "2000",
          imdbID: "tt0118694",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BYTJlMmIwYjAtYWJmYy00YzE2LWE1OTYtZjIyMzg0YWUwOTg4XkEyXkFqcGdeQXVyMTA1NTM1NDI2._V1_SX300.jpg"
        },
        {
          Title: "Love, Rosie",
          Year: "2014",
          imdbID: "tt1638002",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTk0Mzg1MTU1MF5BMl5BanBnXkFtZTgwMjU3ODI2MzE@._V1_SX300.jpg"
        }
      ],
      searchVal: "",
      movieName: "love",
      nextPage: 1,
      pageNum: 1
    };
  }

  componentWillUpdate() {
    Axios.get(
      `http://www.omdbapi.com/?apikey=824da0ff&s=${this.state.movieName}&plot=short&page=${this.state.nextPage}`
    )
      .then(result => {
        let movieInfo = JSON.parse(JSON.stringify(result));
        let info = movieInfo.data.Search;
        if (info !== "") {
          this.setState({
            movies: info,
            pageNum: movieInfo.data.totalResults,
          });
        }
      })
      .catch(() => {
        alert("No this movie");
      });
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <LeftDisplay
          userInfo={this.state.userInfo}
          addVote={this.addVote.bind(this)}
          deleteVote={this.deleteVote.bind(this)}
        />
       {
         /*
          <div id="displayDiv">
          {this.state.userInfo.map((item, index) => {
            return (
              <div key={index} className="outDiv">
                <img className="post" src={item.Poster} alt="Img" />
                <div className="content">
                  <h3>
                    <img
                      onClick={this.addVote.bind(this, index)}
                      className="add"
                      src={require("./img/add.png")}
                      alt=""
                    />
                    {" " + item.vote}
                  </h3>
                  <a
                    className="link"
                    href="https://www.goodhousekeeping.com/life/entertainment/g25308827/kids-movies-2019/"
                  >
                    {item.Title}
                  </a>
                  <br />
                  <p>{item.Year}</p>
                  <p className="submitBy">
                    Submitted by
                    <img className="headerImg" src={item.Poster} alt="" />
                  </p>
                  <h3 className="deleteVote">
                    <img
                      onClick={this.deleteVote.bind(this, index)}
                      className="add"
                      src={require("./img/delete.png")}
                      alt=""
                    />
                     Delete vote
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

          */
       }
      
        <div id="searchMovie">
          <input
            id="inputMovie"
            type="text"
            onChange={this.searchMovieInput}
            value={this.state.searchVal}
            placeholder="Please enter your movie"
          >

          </input>
          <button id="submitSearch" type="submit" onClick={this.searchMovBtn}>
            Search Movie
          </button>

          <div className="searchWholePage">
            <button className="back" onClick={this.forePage}>
              Back
            </button>
            {this.state.movies.map((item, index) => {
              return (
                <button
                  key={new Date().getTime() + index}
                  className="showPageBtn"
                  onClick={this.pageChoose}
                >
                  {parseInt(this.state.nextPage) + index}
                </button>
              );
            })}
            <button className="go" onClick={this.nextPage}>
              Next
            </button>
          </div>
          {this.state.movies.map((item, index) => {
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
                    onClick={this.addVoteMovie.bind(this, index)}
                  >
                    Vote this movie
                  </button>
                </div>
              </div>
            );
          })}
          <div className="searchWholePage">
            <button className="back" onClick={this.forePage}>
              Back
            </button>
            {this.state.movies.map((item, index) => {
              return (
                <button
                  key={new Date().getTime() + index}
                  className="showPageBtn"
                  onClick={this.pageChoose}
                >
                  {parseInt(this.state.nextPage) + index}
                </button>
              );
            })}
            <button className="go" onClick={this.nextPage}>
              Next
            </button>
          </div>
        </div>
      </Fragment>
    );
  }

  searchMovieInput = e => {
    this.setState({
      searchVal: e.target.value
    });
  };

  searchMovBtn = () => {
    if(this.state.searchVal!==''||this.state.movies!==""){
      this.setState({
        movieName: this.state.searchVal,
        searchVal: ""
      });
    }
  };

  nextPage = () => {
    if (this.state.nextPage + 1 < parseInt(this.state.pageNum) / 10 + 1) {
      this.setState({
        nextPage: this.state.nextPage + 1
      });
    } else {
      this.setState({
        nextPage: this.state.nextPage
      });
    }
  };

  forePage = () => {
    if (this.state.nextPage - 10 > 0) {
      this.setState({
        nextPage: this.state.nextPage - 10
      });
    } else {
      this.setState({
        nextPage: 1
      });
    }
  };

  pageChoose = e => {
    this.setState({
      nextPage: parseInt(e.target.innerText)
    });
  };

  addVote(index) {
    let newUserInfo = [...this.state.userInfo];
    newUserInfo[index].vote += 1;
    newUserInfo.sort((a, b) => {
      return b.vote - a.vote;
    });
    this.setState({
      userInfo: [...newUserInfo]
    });
  }

  deleteVote(index) {
    let newUserInfo = [...this.state.userInfo];
    if (newUserInfo[index].vote >= 1) {
      newUserInfo[index].vote -= 1;
    }
    newUserInfo.sort((a, b) => {
      return b.vote - a.vote;
    });
    this.setState({
      userInfo: [...newUserInfo]
    });
  }

  addVoteMovie(index) {
    let newUserInfo = [...this.state.userInfo];
    let newPush = this.state.movies[index];
    let exist = false;
    newUserInfo.forEach((item, index) => {
      if (newPush.Title === item.Title) {
        exist = true;
        alert("Movie already existing...");
      }
    });
    if (exist === false) {
      newPush = { ...newPush, vote: 1 };
      newUserInfo.push(newPush);
      newUserInfo.sort((a, b) => {
        return b.vote - a.vote;
      });

      this.setState({
        userInfo: [...newUserInfo]
      });
    }
  }
}

export default App;
