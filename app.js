function showAlert() {
  alert("🎉 Your Azure app is working! Great job deploying to the cloud!");
}

function handleForm(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  console.log("Form submitted:", { name, email, message });

  document.getElementById("form-msg").textContent =
    `✅ Thanks, ${name}! Your message has been received.`;

  // Clear form
  e.target.reset();
}

// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});