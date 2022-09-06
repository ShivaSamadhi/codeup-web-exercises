"use strict"
$(document).ready(function (){
    $('dd').addClass('invisible')
    $("#toggle").click(function(event) {
        event.preventDefault();
        console.log("this was executed")
        $("dd").toggleClass('invisible')
    })
});
