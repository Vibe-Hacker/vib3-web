// Simple video player that actually works
console.log('🎬 Loading video player fix...');

// Force play videos when they appear
function forcePlayVideo(video) {
    if (!video) return;
    
    // Set video properties
    video.setAttribute('autoplay', '');
    video.setAttribute('loop', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');
    
    // Force play
    const playVideo = () => {
        video.play().then(() => {
            console.log('✅ Video playing');
        }).catch(err => {
            console.log('❌ Play failed, retrying...', err);
            // Retry after a short delay
            setTimeout(() => {
                video.play().catch(e => console.log('Retry failed:', e));
            }, 100);
        });
    };
    
    // Try to play immediately
    if (video.readyState >= 2) {
        playVideo();
    } else {
        video.addEventListener('loadeddata', playVideo, { once: true });
        video.addEventListener('canplay', playVideo, { once: true });
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
    video.addEventListener('touchstart', togglePlay);
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

// Also handle any videos already on the page
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelectorAll('video').forEach(video => forcePlayVideo(video));
        
        // Force play first visible video
        const firstVideo = document.querySelector('video[data-video-index="0"]') || document.querySelector('video');
        if (firstVideo) {
            firstVideo.muted = true; // Start muted for autoplay
            firstVideo.play().then(() => {
                console.log('✅ First video autoplaying');
                // Unmute after successful play
                setTimeout(() => {
                    firstVideo.muted = false;
                }, 500);
            }).catch(err => {
                console.log('❌ Autoplay failed, retrying...', err);
                setTimeout(() => {
                    firstVideo.play().catch(e => console.log('Retry failed:', e));
                }, 1000);
            });
        }
    }, 500);
});

// Handle page visibility - pause/resume videos
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.querySelectorAll('video').forEach(v => v.pause());
    } else {
        const visibleVideo = document.querySelector('.video-item video');
        if (visibleVideo) {
            visibleVideo.play().catch(e => console.log('Resume play failed:', e));
        }
    }
});

console.log('✅ Video player fix loaded - videos will play automatically');