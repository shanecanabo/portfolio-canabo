document.addEventListener('DOMContentLoaded', function() {
    // Handle hover effects for selection handles
    const handles = document.querySelectorAll('.handle');
    const selectionOutline = document.querySelector('.selection-outline');
    
    handles.forEach(handle => {
        handle.addEventListener('mouseenter', function() {
            selectionOutline.style.borderColor = '#2563eb';
            this.style.transform = this.classList.contains('top-center') || 
                                  this.classList.contains('bottom-center') ? 
                                  'translateX(-50%) scale(1.2)' : 
                                  this.classList.contains('left-center') || 
                                  this.classList.contains('right-center') ? 
                                  'translateY(-50%) scale(1.2)' : 'scale(1.2)';
        });
        
        handle.addEventListener('mouseleave', function() {
            selectionOutline.style.borderColor = '#3b82f6';
            this.style.transform = this.classList.contains('top-center') || 
                                  this.classList.contains('bottom-center') ? 
                                  'translateX(-50%)' : 
                                  this.classList.contains('left-center') || 
                                  this.classList.contains('right-center') ? 
                                  'translateY(-50%)' : 'none';
        });
    });
    
    // Interactive portfolio text
    const portfolioText = document.querySelector('.portfolio-text');
    
    portfolioText.addEventListener('mouseenter', function() {
        selectionOutline.style.background = 'rgba(59, 130, 246, 0.1)';
    });
    
    portfolioText.addEventListener('mouseleave', function() {
        selectionOutline.style.background = 'rgba(59, 130, 246, 0.05)';
    });
    
    // Comment interaction
    const commentBubble = document.querySelector('.comment-bubble');
    
    commentBubble.addEventListener('click', function() {
        this.style.transform = 'scale(1.05)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
    
    // HelloWorld tag interaction
    const helloWorldTag = document.querySelector('.hello-world-tag');
    
    helloWorldTag.addEventListener('click', function() {
        this.style.background = '#4f46e5';
        setTimeout(() => {
            this.style.background = '#333';
        }, 200);
    });
    
    // Message bubble pulse effect
    const messageBubble = document.querySelector('.message-bubble');
    
    setInterval(() => {
        messageBubble.style.transform = 'scale(1.05)';
        setTimeout(() => {
            messageBubble.style.transform = 'scale(1)';
        }, 300);
    }, 3000);
    
    // Click indicator interaction
    const clickIndicator = document.querySelector('.click-indicator');
    
    clickIndicator.addEventListener('click', function() {
        // Create a ripple effect
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.background = 'rgba(59, 130, 246, 0.3)';
        ripple.style.borderRadius = '50%';
        ripple.style.top = '50%';
        ripple.style.left = '50%';
        ripple.style.transform = 'translate(-50%, -50%)';
        ripple.style.animation = 'ripple 0.6s ease-out';
        ripple.style.pointerEvents = 'none';
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
    
    // Add ripple animation to CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            0% {
                width: 20px;
                height: 20px;
                opacity: 1;
            }
            100% {
                width: 100px;
                height: 100px;
                opacity: 0;
            }
        }
        
        .selection-outline {
            transition: all 0.2s ease;
        }
        
        .handle {
            transition: all 0.2s ease;
        }
        
        .comment-bubble {
            transition: transform 0.2s ease;
            cursor: pointer;
        }
        
        .hello-world-tag {
            transition: all 0.2s ease;
        }
        
        .message-bubble {
            transition: transform 0.3s ease;
        }
        
        .click-indicator {
            cursor: pointer;
            position: relative;
            transition: color 0.2s ease;
        }
        
        .click-indicator:hover {
            color: #3b82f6;
        }
    `;
    document.head.appendChild(style);
    
    // Simulate Figma-like canvas interactions
    const canvas = document.querySelector('.figma-canvas');
    
    canvas.addEventListener('mousemove', function(e) {
        // Subtle cursor trail effect
        if (Math.random() > 0.95) {
            const trail = document.createElement('div');
            trail.style.position = 'absolute';
            trail.style.left = e.clientX + 'px';
            trail.style.top = e.clientY + 'px';
            trail.style.width = '4px';
            trail.style.height = '4px';
            trail.style.background = 'rgba(59, 130, 246, 0.4)';
            trail.style.borderRadius = '50%';
            trail.style.pointerEvents = 'none';
            trail.style.animation = 'fade-out 1s ease-out forwards';
            
            canvas.appendChild(trail);
            
            setTimeout(() => {
                trail.remove();
            }, 1000);
        }
    });
    
    // Add fade-out animation
    const fadeStyle = document.createElement('style');
    fadeStyle.textContent = `
        @keyframes fade-out {
            0% {
                opacity: 1;
                transform: scale(1);
            }
            100% {
                opacity: 0;
                transform: scale(0.5);
            }
        }
    `;
    document.head.appendChild(fadeStyle);
});
