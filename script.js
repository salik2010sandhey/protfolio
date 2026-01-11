// Enhanced cursor follow with hover effects
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// Add hover effect for interactive elements
const hoverElements = document.querySelectorAll(
  "a, button, .skill-card, .work-card, .icon, .btn"
);

hoverElements.forEach(element => {
  element.addEventListener("mouseenter", () => {
    cursor.classList.add("hovering");
  });
  
  element.addEventListener("mouseleave", () => {
    cursor.classList.remove("hovering");
  });
});

// Scroll-triggered animations are handled by GSAP now
// The previous fade functionality is replaced by GSAP animations
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

// ===== GSAP Animations =====

document.addEventListener("DOMContentLoaded", () => {
  // Hero section animations
  gsap.from(".hero-left h1", {
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 0.2,
    ease: "power3.out"
  });
  
  gsap.from(".hero-left h2", {
    duration: 1,
    y: 30,
    opacity: 0,
    delay: 0.4,
    ease: "power3.out"
  });
  
  gsap.from(".hero-left p", {
    duration: 1,
    y: 30,
    opacity: 0,
    delay: 0.6,
    ease: "power3.out"
  });
  
  gsap.from(".hero-buttons", {
    duration: 1,
    y: 30,
    opacity: 0,
    delay: 0.8,
    ease: "power3.out"
  });
  
  gsap.from(".profile-circle", {
    duration: 1.2,
    scale: 0.5,
    opacity: 0,
    delay: 0.5,
    ease: "back.out(1.7)"
  });
  
  // Animate profile stats container
  gsap.fromTo(".profile-stats", {
    y: 30,
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    duration: 0.8,
    delay: 1.0,
    ease: "power3.out"
  });
  
  // Animate stat items individually
  gsap.fromTo(".stat-item", 
    { y: 20, opacity: 0 },
    { 
      y: 0, 
      opacity: 1,
      duration: 0.6,
      stagger: 0.2,
      delay: 1.3,
      ease: "power2.out"
    }
  );
  

  
  // Stagger animation for navigation items
  gsap.from("nav a", {
    duration: 0.8,
    y: -20,
    opacity: 0,
    stagger: 0.1,
    ease: "power2.out",
    delay: 0.3
  });
  
  // Scroll-triggered animations for sections
  gsap.utils.toArray('.section, .skills-section, .contact-section, .social-section').forEach((section) => {
    gsap.from(section, {
      duration: 1,
      y: 50,
      opacity: 0,
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  });
  
  // Animate skill cards individually
  gsap.utils.toArray('.skill-card').forEach((card, index) => {
    gsap.from(card, {
      duration: 0.8,
      y: 30,
      opacity: 0,
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none reverse"
      },
      delay: index * 0.1
    });
  });
  
  // Animate work cards
  gsap.utils.toArray('.work-card').forEach((card, index) => {
    gsap.from(card, {
      duration: 0.8,
      y: 30,
      opacity: 0,
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none reverse"
      },
      delay: index * 0.1
    });
  });
  
  // Animate social icons
  gsap.utils.toArray('.icon').forEach((icon, index) => {
    gsap.from(icon, {
      duration: 0.8,
      y: 30,
      opacity: 0,
      scrollTrigger: {
        trigger: icon,
        start: "top 85%",
        toggleActions: "play none none reverse"
      },
      delay: index * 0.1
    });
  });
  
  // Header animation on scroll
  let header = document.querySelector('header');
  
  gsap.fromTo(header, 
    { y: -100 },
    {
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: header,
        start: "top -50px",
        toggleActions: "play none none reverse"
      }
    }
  );
  
  // Photo glow pulsing animation
  gsap.to(".photo-glow", {
    scale: 1.05,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: 1
  });
});
