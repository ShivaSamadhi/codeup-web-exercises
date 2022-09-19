"use strict"

let searchBtn = document.querySelector('#search-btn')
let search = document.querySelector('#search')
let cardRender = document.querySelector('#card')

searchBtn.addEventListener('click', () => {
    test(search.value);
})




const renderHTML = (dataObj) => {
    console.log(dataObj)

    const {
        actor: {avatar_url},
        type,
        created_at,
        payload: {commits: [{message, author: {name}}]}
    } = dataObj
    console.log(avatar_url)
    cardRender.innerHTML = `
    <div class="card m-auto" style="width: 18rem;">
      <img src=${avatar_url} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">Last Commit: ${created_at.substring(0,10)}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Type: ${type}</li>
        <li class="list-group-item">Message: '${message}'</li>
    </div>
    `
}

const test = (username) => {
    fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': GITHUB}})
    //fetch request to the github api to return all public event data tied to the username that is passed
    .then(response => response.json())
    //turns the promise that is returned from the fetch request into a JSON file
        .then(response => {
            let data = response[0]
            renderHTML(data)
        })
    // .then(events => {
    //     console.log(events);
    //     let data = events[0]
    //     let dataCreated = data.created_at.substring(0,10)
    //     let name = data.payload.commits[0].author.name
    // //here I take the JSON file of events (an arr of obj) and use variables to filter thru the various pieces of data stored in the arr.
    // // Data targets the first index entry, dataCreated targets the created_at key-value and turns it into a substring, name targets payload (obj)=> commits[0] (arr) => author (obj) => name
    //     console.log(data)
    //     let lastCommit = `${name}'s last commit was on ${dataCreated}`
    // //lastCommit is a template literal that will be returned showing the users name and the date of their last commit
    //     return console.log(lastCommit)
    // })
    .catch(() => console.log('rejected!'))
    }
    //catches any errors that may occur



console.log()

const wait = (num) => {
    return new Promise((resolve) => {
        setTimeout(() => {
                resolve(`You'll see this after ${num/1000} seconds`);
            } , num);
    });
}
//this function takes in a number that is passed to the setTimeout() as milliseconds, creates a new promise, and returns a resolve message after the specified time
wait(1000).then((message) => console.log(message));