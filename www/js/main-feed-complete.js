// Complete VIB3 Main Feed - Exact replica from Railway
console.log('🎬 Loading VIB3 main feed page...');

window.showMainFeed = function() {
    console.log('📱 Showing main feed with gradient header...');
    
    // Hide everything else
    document.querySelectorAll('.page, .content-page, [id$="Page"], #videoFeed').forEach(el => {
        el.style.display = 'none';
    });
    
    // Create or get main feed container
    let mainFeedPage = document.getElementById('mainFeedPage');
    if (!mainFeedPage) {
        mainFeedPage = document.createElement('div');
        mainFeedPage.id = 'mainFeedPage';
        document.body.appendChild(mainFeedPage);
    }
    
    mainFeedPage.style.cssText = `
        position: fixed;
        top: 0;
        left: 200px;
        right: 0;
        bottom: 0;
        background: #000;
        display: block;
        overflow: hidden;
    `;
    
    mainFeedPage.innerHTML = `
        <!-- Gradient Header -->
        <div style="
            background: linear-gradient(135deg, #00d4ff 0%, #ff0080 100%);
            padding: 20px 40px;
            text-align: center;
            color: white;
            font-size: 24px;
            font-weight: 600;
            position: relative;
            z-index: 10;
        ">
            Welcome to VIB3 - Where Creativity Vibes
        </div>
        
        <!-- Navigation Tabs -->
        <div style="
            display: flex;
            justify-content: center;
            gap: 15px;
            padding: 20px;
            background: #0a0a0a;
            border-bottom: 1px solid #222;
            position: relative;
            z-index: 10;
        ">
            <button onclick="setFeedTab('home')" id="homeTab" style="
                background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%);
                color: white;
                border: none;
                padding: 12px 28px;
                border-radius: 30px;
                font-size: 16px;
                font-weight: 600;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 8px;
                box-shadow: 0 4px 15px rgba(236, 72, 153, 0.3);
            ">
                Home
            </button>
            
            <button onclick="setFeedTab('squad')" id="squadTab" style="
                background: rgba(255,255,255,0.1);
                color: #ccc;
                border: none;
                padding: 12px 28px;
                border-radius: 30px;
                font-size: 16px;
                font-weight: 600;
                cursor: pointer;
                backdrop-filter: blur(10px);
            ">
                Squad
            </button>
            
            <button onclick="setFeedTab('pulse')" id="pulseTab" style="
                background: rgba(255,255,255,0.1);
                color: #ccc;
                border: none;
                padding: 12px 28px;
                border-radius: 30px;
                font-size: 16px;
                font-weight: 600;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 8px;
                backdrop-filter: blur(10px);
            ">
                ⚡ Pulse Feed
            </button>
            
            <button onclick="setFeedTab('discover')" id="discoverTab" style="
                background: rgba(255,255,255,0.1);
                color: #ccc;
                border: none;
                padding: 12px 28px;
                border-radius: 30px;
                font-size: 16px;
                font-weight: 600;
                cursor: pointer;
                backdrop-filter: blur(10px);
            ">
                Discover
            </button>
            
            <button onclick="setFeedTab('vibing')" id="vibingTab" style="
                background: rgba(255,255,255,0.1);
                color: #ccc;
                border: none;
                padding: 12px 28px;
                border-radius: 30px;
                font-size: 16px;
                font-weight: 600;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 8px;
                backdrop-filter: blur(10px);
            ">
                ✨ Vibing
            </button>
        </div>
        
        <!-- Video Feed Container -->
        <div id="videoFeedContainer" style="
            position: absolute;
            top: 140px;
            left: 0;
            right: 0;
            bottom: 0;
            overflow-y: scroll;
            scroll-snap-type: y mandatory;
            -webkit-overflow-scrolling: touch;
        ">
            <!-- Videos will be loaded here -->
        </div>
    `;
    
    // Load the feed
    loadMainFeedVideos();
    
    // Update sidebar
    document.querySelectorAll('.sidebar-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Force play first video after a short delay
    setTimeout(() => {
        const firstVideo = document.querySelector('#videoFeedContainer video');
        if (firstVideo) {
            firstVideo.play().catch(e => console.log('First video play failed:', e));
        }
    }, 500);
};

// Tab switching
window.setFeedTab = function(tab) {
    // Update tab styles
    const tabs = ['home', 'squad', 'pulse', 'discover', 'vibing'];
    tabs.forEach(t => {
        const tabEl = document.getElementById(t + 'Tab');
        if (tabEl) {
            if (t === tab) {
                tabEl.style.background = 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)';
                tabEl.style.color = 'white';
                tabEl.style.boxShadow = '0 4px 15px rgba(236, 72, 153, 0.3)';
            } else {
                tabEl.style.background = 'rgba(255,255,255,0.1)';
                tabEl.style.color = '#ccc';
                tabEl.style.boxShadow = 'none';
            }
        }
    });
    
    // Load appropriate content
    loadMainFeedVideos(tab);
};

// Load videos for the feed
async function loadMainFeedVideos(feedType = 'home') {
    const container = document.getElementById('videoFeedContainer');
    if (!container) return;
    
    try {
        // Show loading state
        container.innerHTML = `
            <div style="
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
                color: white;
                font-size: 20px;
            ">
                <div style="text-align: center;">
                    <div style="font-size: 48px; margin-bottom: 20px;">📹</div>
                    <div>Loading videos...</div>
                </div>
            </div>
        `;
        
        // Fetch videos
        const response = await fetch('/api/videos?limit=10', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('authToken')}`
            }
        });
        
        const data = await response.json();
        
        if (data.videos && data.videos.length > 0) {
            displayMainFeedVideos(data.videos);
        } else {
            // Show sample videos if no real videos
            displaySampleVideos();
        }
    } catch (error) {
        console.error('Error loading feed:', error);
        displaySampleVideos();
    }
}

// Display videos in TikTok style
function displayMainFeedVideos(videos) {
    const container = document.getElementById('videoFeedContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    videos.forEach((video, index) => {
        const videoItem = document.createElement('div');
        videoItem.style.cssText = `
            position: relative;
            width: 100%;
            height: calc(100vh - 140px);
            scroll-snap-align: start;
            display: flex;
            align-items: center;
            justify-content: center;
            background: black;
            padding: 20px;
            box-sizing: border-box;
        `;
        
        videoItem.innerHTML = `
            <video 
                src="${video.videoUrl}"
                style="
                    max-width: 100%;
                    max-height: 100%;
                    width: auto;
                    height: 100%;
                    object-fit: contain;
                    cursor: pointer;
                "
                loop
                autoplay
                playsinline
                webkit-playsinline
                data-video-index="${index}"
            ></video>
            
            <!-- User info overlay -->
            <div style="
                position: absolute;
                bottom: 100px;
                left: 20px;
                color: white;
                text-shadow: 0 1px 3px rgba(0,0,0,0.8);
                z-index: 10;
            ">
                <h3 style="margin: 0 0 10px 0; font-size: 16px; font-weight: 600;">
                    @${video.user?.username || 'oldergenx'}
                </h3>
                <p style="margin: 0; font-size: 14px; max-width: 300px;">
                    ${video.description || 'Check out this video!'}
                </p>
            </div>
            
            <!-- Action buttons - Right side -->
            <div style="
                position: absolute;
                bottom: 100px;
                right: 20px;
                display: flex;
                flex-direction: column;
                gap: 20px;
                align-items: center;
                z-index: 10;
            ">
                <!-- Like -->
                <div style="cursor: pointer; text-align: center; color: white;" onclick="toggleLike(this)">
                    <div style="font-size: 40px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));">🤍</div>
                    <div style="font-size: 13px; margin-top: 5px;">${video.likeCount || 0}</div>
                </div>
                
                <!-- Comment -->
                <div style="cursor: pointer; text-align: center; color: white;" onclick="openComments()">
                    <div style="font-size: 40px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));">💬</div>
                    <div style="font-size: 13px; margin-top: 5px;">${video.commentCount || 0}</div>
                </div>
                
                <!-- Share -->
                <div style="cursor: pointer; text-align: center; color: white;" onclick="shareVideo()">
                    <div style="font-size: 40px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));">📤</div>
                </div>
                
                <!-- Sound -->
                <div style="cursor: pointer; text-align: center; color: white;" 
                     onclick="toggleMute(this.closest('[style*=scroll-snap-align]').querySelector('video'))">
                    <div style="font-size: 40px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));" class="sound-icon">🔊</div>
                </div>
            </div>
        `;
        
        container.appendChild(videoItem);
    });
    
    // Auto-play logic
    setupVideoObserver(container);
}

// Display sample videos when no real content
function displaySampleVideos() {
    const container = document.getElementById('videoFeedContainer');
    if (!container) return;
    
    const sampleVideo = {
        username: 'oldergena1',
        description: 'Who did this Lmaoooo😂😂😂',
        likeCount: 1234,
        commentCount: 89
    };
    
    container.innerHTML = `
        <div style="
            position: relative;
            width: 100%;
            height: calc(100vh - 140px);
            display: flex;
            align-items: center;
            justify-content: center;
            background: #111;
        ">
            <!-- Video placeholder -->
            <div style="
                width: 375px;
                height: 667px;
                background: linear-gradient(135deg, #333 0%, #222 100%);
                border-radius: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
            ">
                <div style="font-size: 80px;">🎬</div>
                
                <!-- TikTok watermark -->
                <div style="
                    position: absolute;
                    top: 20px;
                    left: 20px;
                    color: white;
                    font-size: 16px;
                    display: flex;
                    align-items: center;
                    gap: 5px;
                ">
                    <span>🎵</span> TikTok
                </div>
                
                <!-- User info -->
                <div style="
                    position: absolute;
                    bottom: 80px;
                    left: 20px;
                    color: white;
                ">
                    <h3 style="margin: 0 0 10px 0;">@${sampleVideo.username}</h3>
                    <p style="margin: 0; max-width: 250px;">${sampleVideo.description}</p>
                </div>
                
                <!-- Actions -->
                <div style="
                    position: absolute;
                    bottom: 80px;
                    right: 20px;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    align-items: center;
                    color: white;
                ">
                    <div style="cursor: pointer; text-align: center;">
                        <div style="font-size: 32px;">❤️</div>
                        <div style="font-size: 12px;">${sampleVideo.likeCount}</div>
                    </div>
                    <div style="cursor: pointer; text-align: center;">
                        <div style="font-size: 32px;">💬</div>
                        <div style="font-size: 12px;">${sampleVideo.commentCount}</div>
                    </div>
                    <div style="cursor: pointer; text-align: center;">
                        <div style="font-size: 32px;">📤</div>
                    </div>
                    <div style="cursor: pointer; text-align: center;">
                        <div style="font-size: 32px;">🔊</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Setup intersection observer for auto-play
function setupVideoObserver(container) {
    const options = {
        root: container,
        rootMargin: '0px',
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target.querySelector('video');
            if (video) {
                if (entry.isIntersecting) {
                    // Ensure video is loaded before playing
                    if (video.readyState >= 3) {
                        video.play().catch(e => console.log('Play failed:', e));
                    } else {
                        video.addEventListener('loadeddata', function() {
                            if (entry.isIntersecting) {
                                video.play().catch(e => console.log('Play failed:', e));
                            }
                        }, { once: true });
                    }
                } else {
                    video.pause();
                }
            }
        });
    }, options);
    
    // Observe all video containers
    setTimeout(() => {
        container.querySelectorAll('[style*="scroll-snap-align"]').forEach(item => {
            observer.observe(item);
        });
    }, 100);
}

// Override showPage for main feed
const originalShowPageFeed = window.showPage;
window.showPage = function(page) {
    if (page === 'home' || page === 'feed' || page === 'foryou') {
        showMainFeed();
    } else if (originalShowPageFeed) {
        originalShowPageFeed(page);
    }
};

// Auto-show feed after login
window.showFeedAfterLogin = function() {
    showMainFeed();
};

// Video playback controls
window.toggleVideoPlayback = function(video) {
    if (video.paused) {
        // Pause all other videos
        document.querySelectorAll('video').forEach(v => {
            if (v !== video) {
                v.pause();
            }
        });
        video.play();
    } else {
        video.pause();
    }
};

// Mute/unmute toggle
window.toggleMute = function(video) {
    if (!video) return;
    
    video.muted = !video.muted;
    
    // Update icon
    const soundIcon = video.closest('[style*="scroll-snap-align"]')?.querySelector('.sound-icon');
    if (soundIcon) {
        soundIcon.textContent = video.muted ? '🔇' : '🔊';
    }
};

// Initialize volume controls on page load
document.addEventListener('DOMContentLoaded', function() {
    // Set up global volume control
    document.addEventListener('keydown', function(e) {
        const activeVideo = document.querySelector('video:not([paused])');
        if (!activeVideo) return;
        
        // Volume up: Arrow Up or +
        if (e.key === 'ArrowUp' || e.key === '+') {
            e.preventDefault();
            activeVideo.volume = Math.min(1, activeVideo.volume + 0.1);
        }
        // Volume down: Arrow Down or -
        else if (e.key === 'ArrowDown' || e.key === '-') {
            e.preventDefault();
            activeVideo.volume = Math.max(0, activeVideo.volume - 0.1);
        }
        // Mute toggle: M
        else if (e.key === 'm' || e.key === 'M') {
            e.preventDefault();
            toggleMute(activeVideo);
        }
    });
});

// Like toggle function
window.toggleLike = function(element) {
    const heartIcon = element.querySelector('div:first-child');
    const countElement = element.querySelector('div:last-child');
    let count = parseInt(countElement.textContent) || 0;
    
    if (heartIcon.textContent === '🤍') {
        heartIcon.textContent = '❤️';
        count++;
    } else {
        heartIcon.textContent = '🤍';
        count--;
    }
    
    countElement.textContent = count;
};

// Open comments
window.openComments = function() {
    console.log('Opening comments...');
    // TODO: Implement comments modal
};

// Share video
window.shareVideo = function() {
    console.log('Sharing video...');
    // TODO: Implement share modal
};

console.log('✅ Main feed system loaded with audio support');