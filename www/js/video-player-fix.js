// VIB3 Video Player - Railway Version
console.log('🎬 Loading VIB3 video player...');

// Global flag to track if user has interacted
let userHasInteracted = false;

// Detect any user interaction
['click', 'touchstart', 'keydown'].forEach(event => {
    document.addEventListener(event, () => {
        userHasInteracted = true;
    }, { once: true });
});

// Force play videos when they appear
function forcePlayVideo(video) {
    if (!video) return;
    
    // Set video properties for autoplay
    video.setAttribute('autoplay', '');
    video.setAttribute('loop', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');
    
    // Railway version plays with sound immediately
    if (userHasInteracted) {
        video.muted = false;
    } else {
        // Only mute if absolutely necessary
        video.muted = true;
    }
    
    // Play function
    const playVideo = () => {
        video.play().then(() => {
            console.log('✅ Video playing');
            // If we had to start muted, unmute after play starts
            if (video.muted && userHasInteracted) {
                video.muted = false;
            }
        }).catch(err => {
            // Only fallback to muted if we haven't already
            if (!video.muted) {
                console.log('⚠️ Trying muted playback...');
                video.muted = true;
                video.play().then(() => {
                    // Unmute as soon as possible
                    if (userHasInteracted) {
                        setTimeout(() => { video.muted = false; }, 50);
                    }
                }).catch(e => console.error('Failed to play:', e));
            }
        });
    };
    
    // Try to play immediately
    if (video.readyState >= 2) {
        playVideo();
    } else {
        video.addEventListener('loadeddata', playVideo, { once: true });
    }
    
    // Add click/touch to toggle play/pause
    const togglePlay = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    };
    
    video.addEventListener('click', togglePlay);
    video.addEventListener('touchstart', togglePlay, { passive: false });
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

// Handle initial page load
document.addEventListener('DOMContentLoaded', () => {
    // Create an invisible play button that triggers on first interaction
    const playTrigger = document.createElement('div');
    playTrigger.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 9999;
        background: transparent;
        cursor: pointer;
    `;
    
    playTrigger.addEventListener('click', () => {
        userHasInteracted = true;
        playTrigger.remove();
        
        // Play all videos with sound
        document.querySelectorAll('video').forEach(video => {
            video.muted = false;
            video.play().catch(e => console.log('Play error:', e));
        });
    }, { once: true });
    
    // Add trigger to page
    document.body.appendChild(playTrigger);
    
    // Try to autoplay videos
    setTimeout(() => {
        document.querySelectorAll('video').forEach(video => forcePlayVideo(video));
        
        // Focus on first video
        const firstVideo = document.querySelector('video[data-video-index="0"]') || document.querySelector('video');
        if (firstVideo) {
            forcePlayVideo(firstVideo);
        }
    }, 100);
});

// Handle page visibility - pause/resume videos
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.querySelectorAll('video').forEach(v => v.pause());
    } else {
        const visibleVideo = document.querySelector('.video-item video');
        if (visibleVideo) {
            if (userHasInteracted) {
                visibleVideo.muted = false;
            }
            visibleVideo.play().catch(e => console.log('Resume play failed:', e));
        }
    }
});

// Ensure videos play when scrolled into view
window.addEventListener('scroll', debounce(() => {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        const rect = video.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
        
        if (isVisible && video.paused) {
            forcePlayVideo(video);
        }
    });
}, 100));

// Debounce helper
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

console.log('✅ VIB3 video player loaded - Railway version');