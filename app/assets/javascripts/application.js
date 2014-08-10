//= require jquery
//= require bootstrap.min

$(document).ready(function(){
    $('.screen-height-element').css('height', $(window).height());
});
$(document).ready(function(){
    $('.screen-height-without-navbar-element').css('height', $(window).height()-100);
});

$(document).ready(function(){
    var $root = $('html, body');
    $('a').click(function() {
        $root.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        return false;
    });
});