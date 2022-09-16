const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let multiLang = users.filter(user => user.languages.length >= 3)
console.log(multiLang)

let emails = users.map(({email}) => email)
console.log(emails)

let experience = users.reduce((total,{yearsOfExperience})=>{
    return (total + yearsOfExperience)
}, 0)

let avg = (total) => {
    let length = users.length
    return total/length
}
let longEmail = users.reduce((arr, {email})=>{
    arr.push(email);
    let max = arr[0].length;
    arr.map(item => max = Math.max(max, item.length));
    let str = arr.filter(item => item.length == max);
    return str;
},[])
console.log(avg(experience))
console.log(experience)
console.log(longEmail)
