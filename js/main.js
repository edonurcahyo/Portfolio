// ---- mobile nav toggle ----
const navToggle = document.querySelector('.nav-toggle');
const navSheets = document.querySelector('.navsheets');
if (navToggle && navSheets) {
  navToggle.addEventListener('click', () => {
    navSheets.classList.toggle('is-open');
  });
  navSheets.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navSheets.classList.remove('is-open'));
  });
}

// ---- scroll reveal ----
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && revealEls.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('is-visible'));
}

// ---- contact form -> mailto ----
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('cf-name').value.trim();
    const email = document.getElementById('cf-email').value.trim();
    const message = document.getElementById('cf-message').value.trim();
    const subject = encodeURIComponent(`Portfolio contact — ${name || 'no name'}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:edonurcahyo25@gmail.com?subject=${subject}&body=${body}`;
  });
}

// ---- current year (not currently displayed, kept for future use) ----
const yearEl = document.getElementById('current-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
