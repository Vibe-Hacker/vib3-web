// VIB3 Autoplay - Exact Railway Version
console.log('🎬 Loading VIB3 autoplay (Railway version)...');

// Global flag for user interaction - Railway style
let userHasInteracted = false;

// Detect ANY user interaction immediately
['click', 'touchstart', 'keydown', 'scroll'].forEach(event => {
    document.addEventListener(event, () => {
        userHasInteracted = true;
    }, { once: true, capture: true });
});

// Create invisible overlay to capture first interaction
function initAutoplay() {
    // Create invisible overlay (Railway approach)
    const invisibleTrigger = document.createElement('div');
    invisibleTrigger.id = 'vib3-trigger';
    invisibleTrigger.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 9999;
        background: transparent;
        cursor: default;
    `;
    
    // On ANY interaction, immediately enable sound
    const enableSound = () => {
        userHasInteracted = true;
        invisibleTrigger.remove();
        
        // Immediately unmute and play all videos
        document.querySelectorAll('video').forEach(video => {
            video.muted = false;
            video.play().catch(() => {
                // Only mute as last resort
                video.muted = true;
                video.play().then(() => {
                    // Unmute immediately after play starts
                    setTimeout(() => {
                        video.muted = false;
                    }, 10); // Railway uses very short delay
                });
            });
        });
    };
    
    invisibleTrigger.addEventListener('click', enableSound);
    invisibleTrigger.addEventListener('touchstart', enableSound);
    
    // Add to page immediately
    document.body.appendChild(invisibleTrigger);
    
    // Try to play first video
    setTimeout(() => {
        const firstVideo = document.querySelector('video');
        if (firstVideo) {
            // Try unmuted first (Railway approach)
            firstVideo.muted = false;
            firstVideo.play().catch(() => {
                // Only mute if absolutely necessary
                firstVideo.muted = true;
                firstVideo.play();
            });
        }
    }, 100);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initAutoplay);

// Also init when returning to the app
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        const firstVideo = document.querySelector('video:not([data-playing])');
        if (firstVideo && localStorage.getItem('vib3_user_interacted')) {
            firstVideo.play().catch(() => {
                console.log('Resume play blocked');
            });
        }
    }
});

console.log('✅ VIB3 autoplay fix loaded');