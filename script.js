// Dark Mode Toggle
const toggleBtn = document.querySelector('.theme-toggle');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Smooth Scrolling for Nav Links
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Lightbox for Portfolio
const lightboxOverlay = document.querySelector('.lightbox-overlay');
const lightboxImg = document.querySelector('.lightbox-img');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxTriggers = document.querySelectorAll('.lightbox-trigger');

lightboxTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
        e.preventDefault();
        lightboxOverlay.style.display = 'flex';
        lightboxImg.src = trigger.href;
        lightboxImg.alt = trigger.querySelector('img').alt;
        lightboxOverlay.setAttribute('aria-hidden', 'false');
    });
});
lightboxClose.addEventListener('click', () => {
    lightboxOverlay.style.display = 'none';
    lightboxOverlay.setAttribute('aria-hidden', 'true');
});
lightboxOverlay.addEventListener('click', (e) => {
    if (e.target === lightboxOverlay) {
        lightboxOverlay.style.display = 'none';
        lightboxOverlay.setAttribute('aria-hidden', 'true');
    }
});

// Contact Form Submission (EmailJS)
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // EmailJS setup
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        name: name,
        email: email,
        message: message,
    })
    .then(() => {
        alert('Message sent! Thank you for reaching out.');
        contactForm.reset();
    })
    .catch((error) => {
        alert('Failed to send message. Please try again later.');
        console.error('Error:', error);
    });
});