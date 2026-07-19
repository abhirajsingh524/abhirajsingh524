// AI OS Identity Card — Skill Bar Animator

document.addEventListener('DOMContentLoaded', () => {
  const skillBars = document.querySelectorAll('.skill-bar[data-pct]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const pct = el.getAttribute('data-pct') || 0;
        el.style.setProperty('--pct', pct);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.1 });

  skillBars.forEach(bar => {
    bar.style.setProperty('--pct', 0);
    observer.observe(bar);
  });
});
