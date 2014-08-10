//= require jquery
//= require bootstrap.min

$(document).ready(function(){
    $('.screen-height-element').css('height', $(window).height());
});
$(document).ready(function(){
    $('.screen-height-without-navbar-element').css('height', $(window).height()-100);
});