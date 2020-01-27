import React, { Component, Fragment } from "react";
import "./App.css";
import Header from "./header";
import RightDisplay from "./rightDisplay";
import LeftDisplay from "./leftDisplay";
import Axios from "axios";
import store from './store'
import RightHeader from './rightHeader'
//import SearchList from './searchList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(JSON.stringify(store));
    Axios.get(
      `http://www.omdbapi.com/?apikey=824da0ff&s=${this.state.movieName}&plot=short&page=1`
    )
      .then(result => {
        let movieInfo = JSON.parse(JSON.stringify(result));
        let info = movieInfo.data.Search;
        if (info !== "") {
          this.setState({
            movies: info,
            pageNum: movieInfo.data.totalResults
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
        <Header />
        <LeftDisplay
          userInfo={this.state.userInfo}
          addVote={this.addVote}
          deleteVote={this.deleteVote}
        />
        <RightHeader
          searchMovieInput={this.searchMovieInput}
          searchVal={this.state.searchVal}
          searchMovBtn={this.searchMovBtn}
        />
        <RightDisplay
          forePage={this.forePage}
          pageChoose={this.pageChoose}
          StateNextPage={this.state.nextPage}
          movies={this.state.movies}
          addVoteMovie={this.addVoteMovie}
          nextPage={this.nextPage}
        />
      </Fragment>
    );
  }

  searchMovieInput = e => {
    this.setState({
      searchVal: e.target.value
    });
  };

  searchMovBtn = () => {
    if (this.state.searchVal !== "" || this.state.movies !== "") {
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

  addVote=(index)=> {
    let newUserInfo = [...this.state.userInfo];
    newUserInfo[index].vote += 1;
    newUserInfo.sort((a, b) => {
      return b.vote - a.vote;
    });
    this.setState({
      userInfo: [...newUserInfo]
    });
  }

  deleteVote=(index)=> {
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

  addVoteMovie=(index)=> {
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

  componentWillUpdate(){
    Axios.get(
      `http://www.omdbapi.com/?apikey=824da0ff&s=${this.state.movieName}&plot=short&page=1`
    )
      .then(result => {
        let movieInfo = JSON.parse(JSON.stringify(result));
        let info = movieInfo.data.Search;
        if (info !== "") {
          this.setState({
            movies: info,
            pageNum: movieInfo.data.totalResults
          });
        }
      })
      .catch(() => {
        alert("No this movie");
      });
  }
  
}

export default App;
