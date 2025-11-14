// Navigation toggle for mobile
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Section management
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionId).classList.add('active');
    
    // Update navigation
    document.querySelectorAll('.nav-menu li').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`a[href="#${sectionId}"]`).parentElement.classList.add('active');
    
    // Close mobile menu
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
}

// Form handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const submitBtn = this.querySelector('.submit-btn');
    const originalText = submitBtn.querySelector('.btn-text').textContent;
    
    submitBtn.disabled = true;
    submitBtn.querySelector('.btn-text').textContent = 'Sending...';
    
    // Simulate form submission
    setTimeout(() => {
        alert('Message sent successfully!');
        this.reset();
        submitBtn.disabled = false;
        submitBtn.querySelector('.btn-text').textContent = originalText;
    }, 2000);
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    showSection('home');
});