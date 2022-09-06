"use strict"
$(document).ready(function (){
    $('dd').addClass('invisible')
    $("#toggle").click(function(event) {
        event.preventDefault();
        $("dd").toggleClass('invisible')
    })
    $('dt').click(function () {
        $(this).css('background-color', "red")
    }).on('dblclick', function () {
        $(this).css('background-color', 'white')
    })
});
