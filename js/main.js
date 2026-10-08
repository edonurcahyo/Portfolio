document.documentElement.classList.add('js-enabled');

// ---- mobile nav toggle ----
const navToggle = document.querySelector('.nav-toggle');
const navSheets = document.querySelector('.navsheets');
if (navToggle && navSheets) {
  navToggle.addEventListener('click', () => {
    const isOpen = navSheets.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', (translations[getLang()] || translations.id)[isOpen ? 'nav.close' : 'nav.open']);
  });
  navSheets.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navSheets.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', (translations[getLang()] || translations.id)['nav.open']);
    });
  });
}

// ---- hero parallax  ----
const heroBgParallax = document.querySelector('.hero-bg-parallax');
if (heroBgParallax && (!window.gsap || !window.ScrollTrigger)
  && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
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
if (revealEls.length && (!window.gsap || !window.ScrollTrigger)) {
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
lightboxOverlay.setAttribute('role', 'dialog');
lightboxOverlay.setAttribute('aria-modal', 'true');
lightboxOverlay.setAttribute('aria-label', 'Pratinjau gambar');
lightboxOverlay.setAttribute('data-i18n-aria', 'lightbox.label');
lightboxOverlay.setAttribute('aria-hidden', 'true');
lightboxOverlay.tabIndex = -1;
const lightboxImg = document.createElement('img');
lightboxImg.alt = '';
const lightboxClose = document.createElement('button');
lightboxClose.className = 'lightbox-close';
lightboxClose.type = 'button';
lightboxClose.setAttribute('aria-label', 'Tutup pratinjau gambar');
lightboxClose.setAttribute('data-i18n-aria', 'lightbox.close');
lightboxClose.textContent = '×';
lightboxOverlay.appendChild(lightboxClose);
lightboxOverlay.appendChild(lightboxImg);
document.body.appendChild(lightboxOverlay);

let lightboxTrigger = null;
function closeLightbox() {
  if (lightboxOverlay.style.display === 'none') return;
  lightboxOverlay.style.display = 'none';
  lightboxOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (lightboxTrigger) lightboxTrigger.focus();
  lightboxTrigger = null;
}

document.querySelectorAll('.screenshot-link, .project-image, .project-image-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const img = this.querySelector('.project-screenshot, img');
    if (img) {
      lightboxTrigger = this;
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt || 'Screenshot diperbesar';
      lightboxOverlay.style.display = 'flex';
      lightboxOverlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      lightboxClose.focus();
    }
  });
});

// ---- project category filters ----
const projectFilters = document.querySelectorAll('.filter-chip');
const projectCards = document.querySelectorAll('.project-card[data-category]');
if (projectFilters.length && projectCards.length) {
  projectFilters.forEach(filter => {
    filter.addEventListener('click', () => {
      const category = filter.getAttribute('data-filter');
      projectFilters.forEach(button => {
        const isActive = button === filter;
        button.classList.toggle('is-active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
      });
      projectCards.forEach(card => {
        card.hidden = category !== 'all' && card.getAttribute('data-category') !== category;
      });
    });
  });
}

// ---- certificate category filters ----
const certFilters = document.querySelectorAll('.cert-filter-chip');
const certCards = document.querySelectorAll('.cert-card[data-category]');
const certCountVal = document.querySelector('.cert-count-value');
if (certFilters.length && certCards.length) {
  certFilters.forEach(filter => {
    filter.addEventListener('click', () => {
      const category = filter.getAttribute('data-filter');
      certFilters.forEach(button => {
        const isActive = button === filter;
        button.classList.toggle('is-active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
      });
      let visibleCount = 0;
      certCards.forEach(card => {
        const matches = category === 'all' || card.getAttribute('data-category') === category;
        card.hidden = !matches;
        if (matches) visibleCount++;
      });
      if (certCountVal) {
        certCountVal.textContent = String(visibleCount).padStart(2, '0');
      }
    });
  });
}

lightboxOverlay.addEventListener('click', function (e) {
  if (e.target === lightboxOverlay || e.target === lightboxImg || e.target === lightboxClose) closeLightbox();
});

document.addEventListener('keydown', function (e) {
  if (lightboxOverlay.style.display !== 'none') {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'Tab') {
      e.preventDefault();
      lightboxClose.focus();
    }
    return;
  }

  if (e.key === 'Escape' && navToggle && navSheets && navSheets.classList.contains('is-open')) {
    navSheets.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', (translations[getLang()] || translations.id)['nav.open']);
    navToggle.focus();
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
    if (!name || !email || !message) { alert((translations[getLang()] || translations.id)['contact.error.required']); return; }
    const subject = encodeURIComponent(`Portfolio contact — ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=edonurcahyo25@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
  });
}

// ---- current year ----
const yearEl = document.getElementById('current-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();