document.getElementById('contact').addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());

  await fetch('https://n8n-opera-obscene.onrender.com/webhook/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  alert('Message sent!');
  e.target.reset();
});
