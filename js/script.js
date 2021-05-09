const menuToggle = document.querySelector(".menu-toggle input");
const linkMenu = document.querySelector(".link-menu ul");

menuToggle.addEventListener("click", function () {
  linkMenu.classList.toggle("slide");
});
