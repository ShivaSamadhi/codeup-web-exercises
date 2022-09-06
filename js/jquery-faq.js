"use strict"
$(document).ready(function (){
    $('dd').addClass('invisible')
    $("#toggle").click(function(event) {
        event.preventDefault();
        $("dd").toggleClass('invisible')
    })
});
