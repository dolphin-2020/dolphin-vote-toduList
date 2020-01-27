import React from 'react'

const SearchList = (props) => {
 return (
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
     {parseInt(props.StateNextPage) + index}
    </button>
   );
  })}
  <button className="go" onClick={props.nextPage}>
   Next
  </button>
 </div>
 )
   }
   export default SearchList;