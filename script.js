// Initialize Lucide Icons
lucide.createIcons();

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.1
});

revealElements.forEach(el => {
    revealObserver.observe(el);
});

// Smooth Scroll for Hero Button
document.querySelector('.btn-primary').addEventListener('click', function(e) {
    if (this.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Form Submission Handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const name = document.getElementById('name').value;
    const company = document.getElementById('company').value;
    const email = document.getElementById('email').value;

    // Change button state
    const submitBtn = this.querySelector('.submit-btn');
    const originalText = submitBtn.innerText;
    submitBtn.innerText = 'Enviando...';
    submitBtn.disabled = true;

    // Simulate API call
    setTimeout(() => {
        // Show success message
        const formContainer = document.querySelector('.cta-form-container');
        formContainer.innerHTML = `
            <div style="text-align: center; padding: 2rem;">
                <div style="width: 80px; height: 80px; background: rgba(0, 242, 255, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 2rem;">
                    <i data-lucide="check-circle" style="color: var(--secondary); width: 40px; height: 40px;"></i>
                </div>
                <h3 style="font-size: 1.8rem; margin-bottom: 1rem;">¡Gracias, ${name}!</h3>
                <p style="color: var(--text-dim); margin-bottom: 2rem;">Hemos recibido tu solicitud para <strong>${company}</strong>. Un especialista QHSE se pondrá en contacto contigo en las próximas 24 horas.</p>
                <button onclick="location.reload()" class="btn btn-primary">Volver al inicio</button>
            </div>
        `;
        lucide.createIcons(); // Re-initialize icons for the new content
    }, 1500);
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    // Optional: Add navbar logic if needed later
});
