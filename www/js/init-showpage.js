// Initialize showPage override once
console.log('🚀 Initializing page navigation...');

// Store original showPage function only once
if (!window.originalShowPage && window.showPage) {
    window.originalShowPage = window.showPage;
}

// Create new showPage that routes to appropriate handlers
window.showPage = function(page) {
    console.log('📍 Navigating to:', page);
    
    // Hide welcome header on all pages except main feed
    const welcomeHeader = document.getElementById('vib3WelcomeHeader');
    if (welcomeHeader) {
        welcomeHeader.style.display = (page === 'home' || page === 'feed' || page === 'foryou') ? 'block' : 'none';
    }
    
    // Route to specific page handlers
    switch(page) {
        case 'home':
        case 'feed':
        case 'foryou':
            if (window.showMainFeed) {
                window.showMainFeed();
            } else if (window.originalShowPage) {
                window.originalShowPage(page);
            }
            break;
            
        case 'viberooms':
            if (window.showVibeRoomsComplete) {
                window.showVibeRoomsComplete();
            } else if (window.originalShowPage) {
                window.originalShowPage(page);
            }
            break;
            
        case 'live':
            if (window.showLivePageComplete) {
                window.showLivePageComplete();
            } else if (window.originalShowPage) {
                window.originalShowPage(page);
            }
            break;
            
        case 'challenges':
            if (window.showChallengesComplete) {
                window.showChallengesComplete();
            } else if (window.originalShowPage) {
                window.originalShowPage(page);
            }
            break;
            
        case 'coins':
        case 'vib3coins':
            if (window.showVIB3CoinsComplete) {
                window.showVIB3CoinsComplete();
            } else if (window.originalShowPage) {
                window.originalShowPage(page);
            }
            break;
            
        case 'activity':
            if (window.showActivityComplete) {
                window.showActivityComplete();
            } else if (window.originalShowPage) {
                window.originalShowPage(page);
            }
            break;
            
        case 'profile':
            if (window.showProfileComplete) {
                window.showProfileComplete();
            } else if (window.originalShowPage) {
                window.originalShowPage(page);
            }
            break;
            
        case 'energymeter':
            if (window.showEnergyMeterComplete) {
                window.showEnergyMeterComplete();
            } else if (window.originalShowPage) {
                window.originalShowPage(page);
            }
            break;
            
        default:
            if (window.originalShowPage) {
                window.originalShowPage(page);
            }
            break;
    }
};

console.log('✅ Page navigation initialized');