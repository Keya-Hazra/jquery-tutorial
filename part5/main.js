$(document).ready(function(){

    $('#hide').click(function(){
        $('p').hide(1000);
    })

    $('.show').click(function(){
        $('p').show(1000);
    })
     
    $('.click').click(function(){
        $('h1').toggle();
    })

})