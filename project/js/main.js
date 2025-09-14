// Toggle mobile menu
function toggleMenu() {
  const navLinks = document.querySelector('nav ul');
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}

// Contact form submission
function submitForm(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simple validation
  if(name && email && message) {
    document.getElementById('formMessage').textContent = `Thank you, ${name}! Your message has been sent.`;
    document.getElementById('contactForm').reset();
  } else {
    document.getElementById('formMessage').textContent = 'Please fill out all fields.';
  }
}
