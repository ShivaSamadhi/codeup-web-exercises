(function () {
    "use strict"
    const blog = '../data/blog.json'

    $.get(blog).done(function (posts) {
        posts.forEach(post => {
            $('#posts').append(
                `<div class="col-6">
                 <h1 class="">${post.title}</h1>
                 <h5>${post.date}</h5> 
                 <p>${post.content}</p>
                 </div>`
            )
        })
    })
})();


