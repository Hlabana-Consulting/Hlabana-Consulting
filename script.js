// Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Animate hamburger menu
    const spans = navToggle.getElementsByTagName('span');
    spans[0].classList.toggle('rotate-45');
    spans[1].classList.toggle('opacity-0');
    spans[2].classList.toggle('rotate-negative-45');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Form Validation (for contact page)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form validation and submission logic here
        console.log('Form submitted');
    });
}

// Responsive Image Loading
function loadResponsiveImages() {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
}

// Call on page load
window.addEventListener('load', loadResponsiveImages);

// Add scroll-based navbar background
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Quick form validation
const quickValidate = (input, minLength) => {
    return input.value.trim().length >= minLength;
};

// Easy error handling
const handleError = (element, message) => {
    element.classList.add('error');
    element.setAttribute('data-error', message);
};

// Add this to your existing script.js file

// Form Validation
function validateForm() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    let isValid = true;

    // Name validation
    if (name.value.trim().length < 2) {
        showError(name, 'Name must be at least 2 characters long');
        isValid = false;
    } else {
        removeError(name);
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        showError(email, 'Please enter a valid email address');
        isValid = false;
    } else {
        removeError(email);
    }

    // Message validation
    if (message.value.trim().length < 10) {
        showError(message, 'Message must be at least 10 characters long');
        isValid = false;
    } else {
        removeError(message);
    }

    if (isValid) {
        // You can add your form submission logic here
        alert('Thank you for your message! We will get back to you soon.');
    }

    return false; // Prevent form submission for this example
}

function showError(input, message) {
    const formGroup = input.parentElement;
    const error = formGroup.querySelector('.error-message') || document.createElement('div');
    error.className = 'error-message';
    error.textContent = message;
    error.style.color = '#e74c3c';
    error.style.fontSize = '0.8rem';
    error.style.marginTop = '0.3rem';
    if (!formGroup.querySelector('.error-message')) {
        formGroup.appendChild(error);
    }
    input.style.borderColor = '#e74c3c';
}

function removeError(input) {
    const formGroup = input.parentElement;
    const error = formGroup.querySelector('.error-message');
    if (error) {
        formGroup.removeChild(error);
    }
    input.style.borderColor = '#ddd';
}
