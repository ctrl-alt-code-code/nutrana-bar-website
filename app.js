// Nutrana Bar Website JavaScript - Enhanced with beautiful animations

// Global functions for HTML onclick handlers
window.scrollToSection = scrollToSection;
window.openInstagramDM = openInstagramDM;

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    console.log('Nutrana Bar website loading...');
    
    // Initialize all functionality
    initNavigation();
    initProductCards();
    initScrollEffects();
    initMobileMenu();
    initInstagramButtons();
    
    console.log('All features initialized successfully!');
});

// Enhanced smooth scroll to section
function scrollToSection(sectionId) {
    console.log('Scrolling to:', sectionId);
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        const navbarHeight = 80;
        const targetPosition = targetSection.offsetTop - navbarHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        return true;
    } else {
        console.error('Section not found:', sectionId);
        return false;
    }
}

// Navigation functionality
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    console.log('Initializing navigation with', navLinks.length, 'links');
    
    navLinks.forEach((link, index) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            const targetId = href ? href.substring(1) : null;
            
            if (targetId) {
                console.log('Navigation link clicked:', targetId);
                scrollToSection(targetId);
                closeMobileMenu();
                updateActiveNavLink(this);
            }
        });
    });
}

// Update active navigation link
function updateActiveNavLink(activeLink) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    activeLink.classList.add('active');
}

// Product cards functionality with enhanced animations
function initProductCards() {
    const productCards = document.querySelectorAll('.product-card');
    console.log('Initializing', productCards.length, 'product cards');
    
    productCards.forEach((card, index) => {
        // Add click event for flip animation
        card.addEventListener('click', function() {
            console.log('Product card clicked:', index);
            this.classList.toggle('flipped');
            
            // Add bounce effect
            this.style.transform = 'scale(1.05)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
        
        // Add hover effects with color transitions
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.2)';
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
            this.style.transform = '';
        });
    });
}

// Scroll effects with intersection observer
function initScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Add staggered animations for grid items
                const gridItems = entry.target.querySelectorAll('.product-card, .feature, .info-item');
                gridItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }
        });
    }, observerOptions);

    // Observe sections and animated elements
    const animatedElements = document.querySelectorAll('section, .feature, .product-card, .info-item');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
    
    console.log('Scroll effects initialized for', animatedElements.length, 'elements');
}

// Mobile menu functionality
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            console.log('Mobile menu toggled');
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Prevent body scrolling when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                closeMobileMenu();
            }
        });
        
        // Close menu on window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                closeMobileMenu();
            }
        });
        
        console.log('Mobile menu initialized');
    }
}

function closeMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Instagram integration
function initInstagramButtons() {
    const instagramButtons = document.querySelectorAll('[onclick*="openInstagramDM"]');
    console.log('Instagram integration ready for', instagramButtons.length, 'buttons');
    
    instagramButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
        });
    });
}

function openInstagramDM() {
    const instagramURL = 'https://instagram.com/nutrana_bar';
    console.log('Opening Instagram:', instagramURL);
    
    // Add visual feedback
    const button = event.target.closest('.btn');
    if (button) {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = '';
        }, 150);
    }
    
    // Open Instagram in new tab
    window.open(instagramURL, '_blank', 'noopener,noreferrer');
    
    // Track engagement (you can add analytics here)
    console.log('User clicked Instagram button - potential customer lead!');
    
    return false;
}

// Navbar scroll effects
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const scrolled = window.pageYOffset;
    
    if (scrolled > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    console.log('Nutrana Bar website fully loaded! 🌱');
    
    // Add celebration animation to hero
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.style.animation = 'bounce 1s ease-in-out';
    }
});

// Gradient animation effects
function initGradientAnimations() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        section.addEventListener('mouseenter', function() {
            this.style.backgroundSize = '120% 120%';
        });
        
        section.addEventListener('mouseleave', function() {
            this.style.backgroundSize = '100% 100%';
        });
    });
    
    console.log('Gradient animations initialized');
}

// Add bounce animation
const style = document.createElement('style');
style.textContent = `
    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
        40% { transform: translateY(-10px); }
        60% { transform: translateY(-5px); }
    }
`;
document.head.appendChild(style);

// Error handling
window.addEventListener('error', function(e) {
    console.error('Website error:', e.error);
});

// Success message
console.log('🌱 Nutrana Bar website ready! Your body deserves the best nutrition. 💪');