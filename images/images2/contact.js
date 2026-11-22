// ===== MOUSE GLOW EFFECT =====
const mouseGlow = document.getElementById('mouseGlow');
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Move the glow to follow the mouse
    mouseGlow.style.left = (mouseX - 200) + 'px';
    mouseGlow.style.top = (mouseY - 200) + 'px';
});

// ===== PARTICLE SYSTEM =====
const particlesContainer = document.getElementById('particlesContainer');

class Particle {
    constructor() {
        this.element = document.createElement('div');
        this.element.classList.add('particle');
        
        // Random size
        const size = Math.random() * 3 + 1;
        this.element.style.width = size + 'px';
        this.element.style.height = size + 'px';
        
        // Random position
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.element.style.left = this.x + 'px';
        this.element.style.top = this.y + 'px';
        
        // Random velocity
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = (Math.random() - 0.5) * 1.5;
        
        // Random opacity
        this.opacity = Math.random() * 0.5 + 0.2;
        this.element.style.opacity = this.opacity;
        
        particlesContainer.appendChild(this.element);
    }
    
    update() {
        this.x += this.vx;
        this.y += this.vy;
        
        // Bounce off edges
        if (this.x < 0 || this.x > window.innerWidth) this.vx *= -1;
        if (this.y < 0 || this.y > window.innerHeight) this.vy *= -1;
        
        // Keep in bounds
        this.x = Math.max(0, Math.min(this.x, window.innerWidth));
        this.y = Math.max(0, Math.min(this.y, window.innerHeight));
        
        // Update position
        this.element.style.left = this.x + 'px';
        this.element.style.top = this.y + 'px';
        
        // Slight opacity change
        this.opacity += (Math.random() - 0.5) * 0.02;
        this.opacity = Math.max(0.1, Math.min(0.6, this.opacity));
        this.element.style.opacity = this.opacity;
    }
}

// Create particles
const particles = [];
const particleCount = Math.min(30, Math.floor(window.innerWidth / 100));

for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
}

// Animate particles
function animateParticles() {
    particles.forEach(particle => particle.update());
    requestAnimationFrame(animateParticles);
}
animateParticles();

// ===== CONTACT FORM HANDLING =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Create mailto link
        const mailtoLink = `mailto:mmendsanaa@gmail.com?subject=${encodeURIComponent(subject)}&body=From: ${encodeURIComponent(name)} (${encodeURIComponent(email)})%0A%0A${encodeURIComponent(message)}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show success message
        const btn = this.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        btn.textContent = '✓ Message Ready to Send!';
        btn.style.background = 'linear-gradient(135deg, #64c8ff, #2196F3)';
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
            this.reset();
        }, 3000);
    });
}

// ===== SMOOTH SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards
document.querySelectorAll('.contact-card').forEach(card => {
    observer.observe(card);
});

// ===== WINDOW RESIZE HANDLER =====
window.addEventListener('resize', () => {
    const newParticleCount = Math.min(30, Math.floor(window.innerWidth / 100));
    if (particles.length < newParticleCount) {
        for (let i = particles.length; i < newParticleCount; i++) {
            particles.push(new Particle());
        }
    }
});

// ===== SMOOTH LINK NAVIGATION =====
document.querySelectorAll('a[href^="index"], a[href="contactme.html"]').forEach(link => {
    link.addEventListener('click', function(e) {
        if (!this.target) {
            e.preventDefault();
            const href = this.getAttribute('href');
            document.body.style.opacity = '0.7';
            setTimeout(() => {
                window.location.href = href;
            }, 300);
        }
    });
});

// ===== FOCUS EFFECTS ON FORM INPUTS =====
document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
});
