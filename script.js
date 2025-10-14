// Simple page interactions
document.querySelectorAll('.cta-button').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(btn.getAttribute('href'));
    if(target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Form submission (currently does nothing, placeholder)
document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you! (Webhook integration coming later)');
  e.target.reset();
});
