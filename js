document.getElementById('contact').addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());

  await fetch('https://your-n8n-domain/webhook/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  alert('Message sent!');
  e.target.reset();
});
