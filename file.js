
$(document).ready(function(){
    
    $('#side-navigation-arrow').click(toggleSideMenu);
    $('.blur').click(toggleSideMenu)
});
const toggleSideMenu = ()=>{
    $('#side-navigation').animate({width: 'toggle'});
    $('.blur').toggle();
}