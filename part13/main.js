$(document).ready(function(){

    $('.btn1').click(function(){
        $('.lorem1').text('my name is keya hazra')
    })

    $('.btn2').click(function(){
        $('.lorem2').html('my name is <b>keya hazra</b>')
    })

    $('.btn3').click(function(){
        $('.lorem3').val('Enter your first name')
    })

    $('.btn4').click(function(){
        $('.lorem4').attr('href','https://www.facebook.com/?_rdc=1&_rdr')
    })

})