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

// ---- hero parallax  ----
const heroBgParallax = document.querySelector('.hero-bg-parallax');
if (heroBgParallax && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  let ticking = false;
  const applyParallax = () => {
    const y = window.scrollY;
    if (y < window.innerHeight * 1.2) {
      heroBgParallax.style.transform = `translateY(${y * 0.08}px)`;
    }
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(applyParallax);
      ticking = true;
    }
  }, { passive: true });
}

// ---- scroll reveal ----
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  if ('IntersectionObserver' in window) {
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
}

// ---- lightbox ----
const lightboxOverlay = document.createElement('div');
lightboxOverlay.className = 'lightbox-overlay';
lightboxOverlay.style.display = 'none';
const lightboxImg = document.createElement('img');
lightboxOverlay.appendChild(lightboxImg);
document.body.appendChild(lightboxOverlay);

document.querySelectorAll('.screenshot-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const img = this.querySelector('.project-screenshot');
    if (img) {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt || 'Screenshot diperbesar';
      lightboxOverlay.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }
  });
});

lightboxOverlay.addEventListener('click', function() {
  this.style.display = 'none';
  document.body.style.overflow = '';
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    lightboxOverlay.style.display = 'none';
    document.body.style.overflow = '';
  }
});

// ---- contact form ----
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('cf-name').value.trim();
    const email = document.getElementById('cf-email').value.trim();
    const message = document.getElementById('cf-message').value.trim();
    if (!name || !email || !message) { alert('Harap isi semua field!'); return; }
    const subject = encodeURIComponent(`Portfolio contact — ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=edonurcahyo25@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
  });
}

// ---- current year ----
const yearEl = document.getElementById('current-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();