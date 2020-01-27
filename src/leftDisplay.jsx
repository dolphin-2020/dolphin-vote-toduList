import React,{Component} from 'react'

class LeftDisplay extends Component{
  render(){
   return(
    <div id="displayDiv">
          {this.props.userInfo.map((item, index) => {
            return (
              <div key={index} className="outDiv">
                <img className="post" src={item.Poster} alt="Img" />
                <div className="content">
                  <h3>
                    <img
                      onClick={()=>{this.props.addVote(index)}}
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
                      onClick={()=>{this.props.deleteVote(index)}}
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
   )
  }
}

export default LeftDisplay;