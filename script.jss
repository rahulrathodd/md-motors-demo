// Toggle mobile menu
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector("#menu-button");
  const navLinks = document.querySelector("#nav-links");


  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
      navLinks.classList.toggle("show");
    });
  }


  // Scroll to top button
  const scrollBtn = document.getElementById("scrollToTop");
  window.onscroll = function () {
    if (scrollBtn) {
      scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
    }
  };


  if (scrollBtn) {
    scrollBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});