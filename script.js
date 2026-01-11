// Cursor follow
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// Scroll animation
const fades = document.querySelectorAll(".fade");
window.addEventListener("scroll", () => {
  fades.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});
// 🔐 ONLY PUBLIC KEY HERE
(function () {
  emailjs.init("cR87XXicmQbNyiE13");
})();

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_eg4lgnu",       // ✅ your service id
    "template_contact_us",   // ✅ your template id
    this
  ).then(
    function () {
      document.getElementById("status").innerText =
        "Message sent successfully ✔";
      document.getElementById("contact-form").reset();
    },
    function (error) {
      document.getElementById("status").innerText =
        "Error sending message ❌";
      console.log("EmailJS Error:", error);
    }
  );
});
// ===== Mobile Menu Toggle =====
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Close menu when link clicked (mobile UX)
document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});
