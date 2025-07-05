// Simple feed functions for VIB3

// Main feed loading function
window.loadFeed = function() {
    console.log('📹 Loading feed...');
    loadVideoFeed('foryou', false);
};

// Load initial videos (alias)
window.loadInitialVideos = window.loadFeed;

// Load video feed
async function loadVideoFeed(feedType = 'foryou', forceRefresh = false) {
    // Try multiple possible feed containers
    let videoFeed = document.getElementById('videoFeed') || 
                   document.getElementById('homeFeed') || 
                   document.getElementById('mainFeed') ||
                   document.querySelector('.video-feed');
    
    if (!videoFeed) {
        console.error('No video feed container found');
        return;
    }
    
    // Show loading
    videoFeed.innerHTML = `
        <div class="loading-container">
            <div class="spinner"></div>
            <p>Loading videos...</p>
        </div>
    `;
    
    try {
        const response = await fetch(`/api/videos?feed=${feedType}`, {
            headers: window.authToken ? { 'Authorization': `Bearer ${window.authToken}` } : {}
        });
        
        const data = await response.json();
        
        if (data.videos && data.videos.length > 0) {
            videoFeed.innerHTML = '';
            
            // Set scroll snap on container
            videoFeed.style.cssText = 'height: 100vh; overflow-y: scroll; scroll-snap-type: y mandatory; -webkit-overflow-scrolling: touch;';
            
            data.videos.forEach(video => {
                const videoCard = createVideoCard(video);
                videoFeed.appendChild(videoCard);
            });
            
            // Auto-play first video
            const firstVideo = videoFeed.querySelector('video');
            if (firstVideo) {
                firstVideo.play().catch(() => console.log('Autoplay blocked'));
            }
        } else {
            videoFeed.innerHTML = `
                <div class="empty-feed">
                    <h3>No videos yet</h3>
                    <p>Be the first to upload!</p>
                </div>
            `;
        }
    } catch (error) {
        console.error('Load feed error:', error);
        videoFeed.innerHTML = `
            <div class="error-container">
                <h3>Unable to load videos</h3>
                <p>Check your connection and try again</p>
                <button onclick="loadVideoFeed('${feedType}', true)">Retry</button>
            </div>
        `;
    }
}

// Create video card element
function createVideoCard(video) {
    const card = document.createElement('div');
    card.className = 'video-item';
    card.style.cssText = 'position: relative; height: 100vh; width: 100%; background: black; scroll-snap-align: start;';
    
    // Get user info
    const username = video.user?.username || video.username || 'unknown';
    const displayName = video.user?.displayName || video.user?.username || '';
    const profilePic = video.user?.profilePicture || video.user?.profileImage || '';
    
    card.innerHTML = `
        <video 
            class="video-element" 
            src="${video.videoUrl}"
            style="width: 100%; height: 100%; object-fit: contain;"
            autoplay
            muted
            loop
            playsinline
            onclick="toggleVideoPlayback(this)"
        ></video>
        
        <div class="video-sidebar" style="position: absolute; bottom: 80px; right: 10px; display: flex; flex-direction: column; gap: 20px; align-items: center;">
            <div class="video-action" onclick="window.showProfile('${video.userId}')" style="cursor: pointer;">
                ${profilePic ? 
                    `<img src="${profilePic}" style="width: 48px; height: 48px; border-radius: 50%; border: 2px solid white;">` :
                    '<div style="width: 48px; height: 48px; border-radius: 50%; background: #333; border: 2px solid white;"></div>'
                }
            </div>
            
            <div class="video-action" onclick="handleLikeClick('${video._id}', this)" style="cursor: pointer; text-align: center;">
                <div style="font-size: 28px;">❤️</div>
                <div style="color: white; font-size: 12px;">${video.likeCount || 0}</div>
            </div>
            
            <div class="video-action" onclick="showComments('${video._id}')" style="cursor: pointer; text-align: center;">
                <div style="font-size: 28px;">💬</div>
                <div style="color: white; font-size: 12px;">${video.commentCount || 0}</div>
            </div>
            
            <div class="video-action" onclick="shareVideo('${video._id}')" style="cursor: pointer; text-align: center;">
                <div style="font-size: 28px;">↗️</div>
                <div style="color: white; font-size: 12px;">Share</div>
            </div>
        </div>
        
        <div class="video-info" style="position: absolute; bottom: 80px; left: 10px; right: 70px; color: white;">
            <h3 style="margin: 0 0 5px 0; font-size: 16px;">@${username}</h3>
            ${displayName ? `<p style="margin: 0 0 10px 0; opacity: 0.8; font-size: 14px;">${displayName}</p>` : ''}
            <p style="margin: 0; font-size: 14px;">${video.title || video.description || ''}</p>
        </div>
    `;
    
    return card;
}

// Toggle video playback
function toggleVideoPlayback(container) {
    const video = container.querySelector('.video-element');
    const indicator = container.querySelector('.play-pause-indicator');
    
    if (!video) return;
    
    if (video.paused) {
        // Pause all other videos
        document.querySelectorAll('.video-element').forEach(v => {
            if (v !== video && !v.paused) {
                v.pause();
            }
        });
        
        video.play().then(() => {
            indicator.textContent = '⏸️';
            indicator.style.opacity = '1';
            setTimeout(() => indicator.style.opacity = '0', 1000);
        }).catch(() => {
            console.log('Playback failed');
        });
    } else {
        video.pause();
        indicator.textContent = '▶️';
        indicator.style.opacity = '1';
        setTimeout(() => indicator.style.opacity = '0', 1000);
    }
}

// Handle like button click
async function handleLikeClick(videoId, button) {
    const result = await window.toggleLike(videoId);
    if (result.success) {
        button.classList.toggle('liked', result.liked);
        button.querySelector('span').textContent = result.likeCount;
    } else if (result.requiresAuth) {
        if (window.showNotification) {
            window.showNotification('Please login to like videos', 'info');
        }
    }
}

// Initialize video observer for auto-play
function initVideoObserver() {
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const video = entry.target.querySelector('.video-element');
                if (video) {
                    if (entry.isIntersecting) {
                        video.play().catch(() => {});
                    } else {
                        video.pause();
                    }
                }
            });
        }, { threshold: 0.7 });
        
        // Observe existing videos
        document.querySelectorAll('.video-card').forEach(card => {
            observer.observe(card);
        });
        
        // Store observer for later use
        window.videoObserver = observer;
    }
}

// Format date function (fallback)
function formatDate(date) {
    if (!date) return 'Recently';
    const dateObj = new Date(date);
    const now = new Date();
    const diff = now - dateObj;
    
    if (diff < 60000) return 'Just now';
    if (diff < 3600000) return Math.floor(diff / 60000) + 'm ago';
    if (diff < 86400000) return Math.floor(diff / 3600000) + 'h ago';
    return Math.floor(diff / 86400000) + 'd ago';
}

// Make functions globally available
window.loadVideoFeed = loadVideoFeed;
window.createVideoCard = createVideoCard;
window.toggleVideoPlayback = toggleVideoPlayback;
window.handleLikeClick = handleLikeClick;
window.initVideoObserver = initVideoObserver;