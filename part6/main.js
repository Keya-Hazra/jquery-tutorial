$(document).ready(function(){
    $('.1').click(function(){
        $('.box1').fadeTo('slow',0.3);
        $('.box2').fadeTo('slow',0.5);
        $('.box3').fadeTo('slow',0.7);



    })

    $('.2').click(function(){
        $('.box4').fadeToggle();
        $('.box5').fadeToggle();
        $('.box6').fadeToggle();



    })

    $('.3').click(function(){
        $('.box7').fadeIn(1000);
        $('.box8').fadeIn(2000);
        $('.box9').fadeIn(3000);



    })

    $('.4').click(function(){
        $('.box10').fadeOut(1000);
        $('.box11').fadeOut(2000);
        $('.box12').fadeOut(3000);



    })


})