/*
var form = document.getElementById('form');
form.addEventListener('submit', function(event){
    event.preventDefault();
    var color1 = document.getElementById('color1').value;
    var color2 = document.getElementById('color2').value;
    var color3 = document.getElementById('color3').value;

    document.querySelector('.box1').style.backgroundColor = color1;
    document.querySelector('.box2').style.backgroundColor = color2;
    document.querySelector('.box3').style.backgroundColor = color3;
});
*/

$(function() {
    $('form').submit(function (event) {
        event.preventDefault();
        var color1 = $('#color1').val ();
        var color2 = $('#color2').val ();
        var color3 = $('#color3').val ();

        $('.box1').css('background-color',color1);
        $('.box2').css('background-color',color2);
        $('.box3').css('background-color',color3);
    
});
});
