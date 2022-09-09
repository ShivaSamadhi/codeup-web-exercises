(function () {
    "use strict"
    const blog = '../data/blog.json'

    $.get(blog).done(function (posts) {
        posts.forEach(post => {
            $('#posts').append(
                `<div class="card mb-5 border-dark d-flex" style="width: 100%;">
                  <div class="card-body bg-dark bg-opacity-75">
                    <h3 class="card-title font-2 text-light">${post.title}</h3>
                    <h6 class="card-subtitle mb-2 text-dark">${post.date}</h6>
                    <p class="card-text font-2 text-light">${post.content}</p>
                    <p class="card-text text-dark mt-1">${post.categories}</p>
                  </div>
                </div>`
            )
        })
    })
    $('body').css("background-image", "url('../img/sunset-at-the-ocean-wallpaper-1920x1080-wallpaper.jpeg')")
})();


