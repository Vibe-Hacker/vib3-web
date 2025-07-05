// VIB3 App Initialization
console.log('🚀 Loading VIB3 app initialization...');

// Page visibility management
window.showPage = function(pageName) {
    console.log(`📄 Showing page: ${pageName}`);
    
    // Hide all pages
    const pages = document.querySelectorAll('.page, [id$="Page"], .feed-page, .profile-page, .search-page, .settings-page, .messages-page, .activity-page, .vibe-rooms-page, .live-page, .creator-studio-page, .challenges-page, .collaboration-page, .content');
    pages.forEach(page => {
        page.style.display = 'none';
    });
    
    // Show the requested page
    const pageElement = document.getElementById(pageName + 'Page') || 
                       document.getElementById(pageName) ||
                       document.querySelector(`.${pageName}-page`);
    
    if (pageElement) {
        pageElement.style.display = 'block';
        console.log(`✅ Page shown: ${pageName}`);
        
        // Update active sidebar item
        document.querySelectorAll('.sidebar-item').forEach(item => {
            item.classList.remove('active');
        });
        const activeItem = document.getElementById('sidebar' + pageName.charAt(0).toUpperCase() + pageName.slice(1));
        if (activeItem) {
            activeItem.classList.add('active');
        }
    } else {
        console.error(`❌ Page not found: ${pageName}`);
        // Show feed as fallback
        const feedPage = document.getElementById('feedPage');
        if (feedPage) {
            feedPage.style.display = 'block';
        }
    }
};

// Initialize video feed
window.loadInitialVideos = async function() {
    console.log('📹 Loading videos...');
    try {
        const response = await fetch('/api/test?limit=20', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('authToken')}`
            }
        });
        
        const data = await response.json();
        console.log(`✅ Received ${data.videos?.length || 0} videos`);
        
        if (data.videos && data.videos.length > 0) {
            displayVideos(data.videos);
        } else {
            showEmptyState();
        }
    } catch (error) {
        console.error('❌ Error loading videos:', error);
        showErrorState();
    }
};

// Display videos
function displayVideos(videos) {
    const homeFeed = document.getElementById('homeFeed');
    if (!homeFeed) {
        console.error('Home feed not found');
        return;
    }
    
    homeFeed.innerHTML = '';
    
    videos.forEach(video => {
        const videoContainer = document.createElement('div');
        videoContainer.className = 'video-item';
        videoContainer.style.cssText = 'margin-bottom: 20px; background: #000; border-radius: 8px; overflow: hidden;';
        
        videoContainer.innerHTML = `
            <video 
                src="${video.videoUrl}" 
                controls 
                style="width: 100%; max-height: 600px; object-fit: contain;"
                poster="${video.thumbnailUrl || ''}"
            ></video>
            <div style="padding: 15px; color: white;">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                    ${video.user?.profilePicture ? 
                        `<img src="${video.user.profilePicture}" style="width: 40px; height: 40px; border-radius: 50%;">` : 
                        '<div style="width: 40px; height: 40px; border-radius: 50%; background: #333;"></div>'
                    }
                    <div>
                        <h4 style="margin: 0;">${video.user?.username || 'Unknown User'}</h4>
                        <p style="margin: 0; opacity: 0.7; font-size: 14px;">${video.user?.displayName || ''}</p>
                    </div>
                </div>
                <p>${video.title || video.description || ''}</p>
                <div style="display: flex; gap: 20px; margin-top: 10px;">
                    <button onclick="toggleLike('${video._id}')" style="background: none; border: none; color: white; cursor: pointer;">
                        ❤️ ${video.likeCount || 0}
                    </button>
                    <button style="background: none; border: none; color: white; cursor: pointer;">
                        💬 ${video.commentCount || 0}
                    </button>
                    <button onclick="shareVideo('${video._id}')" style="background: none; border: none; color: white; cursor: pointer;">
                        📤 Share
                    </button>
                </div>
            </div>
        `;
        
        homeFeed.appendChild(videoContainer);
    });
}

// Show empty state
function showEmptyState() {
    const homeFeed = document.getElementById('homeFeed');
    if (homeFeed) {
        homeFeed.innerHTML = `
            <div style="text-align: center; padding: 50px; color: #666;">
                <h2>No videos yet</h2>
                <p>Be the first to upload a video!</p>
                <button onclick="showUploadModal()" style="padding: 10px 20px; background: #ff0050; color: white; border: none; border-radius: 5px; cursor: pointer;">
                    Upload Video
                </button>
            </div>
        `;
    }
}

// Show error state
function showErrorState() {
    const homeFeed = document.getElementById('homeFeed');
    if (homeFeed) {
        homeFeed.innerHTML = `
            <div style="text-align: center; padding: 50px; color: #666;">
                <h2>Error loading videos</h2>
                <p>Please try refreshing the page</p>
                <button onclick="window.loadInitialVideos()" style="padding: 10px 20px; background: #ff0050; color: white; border: none; border-radius: 5px; cursor: pointer;">
                    Try Again
                </button>
            </div>
        `;
    }
}

// Initialize on auth state change
window.initializeAfterAuth = function() {
    console.log('🔐 Initializing after authentication...');
    
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
    
    // Show video feed
    const videoFeed = document.getElementById('videoFeed');
    if (videoFeed) {
        videoFeed.style.display = 'block';
    }
    
    // Load videos
    window.loadInitialVideos();
};

// Check auth on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 DOM loaded, checking authentication...');
    
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
        console.log('✅ User authenticated');
        window.initializeAfterAuth();
    } else {
        console.log('❌ User not authenticated');
    }
});

console.log('✅ VIB3 app initialization loaded');