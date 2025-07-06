// Dynamic video centering for VIB3
console.log('🎯 Loading video centering system...');

// Function to center videos based on available space
function centerVideos() {
    const videos = document.querySelectorAll('video');
    const sidebar = document.querySelector('.sidebar');
    const sidebarWidth = sidebar ? sidebar.offsetWidth : 200;
    
    videos.forEach(video => {
        const container = video.parentElement;
        if (!container) return;
        
        // Get available viewport dimensions
        const availableWidth = window.innerWidth - sidebarWidth;
        const availableHeight = window.innerHeight;
        
        // Check if developer console might be open
        const consoleOpen = window.outerHeight - window.innerHeight > 100;
        
        // Calculate optimal video dimensions
        const videoAspectRatio = 9 / 16; // TikTok style vertical video
        let videoWidth, videoHeight;
        
        // Mobile or narrow viewport - full width
        if (availableWidth < 600) {
            videoWidth = availableWidth - 40; // 20px padding each side
            videoHeight = videoWidth / videoAspectRatio;
            
            // Ensure it fits in viewport height
            if (videoHeight > availableHeight - 160) {
                videoHeight = availableHeight - 160;
                videoWidth = videoHeight * videoAspectRatio;
            }
        } else {
            // Desktop - center with max width
            videoHeight = availableHeight - 160; // Account for header/UI
            videoWidth = videoHeight * videoAspectRatio;
            
            // Cap maximum width
            const maxWidth = Math.min(500, availableWidth - 80);
            if (videoWidth > maxWidth) {
                videoWidth = maxWidth;
                videoHeight = videoWidth / videoAspectRatio;
            }
        }
        
        // Apply centering styles
        video.style.width = `${videoWidth}px`;
        video.style.height = `${videoHeight}px`;
        video.style.maxWidth = '100%';
        video.style.maxHeight = '100%';
        video.style.objectFit = 'contain';
        
        // Center the container
        container.style.display = 'flex';
        container.style.alignItems = 'center';
        container.style.justifyContent = 'center';
        
        // Add subtle animation
        video.style.transition = 'all 0.3s ease';
    });
}

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply centering on various events
const debouncedCenter = debounce(centerVideos, 100);

// Listen for window resize
window.addEventListener('resize', debouncedCenter);

// Listen for orientation change (mobile)
window.addEventListener('orientationchange', () => {
    setTimeout(centerVideos, 100);
});

// Watch for new videos being added
const videoObserver = new MutationObserver((mutations) => {
    let hasNewVideos = false;
    mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
            if (node.nodeName === 'VIDEO' || (node.querySelectorAll && node.querySelectorAll('video').length > 0)) {
                hasNewVideos = true;
            }
        });
    });
    if (hasNewVideos) {
        setTimeout(centerVideos, 100);
    }
});

videoObserver.observe(document.body, {
    childList: true,
    subtree: true
});

// Initial centering
document.addEventListener('DOMContentLoaded', centerVideos);

// Also center when page becomes visible
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        centerVideos();
    }
});

console.log('✅ Video centering system loaded');