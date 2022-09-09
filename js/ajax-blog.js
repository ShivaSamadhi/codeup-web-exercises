(function () {
    "use strict"
    const blog = '../data/blog.json'

    function update() {
        $.get(blog).done(function(posts) {
            let postCreate = blogHTML(posts); // create HTML string
            $('#posts').html(postCreate); // update the DOM with the new HTML
        }).fail(function(jqXhr, status, error) {
            console.log(jqXhr);
            console.log(status);
            console.log(error);
        });
    }
    update();
    
    function blogHTML(posts) {
        let html = ''
        posts.forEach(post => {
            html +=
                `<div class="card mb-3 border-dark d-flex" style="width: 100%;">
                  <div class="card-body bg-dark bg-opacity-75">
                    <h3 class="card-title font-2 text-light">${post.title}</h3>
                    <h6 class="card-subtitle mb-2 text-dark">${post.date}</h6>
                    <p class="card-text font-2 text-light">${post.content}</p>
                    <p class="card-text text-dark mt-1">${post.categories}</p>
                  </div>
                </div>`

        })
        return html
    }

    setInterval(function() {
        update();
    }, 3000);

})();


