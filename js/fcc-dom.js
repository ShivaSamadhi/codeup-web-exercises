/*
//DOM Manipulation: Document Object Model is a set of APIs that can be used to select and change specific HTML elements on a webpage. This allows for great control of overall structure

let div1 = document.getElementById(`div1`)

//we declare a var with the name of the element we are going to be selecting, in this case div1. By using document.getElementById(), we are directly referring to the HTML and can then select an element based on an associated id. By passing in div1, we select the div with the corresponding id.

let unicycle = document.getElementsByClassName(`unicycle`)

//elements can also be selected via class name using a similar syntax. Note that document refers to the entire HTML and will select all elements with the class unicycle. If I replaced document with div1, then only the p element inside div1 would be selected since it has the unicycle class name. Any element outside this div with the class name is ignored.

let para = document.getElementsByTagName(`p`)

//elements can also be selected by their tag names. In this example we are selecting all of the paragraph tags in the document

let queryUni = document.querySelector(`.unicycle`)

let queryAll = document.querySelectorAll(`.unicycle, #div2`)

//query selector allows you to search for the first instance of an element based on the given css selector. In our first example we pass in .unicycle (class unicycle) which would end up selecting the second p tag. Query selector all returns an array of all instances of a given css selector.

let text = `<h1>Hello World</h1>`
//div1.textContent = text

//by creating a var called text and using HTML code inside a string literal, then using div1.innerHTML to store that text, we have effectively rewritten the original HTML within div1 to now display Hello World within an h1 tag

for(i = 0; i < queryAll.length; ++i){
  queryAll[i].textContent = text
}
*/