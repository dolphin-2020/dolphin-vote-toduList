import Axios from "axios";
const Ajax=()=>{
 Axios.get(
  `http://www.omdbapi.com/?apikey=824da0ff&s=${this.state.movieName}&plot=short&page=${this.state.nextPage}`
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

export default Ajax;