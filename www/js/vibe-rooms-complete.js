// Complete Vibe Rooms UI - Exact replica from screenshot
console.log('🏠 Loading Vibe Rooms complete UI...');

window.showVibeRoomsComplete = function() {
    // Hide everything else
    document.querySelectorAll('.page, .content-page, [id$="Page"], .video-feed').forEach(el => {
        el.style.display = 'none';
    });
    
    // Create or get vibe rooms container
    let vibeRoomsPage = document.getElementById('viberoomsPage');
    if (!vibeRoomsPage) {
        vibeRoomsPage = document.createElement('div');
        vibeRoomsPage.id = 'viberoomsPage';
        document.body.appendChild(vibeRoomsPage);
    }
    
    vibeRoomsPage.style.cssText = `
        position: fixed;
        top: 0;
        left: 200px;
        right: 0;
        bottom: 0;
        background: #0a0a0a;
        overflow-y: auto;
        display: block;
    `;
    
    vibeRoomsPage.innerHTML = `
        <!-- Gradient Header -->
        <div style="
            background: linear-gradient(135deg, #00d4ff 0%, #ff0080 100%);
            padding: 30px;
            text-align: center;
            color: white;
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 40px;
        ">
            Welcome to VIB3 - Where Creativity Vibes
        </div>
        
        <!-- Vibe Rooms Header -->
        <div style="
            background: linear-gradient(135deg, #7c3aed 0%, #ec4899 100%);
            margin: 0 40px;
            padding: 40px;
            border-radius: 20px;
            text-align: center;
            color: white;
            margin-bottom: 40px;
        ">
            <h1 style="
                font-size: 48px;
                margin: 0 0 10px 0;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 15px;
            ">
                🏠 Vibe Rooms
            </h1>
            <p style="font-size: 18px; opacity: 0.9; margin: 0;">
                Join community spaces based on your interests and vibes
            </p>
        </div>
        
        <!-- Room Cards Grid -->
        <div style="
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 30px;
            padding: 0 40px;
            margin-bottom: 60px;
        ">
            <!-- Music Vibes -->
            <div class="vibe-room-card" style="
                background: linear-gradient(135deg, #4c1d95 0%, #7c3aed 100%);
                padding: 40px;
                border-radius: 20px;
                color: white;
                cursor: pointer;
                transition: transform 0.3s;
                position: relative;
                overflow: hidden;
            " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                <div style="font-size: 60px; margin-bottom: 20px;">🎵</div>
                <h3 style="font-size: 28px; margin: 0 0 10px 0;">Music Vibes</h3>
                <p style="opacity: 0.9; margin-bottom: 20px;">Share beats, discover new artists, and vibe to music together</p>
                <div style="
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    font-size: 14px;
                    opacity: 0.8;
                ">
                    <span>👥</span>
                    <span>847 users vibing</span>
                </div>
            </div>
            
            <!-- Dance Floor -->
            <div class="vibe-room-card" style="
                background: linear-gradient(135deg, #db2777 0%, #f472b6 100%);
                padding: 40px;
                border-radius: 20px;
                color: white;
                cursor: pointer;
                transition: transform 0.3s;
            " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                <div style="font-size: 60px; margin-bottom: 20px;">💃</div>
                <h3 style="font-size: 28px; margin: 0 0 10px 0;">Dance Floor</h3>
                <p style="opacity: 0.9; margin-bottom: 20px;">Show your moves, learn new dances, and battle it out</p>
                <div style="
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    font-size: 14px;
                    opacity: 0.8;
                ">
                    <span>👥</span>
                    <span>632 users dancing</span>
                </div>
            </div>
            
            <!-- Creative Space -->
            <div class="vibe-room-card" style="
                background: linear-gradient(135deg, #0891b2 0%, #06b6d4 100%);
                padding: 40px;
                border-radius: 20px;
                color: white;
                cursor: pointer;
                transition: transform 0.3s;
            " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                <div style="font-size: 60px; margin-bottom: 20px;">🎨</div>
                <h3 style="font-size: 28px; margin: 0 0 10px 0;">Creative Space</h3>
                <p style="opacity: 0.9; margin-bottom: 20px;">Art, design, photography, and creative collaborations</p>
                <div style="
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    font-size: 14px;
                    opacity: 0.8;
                ">
                    <span>👥</span>
                    <span>423 creators online</span>
                </div>
            </div>
            
            <!-- Gaming Zone -->
            <div class="vibe-room-card" style="
                background: linear-gradient(135deg, #ea580c 0%, #fb923c 100%);
                padding: 40px;
                border-radius: 20px;
                color: white;
                cursor: pointer;
                transition: transform 0.3s;
            " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                <div style="font-size: 60px; margin-bottom: 20px;">🎮</div>
                <h3 style="font-size: 28px; margin: 0 0 10px 0;">Gaming Zone</h3>
                <p style="opacity: 0.9; margin-bottom: 20px;">Gaming content, streams, reviews, and gamer community</p>
                <div style="
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    font-size: 14px;
                    opacity: 0.8;
                ">
                    <span>👥</span>
                    <span>1,245 gamers active</span>
                </div>
            </div>
        </div>
        
        <!-- Create Room Section -->
        <div style="
            text-align: center;
            padding: 60px 40px;
            background: rgba(255,255,255,0.05);
            margin: 0 40px 40px;
            border-radius: 20px;
        ">
            <h2 style="color: white; font-size: 32px; margin: 0 0 15px 0;">
                Create Your Own Vibe Room
            </h2>
            <p style="color: rgba(255,255,255,0.7); font-size: 18px; margin: 0 0 30px 0;">
                Start a new community space for your unique interests
            </p>
            <button style="
                background: linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%);
                color: white;
                border: none;
                padding: 15px 40px;
                font-size: 18px;
                font-weight: 600;
                border-radius: 30px;
                cursor: pointer;
                transition: transform 0.2s;
            " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                Create New Room
            </button>
        </div>
    `;
    
    // Update sidebar active state
    document.querySelectorAll('.sidebar-item').forEach(item => {
        item.classList.remove('active');
    });
    const vibeRoomsBtn = document.getElementById('sidebarVibeRooms');
    if (vibeRoomsBtn) {
        vibeRoomsBtn.classList.add('active');
    }
};

// Override the showPage function for viberooms
const originalShowPage = window.showPage;
window.showPage = function(page) {
    if (page === 'viberooms') {
        showVibeRoomsComplete();
    } else if (originalShowPage) {
        originalShowPage(page);
    }
};

console.log('✅ Vibe Rooms complete UI loaded');