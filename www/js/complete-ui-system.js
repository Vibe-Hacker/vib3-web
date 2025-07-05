// Complete VIB3 UI System - All pages and navigation
console.log('🚀 Loading complete VIB3 UI system...');

// Main page navigation function
window.showPage = function(page) {
    console.log(`📄 Navigating to: ${page}`);
    
    // Hide all pages
    const allPages = [
        'mainApp', 'feedPage', 'videoFeed', 'searchPage', 'profilePage', 
        'settingsPage', 'messagesPage', 'activityPage', 'analyticsPage',
        'viberoomsPage', 'livePage', 'creatorStudioPage', 'challengesPage',
        'collaborationPage', 'trendingPage', 'monetizationPage'
    ];
    
    allPages.forEach(pageId => {
        const element = document.getElementById(pageId);
        if (element) element.style.display = 'none';
    });
    
    // Hide all class-based pages
    document.querySelectorAll('.page, .content-page, [class$="-page"]').forEach(el => {
        el.style.display = 'none';
    });
    
    // Update sidebar active state
    document.querySelectorAll('.sidebar-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Show the requested page
    switch(page) {
        case 'home':
        case 'feed':
        case 'foryou':
            showFeedPage();
            break;
            
        case 'viberooms':
            showVibeRooms();
            break;
            
        case 'live':
            showLivePage();
            break;
            
        case 'creator-studio':
        case 'creatorStudio':
            showCreatorStudio();
            break;
            
        case 'challenges':
            showChallenges();
            break;
            
        case 'collaboration':
            showCollaboration();
            break;
            
        case 'trending':
            showTrending();
            break;
            
        case 'monetization':
            showMonetization();
            break;
            
        case 'messages':
            showMessages();
            break;
            
        case 'activity':
            showActivity();
            break;
            
        case 'profile':
            showProfile();
            break;
            
        case 'settings':
            showSettings();
            break;
            
        case 'analytics':
            showAnalytics();
            break;
            
        default:
            showFeedPage();
    }
    
    // Update active sidebar item
    const sidebarItem = document.getElementById('sidebar' + page.charAt(0).toUpperCase() + page.slice(1));
    if (sidebarItem) {
        sidebarItem.classList.add('active');
    }
};

// Show main feed page
function showFeedPage() {
    const mainApp = document.getElementById('mainApp');
    const videoFeed = document.getElementById('videoFeed');
    
    if (mainApp) mainApp.style.display = 'block';
    if (videoFeed) videoFeed.style.display = 'block';
    
    // Load videos if needed
    if (window.loadFeed) {
        window.loadFeed();
    }
}

// Vibe Rooms page
function showVibeRooms() {
    createPageIfNeeded('viberoomsPage', `
        <div class="page-header">
            <h1>✨ Vibe Rooms</h1>
            <p>Live audio conversations with your community</p>
        </div>
        <div class="rooms-grid">
            <div class="room-card">
                <div class="room-header">
                    <span class="live-badge">LIVE</span>
                    <span class="room-count">🎤 12</span>
                </div>
                <h3>Tech Talk Tuesday</h3>
                <p>Discussing the latest in AI and Web3</p>
                <button class="join-room-btn">Join Room</button>
            </div>
            <div class="room-card">
                <div class="room-header">
                    <span class="live-badge">LIVE</span>
                    <span class="room-count">🎤 8</span>
                </div>
                <h3>Music Producers Unite</h3>
                <p>Share your beats and get feedback</p>
                <button class="join-room-btn">Join Room</button>
            </div>
            <div class="create-room-card">
                <div class="create-room-icon">➕</div>
                <h3>Create a Room</h3>
                <p>Start your own conversation</p>
            </div>
        </div>
    `);
}

// Live streaming page
function showLivePage() {
    createPageIfNeeded('livePage', `
        <div class="page-header">
            <h1>🔴 Live Streams</h1>
            <button class="go-live-btn">Go Live</button>
        </div>
        <div class="live-grid">
            <div class="live-stream-card">
                <div class="live-preview">
                    <img src="https://via.placeholder.com/300x400" alt="Stream preview">
                    <span class="viewer-count">👁️ 1.2K</span>
                </div>
                <h3>Gaming Marathon</h3>
                <p>@gamer123</p>
            </div>
            <div class="live-stream-card">
                <div class="live-preview">
                    <img src="https://via.placeholder.com/300x400" alt="Stream preview">
                    <span class="viewer-count">👁️ 856</span>
                </div>
                <h3>Cooking Show</h3>
                <p>@cheflife</p>
            </div>
        </div>
    `);
}

// Creator Studio page
function showCreatorStudio() {
    createPageIfNeeded('creatorStudioPage', `
        <div class="page-header">
            <h1>🎬 Creator Studio</h1>
            <p>Manage your content and grow your audience</p>
        </div>
        <div class="studio-stats">
            <div class="stat-card">
                <h3>Total Views</h3>
                <p class="stat-number">1.2M</p>
                <span class="stat-change">+12.5%</span>
            </div>
            <div class="stat-card">
                <h3>Followers</h3>
                <p class="stat-number">45.2K</p>
                <span class="stat-change">+5.2%</span>
            </div>
            <div class="stat-card">
                <h3>Engagement Rate</h3>
                <p class="stat-number">8.7%</p>
                <span class="stat-change">+2.1%</span>
            </div>
            <div class="stat-card">
                <h3>Revenue</h3>
                <p class="stat-number">$2,450</p>
                <span class="stat-change">+18.3%</span>
            </div>
        </div>
        <div class="studio-tools">
            <button class="studio-btn">📊 Analytics</button>
            <button class="studio-btn">🎥 Content Manager</button>
            <button class="studio-btn">💰 Monetization</button>
            <button class="studio-btn">👥 Audience Insights</button>
        </div>
    `);
}

// Challenges page
function showChallenges() {
    createPageIfNeeded('challengesPage', `
        <div class="page-header">
            <h1>🏆 Challenges</h1>
            <p>Join trending challenges and win prizes</p>
        </div>
        <div class="challenges-grid">
            <div class="challenge-card featured">
                <div class="challenge-badge">🔥 Featured</div>
                <h3>#VIB3DanceOff</h3>
                <p>Show us your best moves!</p>
                <div class="challenge-stats">
                    <span>🎥 125K videos</span>
                    <span>👁️ 50M views</span>
                </div>
                <button class="join-challenge-btn">Join Challenge</button>
            </div>
            <div class="challenge-card">
                <h3>#TechTips</h3>
                <p>Share your favorite tech hack</p>
                <div class="challenge-stats">
                    <span>🎥 45K videos</span>
                    <span>👁️ 12M views</span>
                </div>
                <button class="join-challenge-btn">Join Challenge</button>
            </div>
        </div>
    `);
}

// Helper function to create pages
function createPageIfNeeded(pageId, content) {
    let page = document.getElementById(pageId);
    if (!page) {
        page = document.createElement('div');
        page.id = pageId;
        page.className = 'content-page';
        page.style.cssText = `
            position: fixed;
            top: 0;
            left: 240px;
            right: 0;
            bottom: 0;
            background: var(--bg-primary, #000);
            color: var(--text-primary, #fff);
            overflow-y: auto;
            padding: 20px;
            z-index: 100;
        `;
        document.body.appendChild(page);
    }
    page.innerHTML = content;
    page.style.display = 'block';
    
    // Add styling
    if (!document.getElementById('pageStyles')) {
        const style = document.createElement('style');
        style.id = 'pageStyles';
        style.textContent = `
            .page-header {
                margin-bottom: 30px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .page-header h1 {
                font-size: 32px;
                margin: 0;
            }
            .page-header p {
                margin: 5px 0 0 0;
                opacity: 0.8;
            }
            .rooms-grid, .live-grid, .challenges-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                gap: 20px;
                margin-top: 20px;
            }
            .room-card, .live-stream-card, .challenge-card {
                background: var(--bg-secondary, #111);
                border-radius: 12px;
                padding: 20px;
                cursor: pointer;
                transition: transform 0.2s;
            }
            .room-card:hover, .live-stream-card:hover, .challenge-card:hover {
                transform: translateY(-5px);
            }
            .live-badge {
                background: #ff0000;
                color: white;
                padding: 4px 8px;
                border-radius: 4px;
                font-size: 12px;
                font-weight: bold;
            }
            .join-room-btn, .join-challenge-btn, .go-live-btn {
                background: var(--accent-primary, #ff0050);
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 8px;
                cursor: pointer;
                margin-top: 10px;
                font-weight: 600;
            }
            .studio-stats {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 20px;
                margin: 30px 0;
            }
            .stat-card {
                background: var(--bg-secondary, #111);
                padding: 20px;
                border-radius: 12px;
                text-align: center;
            }
            .stat-number {
                font-size: 36px;
                font-weight: bold;
                margin: 10px 0;
            }
            .stat-change {
                color: #4ade80;
                font-size: 14px;
            }
            .create-room-card {
                background: var(--bg-secondary, #111);
                border: 2px dashed var(--border-primary, #333);
                border-radius: 12px;
                padding: 40px 20px;
                text-align: center;
                cursor: pointer;
            }
            .create-room-icon {
                font-size: 48px;
                margin-bottom: 10px;
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize other pages
function showCollaboration() {
    createPageIfNeeded('collaborationPage', '<h1>🤝 Collaboration Hub</h1><p>Coming soon...</p>');
}

function showTrending() {
    createPageIfNeeded('trendingPage', '<h1>📈 Trending</h1><p>Coming soon...</p>');
}

function showMonetization() {
    createPageIfNeeded('monetizationPage', '<h1>💰 Monetization</h1><p>Coming soon...</p>');
}

function showMessages() {
    createPageIfNeeded('messagesPage', '<h1>💬 Messages</h1><p>Coming soon...</p>');
}

function showActivity() {
    createPageIfNeeded('activityPage', '<h1>🔔 Activity</h1><p>Coming soon...</p>');
}

function showProfile() {
    if (window.showProfilePage) {
        window.showProfilePage();
    } else {
        createPageIfNeeded('profilePage', '<h1>👤 Profile</h1><p>Loading...</p>');
    }
}

function showSettings() {
    createPageIfNeeded('settingsPage', '<h1>⚙️ Settings</h1><p>Coming soon...</p>');
}

function showAnalytics() {
    if (window.loadAnalyticsData) {
        window.loadAnalyticsData();
    } else {
        createPageIfNeeded('analyticsPage', '<h1>📊 Analytics</h1><p>Loading...</p>');
    }
}

console.log('✅ Complete VIB3 UI system loaded');