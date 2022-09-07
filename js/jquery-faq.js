"use strict"
$(document).ready(function (){
    $('dd').addClass('invisible');

    $("#toggle").click(function(event) {
        event.preventDefault();
        $("dd").toggleClass('invisible')
    });

    $('dt').click(function () {
        $(this).css('background-color', "red")
    }).on('dblclick', function () {
        $(this).css('background-color', 'transparent')
    });
    $('dt').addClass('h3')

    $('.color-change').click(function () {
        $('.bg-change').children().css('background-color', 'goldenrod')
    }).on('dblclick', function () {
        $('ul').children().css('background-color', 'white')
    })
    
    $('.np-name').on('click', function () {
        $(this).next().children().css('font-weight', 'bold')
    }).on('dblclick', function () {
        $(this).next().children().css('font-weight', 'normal')
    })

    $('li').on('click', function () {
        $(this).parent().children().first().css('color', 'blue')
    }).on('dblclick', function () {
        $(this).parent().children().first().css('color', 'black')
    })
    
    $('.link-1').on('click', function (event) {
        event.preventDefault();
        $("#everglades").toggleClass('d-none')
    })
    $('.link-2').on('click', function (event) {
        event.preventDefault();
        $("#big-bend").toggleClass('d-none')
    })
    $('.link-3').on('click', function (event) {
        event.preventDefault();
        $("#death-valley").toggleClass('d-none')
    })
});
