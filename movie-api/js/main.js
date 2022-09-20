"use strict"

//When the document is ready, it fires off a function that targets the searchForm and adds an event listener. On submit, it takes the value of the searchText that was given, stores it in a variable, and passes it to the getMovies() that is used to make the AJAX request
$(document).ready(() => {
   $('#searchForm').on('submit', (e) => {
       e.preventDefault();
       let searchText = $('#searchText').val()
       getMovies(searchText)

   })
})


let getMovies = (searchText) => {
    axios.get(`https://www.omdbapi.com?s=${searchText}&apikey=thewdb`)
        .then((response) => {
            console.log(response);
            let movies = response.data.Search
            let output = ``
            $.each(movies, (index, {Poster, Title, Year, imdbID, Genre}) => {
                output += `
                <div class="col-md-3 mb-5">
                    <div class="well text-center">
                        <img src=${Poster} alt="">
                        <h6 class="mt-3">${Title}</h6>
                        <a onclick="movieSelected('${imdbID}')" class="btn btn-primary mt-3" href="#"> Movie Details</a>
                    </div>
                </div>
                `
            })
            $('#movies').html(output)
        })
        .catch((err) => {
            console.log(err)
        })
    console.log(searchText)
}

let movieSelected = (id) => {
    sessionStorage.setItem('movieID', id)
    window.location = 'movie.html'
    return false
}

// let getMovie = () => {
//     let movieID = sessionStorage.getItem('movieID')
//     axios.get(`https://www.omdbapi.com?i=${movieID}&apikey=thewdb`)
//         .then((response) => {
//             console.log(response);
//             let movie = response.data
//
//             let output = `
//                 <div class="row">
//                     <div class="col-md-4">
//                     <img src=${movie.Poster} alt="" class="thumbnail">
//                     </div>
//                     <div class="col-md-8">
//                         <h2>${movie.Title}</h2>
//                         <ul class="list-group">
//                             <li class="list-group-item">Genre: ${movie.Genre}</li>
//                             <li class="list-group-item">Released: ${movie.Year}</li>
//                             <li class="list-group-item">Rated: ${movie.Rated}</li>
//                             <li class="list-group-item">IMDB Rating: ${movie.imdbRating}</li>
//                             <li class="list-group-item">Director: ${movie.Director}</li>
//                             <li class="list-group-item">Writer: ${movie.Writer}</li>
//                             <li class="list-group-item">Actors: ${movie.Actors}</li>
//                         </ul>
//                     </div>
//                 </div>
//                 <div class="row">
//                     <div class="well">
//                     <h3>Plot</h3>
//                     ${movie.Plot}
//                     <hr>
// <!--                    <a href="http://imdb.com/title/${}"></a>-->
// </div>
// </div>
//             `;
//             $('#movie').html(output)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// }