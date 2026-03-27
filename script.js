// Destaca o link do menu da seção que está visível na tela
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.style.color = "#e0e0e0";
    if (link.getAttribute("href") === `#${current}`) {
      link.style.color = "#7c3aed";
    }
  });
});