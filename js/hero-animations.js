(() => {
  const hero = document.querySelector(".home-hero");
  if (!hero) return;

  const topbar = document.querySelector(".topbar-home");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const syncFallbackNav = () => {
    if (!topbar) return;
    topbar.classList.toggle("is-scrolled", window.scrollY >= hero.offsetHeight);
  };

  const enableFallbackNav = () => {
    syncFallbackNav();
    window.addEventListener("scroll", syncFallbackNav, { passive: true });
  };

  if (!window.gsap || !window.ScrollTrigger) {
    console.error("Hero animations require GSAP and ScrollTrigger; using static hero layout.");
    enableFallbackNav();
    return;
  }

  if (reducedMotion.matches) {
    hero.querySelectorAll(".reveal").forEach((element) => {
      element.classList.add("is-visible");
    });
    enableFallbackNav();
    return;
  }

  const { gsap, ScrollTrigger } = window;
  gsap.registerPlugin(ScrollTrigger);

  const label = hero.querySelector(".hero-label");
  const words = hero.querySelectorAll(".hero-word");
  const tagline = hero.querySelector(".hero-desc");
  const buttons = hero.querySelectorAll(".hero-actions .hero-btn");
  const divider = hero.querySelector(".hero-divider");
  const scrollCue = hero.querySelector(".hero-scroll");
  const stats = hero.querySelector(".hero-stats");
  const foreground = hero.querySelector(".hero-copy");
  const background = hero.querySelector(".hero-bg-parallax");

  const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
  intro
    .from(label, { autoAlpha: 0, y: 14, duration: 0.65 })
    .from(words, { autoAlpha: 0, y: 38, duration: 0.75, stagger: 0.08 }, "-=0.24")
    .from(tagline, { autoAlpha: 0, y: 16, duration: 0.6 }, "-=0.25")
    .from(buttons, { autoAlpha: 0, y: 12, duration: 0.5, stagger: 0.08 }, "-=0.2")
    .from(divider, { scaleX: 0, transformOrigin: "center", duration: 0.4 }, "-=0.08")
    .from(scrollCue, { autoAlpha: 0, y: 10, duration: 0.45 }, "-=0.08")
    .from(stats, { autoAlpha: 0, y: 24, duration: 0.7 }, "-=0.12");

  const updateNav = (progress) => {
    if (topbar) topbar.classList.toggle("is-scrolled", progress >= 0.999);
  };

  const heroScroll = gsap.timeline({
    scrollTrigger: {
      trigger: hero,
      start: "top top",
      end: "+=100%",
      scrub: 0.8,
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => updateNav(self.progress),
      onRefresh: (self) => updateNav(self.progress),
      onLeave: () => updateNav(1),
      onLeaveBack: () => updateNav(0)
    }
  });

  const mobileMotion = window.matchMedia("(max-width: 720px)").matches;
  heroScroll
    .to(foreground, { autoAlpha: 0, y: -44, ease: "none" }, 0)
    .to(background, { y: mobileMotion ? -42 : -150, ease: "none" }, 0);

  gsap.utils.toArray("main .reveal").forEach((element) => {
    gsap.fromTo(
      element,
      { autoAlpha: 0, y: 40 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 86%",
          once: true
        }
      }
    );
  });
})();
