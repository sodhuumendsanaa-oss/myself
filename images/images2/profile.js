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

// Observe skill cards
document.querySelectorAll('.skill-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});

// Observe certification cards
document.querySelectorAll('.cert-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});

// Observe timeline items
document.querySelectorAll('.timeline-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    item.style.transition = 'all 0.6s ease-out';
    observer.observe(item);
});

// ===== INTERACTIVE EFFECTS =====
// Add pulse effect to buttons on hover
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.position = 'absolute';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.background = 'rgba(255,255,255,0.5)';
        ripple.style.borderRadius = '50%';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'rippleEffect 0.6s ease-out';
        ripple.style.pointerEvents = 'none';
        
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});

// ===== WINDOW RESIZE HANDLER =====
window.addEventListener('resize', () => {
    // Adjust particle count based on window size
    const newParticleCount = Math.min(30, Math.floor(window.innerWidth / 100));
    if (particles.length < newParticleCount) {
        for (let i = particles.length; i < newParticleCount; i++) {
            particles.push(new Particle());
        }
    }
});

// ===== KEYBOARD NAVIGATION =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        e.preventDefault();
        const scrollAmount = 100;
        window.scrollBy({
            top: e.key === 'ArrowDown' ? scrollAmount : -scrollAmount,
            behavior: 'smooth'
        });
    }
});

// ===== ADD RIPPLE ANIMATION TO CSS =====
const style = document.createElement('style');
style.textContent = `
    @keyframes rippleEffect {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===== PAGE LOAD ANIMATION =====
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ===== SMOOTH LINK NAVIGATION =====
document.querySelectorAll('a[href^="index"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        document.body.style.opacity = '0.7';
        setTimeout(() => {
            window.location.href = href;
        }, 300);
    });
});
