$(document).ready(function(){
    $("span").parentsUntil('div').css({
        "border":"2px solid black",
        "color" :"white"
    })
})