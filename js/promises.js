"use strict"
const test = (username) => {
    fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': GITHUB}})
    .then(response => response.json())
    .then(events => {
        let data = events[0]
        let dataCreated = data.created_at.substring(0,10)
        let name = data.payload.commits[0].author.name
        console.log(data)
        return console.log(`${name}'s last commit was on ${dataCreated}`)
    })
    .catch(() => console.log('rejected!'))
}

test('shivasamadhi')