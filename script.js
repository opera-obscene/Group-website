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
// Check URL for success parameter
window.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('success') === 'true') {
    const modal = document.getElementById('success-modal');
    const closeBtn = document.getElementById('close-success');
    modal.classList.remove('hidden');

    // Close modal on click
    closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
    window.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.add('hidden');
    });
  }
});
