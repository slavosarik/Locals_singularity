//= require jquery
//= require bootstrap.min

function adapt_screen_dependent_elements() {
    $('.screen-height-element').css('height', $(window).height());
}

$(window).resize(function() {
    adapt_screen_dependent_elements();
});

$(document).ready(function(){
    adapt_screen_dependent_elements();
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

