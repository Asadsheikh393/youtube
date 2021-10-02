var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container")
menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}


// 
// document.getElementById("#btn").addEventListener("click", () => {

//     if (width <= 768) {
//       document.getElementById("#count").scrollBy(270, 0);
//     } else {
//       document.getElementById("#count").scrollBy(800, 0);
//     }
// });