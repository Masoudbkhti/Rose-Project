const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const title = document.querySelector(".title");
const header = document.querySelector(".header");
const menuFooter = document.querySelector(".menu-footer");
const description = document.querySelector(".description");
const footer = document.querySelector(".footer");
const form = document.querySelector(".form-container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  title.classList.toggle("active");
  header.classList.toggle("active");
  menuFooter.classList.toggle("active");
  description.classList.toggle("active");
  footer.classList.toggle("active");
  form.classList.toggle("active");
});

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  // Scroll to the top of the document smoothly
  var position = document.documentElement.scrollTop || document.body.scrollTop;
  if (position > 0) {
    window.requestAnimationFrame(topFunction);
    window.scrollTo(0, position - position / 8);
  }
}
