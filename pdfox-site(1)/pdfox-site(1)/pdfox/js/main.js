// ── MENU MOBILE ──
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

// ── COOKIE BANNER ──
function closeCookie() {
  document.getElementById('cookieBanner').style.display = 'none';
  localStorage.setItem('pdfox_cookie', '1');
}
if (localStorage.getItem('pdfox_cookie')) {
  const b = document.getElementById('cookieBanner');
  if (b) b.style.display = 'none';
}

// ── FADE UP AU SCROLL ──
function observeFadeUp() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.animationPlayState = 'running';
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-up').forEach(el => {
    el.style.animationPlayState = 'paused';
    obs.observe(el);
  });
}
document.addEventListener('DOMContentLoaded', observeFadeUp);
