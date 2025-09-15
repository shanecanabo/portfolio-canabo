// Figma-style interactivity for portfolio landing page

document.addEventListener('DOMContentLoaded', function() {
    // Add Figma-style selection effects
    const figmaElements = document.querySelectorAll('.figma-element');
    const selectionFrame = document.querySelector('.figma-selection-frame');
    const cornerHandles = document.querySelectorAll('.corner-handle');
    
    // Handle corner handle interactions
    cornerHandles.forEach(handle => {
        handle.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2)';
            this.style.background = '#0052cc';
        });
        
        handle.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.background = '#0066ff';
        });
        
        handle.addEventListener('click', function(e) {
            e.stopPropagation();
            // Add Figma-style resize indicator
            createResizeIndicator(this);
        });
    });
    
    // Enhanced button interactions with Figma styling
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create Figma-style click effect
            createFigmaClickEffect(e, this);
            
            // Add button-specific actions
            if (this.classList.contains('btn-primary')) {
                console.log('Primary action clicked!');
                showFigmaToast('woa ang galing clicked! 😭');
            } else if (this.classList.contains('btn-secondary')) {
                console.log('Secondary action clicked!');
                showFigmaToast('@HelloWorld activated! 😎');
            }
        });
        
        // Add Figma-style hover effects for buttons
        button.addEventListener('mouseenter', function() {
            this.style.borderColor = '#0066ff';
            this.style.boxShadow = '0 0 0 2px rgba(0, 102, 255, 0.2)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.borderColor = 'transparent';
            this.style.boxShadow = 'none';
        });
    });
    
    // Scroll indicator with Figma animations
    const scrollIndicator = document.querySelector('.scroll-indicator');
    scrollIndicator.addEventListener('click', function() {
        console.log('Scroll indicator clicked - ready for future sections!');
        
        // Figma-style bounce animation
        this.style.transform = 'translateX(-50%) translateY(-8px) scale(1.1)';
        this.style.color = '#0066ff';
        
        setTimeout(() => {
            this.style.transform = 'translateX(-50%) scale(1)';
            this.style.color = '#6c757d';
        }, 300);
        
        showFigmaToast('Scroll feature coming soon!');
    });
    
    // Add Figma workspace grid animation
    const grid = document.querySelector('.figma-grid');
    let gridOpacity = 0.1;
    
    window.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        // Subtle grid opacity change based on mouse position
        gridOpacity = 0.05 + (mouseX * mouseY) * 0.1;
        grid.style.opacity = gridOpacity;
        
        // Parallax effect for social notification
        const socialNotification = document.querySelector('.social-notification');
        const moveX = (mouseX - 0.5) * 10;
        const moveY = (mouseY - 0.5) * 10;
        
        socialNotification.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
    
    // Add Figma-style selection frame pulse
    setInterval(() => {
        selectionFrame.style.borderColor = '#0066ff';
        setTimeout(() => {
            selectionFrame.style.borderColor = '#0066ff';
        }, 1000);
    }, 4000);
    
    // Keyboard shortcuts (Figma-style)
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Clear all selections (Figma behavior)
            clearAllSelections();
        } else if (e.ctrlKey && e.key === 'd') {
            // Duplicate element (Figma shortcut)
            e.preventDefault();
            showFigmaToast('Duplicate shortcut detected! (Ctrl+D)');
        }
    });
});

// Figma-style click effect
function createFigmaClickEffect(event, element) {
    const effect = document.createElement('div');
    const rect = element.getBoundingClientRect();
    const size = 20;
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    effect.style.width = effect.style.height = size + 'px';
    effect.style.left = x + 'px';
    effect.style.top = y + 'px';
    effect.style.position = 'absolute';
    effect.style.background = 'rgba(0, 102, 255, 0.3)';
    effect.style.borderRadius = '50%';
    effect.style.pointerEvents = 'none';
    effect.style.animation = 'figmaClickEffect 0.6s ease-out forwards';
    
    element.appendChild(effect);
    
    setTimeout(() => {
        effect.remove();
    }, 600);
}

// Create resize indicator (Figma-style)
function createResizeIndicator(handle) {
    const indicator = document.createElement('div');
    indicator.style.position = 'absolute';
    indicator.style.top = '50%';
    indicator.style.left = '50%';
    indicator.style.transform = 'translate(-50%, -50%)';
    indicator.style.width = '24px';
    indicator.style.height = '24px';
    indicator.style.background = '#0066ff';
    indicator.style.borderRadius = '50%';
    indicator.style.opacity = '0.8';
    indicator.style.animation = 'figmaResizeIndicator 0.5s ease-out forwards';
    indicator.style.pointerEvents = 'none';
    
    handle.appendChild(indicator);
    
    setTimeout(() => {
        indicator.remove();
    }, 500);
}

// Show Figma-style toast notification
function showFigmaToast(message) {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.position = 'fixed';
    toast.style.top = '20px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%) translateY(-100%)';
    toast.style.background = '#2d2d2d';
    toast.style.color = 'white';
    toast.style.padding = '8px 16px';
    toast.style.borderRadius = '6px';
    toast.style.fontSize = '13px';
    toast.style.fontWeight = '500';
    toast.style.zIndex = '10000';
    toast.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
    toast.style.transition = 'transform 0.3s ease';
    
    document.body.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
        toast.style.transform = 'translateX(-50%) translateY(0)';
    }, 10);
    
    // Animate out
    setTimeout(() => {
        toast.style.transform = 'translateX(-50%) translateY(-100%)';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 2000);
}

// Clear all selections
function clearAllSelections() {
    const selectedElements = document.querySelectorAll('.figma-selected');
    selectedElements.forEach(element => {
        element.style.transform = 'scale(1)';
        element.style.opacity = '1';
    });
    
    showFigmaToast('Selection cleared (ESC)');
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes figmaClickEffect {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(3);
            opacity: 0;
        }
    }
    
    @keyframes figmaResizeIndicator {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
        }
        50% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0.8;
        }
        100% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0;
        }
    }
    
    .figma-handle {
        transition: all 0.2s ease;
        cursor: pointer;
    }
    
    .figma-handle:hover {
        cursor: nw-resize;
    }
    
    .corner-handle.top-left:hover,
    .corner-handle.bottom-right:hover {
        cursor: nw-resize;
    }
    
    .corner-handle.top-right:hover,
    .corner-handle.bottom-left:hover {
        cursor: ne-resize;
    }
    
    .figma-selection-frame {
        transition: border-color 0.3s ease;
    }
    
    .social-notification {
        transition: transform 0.1s ease-out;
    }
    
    .figma-grid {
        transition: opacity 0.2s ease;
    }
`;
document.head.appendChild(style);