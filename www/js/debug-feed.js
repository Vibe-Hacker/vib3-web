// Debug feed loading
console.log('🔍 DEBUG: Starting feed debug...');

// Check what containers exist
const containers = {
    videoFeed: document.getElementById('videoFeed'),
    homeFeed: document.getElementById('homeFeed'),
    mainFeed: document.getElementById('mainFeed'),
    mainApp: document.getElementById('mainApp'),
    authContainer: document.getElementById('authContainer')
};

console.log('🔍 Containers found:', Object.entries(containers).filter(([k,v]) => v).map(([k]) => k));

// Force hide auth and show app
if (containers.authContainer) {
    containers.authContainer.style.display = 'none';
    console.log('✅ Auth container hidden');
}

if (containers.mainApp) {
    containers.mainApp.style.display = 'block';
    console.log('✅ Main app shown');
}

// Try to load videos directly
console.log('🔍 Attempting to load videos...');
fetch('/api/videos')
    .then(res => res.json())
    .then(data => {
        console.log(`✅ Got ${data.videos?.length || 0} videos`);
        
        if (data.videos && data.videos.length > 0) {
            // Find a container to put them in
            const container = containers.homeFeed || containers.videoFeed || containers.mainFeed;
            
            if (container) {
                console.log('🔍 Using container:', container.id);
                
                // Simple video display
                container.innerHTML = '';
                container.style.cssText = 'height: 100vh; overflow-y: scroll; background: black;';
                
                data.videos.forEach((video, index) => {
                    const div = document.createElement('div');
                    div.style.cssText = 'height: 100vh; position: relative; display: flex; align-items: center; justify-content: center;';
                    
                    div.innerHTML = `
                        <video 
                            src="${video.videoUrl}" 
                            style="max-width: 100%; max-height: 100%; width: auto; height: auto;"
                            controls
                            ${index === 0 ? 'autoplay' : ''}
                            muted
                            loop
                        ></video>
                        <div style="position: absolute; bottom: 20px; left: 20px; color: white; background: rgba(0,0,0,0.5); padding: 10px; border-radius: 5px;">
                            <div>@${video.username || 'unknown'}</div>
                            <div>${video.title || 'No title'}</div>
                        </div>
                    `;
                    
                    container.appendChild(div);
                });
                
                console.log('✅ Videos added to container');
                
                // Force container to be visible
                container.style.display = 'block';
                container.style.visibility = 'visible';
                container.style.opacity = '1';
                container.style.position = 'fixed';
                container.style.top = '0';
                container.style.left = '0';
                container.style.width = '100%';
                container.style.height = '100vh';
                container.style.zIndex = '9999';
                container.style.background = 'black';
                
                console.log('✅ Container styles applied');
            } else {
                console.error('❌ No container found to display videos');
            }
        }
    })
    .catch(err => console.error('❌ Error loading videos:', err));

// Also check if functions exist
console.log('🔍 Functions available:', {
    loadFeed: typeof window.loadFeed,
    loadInitialVideos: typeof window.loadInitialVideos,
    loadVideoFeed: typeof window.loadVideoFeed
});

// Force initialization after a delay
setTimeout(() => {
    console.log('🔍 Force initialization attempt...');
    
    // Hide sidebar if it's covering everything
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.style.zIndex = '100';
    }
    
    // Make sure video feed is visible
    const homeFeed = document.getElementById('homeFeed');
    if (homeFeed) {
        homeFeed.style.display = 'block';
        homeFeed.style.visibility = 'visible';
        homeFeed.style.opacity = '1';
        homeFeed.style.position = 'relative';
        homeFeed.style.zIndex = '1';
        
        // If it's still empty, add a test message
        if (!homeFeed.innerHTML.trim()) {
            homeFeed.innerHTML = '<div style="color: white; padding: 20px; text-align: center;">Feed container is visible but empty. Loading videos...</div>';
        }
    }
    
    // Try to call loadFeed if it exists
    if (typeof window.loadFeed === 'function') {
        console.log('🔍 Calling loadFeed()...');
        window.loadFeed();
    } else {
        console.error('❌ loadFeed function not found');
    }
}, 2000);