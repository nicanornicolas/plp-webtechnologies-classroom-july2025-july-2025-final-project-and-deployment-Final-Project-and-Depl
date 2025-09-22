// assets/js/main.js

// Make sure to register the plugin after importing GSAP
gsap.registerPlugin(ScrollTrigger);

// ======================= GSAP Animations =======================

// 1. Hero Section Animation
// Animate elements with the class .hero and select h1, p, and the button inside it.
gsap.from(".hero h1", { duration: 1, y: 50, opacity: 0, ease: "power3.out" });
gsap.from(".hero p", { duration: 1, y: 20, opacity: 0, ease: "power3.out", delay: 0.2 });
gsap.from(".hero .btn", { duration: 1, y: 20, opacity: 0, ease: "power3.out", delay: 0.4 });

// 2. Services Cards Scroll-Triggered Animation
// Select all the cards
const serviceCards = document.querySelectorAll('.service-card');

// Animate each card as it enters the viewport
serviceCards.forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 80%", // Start animation when the top of the card is 80% from the top of the viewport
            toggleActions: "play none none none" // Play the animation once
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out"
    });
});