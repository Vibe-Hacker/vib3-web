// Complete VIB3 Profile Page - Exact replica from Railway
console.log('👤 Loading VIB3 Profile page...');

window.showProfileComplete = function(username = 'oldergenx') {
    // Hide everything else
    document.querySelectorAll('.page, .content-page, [id$="Page"], .video-feed').forEach(el => {
        el.style.display = 'none';
    });
    
    // Create or get profile page container
    let profilePage = document.getElementById('profilePageComplete');
    if (!profilePage) {
        profilePage = document.createElement('div');
        profilePage.id = 'profilePageComplete';
        document.body.appendChild(profilePage);
    }
    
    profilePage.style.cssText = `
        position: fixed;
        top: 0;
        left: 200px;
        right: 0;
        bottom: 0;
        background: #000;
        overflow-y: auto;
        display: block;
    `;
    
    profilePage.innerHTML = `
        <!-- Profile Header with Gradient -->
        <div style="
            background: linear-gradient(135deg, #00d4ff 0%, #ff0080 100%);
            padding: 40px;
            position: relative;
        ">
            <!-- Settings button -->
            <div style="
                position: absolute;
                top: 20px;
                right: 20px;
                width: 40px;
                height: 40px;
                background: rgba(255,255,255,0.2);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                color: white;
                font-size: 20px;
            ">⚙️</div>
            
            <!-- Profile Info -->
            <div style="
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                color: white;
            ">
                <!-- Profile Picture -->
                <div style="
                    width: 120px;
                    height: 120px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #1e3c72, #2a5298);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 48px;
                    margin-bottom: 20px;
                    border: 4px solid white;
                    position: relative;
                ">
                    👤
                    <!-- Online indicator -->
                    <div style="
                        position: absolute;
                        bottom: 5px;
                        right: 5px;
                        width: 20px;
                        height: 20px;
                        background: #10b981;
                        border: 3px solid white;
                        border-radius: 50%;
                    "></div>
                </div>
                
                <!-- Username -->
                <h1 style="
                    font-size: 32px;
                    margin: 0 0 10px 0;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                ">
                    @${username}
                    <button style="
                        background: rgba(255,255,255,0.2);
                        border: 1px solid rgba(255,255,255,0.3);
                        color: white;
                        padding: 4px 12px;
                        border-radius: 15px;
                        font-size: 12px;
                        cursor: pointer;
                    ">Edit</button>
                </h1>
                
                <!-- Bio -->
                <p style="
                    font-size: 16px;
                    opacity: 0.9;
                    margin: 0 0 30px 0;
                ">test test</p>
                
                <!-- Stats -->
                <div style="
                    display: flex;
                    gap: 50px;
                    margin-bottom: 30px;
                ">
                    <div style="text-align: center;">
                        <div style="font-size: 32px; font-weight: bold;">2</div>
                        <div style="font-size: 14px; opacity: 0.8;">Following</div>
                    </div>
                    <div style="text-align: center;">
                        <div style="font-size: 32px; font-weight: bold;">2</div>
                        <div style="font-size: 14px; opacity: 0.8;">Followers</div>
                    </div>
                    <div style="text-align: center;">
                        <div style="font-size: 32px; font-weight: bold;">34</div>
                        <div style="font-size: 14px; opacity: 0.8;">Likes</div>
                    </div>
                </div>
                
                <!-- Action Buttons -->
                <div style="display: flex; gap: 15px;">
                    <button style="
                        background: white;
                        color: #ff0080;
                        border: none;
                        padding: 12px 30px;
                        border-radius: 25px;
                        font-size: 16px;
                        font-weight: 600;
                        cursor: pointer;
                    ">Edit Profile</button>
                    
                    <button style="
                        background: rgba(255,255,255,0.2);
                        backdrop-filter: blur(10px);
                        color: white;
                        border: 2px solid white;
                        padding: 12px 30px;
                        border-radius: 25px;
                        font-size: 16px;
                        font-weight: 600;
                        cursor: pointer;
                    ">Share Profile</button>
                    
                    <button style="
                        background: rgba(255,255,255,0.2);
                        backdrop-filter: blur(10px);
                        color: white;
                        border: 2px solid white;
                        padding: 12px 30px;
                        border-radius: 25px;
                        font-size: 16px;
                        font-weight: 600;
                        cursor: pointer;
                    ">Creator Tools</button>
                </div>
            </div>
        </div>
        
        <!-- Content Tabs -->
        <div style="
            display: flex;
            border-bottom: 1px solid #333;
            background: #0a0a0a;
        ">
            <button style="
                flex: 1;
                padding: 15px;
                background: transparent;
                border: none;
                color: white;
                font-size: 16px;
                font-weight: 600;
                cursor: pointer;
                border-bottom: 3px solid #ff0080;
            ">Videos</button>
            
            <button style="
                flex: 1;
                padding: 15px;
                background: transparent;
                border: none;
                color: #666;
                font-size: 16px;
                cursor: pointer;
                border-bottom: 3px solid transparent;
            ">Liked</button>
            
            <button style="
                flex: 1;
                padding: 15px;
                background: transparent;
                border: none;
                color: #666;
                font-size: 16px;
                cursor: pointer;
                border-bottom: 3px solid transparent;
            ">Favorites</button>
            
            <button style="
                flex: 1;
                padding: 15px;
                background: transparent;
                border: none;
                color: #666;
                font-size: 16px;
                cursor: pointer;
                border-bottom: 3px solid transparent;
            ">Following</button>
        </div>
        
        <!-- Video Grid -->
        <div style="
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
            padding: 20px;
            background: #000;
        ">
            ${generateProfileVideos()}
        </div>
    `;
    
    // Update sidebar active state
    document.querySelectorAll('.sidebar-item').forEach(item => {
        item.classList.remove('active');
    });
    const profileBtn = document.getElementById('sidebarProfile');
    if (profileBtn) {
        profileBtn.classList.add('active');
    }
};

// Generate video grid items
function generateProfileVideos() {
    const videos = [
        { views: '8', likes: '1', text: 'Who did this Lmaoooo😂😂😂', duration: '0:05' },
        { views: '16', likes: '1', duration: '0:16' },
        { views: '17', likes: '1', text: "Every family has that one person that doesn't fit all the way in the selfie", duration: '0:09' },
        { views: '111', likes: '1', duration: '0:12' },
        { views: '5', likes: '', duration: '0:05' },
        { views: '1', likes: '', duration: '0:13' },
        { views: '8', likes: '', duration: '0:11' },
        { views: '3', likes: '', duration: '0:09' }
    ];
    
    return videos.map((video, index) => `
        <div style="
            position: relative;
            background: #111;
            border-radius: 10px;
            overflow: hidden;
            cursor: pointer;
            aspect-ratio: 9/16;
        ">
            <!-- Video thumbnail -->
            <div style="
                width: 100%;
                height: 100%;
                background: linear-gradient(135deg, #222 0%, #111 100%);
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
            ">
                <!-- Play button -->
                <div style="
                    width: 50px;
                    height: 50px;
                    background: rgba(255,255,255,0.2);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 20px;
                ">▶️</div>
                
                <!-- Video text overlay if exists -->
                ${video.text ? `
                    <div style="
                        position: absolute;
                        bottom: 10px;
                        left: 10px;
                        right: 10px;
                        color: white;
                        font-size: 12px;
                        text-shadow: 0 1px 3px rgba(0,0,0,0.8);
                    ">${video.text}</div>
                ` : ''}
            </div>
            
            <!-- Stats overlay -->
            <div style="
                position: absolute;
                bottom: 5px;
                left: 5px;
                display: flex;
                align-items: center;
                gap: 10px;
                font-size: 12px;
                color: white;
                text-shadow: 0 1px 3px rgba(0,0,0,0.8);
            ">
                <span>👁 ${video.views}</span>
                ${video.likes ? `<span>❤️ ${video.likes}</span>` : ''}
            </div>
            
            <!-- Duration -->
            <div style="
                position: absolute;
                bottom: 5px;
                right: 5px;
                background: rgba(0,0,0,0.7);
                color: white;
                padding: 2px 6px;
                border-radius: 3px;
                font-size: 11px;
            ">${video.duration}</div>
            
            <!-- Top badges -->
            ${index === 0 ? `
                <div style="
                    position: absolute;
                    top: 5px;
                    left: 5px;
                    background: #ff0040;
                    color: white;
                    padding: 2px 8px;
                    border-radius: 3px;
                    font-size: 10px;
                    font-weight: 600;
                ">📍</div>
            ` : ''}
            ${index < 4 ? `
                <div style="
                    position: absolute;
                    top: 5px;
                    right: 5px;
                    background: #ff0040;
                    color: white;
                    padding: 2px 8px;
                    border-radius: 3px;
                    font-size: 10px;
                    font-weight: 600;
                ">♥️ ${index + 1}</div>
            ` : ''}
        </div>
    `).join('');
}


console.log('✅ VIB3 Profile page complete');