console.log('Script loaded');

if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from('.gsap-lab__eyebrow, .gsap-lab h2, .gsap-lab__description', {
    y: 24,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.gsap-lab',
      start: 'top 80%'
    }
  });

  gsap.from('.gsap-lab__card', {
    y: 30,
    opacity: 0,
    duration: 0.9,
    stagger: 0.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.gsap-lab',
      start: 'top 70%'
    }
  });
}
