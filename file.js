
$(document).ready(function(){
    
    $('#side-navigation-arrow').click(function() {
    $('#side-navigation').animate({width: 'toggle'});
    $('.blur').toggle();
    });
});