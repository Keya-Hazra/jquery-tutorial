$(document).ready(function(){
    $('.btn1').click(function(){
      $('p').prepend( 'hello ')
    })

    $('.btn2').click(function(){
        $('p').append( ' hazra')
      })


      $('.btn3').click(function(){
        $('img').before( "momo")
      })

      $('.btn4').click(function(){
        $('#img').after( "momo")
      })
  
      
})