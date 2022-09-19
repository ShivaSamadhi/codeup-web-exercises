"use strict"
const test = (username) => {
    fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': GITHUB}})
    //fetch request to the github api to return all public event data tied to the username that is passed
    .then(response => response.json())
    //turns the promise that is returned from the fetch request into a JSON file
    .then(events => {
        console.log(events);
        let data = events[0]
        let dataCreated = data.created_at.substring(0,10)
        let name = data.payload.commits[0].author.name
    //here I take the JSON file of events (an arr of obj) and use variables to filter thru the various pieces of data stored in the arr.
    // Data targets the first index entry, dataCreated targets the created_at key-value and turns it into a substring, name targets payload (obj)=> commits[0] (arr) => author (obj) => name
        console.log(data)
        let lastCommit = `${name}'s last commit was on ${dataCreated}`
    //lastCommit is a template literal that will be returned showing the users name and the date of their last commit
        return console.log(lastCommit)
    })
    .catch(() => console.log('rejected!'))
    }
    //catches any errors that may occur
test('shivasamadhi');

const wait = (num) => {
    return new Promise((resolve) => {
        setTimeout(() => {
                resolve(`You'll see this after ${num/1000} seconds`);
            } , num);
    });
}
//this function takes in a number that is passed to the setTimeout() as milliseconds and returns a resolve message after the specified time
wait(1000).then((message) => console.log(message));