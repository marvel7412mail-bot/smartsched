// Portfolio Contact Form Script
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Simple form validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                formMessage.textContent = 'Please fill in all fields.';
                formMessage.style.color = '#d32f2f';
                return;
            }

            // Simulate form submission
            formMessage.textContent = 'Thank you for reaching out, ' + name + '! I will get back to you soon.';
            formMessage.style.color = '#388e3c';
            form.reset();
        });
    }
});
