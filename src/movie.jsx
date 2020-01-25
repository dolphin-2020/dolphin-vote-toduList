import React from 'react'

function Movie (){
  return(
			<div class="outDiv">
					<div class="movie">
							<img class="post" src={require('./img/01.jpg')} alt="" />
					</div>
					<div class="content">
       <img class="add" src={require('./img/add.png')} alt="" />
							<br></br>
							<a href="https://www.goodhousekeeping.com/life/entertainment/g25308827/kids-movies-2019/">25 Kids' Movies</a>
					  <br/>
						 <p>Best Kids' Movies 2019</p>
						
							<p>Submitted by <img class="headerImg" src={require('./img/01.jpg')} alt="" /></p>
							
					</div>
		</div>
		

 )
}

export default Movie;