// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Contact form handling (UI only for now)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formMessage = document.getElementById('form-message');
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            
            // Show success message (form doesn't actually submit yet)
            formMessage.classList.remove('hidden');
            formMessage.classList.add('bg-green-600/20', 'border', 'border-green-500', 'text-green-300');
            formMessage.classList.remove('bg-red-600/20', 'border-red-500', 'text-red-300');
            formMessage.textContent = `Thank you, ${name}! Your message has been received. We'll contact you at ${email} soon. (Note: This is a demo. Form submission will be configured when backend is set up.)`;
            
            // Reset form
            contactForm.reset();
            
            // Scroll to message
            formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
    }
});

