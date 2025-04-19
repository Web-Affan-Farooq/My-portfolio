// Initialize Lenis
const lenis = new Lenis({
    wrapper:document.querySelector(".scroll-container"),
    orientation:"horizontal",
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);