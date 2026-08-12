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

// ---- contact form -> Gmail compose (fix untuk Windows) ----
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('cf-name').value.trim();
    const email = document.getElementById('cf-email').value.trim();
    const message = document.getElementById('cf-message').value.trim();
    
    // Validasi sederhana
    if (!name || !email || !message) {
      alert('Harap isi semua field!');
      return;
    }
    
    // Encode untuk URL
    const subject = encodeURIComponent(`Portfolio contact — ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    
    // Buka Gmail compose di tab baru
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=edonurcahyo25@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
    
    // Opsional: reset form
    // contactForm.reset();
  });
}

// ---- current year ----
const yearEl = document.getElementById('current-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();