// fetch('https://api.github.com/users').then( response => {
//     response.json().then( users => {
//         users.forEach( user => {
//             // do something with each user object...
//             console.log(user);
//         });
//     });
// });

fetch('https://api.github.com/users')
    .then( response => response.json())
    .then( users => {
        users.forEach( ({login})  => {
            // do something with the username login
            console.log(login);
        });
    }).catch(error => console.error(error))

const myPromise = new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
        resolve();
    } else {
        reject();
    }
});

myPromise.then(() => console.log('resolved!'));
myPromise.catch(() => console.log('rejected!'));

function makeRequest() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {
                resolve('Here is your data: ...');
            } else {
                reject('Network Connection Error!');
            }
        }, 1500);
    });
}

const request = makeRequest();
console.log(request); // pending promise
request.then(message => console.log('Promise resolved!', message));
// if resolved, will log "Promise resolved!" and "Here is your data: ..."
request.catch(message => console.log('Promise rejected!', message));
// if rejected, will log "Promise rejected!" and "Network Connection Error!"
