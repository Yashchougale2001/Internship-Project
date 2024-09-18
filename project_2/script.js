var typed = new Typed(".skills", {
  strings: ["Software Developer", "Frontend Developer", "Android Developer"],
  typeSpeed: 150,
  backSpeed: 150,
  backDelay: 1000,
  loop: true,
});

document.getElementById("linkedin-icon").onclick = function () {
  window.open("https://www.linkedin.com/in/yashchougale2001/", "_blank");
};
document.getElementById("github-icon").onclick = function () {
  window.open("https://github.com/Yashchougale2001", "_blank");
};

document.getElementById("downloadBtn").addEventListener("click", function () {
  document.getElementById("downloadLink").click();
});

var sections = document.querySelectorAll("section");
var links = document.querySelectorAll("header nav a");
var menu = document.querySelector("#menu");
var navbar = document.querySelector("header nav");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  sections.forEach((sec) => {
    var scroll = scrollY;
    var offset = sec.offsetTop - 100;
    var id = sec.id;

    if (scroll >= offset) {
      links.forEach((e) => {
        e.classList.remove("active");
      });
      document
        .querySelector('nav a[href="#' + id + '"]')
        .classList.add("active");
    }
  });
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};
