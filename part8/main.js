$(document).ready(function(){

    $('button').click(function(){
        $(".hazra").animate({left:'500px',fontSize:'40px'},'slow');
     
        var keya=$('.hazra');
        keya.animate({height:'300px',opacity:'0.4'},'slow');
        keya.animate({width:'300px',opacity:'0.4'},'slow');
        keya.animate({height:'100px',opacity:'0.8'},'slow');
        keya.animate({width:'100px',opacity:'0.8'},'slow');

    });


});