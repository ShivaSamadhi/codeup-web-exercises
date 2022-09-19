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

let multiLang = users.filter(({languages}) => languages.length >= 3)
console.log(multiLang)

let emails = users.map(({email}) => email)
console.log(emails)

let experience = (users
                .reduce((total,{yearsOfExperience}) => total + yearsOfExperience, 0)
                /(users.length)
                )
console.log(experience)


let longEmail = users.reduce((arr, {email})=>{
    arr.push(email);
    //pushes each email to the empty arr
    let max = arr[0].length;
    //takes the length of the first element of the arr and makes it the current max
    arr.map(item => max = Math.max(max, item.length));
    //this maps the arr and resets the current max value once a length comparison is made
    let str = arr.filter(item => item.length === max);
    //this filters the arr looking for the item that matches the current max length and returns that item
    return str;
},[])

let allNames = users.reduce((str, {name})=>{
    str.push(name)
    str.join(', ')
    return str
},[])
console.log(`Your instructors are: ${allNames}.`)



console.log(experience)
console.log(longEmail)

let searchBtn = document.querySelector('#search-btn')
let search = document.querySelector('#search').value
searchBtn.addEventListener('click')
const languages = users
    .reduce((previousValue, currentValue) =>
        [...new Set([...previousValue, ...currentValue.languages])], [])
                    // .reduce((previousValue, currentValue) =>
                    //     [...previousValue,...currentValue.languages],[])
                    // .reduce((unique, curr) =>
                    //     !unique.includes(curr) ? [...unique, curr] : [...unique],[])

console.log(languages)