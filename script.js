// Smooth scroll for CTA buttons
document.querySelectorAll('.cta-button').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(btn.getAttribute('href'));
    if(target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Placeholder form submission
document.querySelectorAll('form').forEach(f => {
  f.addEventListener('submit', e => {
    e.preventDefault();
    alert('Message sent! (Webhook integration coming later)');
    e.target.reset();
  });
});
