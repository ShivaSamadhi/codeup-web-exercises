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
