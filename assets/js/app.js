// alert("hi")
let cl = console.log

let infotbody = document.getElementById("moviesInfo");
const imgUrl = "https://image.tmdb.org/t/p/w1280";
let result="";
movieArr.forEach(function(movie){
	result +=`
		<div class ="col-md-3">
			   <div class="card mb-4">
			    <figure class="poster">
				   <img src="${imgUrl}${movie.backdrop_path}" alt="${movie.title} img" title="${movie.title}">
				   <figcaption>
						<div class="text">
						  <div class="row bg-dark p-3 text-white">
						    <div class= "col-md-9">
							  <h5 class="">${movie.title}</h5>
							</div>
							<div class= "col-md-3">${movie.vote_average}</div>
						  </div>
						 
						</div>
						
				   </figcaption>
				    <div class ="overview text-black bg-white p-4 text-justify">
							<h5 class="text-capitalize">overview</h5>
							<p class="">${movie.overview}</p>
						</div>
				</figure>
			   </div>
			</div>
	`;
});

infotbody.innerHTML = result;
