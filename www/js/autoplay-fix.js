// VIB3 Autoplay Fix - Railway Version
console.log('🎬 Loading VIB3 autoplay fix...');

// Browser autoplay policies require user interaction
// Show a play button overlay on first load
function initAutoplay() {
    // Check if user has already interacted
    const hasInteracted = localStorage.getItem('vib3_user_interacted');
    
    if (!hasInteracted) {
        // Create play button overlay
        const playOverlay = document.createElement('div');
        playOverlay.id = 'vib3-play-overlay';
        playOverlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            cursor: pointer;
        `;
        
        playOverlay.innerHTML = `
            <div style="text-align: center; color: white;">
                <div style="
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 20px;
                    box-shadow: 0 8px 32px rgba(236, 72, 153, 0.5);
                ">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                        <path d="M8 5v14l11-7z"/>
                    </svg>
                </div>
                <h2 style="margin: 0 0 10px 0; font-size: 24px;">Tap to Play</h2>
                <p style="margin: 0; opacity: 0.8;">Experience VIB3 with sound</p>
            </div>
        `;
        
        playOverlay.addEventListener('click', () => {
            localStorage.setItem('vib3_user_interacted', 'true');
            playOverlay.remove();
            
            // Play all videos with sound
            document.querySelectorAll('video').forEach(video => {
                video.muted = false;
                video.play().catch(e => {
                    console.log('Play error:', e);
                    // Fallback to muted if needed
                    video.muted = true;
                    video.play();
                });
            });
        });
        
        // Add to page after content loads
        setTimeout(() => {
            if (!document.getElementById('vib3-play-overlay')) {
                document.body.appendChild(playOverlay);
            }
        }, 500);
    } else {
        // User has interacted before, try to play videos
        setTimeout(() => {
            const videos = document.querySelectorAll('video');
            if (videos.length > 0) {
                videos[0].play().catch(e => {
                    console.log('Autoplay blocked, showing play button');
                    // Reset interaction flag if autoplay fails
                    localStorage.removeItem('vib3_user_interacted');
                    initAutoplay();
                });
            }
        }, 500);
    }
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