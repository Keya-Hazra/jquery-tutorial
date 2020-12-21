$(document).ready(function(){

    $('button:first').click(function(){
        $('div').toggleClass('a b')

    })

    $('button:last').click(function(){
        $('.c').removeClass('c')

    })
})