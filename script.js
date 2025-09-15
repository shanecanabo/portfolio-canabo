document.addEventListener('DOMContentLoaded', function() {
    // Typing animation for portfolio text
    const typingText = document.querySelector('.typing-text');
    const cursorElement = document.querySelector('.cursor-blink');
    const text = 'PORTFOLIO';
    let index = 0;
    let isTyping = false;
    
    function typeWriter() {
        if (index < text.length) {
            typingText.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 120); // Smoother: 120ms per character
        } else {
            // Show cursor and wait before starting over
            cursorElement.style.display = 'inline-block';
            setTimeout(eraseText, 1500); // Wait 1.5 seconds before erasing
        }
    }
    
    function eraseText() {
        if (typingText.textContent.length > 0) {
            typingText.textContent = typingText.textContent.slice(0, -1);
            setTimeout(eraseText, 80); // Faster erase: 80ms per character
        } else {
            // Reset and start typing again
            index = 0;
            setTimeout(typeWriter, 500); // Wait 0.5 seconds before typing again
        }
    }
    
    // Start the animation cycle
    setTimeout(typeWriter, 300);
    
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
            cursor: pointer;
        }
        
        .hello-world-tag {
            transition: background 0.2s ease;
        }
        
        .message-bubble {
            transition: background 0.3s ease;
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
