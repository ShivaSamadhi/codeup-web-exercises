"use strict";

/*1. JavaScript provides the ability to natively determine if the window has finished loading using the window.onload event handler, but it waits until all images have finished downloading. We usually do not need the image files to be fully downloaded to begin manipulating DOM objects. Therefore, we can pass an anonymous handler function into the jQuery instance. Passing an anonymous function in $() will execute our code when the document is ready for JavaScript manipulation:*/
$(function() {
    //1
    // alert( 'The DOM has finished loading!' );
    //
    // let contents = $('#para').html();
    // alert(contents)
    //
    // $('.codeup').css('border', '1px solid red');
    //
    // $('li').css('font-size', '20px')
    //
    // $('h1, p, li').css('background-color', 'yellow')
    //
    // let header = $('h1').html()
    // alert(header)
    //2
    // let contents = $('#codeup').html();
    // alert(contents);

    //3
    // $('.important').css('background-color', 'yellow');

    //4
    // $('p').css('font-size', '60px');

    //5
    // $('.important, p').css('background-color', '#FF0');

    // $('#codeup').click(function() {
    //     alert('h1 with id "codeup" was clicked');
    // });

    //EVENT LISTENERS
    $('#codeup').click(function() {
        $(this).css('background-color', '#FF0');
    })
    $('p').dblclick(function() {
        $(this).css('font-size', '18px');
    })
    $('li').hover(
        function() {
            $(this).css('color', '#e32615');
        },
        function() {
            $(this).css('color', '#030303');
        }
    );
});


/*2. The general syntax for manipulating elements with jQuery selectors is: $('selector'). $() === jQuery(), $ is a commonly used shorthand for jQuery, and using either one will accomplish the same thing.

All selector expressions return us a jQuery object, which is just an object that represents zero or more HTML elements, with all the methods of jQuery attached to it.

.html: returns the HTML contents of selected element or the first element in a collection. Similar to the innerHTML property we previously covered.

.css: allows us to change CSS properties for a given element or elements. Similar to the style property previously discussed.*/

/*3. We will add some jQuery to select all the elements with a class of important and use the .css method to change the background color to yellow.*/

/*4. We could make all of our paragraph fonts larger using jQuery. Later, when we learn about events, we could create buttons to increase and decrease font size.*/

/*5. Sometimes we want to select multiple different elements using different selectors. While we could create a different selector for each, jQuery allows us to use multiple selectors at one time to get a single result.*/