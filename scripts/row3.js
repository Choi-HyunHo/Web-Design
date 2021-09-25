$(document).ready(function(){
    $('.nav > ul > li ').mouseover(function(){
        $('.nav > ul > li > ul').show()
    })

    $('.nav > ul > li').mouseout(function(){
        $('.nav > ul > li > ul').hide()
    })
});