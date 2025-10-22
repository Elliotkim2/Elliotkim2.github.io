// ========== PROJECT DATA ==========
const projectData = {
    'voice': {
        title: 'VOICE Project - AI Healthcare System',
        description: 'A groundbreaking multimodal AI-powered communication system designed to improve the quality of life for patients with profound intellectual and multiple disabilities (PIMD). This system enables real-time emotion detection and provides instant notifications to caregivers.',
        tech: ['AWS', 'Google Cloud', 'ML/AI', 'Computer Vision', 'Python', 'TensorFlow'],
        details: `
            <h4>Key Features & Achievements</h4>
            <ul>
                <li>Designed and implemented cloud infrastructure using AWS and Google Cloud for multimodal sensor data ingestion</li>
                <li>Automated ML model training pipelines using AWS Lambda, SageMaker, and Step Functions</li>
                <li>Enhanced Random Forest and neural network models for emotion detection via facial/body landmarks</li>
                <li>Integrated computer vision pipelines with real-time dashboard for caregiver notifications</li>
                <li>Collaborated with a team of 5 interns using Scrum methodology for agile development</li>
                <li>System processes over 1000 data points per second with 95% accuracy in emotion detection</li>
            </ul>
        `,
        links: [
            { text: 'Learn More', href: '#' }
        ],
        image: ''
    },
    'tango': {
        title: 'LinkedIn Tango Bot',
        description: 'An intelligent web scraper and automated solver for LinkedIn\'s daily Tango puzzle game. Features a sophisticated state-based algorithm that can solve any puzzle configuration and provides visual feedback for each move.',
        tech: ['Full-Stack', 'MongoDB', 'Web Scraping', 'Node.js', 'React', 'Algorithms'],
        details: `
            <h4>Technical Implementation</h4>
            <ul>
                <li>Built efficient web scraping system to extract daily puzzle data from LinkedIn</li>
                <li>Developed state-based solver algorithm with optimal pathfinding capabilities</li>
                <li>Implemented MongoDB database for storing puzzle history and solutions</li>
                <li>Created interactive visualization showing step-by-step solution process</li>
                <li>Deployed on Vercel with automatic daily updates and puzzle archiving</li>
                <li>Achieves 100% solve rate with average solution time under 2 seconds</li>
            </ul>
        `,
        links: [
            { text: 'View Live Project', href: 'https://tangobot.vercel.app/', target: '_blank' },
            { text: 'GitHub Repository', href: '#' }
        ],
        image: 'tango.webp'
    },
    'uav': {
        title: 'UAV Collision Avoidance System',
        description: 'A sophisticated 2D simulation system modeling UAV (drone) behavior in constrained environments during emergency response missions. Features optimized spatial algorithms and real-time collision detection.',
        tech: ['Python', 'Pygame', 'OOP', 'Algorithms', 'Simulation', 'GitHub'],
        details: `
            <h4>Project Highlights</h4>
            <ul>
                <li>Built from scratch using Python and Pygame with modular object-oriented design</li>
                <li>Implemented classes: Drone, Buffer, SafetyCorridor, Mission, and Display for extensibility</li>
                <li>Optimized spatial buffer algorithms with vectorization to minimize airspace overlap</li>
                <li>Developed dynamic collision detection and avoidance system with predictive capabilities</li>
                <li>Created visualization showing stopping distance, projected paths, and wind effects</li>
                <li>Managed version control and collaboration through GitHub</li>
                <li>System can handle 50+ simultaneous drones with real-time collision avoidance</li>
            </ul>
        `,
        links: [
            { text: 'View on GitHub', href: '#' },
            { text: 'Documentation', href: '#' }
        ],
        image: 'drone.webp'
    }
};

// ========== MODAL FUNCTIONS ==========
function openModal(projectId) {
    const modal = document.getElementById('projectModal');
    const data = projectData[projectId];
    
    if (!data) return;
    
    // Update modal content
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalDescription').textContent = data.description;
    document.getElementById('modalImage').src = data.image;
    
    // Update tech tags
    const techContainer = document.getElementById('modalTech');
    techContainer.innerHTML = data.tech.map(tech => 
        `<span class="tech-tag">${tech}</span>`
    ).join('');
    
    // Update details
    document.getElementById('modalDetails').innerHTML = data.details;
    
    // Update links
    const linksContainer = document.getElementById('modalLinks');
    linksContainer.innerHTML = data.links.map(link => 
        `<a href="${link.href}" class="btn btn-primary" ${link.target ? `target="${link.target}"` : ''}>${link.text}</a>`
    ).join('');
    
    // Show modal
    document.body.classList.add('modal-open');
    modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
}

// Close modal on backdrop click
document.getElementById('projectModal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        closeModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// ========== NAVBAR SCROLL EFFECT ==========
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ========== CUSTOM CURSOR ==========
const cursor = document.querySelector('.cursor');
const trails = document.querySelectorAll('.cursor-trail');
let mouseX = 0, mouseY = 0;
let currentX = 0, currentY = 0;

// Hide cursor if touch device
if ('ontouchstart' in window) {
    cursor.style.display = 'none';
    trails.forEach(trail => trail.style.display = 'none');
}

// Update mouse position
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Show trails when mouse moves
    trails.forEach(trail => {
        trail.style.opacity = '1';
    });
});

// Smooth cursor animation
function animate() {
    // Main cursor with easing
    currentX += (mouseX - currentX) * 0.3;
    currentY += (mouseY - currentY) * 0.3;
    
    cursor.style.left = currentX + 'px';
    cursor.style.top = currentY + 'px';

    // Trail effect with different delays
    trails.forEach((trail, index) => {
        const delay = (index + 1) * 0.05;
        const trailX = currentX + (mouseX - currentX) * delay;
        const trailY = currentY + (mouseY - currentY) * delay;
        
        trail.style.left = trailX - (15 + index * 5) + 'px';
        trail.style.top = trailY - (15 + index * 5) + 'px';
        trail.style.width = (30 + index * 10) + 'px';
        trail.style.height = (30 + index * 10) + 'px';
    });

    requestAnimationFrame(animate);
}
animate();

// ========== CURSOR HOVER EFFECTS ==========
const interactiveElements = document.querySelectorAll('a, button, .btn, .skill-tag, .social-link, .project-card');

interactiveElements.forEach(elem => {
    // Skip modal close button to prevent glitchy behavior
    if (elem.classList.contains('modal-close')) {
        elem.addEventListener('mouseenter', () => {
            document.body.classList.add('hovering');
        });
        
        elem.addEventListener('mouseleave', () => {
            document.body.classList.remove('hovering');
        });
        return;
    }
    
    elem.addEventListener('mouseenter', () => {
        document.body.classList.add('hovering');
        elem.classList.add('magnetic');
    });
    
    elem.addEventListener('mouseleave', () => {
        document.body.classList.remove('hovering');
        elem.classList.remove('magnetic');
        elem.style.transform = '';
    });

    // Magnetic effect on mouse move
    elem.addEventListener('mousemove', (e) => {
        if (elem.classList.contains('magnetic')) {
            const rect = elem.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            elem.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
        }
    });
});

// Click effect
document.addEventListener('mousedown', () => {
    document.body.classList.add('clicking');
});

document.addEventListener('mouseup', () => {
    document.body.classList.remove('clicking');
});

// Hide cursor when leaving window
document.addEventListener('mouseleave', () => {
    trails.forEach(trail => {
        trail.style.opacity = '0';
    });
});

// ========== SMOOTH SCROLL FOR NAVIGATION ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========== INTERSECTION OBSERVER FOR ANIMATIONS ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, observerOptions);

// Observe elements with animations
document.querySelectorAll('.section-title, .project-card, .about-text, .about-image, .contact-content, .timeline-item').forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
});

// ========== PROJECT CARD CLICK HANDLERS ==========
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    if (projectCards.length >= 3) {
        projectCards[0].onclick = () => openModal('voice');
        projectCards[1].onclick = () => openModal('tango');
        projectCards[2].onclick = () => openModal('uav');
    }
});