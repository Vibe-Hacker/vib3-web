// Complete Live Streaming Page - Exact replica
console.log('🔴 Loading Live Streaming page...');

window.showLivePageComplete = function() {
    // Hide everything else
    document.querySelectorAll('.page, .content-page, [id$="Page"], .video-feed').forEach(el => {
        el.style.display = 'none';
    });
    
    // Create or get live page container
    let livePage = document.getElementById('livePage');
    if (!livePage) {
        livePage = document.createElement('div');
        livePage.id = 'livePage';
        document.body.appendChild(livePage);
    }
    
    livePage.style.cssText = `
        position: fixed;
        top: 0;
        left: 200px;
        right: 0;
        bottom: 0;
        background: #000;
        overflow-y: auto;
        display: block;
    `;
    
    livePage.innerHTML = `
        <!-- Header -->
        <div style="
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px 40px;
            background: #0a0a0a;
            border-bottom: 1px solid #222;
        ">
            <div style="display: flex; align-items: center; gap: 20px;">
                <button style="
                    background: transparent;
                    border: 1px solid #444;
                    color: white;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                " onclick="window.showPage('feed')">
                    ←
                </button>
                <h1 style="
                    font-size: 32px;
                    margin: 0;
                    color: white;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                ">
                    <span style="
                        width: 20px;
                        height: 20px;
                        background: #00d4ff;
                        border-radius: 50%;
                        display: inline-block;
                    "></span>
                    Live <span style="color: #ff0080;">Streaming</span>
                </h1>
            </div>
            <div style="display: flex; gap: 15px;">
                <button style="
                    background: #ff0040;
                    color: white;
                    border: none;
                    padding: 12px 30px;
                    border-radius: 25px;
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                ">
                    <span style="
                        width: 8px;
                        height: 8px;
                        background: white;
                        border-radius: 50%;
                        display: inline-block;
                    "></span>
                    Go Live
                </button>
                <button style="
                    background: #222;
                    color: white;
                    border: 1px solid #444;
                    padding: 12px 24px;
                    border-radius: 25px;
                    font-size: 16px;
                    cursor: pointer;
                ">
                    Categories
                </button>
            </div>
        </div>
        
        <!-- Tabs -->
        <div style="
            display: flex;
            gap: 0;
            padding: 0 40px;
            background: #0a0a0a;
            border-bottom: 1px solid #222;
        ">
            <div style="
                padding: 15px 30px;
                color: white;
                cursor: pointer;
                border-bottom: 3px solid #ff0040;
                font-weight: 600;
            ">Featured</div>
            <div style="
                padding: 15px 30px;
                color: #888;
                cursor: pointer;
                border-bottom: 3px solid transparent;
            ">Following</div>
            <div style="
                padding: 15px 30px;
                color: #888;
                cursor: pointer;
                border-bottom: 3px solid transparent;
            ">Categories</div>
            <div style="
                padding: 15px 30px;
                color: #888;
                cursor: pointer;
                border-bottom: 3px solid transparent;
            ">Recent</div>
        </div>
        
        <!-- Live Streams Grid -->
        <div style="
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 30px;
            padding: 40px;
        ">
            <!-- Stream 1 -->
            <div class="live-stream-card" style="
                background: #111;
                border-radius: 15px;
                overflow: hidden;
                cursor: pointer;
                transition: transform 0.2s;
            " onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'">
                <div style="
                    position: relative;
                    height: 200px;
                    background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                ">
                    <div style="font-size: 60px;">☕</div>
                    <div style="
                        position: absolute;
                        top: 10px;
                        left: 10px;
                        background: #ff0040;
                        color: white;
                        padding: 5px 10px;
                        border-radius: 5px;
                        font-size: 12px;
                        font-weight: bold;
                        display: flex;
                        align-items: center;
                        gap: 5px;
                    ">
                        <span style="width: 6px; height: 6px; background: white; border-radius: 50%;"></span>
                        LIVE
                    </div>
                    <div style="
                        position: absolute;
                        top: 10px;
                        right: 10px;
                        background: rgba(0,0,0,0.7);
                        color: white;
                        padding: 5px 10px;
                        border-radius: 5px;
                        font-size: 12px;
                    ">234 viewers</div>
                </div>
                <div style="padding: 15px;">
                    <h3 style="color: white; margin: 0 0 10px 0; font-size: 18px;">
                        Morning coffee chat ☕
                    </h3>
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <img src="https://via.placeholder.com/30" style="
                            width: 30px;
                            height: 30px;
                            border-radius: 50%;
                            background: linear-gradient(135deg, #ec4899, #f472b6);
                        ">
                        <span style="color: #ccc; font-size: 14px;">Sarah M.</span>
                    </div>
                    <div style="
                        margin-top: 10px;
                        color: #666;
                        font-size: 12px;
                        background: #222;
                        padding: 5px 10px;
                        border-radius: 5px;
                        display: inline-block;
                    ">Lifestyle</div>
                </div>
            </div>
            
            <!-- Stream 2 -->
            <div class="live-stream-card" style="
                background: #111;
                border-radius: 15px;
                overflow: hidden;
                cursor: pointer;
                transition: transform 0.2s;
            " onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'">
                <div style="
                    position: relative;
                    height: 200px;
                    background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                ">
                    <div style="font-size: 60px;">👨‍🍳</div>
                    <div style="
                        position: absolute;
                        top: 10px;
                        left: 10px;
                        background: #ff0040;
                        color: white;
                        padding: 5px 10px;
                        border-radius: 5px;
                        font-size: 12px;
                        font-weight: bold;
                        display: flex;
                        align-items: center;
                        gap: 5px;
                    ">
                        <span style="width: 6px; height: 6px; background: white; border-radius: 50%;"></span>
                        LIVE
                    </div>
                    <div style="
                        position: absolute;
                        top: 10px;
                        right: 10px;
                        background: rgba(0,0,0,0.7);
                        color: white;
                        padding: 5px 10px;
                        border-radius: 5px;
                        font-size: 12px;
                    ">567 viewers</div>
                </div>
                <div style="padding: 15px;">
                    <h3 style="color: white; margin: 0 0 10px 0; font-size: 18px;">
                        Cooking Italian pasta 🍝
                    </h3>
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <img src="https://via.placeholder.com/30" style="
                            width: 30px;
                            height: 30px;
                            border-radius: 50%;
                            background: linear-gradient(135deg, #3b82f6, #60a5fa);
                        ">
                        <span style="color: #ccc; font-size: 14px;">Maria G.</span>
                    </div>
                    <div style="
                        margin-top: 10px;
                        color: #666;
                        font-size: 12px;
                        background: #222;
                        padding: 5px 10px;
                        border-radius: 5px;
                        display: inline-block;
                    ">Cooking</div>
                </div>
            </div>
            
            <!-- Stream 3 -->
            <div class="live-stream-card" style="
                background: #111;
                border-radius: 15px;
                overflow: hidden;
                cursor: pointer;
                transition: transform 0.2s;
            " onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'">
                <div style="
                    position: relative;
                    height: 200px;
                    background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                ">
                    <div style="font-size: 60px;">🎮</div>
                    <div style="
                        position: absolute;
                        top: 10px;
                        left: 10px;
                        background: #ff0040;
                        color: white;
                        padding: 5px 10px;
                        border-radius: 5px;
                        font-size: 12px;
                        font-weight: bold;
                        display: flex;
                        align-items: center;
                        gap: 5px;
                    ">
                        <span style="width: 6px; height: 6px; background: white; border-radius: 50%;"></span>
                        LIVE
                    </div>
                    <div style="
                        position: absolute;
                        top: 10px;
                        right: 10px;
                        background: rgba(0,0,0,0.7);
                        color: white;
                        padding: 5px 10px;
                        border-radius: 5px;
                        font-size: 12px;
                    ">1234 viewers</div>
                </div>
                <div style="padding: 15px;">
                    <h3 style="color: white; margin: 0 0 10px 0; font-size: 18px;">
                        Gaming session - New RPG! 🎮
                    </h3>
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <img src="https://via.placeholder.com/30" style="
                            width: 30px;
                            height: 30px;
                            border-radius: 50%;
                            background: linear-gradient(135deg, #8b5cf6, #a78bfa);
                        ">
                        <span style="color: #ccc; font-size: 14px;">Alex R.</span>
                    </div>
                    <div style="
                        margin-top: 10px;
                        color: #666;
                        font-size: 12px;
                        background: #222;
                        padding: 5px 10px;
                        border-radius: 5px;
                        display: inline-block;
                    ">Gaming</div>
                </div>
            </div>
            
            <!-- Stream 4 -->
            <div class="live-stream-card" style="
                background: #111;
                border-radius: 15px;
                overflow: hidden;
                cursor: pointer;
                transition: transform 0.2s;
            " onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'">
                <div style="
                    position: relative;
                    height: 200px;
                    background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                ">
                    <div style="font-size: 60px;">💪</div>
                    <div style="
                        position: absolute;
                        top: 10px;
                        left: 10px;
                        background: #ff0040;
                        color: white;
                        padding: 5px 10px;
                        border-radius: 5px;
                        font-size: 12px;
                        font-weight: bold;
                        display: flex;
                        align-items: center;
                        gap: 5px;
                    ">
                        <span style="width: 6px; height: 6px; background: white; border-radius: 50%;"></span>
                        LIVE
                    </div>
                    <div style="
                        position: absolute;
                        top: 10px;
                        right: 10px;
                        background: rgba(0,0,0,0.7);
                        color: white;
                        padding: 5px 10px;
                        border-radius: 5px;
                        font-size: 12px;
                    ">445 viewers</div>
                </div>
                <div style="padding: 15px;">
                    <h3 style="color: white; margin: 0 0 10px 0; font-size: 18px;">
                        Workout motivation 💪
                    </h3>
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <img src="https://via.placeholder.com/30" style="
                            width: 30px;
                            height: 30px;
                            border-radius: 50%;
                            background: linear-gradient(135deg, #f59e0b, #fbbf24);
                        ">
                        <span style="color: #ccc; font-size: 14px;">Jake F.</span>
                    </div>
                    <div style="
                        margin-top: 10px;
                        color: #666;
                        font-size: 12px;
                        background: #222;
                        padding: 5px 10px;
                        border-radius: 5px;
                        display: inline-block;
                    ">Fitness</div>
                </div>
            </div>
            
            <!-- Stream 5 -->
            <div class="live-stream-card" style="
                background: #111;
                border-radius: 15px;
                overflow: hidden;
                cursor: pointer;
                transition: transform 0.2s;
            " onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'">
                <div style="
                    position: relative;
                    height: 200px;
                    background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                ">
                    <div style="font-size: 60px;">📚</div>
                    <div style="
                        position: absolute;
                        top: 10px;
                        left: 10px;
                        background: #ff0040;
                        color: white;
                        padding: 5px 10px;
                        border-radius: 5px;
                        font-size: 12px;
                        font-weight: bold;
                        display: flex;
                        align-items: center;
                        gap: 5px;
                    ">
                        <span style="width: 6px; height: 6px; background: white; border-radius: 50%;"></span>
                        LIVE
                    </div>
                    <div style="
                        position: absolute;
                        top: 10px;
                        right: 10px;
                        background: rgba(0,0,0,0.7);
                        color: white;
                        padding: 5px 10px;
                        border-radius: 5px;
                        font-size: 12px;
                    ">89 viewers</div>
                </div>
                <div style="padding: 15px;">
                    <h3 style="color: white; margin: 0 0 10px 0; font-size: 18px;">
                        Study with me - Physics 📚
                    </h3>
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <img src="https://via.placeholder.com/30" style="
                            width: 30px;
                            height: 30px;
                            border-radius: 50%;
                            background: linear-gradient(135deg, #06b6d4, #22d3ee);
                        ">
                        <span style="color: #ccc; font-size: 14px;">Emma L.</span>
                    </div>
                    <div style="
                        margin-top: 10px;
                        color: #666;
                        font-size: 12px;
                        background: #222;
                        padding: 5px 10px;
                        border-radius: 5px;
                        display: inline-block;
                    ">Education</div>
                </div>
            </div>
            
            <!-- Stream 6 -->
            <div class="live-stream-card" style="
                background: #111;
                border-radius: 15px;
                overflow: hidden;
                cursor: pointer;
                transition: transform 0.2s;
            " onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'">
                <div style="
                    position: relative;
                    height: 200px;
                    background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                ">
                    <div style="font-size: 60px;">🎨</div>
                    <div style="
                        position: absolute;
                        top: 10px;
                        left: 10px;
                        background: #ff0040;
                        color: white;
                        padding: 5px 10px;
                        border-radius: 5px;
                        font-size: 12px;
                        font-weight: bold;
                        display: flex;
                        align-items: center;
                        gap: 5px;
                    ">
                        <span style="width: 6px; height: 6px; background: white; border-radius: 50%;"></span>
                        LIVE
                    </div>
                    <div style="
                        position: absolute;
                        top: 10px;
                        right: 10px;
                        background: rgba(0,0,0,0.7);
                        color: white;
                        padding: 5px 10px;
                        border-radius: 5px;
                        font-size: 12px;
                    ">312 viewers</div>
                </div>
                <div style="padding: 15px;">
                    <h3 style="color: white; margin: 0 0 10px 0; font-size: 18px;">
                        Digital art creation 🎨
                    </h3>
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <img src="https://via.placeholder.com/30" style="
                            width: 30px;
                            height: 30px;
                            border-radius: 50%;
                            background: linear-gradient(135deg, #ec4899, #f472b6);
                        ">
                        <span style="color: #ccc; font-size: 14px;">Maya C.</span>
                    </div>
                    <div style="
                        margin-top: 10px;
                        color: #666;
                        font-size: 12px;
                        background: #222;
                        padding: 5px 10px;
                        border-radius: 5px;
                        display: inline-block;
                    ">Art</div>
                </div>
            </div>
        </div>
    `;
    
    // Update sidebar active state
    document.querySelectorAll('.sidebar-item').forEach(item => {
        item.classList.remove('active');
    });
    const liveBtn = document.getElementById('sidebarLive');
    if (liveBtn) {
        liveBtn.classList.add('active');
    }
};

// Override showPage for live
const originalShowPageLive = window.showPage;
window.showPage = function(page) {
    if (page === 'live') {
        showLivePageComplete();
    } else if (page === 'viberooms') {
        if (window.showVibeRoomsComplete) {
            window.showVibeRoomsComplete();
        }
    } else if (originalShowPageLive) {
        originalShowPageLive(page);
    }
};

console.log('✅ Live Streaming page complete');