// ============================================
// THEME TOGGLE (Dark/Light Mode)
// ============================================

const themeBtn = document.getElementById('theme-btn');
const htmlElement = document.documentElement;
const body = document.body;

// Check for saved theme preference or default to dark
const currentTheme = localStorage.getItem('theme') || 'dark';
applyTheme(currentTheme);

themeBtn.addEventListener('click', () => {
    const newTheme = body.classList.contains('light-mode') ? 'dark' : 'light';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
});

function applyTheme(theme) {
    if (theme === 'light') {
        body.classList.add('light-mode');
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        body.classList.remove('light-mode');
        themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

// ============================================
// TYPING ANIMATION
// ============================================

const typingText = document.querySelector('.typing-text');
const typingStrings = [
    'CSE Student | Aspiring Software Developer',
    'Problem Solver & Developer',
    'Machine Learning Enthusiast'
];

let currentStringIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseBetweenStrings = 2000;

function typeText() {
    const currentString = typingStrings[currentStringIndex];

    if (isDeleting) {
        typingText.textContent = currentString.substring(0, currentCharIndex - 1);
        currentCharIndex--;

        if (currentCharIndex === 0) {
            isDeleting = false;
            currentStringIndex = (currentStringIndex + 1) % typingStrings.length;
            setTimeout(typeText, 500);
        } else {
            setTimeout(typeText, deletingSpeed);
        }
    } else {
        typingText.textContent = currentString.substring(0, currentCharIndex + 1);
        currentCharIndex++;

        if (currentCharIndex === currentString.length) {
            isDeleting = true;
            setTimeout(typeText, pauseBetweenStrings);
        } else {
            setTimeout(typeText, typingSpeed);
        }
    }
}

// Start typing animation when page loads
window.addEventListener('load', typeText);

// ============================================
// SMOOTH SCROLLING & ACTIVE NAV UPDATE
// ============================================

const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

// Smooth scroll for nav links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ============================================
// HAMBURGER MENU (Mobile Navigation)
// ============================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.style.display = 'none';
    });
});

// ============================================
// FORM HANDLING
// ============================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Basic validation
        if (!name || !email || !message) {
            showNotification('Please fill in all fields.', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }

        // Show success message
        showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');

        // Reset form
        contactForm.reset();

        // In a real application, you would send this data to a backend server
        // Example: fetch('/api/contact', { method: 'POST', body: JSON.stringify({ name, email, message }) })
    });
}

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: ${type === 'success' ? '#00ff00' : '#ff0000'};
        color: white;
        border-radius: 5px;
        z-index: 999;
        animation: slideIn 0.3s ease-out;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.skill-category, .project-card, .timeline-item, .certification-item, .detail-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// ============================================
// SCROLL TO TOP BUTTON
// ============================================

const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #00d4ff, #0099cc);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    z-index: 999;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(0, 212, 255, 0.3);
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollToTopBtn.style.display = 'flex';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollToTopBtn.addEventListener('mouseenter', () => {
    scrollToTopBtn.style.transform = 'scale(1.1)';
    scrollToTopBtn.style.boxShadow = '0 10px 25px rgba(0, 212, 255, 0.5)';
});

scrollToTopBtn.addEventListener('mouseleave', () => {
    scrollToTopBtn.style.transform = 'scale(1)';
    scrollToTopBtn.style.boxShadow = '0 5px 15px rgba(0, 212, 255, 0.3)';
});

// ============================================
// PARALLAX EFFECT ON HERO SECTION
// ============================================

const heroSection = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    if (heroSection && scrollPosition < window.innerHeight) {
        heroSection.style.backgroundPosition = `0px ${scrollPosition * 0.5}px`;
    }
});

// ============================================
// PROJECT CARD INTERACTIONS
// ============================================

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-15px)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// ============================================
// SKILL TAG HOVER EFFECT
// ============================================

const skillTags = document.querySelectorAll('.skill-tag');

skillTags.forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        tag.style.transform = 'scale(1.05)';
    });

    tag.addEventListener('mouseleave', () => {
        tag.style.transform = 'scale(1)';
    });
});

// ============================================
// STAT COUNTER ANIMATION
// ============================================

const statCards = document.querySelectorAll('.stat-card h3');
let hasCountedUp = false;

const countUpObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !hasCountedUp) {
            statCards.forEach(card => {
                const finalValue = parseFloat(card.textContent);
                const increment = finalValue / 50;
                let currentValue = 0;

                const counter = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= finalValue) {
                        card.textContent = card.textContent;
                        clearInterval(counter);
                    } else {
                        card.textContent = currentValue.toFixed(2);
                    }
                }, 30);
            });

            hasCountedUp = true;
            countUpObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const aboutSection = document.querySelector('.about');
if (aboutSection) {
    countUpObserver.observe(aboutSection);
}

// ============================================
// KEYBOARD NAVIGATION
// ============================================

document.addEventListener('keydown', (e) => {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        navMenu.style.display = 'none';
    }

    // Page Down / Page Up for navigation
    if (e.code === 'Space') {
        const hero = document.querySelector('#home');
        if (window.scrollY < window.innerHeight) {
            e.preventDefault();
            window.scrollBy(0, window.innerHeight / 2);
        }
    }
});

// ============================================
// PAGE LOAD ANIMATIONS
// ============================================

window.addEventListener('load', () => {
    // Add animation classes to elements on load
    const animatedElements = document.querySelectorAll('[class*="animate"]');
    animatedElements.forEach(el => {
        el.style.animation = 'fadeIn 0.6s ease-out';
    });
});

// ============================================
// COPY TO CLIPBOARD FUNCTIONALITY
// ============================================

// Allow copying email and phone on click
const contactLinks = document.querySelectorAll('.contact-card a');
contactLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        if (link.href.startsWith('mailto:') || link.href.startsWith('tel:')) {
            const text = link.textContent;
            e.preventDefault();

            if (link.href.startsWith('mailto:')) {
                window.location.href = link.href;
            } else if (link.href.startsWith('tel:')) {
                window.location.href = link.href;
            }
        }
    });
});

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Lazy load images (if any are added in the future)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ============================================
// SERVICE WORKER REGISTRATION (Optional PWA Support)
// ============================================

if ('serviceWorker' in navigator) {
    // Uncomment below when service worker is implemented
    // navigator.serviceWorker.register('sw.js').catch(() => {});
}

console.log('Portfolio loaded successfully!');
