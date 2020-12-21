$(document).ready(function(){
    $('div').click(function(){
        $('p').slideDown(2000);
    })

    $('button').click(function(){
        $('p').stop();
    })
    
})