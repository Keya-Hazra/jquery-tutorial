$(document).ready(function(){
    $(".btn1").click(function(){
        alert("text: " + $('p').text())
    })

    $(".btn2").click(function(){
        alert("text: " + $('p').html())
    })

    $(".btn3").click(function(){
        alert($('#tag').val())
    })

    $(".btn4").click(function(){
        alert($('#tag2').attr('href'))
    })
})