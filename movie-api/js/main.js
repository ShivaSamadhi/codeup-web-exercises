"use strict"

//When the document is ready, it fires off a function that targets the searchForm and adds an event listener. On submit, it takes the value of the searchText that was given and passes it to the getMovies() that is used to make the AJAX request
$(document).ready(() => {
   $('#searchForm').on('submit', (e) => {
       e.preventDefault();
       let searchText = $('#searchText').val()
       getMovies(searchText)

   })
})


let getMovies = (searchText) => {
    console.log(searchText)
}