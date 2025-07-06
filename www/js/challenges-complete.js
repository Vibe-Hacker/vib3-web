// Complete VIB3 Challenges Page - Exact replica
console.log('🏆 Loading VIB3 Challenges page...');

window.showChallengesComplete = function() {
    // Hide everything else
    document.querySelectorAll('.page, .content-page, [id$="Page"], .video-feed').forEach(el => {
        el.style.display = 'none';
    });
    
    // Create or get challenges page container
    let challengesPage = document.getElementById('challengesPage');
    if (!challengesPage) {
        challengesPage = document.createElement('div');
        challengesPage.id = 'challengesPage';
        document.body.appendChild(challengesPage);
    }
    
    challengesPage.style.cssText = `
        position: fixed;
        top: 0;
        left: 200px;
        right: 0;
        bottom: 0;
        background: #000;
        overflow-y: auto;
        display: block;
    `;
    
    challengesPage.innerHTML = `
        <!-- Gradient Header -->
        <div style="
            background: linear-gradient(135deg, #00d4ff 0%, #ff0080 100%);
            padding: 30px;
            text-align: center;
            color: white;
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 0;
        ">
            Welcome to VIB3 - Where Creativity Vibes
        </div>
        
        <!-- Challenges Header -->
        <div style="
            background: linear-gradient(135deg, #ff6b6b 0%, #ffa500 100%);
            padding: 40px;
            text-align: center;
            color: white;
            position: relative;
        ">
            <h1 style="
                font-size: 48px;
                margin: 0 0 10px 0;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 15px;
            ">
                🏆 VIB3 Challenges
            </h1>
            <p style="font-size: 18px; opacity: 0.9; margin: 0 0 30px 0;">
                Join trending challenges and go viral
            </p>
            <div style="display: flex; gap: 20px; justify-content: center;">
                <button style="
                    background: rgba(255,255,255,0.2);
                    backdrop-filter: blur(10px);
                    color: white;
                    border: 2px solid rgba(255,255,255,0.3);
                    padding: 12px 30px;
                    border-radius: 25px;
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                ">
                    ➕ Create Challenge
                </button>
                <button style="
                    background: rgba(255,255,255,0.2);
                    backdrop-filter: blur(10px);
                    color: white;
                    border: 2px solid rgba(255,255,255,0.3);
                    padding: 12px 30px;
                    border-radius: 25px;
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                ">
                    🎵 My Participations
                </button>
            </div>
        </div>
        
        <!-- Tabs -->
        <div style="
            display: flex;
            gap: 20px;
            padding: 20px 40px;
            background: #0a0a0a;
            border-bottom: 1px solid #222;
            align-items: center;
        ">
            <div style="
                background: linear-gradient(135deg, #06b6d4 0%, #ec4899 100%);
                color: white;
                padding: 8px 20px;
                border-radius: 20px;
                font-weight: 600;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 8px;
            ">
                🔥 Trending
            </div>
            <div style="
                color: #888;
                padding: 8px 20px;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 8px;
            ">
                ✨ New
            </div>
            <div style="
                color: #888;
                padding: 8px 20px;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 8px;
            ">
                ⏰ Ending Soon
            </div>
            <div style="
                color: #888;
                padding: 8px 20px;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 8px;
            ">
                ✅ Completed
            </div>
        </div>
        
        <!-- Challenge Cards -->
        <div style="
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 30px;
            padding: 40px;
        ">
            <!-- VibeDanceChallenge -->
            <div style="
                background: #111;
                border-radius: 20px;
                overflow: hidden;
                position: relative;
            ">
                <div style="
                    background: linear-gradient(135deg, #4a4a4a 0%, #2a2a2a 100%);
                    height: 200px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                ">
                    <div style="font-size: 80px;">💃</div>
                    <div style="
                        position: absolute;
                        top: 15px;
                        right: 15px;
                        background: #ff0040;
                        color: white;
                        padding: 5px 15px;
                        border-radius: 15px;
                        font-size: 12px;
                        font-weight: 600;
                    ">Trending</div>
                </div>
                <div style="padding: 25px;">
                    <h3 style="color: white; font-size: 24px; margin: 0 0 10px 0;">
                        #VibeDanceChallenge
                    </h3>
                    <p style="color: #999; margin: 0 0 20px 0;">
                        Show us your best dance moves to this viral beat!
                    </p>
                    <div style="display: flex; gap: 20px; margin-bottom: 20px;">
                        <div>
                            <div style="color: #666; font-size: 12px;">Dance</div>
                        </div>
                        <div>
                            <div style="color: #666; font-size: 12px;">Easy</div>
                        </div>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
                        <div>
                            <div style="color: #ff6b6b; font-size: 28px; font-weight: bold;">15,420</div>
                            <div style="color: #666; font-size: 12px;">Participants</div>
                        </div>
                        <div style="text-align: right;">
                            <div style="color: #ffa500; font-size: 28px; font-weight: bold;">8,903</div>
                            <div style="color: #666; font-size: 12px;">Videos</div>
                        </div>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                        <div>
                            <div style="color: #666; font-size: 12px;">Prize:</div>
                            <div style="color: white;">VIB3 Coins + Featured</div>
                        </div>
                        <div style="text-align: right;">
                            <div style="color: #666; font-size: 12px;">Time Left:</div>
                            <div style="color: white;">5 days</div>
                        </div>
                    </div>
                    <button style="
                        width: 100%;
                        background: linear-gradient(135deg, #ff0080 0%, #ff6b6b 100%);
                        color: white;
                        border: none;
                        padding: 15px;
                        border-radius: 12px;
                        font-size: 16px;
                        font-weight: 600;
                        cursor: pointer;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 10px;
                    ">
                        🚀 Join Challenge
                    </button>
                    <div style="
                        text-align: center;
                        color: #666;
                        font-size: 12px;
                        margin-top: 10px;
                    ">Created by VibeDanceKing</div>
                </div>
            </div>
            
            <!-- CreativeArtChallenge -->
            <div style="
                background: #111;
                border-radius: 20px;
                overflow: hidden;
                position: relative;
            ">
                <div style="
                    background: linear-gradient(135deg, #4a4a4a 0%, #2a2a2a 100%);
                    height: 200px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                ">
                    <div style="font-size: 80px;">🎨</div>
                    <div style="
                        position: absolute;
                        top: 15px;
                        right: 15px;
                        background: #ff0040;
                        color: white;
                        padding: 5px 15px;
                        border-radius: 15px;
                        font-size: 12px;
                        font-weight: 600;
                    ">Trending</div>
                </div>
                <div style="padding: 25px;">
                    <h3 style="color: white; font-size: 24px; margin: 0 0 10px 0;">
                        #CreativeArtChallenge
                    </h3>
                    <p style="color: #999; margin: 0 0 20px 0;">
                        Transform everyday objects into art in 60 seconds
                    </p>
                    <div style="display: flex; gap: 20px; margin-bottom: 20px;">
                        <div>
                            <div style="color: #666; font-size: 12px;">Art</div>
                        </div>
                        <div>
                            <div style="color: #666; font-size: 12px;">Medium</div>
                        </div>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
                        <div>
                            <div style="color: #ff6b6b; font-size: 28px; font-weight: bold;">8,750</div>
                            <div style="color: #666; font-size: 12px;">Participants</div>
                        </div>
                        <div style="text-align: right;">
                            <div style="color: #ffa500; font-size: 28px; font-weight: bold;">5,200</div>
                            <div style="color: #666; font-size: 12px;">Videos</div>
                        </div>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                        <div>
                            <div style="color: #666; font-size: 12px;">Prize:</div>
                            <div style="color: white;">1000 VIB3 Coins</div>
                        </div>
                        <div style="text-align: right;">
                            <div style="color: #666; font-size: 12px;">Time Left:</div>
                            <div style="color: white;">12 days</div>
                        </div>
                    </div>
                    <button style="
                        width: 100%;
                        background: linear-gradient(135deg, #ff0080 0%, #ff6b6b 100%);
                        color: white;
                        border: none;
                        padding: 15px;
                        border-radius: 12px;
                        font-size: 16px;
                        font-weight: 600;
                        cursor: pointer;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 10px;
                    ">
                        🚀 Join Challenge
                    </button>
                    <div style="
                        text-align: center;
                        color: #666;
                        font-size: 12px;
                        margin-top: 10px;
                    ">Created by ArtMasterVibe</div>
                </div>
            </div>
            
            <!-- QuickCookChallenge -->
            <div style="
                background: #111;
                border-radius: 20px;
                overflow: hidden;
                position: relative;
            ">
                <div style="
                    background: linear-gradient(135deg, #4a4a4a 0%, #2a2a2a 100%);
                    height: 200px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                ">
                    <div style="font-size: 80px;">👨‍🍳</div>
                    <div style="
                        position: absolute;
                        top: 15px;
                        right: 15px;
                        background: #ff0040;
                        color: white;
                        padding: 5px 15px;
                        border-radius: 15px;
                        font-size: 12px;
                        font-weight: 600;
                    ">Trending</div>
                </div>
                <div style="padding: 25px;">
                    <h3 style="color: white; font-size: 24px; margin: 0 0 10px 0;">
                        #QuickCookChallenge
                    </h3>
                    <p style="color: #999; margin: 0 0 20px 0;">
                        Create a delicious meal in under 3 minutes!
                    </p>
                    <div style="display: flex; gap: 20px; margin-bottom: 20px;">
                        <div>
                            <div style="color: #666; font-size: 12px;">Lifestyle</div>
                        </div>
                        <div>
                            <div style="color: #666; font-size: 12px;">Hard</div>
                        </div>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
                        <div>
                            <div style="color: #ff6b6b; font-size: 28px; font-weight: bold;">12,300</div>
                            <div style="color: #666; font-size: 12px;">Participants</div>
                        </div>
                        <div style="text-align: right;">
                            <div style="color: #ffa500; font-size: 28px; font-weight: bold;">7,800</div>
                            <div style="color: #666; font-size: 12px;">Videos</div>
                        </div>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                        <div>
                            <div style="color: #666; font-size: 12px;">Prize:</div>
                            <div style="color: white;">Featured + Collaboration</div>
                        </div>
                        <div style="text-align: right;">
                            <div style="color: #666; font-size: 12px;">Time Left:</div>
                            <div style="color: white;">8 days</div>
                        </div>
                    </div>
                    <button style="
                        width: 100%;
                        background: linear-gradient(135deg, #ff0080 0%, #ff6b6b 100%);
                        color: white;
                        border: none;
                        padding: 15px;
                        border-radius: 12px;
                        font-size: 16px;
                        font-weight: 600;
                        cursor: pointer;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 10px;
                    ">
                        🚀 Join Challenge
                    </button>
                    <div style="
                        text-align: center;
                        color: #666;
                        font-size: 12px;
                        margin-top: 10px;
                    ">Created by ChefVibes</div>
                </div>
            </div>
        </div>
    `;
    
    // Update sidebar active state
    document.querySelectorAll('.sidebar-item').forEach(item => {
        item.classList.remove('active');
    });
    const challengesBtn = document.getElementById('sidebarChallenges');
    if (challengesBtn) {
        challengesBtn.classList.add('active');
    }
};

// Override showPage for challenges
const originalShowPageChallenges = window.showPage;
window.showPage = function(page) {
    if (page === 'challenges') {
        showChallengesComplete();
    } else if (originalShowPageChallenges) {
        originalShowPageChallenges(page);
    }
};

console.log('✅ VIB3 Challenges page complete');