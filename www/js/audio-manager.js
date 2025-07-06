// VIB3 Audio Manager - Handle audio playback and browser policies
console.log('🎵 Initializing VIB3 Audio Manager...');

// Global audio state
window.vib3Audio = {
    currentVideo: null,
    globalMuted: false,
    volume: 1.0
};

// Initialize audio when user interacts with the page
function initializeAudio() {
    // Remove the initialization listener after first interaction
    document.removeEventListener('click', initializeAudio);
    document.removeEventListener('touchstart', initializeAudio);
    
    console.log('🔊 Audio system initialized');
    
    // Try to unmute any playing videos
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        if (!video.paused && video.muted) {
            video.muted = false;
        }
    });
}

// Add listeners for user interaction
document.addEventListener('click', initializeAudio, { once: true });
document.addEventListener('touchstart', initializeAudio, { once: true });

// Handle video play events
document.addEventListener('play', function(e) {
    if (e.target.tagName === 'VIDEO') {
        // Pause other videos
        document.querySelectorAll('video').forEach(video => {
            if (video !== e.target && !video.paused) {
                video.pause();
            }
        });
        
        // Update current video reference
        window.vib3Audio.currentVideo = e.target;
        
        // Apply global volume
        e.target.volume = window.vib3Audio.volume;
        
        // Try to unmute if not first video (first video must be muted for autoplay)
        if (!e.target.hasAttribute('data-first-play')) {
            e.target.setAttribute('data-first-play', 'true');
            // Keep first video muted for autoplay policy
            if (!e.target.closest('[data-first-video]')) {
                setTimeout(() => {
                    e.target.muted = false;
                }, 100);
            }
        }
    }
}, true);

// Enhanced volume control
window.setGlobalVolume = function(volume) {
    window.vib3Audio.volume = Math.max(0, Math.min(1, volume));
    
    // Apply to all videos
    document.querySelectorAll('video').forEach(video => {
        video.volume = window.vib3Audio.volume;
    });
    
    // Show volume indicator
    showVolumeIndicator(Math.round(window.vib3Audio.volume * 100));
};

// Volume indicator
function showVolumeIndicator(percentage) {
    // Remove existing indicator
    const existing = document.getElementById('volumeIndicator');
    if (existing) existing.remove();
    
    const indicator = document.createElement('div');
    indicator.id = 'volumeIndicator';
    indicator.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 20px 40px;
        border-radius: 10px;
        font-size: 24px;
        z-index: 10000;
        pointer-events: none;
        transition: opacity 0.3s;
    `;
    indicator.innerHTML = `🔊 ${percentage}%`;
    document.body.appendChild(indicator);
    
    // Fade out after 1 second
    setTimeout(() => {
        indicator.style.opacity = '0';
        setTimeout(() => indicator.remove(), 300);
    }, 1000);
}

// Global mute toggle
window.toggleGlobalMute = function() {
    window.vib3Audio.globalMuted = !window.vib3Audio.globalMuted;
    
    document.querySelectorAll('video').forEach(video => {
        video.muted = window.vib3Audio.globalMuted;
    });
    
    // Update all sound icons
    document.querySelectorAll('.sound-icon').forEach(icon => {
        icon.textContent = window.vib3Audio.globalMuted ? '🔇' : '🔊';
    });
    
    // Show mute indicator
    const indicator = document.createElement('div');
    indicator.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 20px 40px;
        border-radius: 10px;
        font-size: 32px;
        z-index: 10000;
        pointer-events: none;
        transition: opacity 0.3s;
    `;
    indicator.innerHTML = window.vib3Audio.globalMuted ? '🔇 Muted' : '🔊 Unmuted';
    document.body.appendChild(indicator);
    
    setTimeout(() => {
        indicator.style.opacity = '0';
        setTimeout(() => indicator.remove(), 300);
    }, 1000);
};

// Keyboard shortcuts for volume
document.addEventListener('keydown', function(e) {
    const video = window.vib3Audio.currentVideo || document.querySelector('video:not([paused])');
    if (!video) return;
    
    switch(e.key) {
        case 'ArrowUp':
            if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
                e.preventDefault();
                setGlobalVolume(window.vib3Audio.volume + 0.1);
            }
            break;
        case 'ArrowDown':
            if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
                e.preventDefault();
                setGlobalVolume(window.vib3Audio.volume - 0.1);
            }
            break;
        case 'm':
        case 'M':
            if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
                e.preventDefault();
                toggleGlobalMute();
            }
            break;
        case ' ': // Spacebar
            if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
                e.preventDefault();
                if (video.paused) {
                    video.play();
                } else {
                    video.pause();
                }
            }
            break;
    }
});

console.log('✅ VIB3 Audio Manager loaded - Press M to mute/unmute, ↑↓ for volume');