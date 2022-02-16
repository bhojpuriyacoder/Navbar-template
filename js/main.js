var toglebtn = document.querySelector(".nav-toggle-btn");

toglebtn.addEventListener("click", function() {
  document
    .querySelector(".toggle-nav-display")
    .classList.toggle("toggle-navbar-class");
     document
       .querySelector(".nav-upper-right")
       .classList.toggle("toggle-navbar-class");
  console.log("hello  world");
});
// console.log("hello  world");