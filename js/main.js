/* Main JavaScript for AIHUB STATION */

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles.js
    initParticles();
    
    // Initialize interactive elements
    initInteractiveElements();
    
    // Initialize ticker animation
    initTicker();
});

// Particles.js configuration
function initParticles() {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": ["#00c2ff", "#9d00ff", "#00ff9d"]
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#00c2ff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": true,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
}

// Interactive elements
function initInteractiveElements() {
    // Add glow effect to cards on hover
    const infoCards = document.querySelectorAll('.info-card');
    
    infoCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 194, 255, 0.5)';
            this.style.borderColor = 'var(--neon-blue)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.1)';
            this.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        });
    });
    
    // Add glow effect to CTA button
    const ctaButton = document.querySelector('.cta-button');
    
    ctaButton.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 0 25px rgba(0, 194, 255, 0.7), 0 0 10px rgba(157, 0, 255, 0.5)';
    });
    
    ctaButton.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 0 15px rgba(0, 194, 255, 0.5)';
    });
    
    // Add floating animation to cards
    infoCards.forEach((card, index) => {
        card.style.animation = `float 4s ease-in-out ${index * 0.5}s infinite`;
    });
    
    // Add floating animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% {
                transform: translateY(0px);
            }
            50% {
                transform: translateY(-10px);
            }
            100% {
                transform: translateY(0px);
            }
        }
    `;
    document.head.appendChild(style);
}

// Ticker animation
function initTicker() {
    const tickerContent = document.querySelector('.ticker-content');
    const tickerItems = tickerContent.querySelectorAll('span');
    
    // Clone ticker items to create seamless loop
    tickerItems.forEach(item => {
        const clone = item.cloneNode(true);
        tickerContent.appendChild(clone);
    });
    
    // Adjust animation duration based on content length
    const contentWidth = tickerContent.scrollWidth / 2;
    const duration = contentWidth / 50; // Adjust speed as needed
    
    tickerContent.style.animation = `ticker ${duration}s linear infinite`;
}

// Add animated streaks/light trails
function createLightTrail(x, y) {
    const trail = document.createElement('div');
    trail.className = 'light-trail';
    trail.style.left = `${x}px`;
    trail.style.top = `${y}px`;
    
    document.body.appendChild(trail);
    
    setTimeout(() => {
        trail.remove();
    }, 1000);
}

// Track mouse movement for light trails
document.addEventListener('mousemove', function(e) {
    // Throttle to improve performance
    if (Math.random() > 0.9) {
        createLightTrail(e.clientX, e.clientY);
    }
});

// Add light trail style
const trailStyle = document.createElement('style');
trailStyle.textContent = `
    .light-trail {
        position: fixed;
        width: 5px;
        height: 5px;
        background: var(--neon-blue);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        opacity: 0.7;
        box-shadow: 0 0 10px var(--neon-blue), 0 0 20px var(--neon-blue);
        animation: fadeTrail 1s forwards;
    }
    
    @keyframes fadeTrail {
        0% {
            opacity: 0.7;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(0);
        }
    }
`;
document.head.appendChild(trailStyle);

// Add parallax effect to background
window.addEventListener('mousemove', function(e) {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    const particles = document.getElementById('particles-js');
    particles.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
});
