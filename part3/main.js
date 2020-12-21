$(document).ready(function(){
$('.1').click(function(){
$('p:last').hide();
});

$('.2').click(function(){
    $('ul li:nth-child(2)').hide();
    });

    $('.3').click(function(){
        $('a[target="_blank"]').hide();
        });
});