// Complete VIB3 Activity Page - Exact replica from Railway
console.log('🔔 Loading VIB3 Activity page...');

window.showActivityComplete = function() {
    // Hide everything else
    document.querySelectorAll('.page, .content-page, [id$="Page"], .video-feed').forEach(el => {
        el.style.display = 'none';
    });
    
    // Create or get activity page container
    let activityPage = document.getElementById('activityPageComplete');
    if (!activityPage) {
        activityPage = document.createElement('div');
        activityPage.id = 'activityPageComplete';
        document.body.appendChild(activityPage);
    }
    
    activityPage.style.cssText = `
        position: fixed;
        top: 0;
        left: 200px;
        right: 0;
        bottom: 0;
        background: #000;
        overflow-y: auto;
        display: block;
    `;
    
    activityPage.innerHTML = `
        <!-- Activity Header -->
        <h1 style="
            color: white;
            font-size: 32px;
            padding: 30px 40px 20px 40px;
            margin: 0;
        ">Activity</h1>
        
        <!-- Subtitle -->
        <div style="
            background: #0a0a0a;
            padding: 20px 40px;
            text-align: center;
            color: #888;
            font-size: 16px;
            border-bottom: 1px solid #222;
        ">
            See how others are interacting with your content
        </div>
        
        <!-- Activity Tabs -->
        <div style="
            display: flex;
            gap: 20px;
            padding: 20px 40px;
            background: #0a0a0a;
            border-bottom: 1px solid #222;
            justify-content: center;
        ">
            <button style="
                background: #333;
                color: white;
                border: none;
                padding: 10px 24px;
                border-radius: 25px;
                font-size: 16px;
                font-weight: 600;
                cursor: pointer;
            ">All</button>
            
            <button style="
                background: transparent;
                color: #666;
                border: 1px solid #333;
                padding: 10px 24px;
                border-radius: 25px;
                font-size: 16px;
                cursor: pointer;
            ">Likes</button>
            
            <button style="
                background: transparent;
                color: #666;
                border: 1px solid #333;
                padding: 10px 24px;
                border-radius: 25px;
                font-size: 16px;
                cursor: pointer;
            ">Comments</button>
            
            <button style="
                background: transparent;
                color: #666;
                border: 1px solid #333;
                padding: 10px 24px;
                border-radius: 25px;
                font-size: 16px;
                cursor: pointer;
            ">Follows</button>
            
            <button style="
                background: transparent;
                color: #666;
                border: 1px solid #333;
                padding: 10px 24px;
                border-radius: 25px;
                font-size: 16px;
                cursor: pointer;
            ">Mentions</button>
        </div>
        
        <!-- Activity List -->
        <div style="padding: 20px 40px;">
            ${generateActivityItems()}
        </div>
    `;
    
    // Update sidebar active state
    document.querySelectorAll('.sidebar-item').forEach(item => {
        item.classList.remove('active');
    });
    const activityBtn = document.getElementById('sidebarActivity');
    if (activityBtn) {
        activityBtn.classList.add('active');
    }
};

// Generate activity items
function generateActivityItems() {
    const activities = [];
    
    // Create 9 activity items as shown in screenshot
    for (let i = 0; i < 9; i++) {
        activities.push(`
            <div style="
                display: flex;
                align-items: center;
                gap: 20px;
                padding: 20px 30px;
                background: #111;
                border-radius: 15px;
                margin-bottom: 10px;
                position: relative;
                cursor: pointer;
                transition: background 0.2s;
            " onmouseover="this.style.background='#1a1a1a'" onmouseout="this.style.background='#111'">
                <!-- Video Thumbnail -->
                <div style="
                    width: 60px;
                    height: 60px;
                    background: #222;
                    border-radius: 10px;
                    position: relative;
                    overflow: hidden;
                    flex-shrink: 0;
                ">
                    <div style="
                        width: 100%;
                        height: 100%;
                        background: linear-gradient(135deg, #333 0%, #222 100%);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    ">
                        <span style="font-size: 24px;">📹</span>
                    </div>
                    <!-- Orange notification indicator -->
                    <div style="
                        position: absolute;
                        bottom: 5px;
                        right: 5px;
                        width: 12px;
                        height: 12px;
                        background: #ff6b00;
                        border-radius: 50%;
                        border: 2px solid #111;
                    "></div>
                </div>
                
                <!-- Activity Text -->
                <div style="flex: 1;">
                    <div style="
                        color: white;
                        font-size: 16px;
                        margin-bottom: 5px;
                    ">
                        Someone shared your video on <span style="color: #888;">"Untitled Video"</span>
                    </div>
                    <div style="
                        color: #666;
                        font-size: 14px;
                    ">
                        6d ago
                    </div>
                </div>
                
                <!-- Arrow -->
                <div style="
                    color: #444;
                    font-size: 20px;
                ">
                    →
                </div>
            </div>
        `);
    }
    
    return activities.join('');
}


console.log('✅ VIB3 Activity page complete');