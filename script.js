const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const toast = document.querySelector(".toast");
const cvButton = document.querySelector("[data-toast='cv']");
const contactForm = document.querySelector(".contact-form");

menuToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  document.body.classList.toggle("menu-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks?.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    navLinks.classList.remove("open");
    document.body.classList.remove("menu-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  }
});

cvButton?.addEventListener("click", (event) => {
  event.preventDefault();
  toast.classList.add("visible");
  window.clearTimeout(window.cvToastTimer);
  window.cvToastTimer = window.setTimeout(() => {
    toast.classList.remove("visible");
  }, 3200);
});

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  toast.textContent = "Formulario listo para conectar con tu servicio de contacto.";
  toast.classList.add("visible");
  window.clearTimeout(window.cvToastTimer);
  window.cvToastTimer = window.setTimeout(() => {
    toast.classList.remove("visible");
    toast.textContent = "Puedes reemplazar este enlace por tu CV en PDF.";
  }, 3200);
});
