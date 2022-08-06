const cancelBtn = document.querySelector("nav ul .cancel");
const menuBtn = document.querySelector(".bars");
const menu = document.querySelector("body nav ul");
const links = document.querySelectorAll("nav ul li a");
const about = document.querySelector(".about");
const projects = document.querySelector(".projects");
const contact = document.querySelector(".contact");

menuBtn.addEventListener("click", function () {
  menu.classList.add("showMenu");
  about.classList.add("none");
  projects.classList.add("none");
  contact.classList.add("none");
});

cancelBtn.addEventListener("click", function () {
  menu.classList.remove("showMenu");
  about.classList.remove("none");
  projects.classList.remove("none");
  contact.classList.remove("none");
});

links.forEach((link) =>
  link.addEventListener("click", function () {
    menu.classList.remove("showMenu");
    about.classList.remove("none");
    projects.classList.remove("none");
    contact.classList.remove("none");
  })
);
