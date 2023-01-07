
// Navbar

 /* When the user clicks on the button, 
    toggle between hiding and showing the dropdown content */
    function myFunction() {
        document.getElementsByClassName("toggle-dd").classList.toggle("show");
      }
  
      // Close the dropdown if the user clicks outside of it
      window.onclick = function (event) {
        if (!event.target.matches(".dropbtn")) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
              openDropdown.classList.remove("show");
            }
          }
        }
      };
  
      function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
      }
  
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }

      
//handles Side nav dropdown
 var dropdown = document.getElementsByClassName("dropdown-btn");
 var i;

 for (i = 0; i < dropdown.length; i++) {
   dropdown[i].addEventListener("click", function () {
     this.classList.toggle("active");
     var dropdownContent = this.nextElementSibling;
     if (dropdownContent.style.display === "block") {
       dropdownContent.style.display = "none";
     } else {
       dropdownContent.style.display = "block";
     }
   });
 }

 // handles click controls of side nav options
 $(document).ready(function () {
   const panelIds = [
     "",
     "#btn-subjective-quiz",
     "#btn-placement-quiz",
     "#btn-your-books",
     "#btn-your-collections",
     "#btn-assignment",
   ];
   hideAll();
   $("#panel-default").fadeIn(300);

   $("#btn-subjective-quiz").click(function (e) {
     e.preventDefault();
     hideAll();
     $("#panel-subjective-quiz").fadeIn(300);
     updateActivePanel(1);
   });
   $(".nav-subjective-btn").click(function (e) {
     e.preventDefault();
     hideAll();
     $("#panel-subjective-quiz").fadeIn(300);
     updateActivePanel(1);
   });
   $("#btn-placement-quiz").click(function (e) {
     e.preventDefault();
     hideAll();
     $("#panel-placement-quiz").fadeIn(300);
     updateActivePanel(2);
   });
   $(".nav-placement-btn").click(function (e) {
     e.preventDefault();
     hideAll();
     $("#panel-placement-quiz").fadeIn(300);
     updateActivePanel(2);
   });
   $("#btn-your-books").click(function (e) {
     e.preventDefault();
     hideAll();
     $("#panel-your-books").fadeIn(300);
     updateActivePanel(3);
   });
   $("#btn-your-collections").click(function (e) {
     e.preventDefault();
     hideAll();
     $("#panel-your-collections").fadeIn(300);
     updateActivePanel(4);
   });
   $("#btn-assignment").click(function (e) {
     e.preventDefault();
     hideAll();
     $("#panel-assignment").fadeIn(300);
     updateActivePanel(5);
   });

   let activePanel = Number(localStorage.getItem("last-active-panel"));
   let activePanelId = panelIds[activePanel];
   $(activePanelId).click();
 });

 function hideAll() {
   $(".panel-item").hide();
 }
 function updateActivePanel(panelNumber) {
   localStorage.setItem("last-active-panel", panelNumber);
 }

 //handle Side nav Toggle in mobile view
$(document).ready(function(){
    
    $('#side-navigation-arrow').click(toggleSideMenu);
    $('.blur').click(toggleSideMenu)
});
const toggleSideMenu = ()=>{
    $('#side-navigation').animate({width: 'toggle'});
    $('.blur').toggle();
}