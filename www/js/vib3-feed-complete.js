// Complete VIB3 Feed System - Extracted from Railway
console.log('🚀 Loading complete VIB3 feed system...');

// Initialize the complete feed system
window.initializeCompleteFeed = function() {
    console.log('📹 Initializing complete feed with algorithms...');
    
    // Hide auth container
    const authContainer = document.getElementById('authContainer');
    if (authContainer) {
        authContainer.style.display = 'none';
    }
    
    // Show main app
    const mainApp = document.getElementById('mainApp');
    if (mainApp) {
        mainApp.style.display = 'block';
    }
    
    // Load the feed with Railway's exact method
    loadRailwayFeed();
};

// Railway's exact feed loading
async function loadRailwayFeed() {
    try {
        // Use the exact endpoint Railway uses
        const response = await fetch('/api/videos?limit=20', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('authToken')}`
            }
        });
        
        const data = await response.json();
        
        if (data.videos && data.videos.length > 0) {
            displayRailwayVideos(data.videos);
        }
    } catch (error) {
        console.error('Feed load error:', error);
    }
}

// Display videos exactly like Railway
function displayRailwayVideos(videos) {
    const homeFeed = document.getElementById('homeFeed');
    if (!homeFeed) return;
    
    // Clear and set up container
    homeFeed.innerHTML = '';
    homeFeed.className = 'video-feed';
    homeFeed.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        overflow-y: scroll;
        scroll-snap-type: y mandatory;
        background: black;
        z-index: 1000;
    `;
    
    videos.forEach((video, index) => {
        const videoItem = document.createElement('div');
        videoItem.className = 'video-item';
        videoItem.style.cssText = `
            position: relative;
            width: 100%;
            height: 100vh;
            scroll-snap-align: start;
            display: flex;
            align-items: center;
            justify-content: center;
            background: black;
        `;
        
        videoItem.innerHTML = `
            <video 
                class="video-element"
                src="${video.videoUrl}"
                style="width: 100%; height: 100%; object-fit: contain;"
                loop
                autoplay
                playsinline
                webkit-playsinline
            ></video>
            
            <div class="video-overlay" style="position: absolute; inset: 0; pointer-events: none;">
                <div class="video-sidebar" style="position: absolute; bottom: 80px; right: 10px; display: flex; flex-direction: column; gap: 20px; align-items: center; pointer-events: auto;">
                    <div class="profile-link" onclick="showProfile('${video.userId}')" style="cursor: pointer;">
                        <img src="${video.user?.profilePicture || 'https://via.placeholder.com/48'}" 
                             style="width: 48px; height: 48px; border-radius: 50%; border: 2px solid white;">
                    </div>
                    
                    <div class="action-button" onclick="toggleLike('${video._id}')" style="cursor: pointer; text-align: center; color: white;">
                        <div style="font-size: 32px;">❤️</div>
                        <div style="font-size: 12px;">${video.likeCount || 0}</div>
                    </div>
                    
                    <div class="action-button" onclick="showComments('${video._id}')" style="cursor: pointer; text-align: center; color: white;">
                        <div style="font-size: 32px;">💬</div>
                        <div style="font-size: 12px;">${video.commentCount || 0}</div>
                    </div>
                    
                    <div class="action-button" onclick="shareVideo('${video._id}')" style="cursor: pointer; text-align: center; color: white;">
                        <div style="font-size: 32px;">↗️</div>
                        <div style="font-size: 12px;">Share</div>
                    </div>
                </div>
                
                <div class="video-info" style="position: absolute; bottom: 20px; left: 10px; right: 80px; color: white;">
                    <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600;">
                        @${video.user?.username || video.username || 'user'}
                    </h3>
                    <p style="margin: 0; font-size: 14px; line-height: 1.3;">
                        ${video.title || video.description || ''}
                    </p>
                    ${video.music ? `
                        <div style="margin-top: 8px; display: flex; align-items: center; gap: 8px;">
                            <span style="font-size: 20px;">🎵</span>
                            <span style="font-size: 13px;">${video.music}</span>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
        
        homeFeed.appendChild(videoItem);
    });
    
    // Set up scroll observer for autoplay
    setupScrollObserver();
}

// Autoplay videos on scroll
function setupScrollObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target.querySelector('video');
            if (video) {
                if (entry.isIntersecting) {
                    video.play().catch(() => {});
                } else {
                    video.pause();
                }
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.video-item').forEach(item => {
        observer.observe(item);
    });
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeCompleteFeed);
} else {
    initializeCompleteFeed();
}

console.log('✅ Complete VIB3 feed system loaded');