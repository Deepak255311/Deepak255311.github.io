// Small interaction layer: reveal sections as they enter the viewport.
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".section, .project, .edu-card, .traits article, .goals article").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(18px)";
  el.style.transition = "opacity .7s ease, transform .7s ease";
  observer.observe(el);
});

document.addEventListener("scroll", () => {
  document.querySelectorAll(".visible").forEach(el => {
    el.style.opacity = "1";
    el.style.transform = "translateY(0)";
  });
}, {passive:true});

// Trigger once on load for elements already in view.
setTimeout(() => document.querySelectorAll(".section, .project, .edu-card, .traits article, .goals article").forEach(el => {
  const r = el.getBoundingClientRect();
  if (r.top < innerHeight * .9) { el.classList.add("visible"); el.style.opacity="1"; el.style.transform="translateY(0)"; }
}), 100);
