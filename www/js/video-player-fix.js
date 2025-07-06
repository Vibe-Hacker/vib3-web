// VIB3 Video Player - Exact Railway Implementation
console.log('🎬 Loading VIB3 video player (Railway)...');

// Force play videos - Railway style (no muting)
function forcePlayVideo(video) {
    if (!video) return;
    
    // Set all autoplay attributes
    video.setAttribute('autoplay', '');
    video.setAttribute('loop', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');
    video.removeAttribute('muted'); // Railway doesn't set muted
    
    // Always try to play unmuted first
    video.muted = false;
    
    // Simple play function - Railway style
    const playVideo = () => {
        video.play().catch(err => {
            console.log('Play failed, retrying...');
            // Only mute if we absolutely have to
            video.muted = true;
            video.play().then(() => {
                // Immediately unmute - Railway is aggressive about this
                setTimeout(() => {
                    video.muted = false;
                }, 10); // Very short delay like Railway
            });
        });
    };
    
    // Play immediately if ready
    if (video.readyState >= 2) {
        playVideo();
    } else {
        video.addEventListener('canplay', playVideo, { once: true });
    }
    
    // Simple click to toggle
    video.addEventListener('click', (e) => {
        e.preventDefault();
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
}

// Watch for videos being added to the page
const observer = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
            if (node.nodeName === 'VIDEO') {
                forcePlayVideo(node);
            } else if (node.querySelectorAll) {
                const videos = node.querySelectorAll('video');
                videos.forEach(video => forcePlayVideo(video));
            }
        });
    });
});

// Start observing
observer.observe(document.body, {
    childList: true,
    subtree: true
});

// Handle videos on page load - Railway style
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        // Process all videos
        document.querySelectorAll('video').forEach(video => forcePlayVideo(video));
        
        // Focus on first video
        const firstVideo = document.querySelector('video');
        if (firstVideo) {
            firstVideo.scrollIntoView();
            forcePlayVideo(firstVideo);
        }
    }, 100);
});

// Handle page visibility
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.querySelectorAll('video').forEach(v => v.pause());
    } else {
        const visibleVideo = document.querySelector('video');
        if (visibleVideo) {
            visibleVideo.muted = false; // Always unmuted
            visibleVideo.play();
        }
    }
});

console.log('✅ VIB3 video player loaded - Railway implementation');