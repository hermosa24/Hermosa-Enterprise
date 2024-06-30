// Add event listeners to the service buttons
document.querySelectorAll('.service-button').forEach(button => {
  button.addEventListener('click', () => {
    // Toggle the active class on the service button
    button.classList.toggle('active');
  });
});

// Add event listeners to the contact form
document.querySelector('#contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  // Get the form data
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;
  // Display a success message
  alert(`Thank you, ${name}! Your message has been sent.`);
});


