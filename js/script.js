import { translations } from './translations.js';

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
const scrollThreshold = 100;

window.addEventListener('scroll', () => {
    if (window.scrollY > scrollThreshold) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Dropdown menu functionality
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
const dropdownItems = document.querySelectorAll('.dropdown-item');

// Close all dropdowns when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-dropdown')) {
        document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }
});

// Toggle dropdown on click (for mobile)
dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const dropdown = toggle.closest('.nav-dropdown');
        
        // Close other dropdowns
        document.querySelectorAll('.nav-dropdown').forEach(otherDropdown => {
            if (otherDropdown !== dropdown) {
                otherDropdown.classList.remove('active');
            }
        });
        
        // Toggle current dropdown
        dropdown.classList.toggle('active');
    });
});

// Handle dropdown item clicks
dropdownItems.forEach(item => {
    item.addEventListener('click', (e) => {
        const href = item.getAttribute('href');
        
        // Close mobile menu
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        
        // Close all dropdowns
        document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
            dropdown.classList.remove('active');
        });
        
        // Check if it's an external page link or internal anchor
        if (href.startsWith('http') || href.includes('.html')) {
            // External page or HTML file - navigate normally
            window.location.href = href;
        } else if (href.startsWith('#')) {
            // Internal anchor - smooth scroll
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - navbar.offsetHeight;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - navbar.offsetHeight;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - navbar.offsetHeight - 100;
        const sectionId = section.getAttribute('id');
        const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (correspondingLink) {
                correspondingLink.classList.add('active');
            }
        }
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Here you would normally send the data to a server
        // For now, we'll just show an alert
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
}

// Parallax effect for hero section
const hero = document.querySelector('.hero-bg');
if (hero) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    });
}

// Portfolio lightbox functionality
const portfolioItems = document.querySelectorAll('.portfolio-item');
const body = document.body;

// Create lightbox elements
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.innerHTML = `
    <div class="lightbox-content">
        <span class="lightbox-close">&times;</span>
        <img src="" alt="" class="lightbox-image">
        <div class="lightbox-caption">
            <h4></h4>
            <p></p>
        </div>
    </div>
`;
body.appendChild(lightbox);

const lightboxImage = lightbox.querySelector('.lightbox-image');
const lightboxTitle = lightbox.querySelector('.lightbox-caption h4');
const lightboxSubtitle = lightbox.querySelector('.lightbox-caption p');
const lightboxClose = lightbox.querySelector('.lightbox-close');

// Open lightbox
portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const title = item.querySelector('h4').textContent;
        const subtitle = item.querySelector('p').textContent;
        
        lightboxImage.src = img.src;
        lightboxImage.alt = img.alt;
        lightboxTitle.textContent = title;
        lightboxSubtitle.textContent = subtitle;
        
        lightbox.classList.add('active');
        body.style.overflow = 'hidden';
    });
});

// Close lightbox
lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('active');
    body.style.overflow = '';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
        body.style.overflow = '';
    }
});

// Escape key to close lightbox
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        lightbox.classList.remove('active');
        body.style.overflow = '';
    }
});

// Counter animation for stats
const stats = document.querySelectorAll('.stat-number');
const animateCounter = (element, target) => {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = element.dataset.suffix ? target + element.dataset.suffix : target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + (element.dataset.suffix || '+');
        }
    }, 30);
};

// Intersection Observer for counter animation
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            const target = parseInt(entry.target.textContent);
            animateCounter(entry.target, target);
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

stats.forEach(stat => {
    counterObserver.observe(stat);
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Language switching functionality
function setLanguage(lang) {
    // Update active button (legacy)
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });

    // Update active language option (new dropdown)
    document.querySelectorAll('.lang-option').forEach(option => {
        option.classList.remove('active');
        if (option.getAttribute('data-lang') === lang) {
            option.classList.add('active');
        }
    });

    // Update language toggle display
    const langToggle = document.querySelector('.lang-toggle');
    if (langToggle) {
        const flagIcon = langToggle.querySelector('.flag-icon');
        const langText = langToggle.querySelector('.lang-text');
        
        const flags = {
            'en': '🇺🇸',
            'cs': '🇨🇿',
            'ru': '🇷🇺',
            'uk': '🇺🇦'
        };
        
        const texts = {
            'en': 'EN',
            'cs': 'CS',
            'ru': 'RU',
            'uk': 'UK'
        };
        
        if (flagIcon) flagIcon.textContent = flags[lang] || '🇨🇿';
        if (langText) langText.textContent = texts[lang] || 'CS';
        
        // Update active state of toggle button
        langToggle.classList.remove('active');
        langToggle.classList.add('active');
    }

    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = translations[lang];
        for (const k of keys) {
            value = value[k];
        }
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = value;
        } else {
            element.textContent = value;
        }
    });

    // Update all placeholder translations
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const keys = key.split('.');
        let value = translations[lang];
        for (const k of keys) {
            value = value[k];
        }
        element.placeholder = value;
    });

    // Update course card states based on language
    updateCourseCardStates(lang);

    // Save language preference
    localStorage.setItem('preferredLanguage', lang);
}

// Initialize language immediately
let savedLang;
try {
    savedLang = localStorage.getItem('preferredLanguage') || 'cs';
} catch (e) {
    savedLang = 'cs'; // Fallback if localStorage is not available
}

// Set language immediately and also on DOM ready
setLanguage(savedLang);

document.addEventListener('DOMContentLoaded', () => {
    // Ensure language is set after DOM is ready
    setLanguage(savedLang);
    
    // Initialize course card states
    updateCourseCardStates(savedLang);
});

// Add click handlers for language buttons (legacy)
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        setLanguage(lang);
    });
});

// Add click handlers for language options (new dropdown)
document.querySelectorAll('.lang-option').forEach(option => {
    option.addEventListener('click', () => {
        const lang = option.getAttribute('data-lang');
        setLanguage(lang);
        
        // Close language dropdown
        const dropdown = option.closest('.language-dropdown');
        if (dropdown) {
            dropdown.classList.remove('active');
        }
    });
});

// Function to update course card states based on language
function updateCourseCardStates(lang) {
    const courseCards = document.querySelectorAll('.course-card');
    
    courseCards.forEach(card => {
        // Remove existing states
        card.classList.remove('disabled', 'available');
        
        // Remove existing click handlers
        card.removeEventListener('click', handleDisabledCourseClick);
        
        // Check if language is CS or EN (disabled for courses)
        if (lang === 'cs' || lang === 'en') {
            card.classList.add('disabled');
            
            // Prevent navigation for disabled courses
            card.addEventListener('click', handleDisabledCourseClick);
        } else {
            // RU and UK languages - courses are available
            card.classList.add('available');
        }
    });
}

// Handler function for disabled course clicks
function handleDisabledCourseClick(e) {
    e.preventDefault();
    const currentLang = localStorage.getItem('preferredLanguage') || 'cs';
    showCourseUnavailableMessage(currentLang);
}

// Function to show course unavailable message
function showCourseUnavailableMessage(lang) {
    // Create a temporary notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--gradient-gold);
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 500;
        z-index: 10000;
        box-shadow: var(--shadow-lg);
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    const message = lang === 'cs' 
        ? 'Kurzy jsou dostupné pouze v ruštině a ukrajinštině' 
        : 'Courses are available only in Russian and Ukrainian';
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
} 