// Script for dynamic form handling or user interaction

// Example: Alert on form submission (Subscribe Section)
document.querySelector("#subscribe form").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = e.target.querySelector("input").value;
    alert(`Thank you for subscribing with: ${email}`);
    e.target.reset();
  });
  
  // Example: Alert on Contact Form Submission
  document.querySelector("#contact form").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = e.target.querySelector("#name").value;
    alert(`Thank you, ${name}! We will get back to you shortly.`);
    e.target.reset();
  });
  