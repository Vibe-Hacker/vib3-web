// Complete VIB3 Coins Page - Exact replica from Railway
console.log('🪙 Loading VIB3 Coins page...');

window.showVIB3CoinsComplete = function() {
    // Hide everything else
    document.querySelectorAll('.page, .content-page, [id$="Page"], .video-feed').forEach(el => {
        el.style.display = 'none';
    });
    
    // Create or get coins page container
    let coinsPage = document.getElementById('coinsPageComplete');
    if (!coinsPage) {
        coinsPage = document.createElement('div');
        coinsPage.id = 'coinsPageComplete';
        document.body.appendChild(coinsPage);
    }
    
    coinsPage.style.cssText = `
        position: fixed;
        top: 0;
        left: 200px;
        right: 0;
        bottom: 0;
        background: #000;
        overflow-y: auto;
        display: block;
    `;
    
    coinsPage.innerHTML = `
        <!-- Yellow Main Section -->
        <div style="
            background: linear-gradient(135deg, #ffc107 0%, #ffb300 100%);
            padding: 50px 40px 60px;
            text-align: center;
            color: white;
            position: relative;
            overflow: hidden;
        ">
            <!-- Animated scrolling text -->
            <div style="
                position: absolute;
                top: 20px;
                left: 0;
                width: 200%;
                color: rgba(255,255,255,0.3);
                font-size: 14px;
                white-space: nowrap;
                animation: scrollText 20s linear infinite;
            ">
                🪙 animation, float to vibe in our infinite. ✨ 🪙 animation, float to vibe in our infinite. ✨ 🪙 animation, float to vibe in our infinite. ✨
            </div>
            
            <style>
                @keyframes scrollText {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            </style>
            
            <div style="font-size: 80px; margin-bottom: 20px;">🪙</div>
            <h1 style="font-size: 72px; margin: 0 0 20px 0; font-weight: 700;">VIB3 Coins</h1>
            <p style="font-size: 22px; opacity: 0.9; margin-bottom: 40px;">Your virtual currency for the VIB3 ecosystem</p>
            
            <!-- Balance cards -->
            <div style="
                display: flex;
                gap: 40px;
                justify-content: center;
                margin: 40px 0 50px;
            ">
                <div style="
                    background: rgba(255,255,255,0.3);
                    backdrop-filter: blur(10px);
                    border-radius: 25px;
                    padding: 35px 60px;
                    box-shadow: 0 8px 32px rgba(0,0,0,0.1);
                ">
                    <div style="font-size: 56px; font-weight: bold;">3,247</div>
                    <div style="font-size: 18px; opacity: 0.9;">Your VIB3 Coins</div>
                </div>
                
                <div style="
                    background: rgba(255,255,255,0.3);
                    backdrop-filter: blur(10px);
                    border-radius: 25px;
                    padding: 35px 60px;
                    box-shadow: 0 8px 32px rgba(0,0,0,0.1);
                ">
                    <div style="font-size: 56px; font-weight: bold;">$32.47</div>
                    <div style="font-size: 18px; opacity: 0.9;">USD Value</div>
                </div>
            </div>
            
            <!-- Action buttons -->
            <div style="display: flex; gap: 25px; justify-content: center;">
                <button style="
                    background: white;
                    color: #ff8c00;
                    border: none;
                    padding: 18px 45px;
                    border-radius: 35px;
                    font-size: 18px;
                    font-weight: 600;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
                    transition: transform 0.2s;
                " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                    🛒 Buy Coins
                </button>
                
                <button style="
                    background: rgba(255,255,255,0.2);
                    backdrop-filter: blur(10px);
                    color: white;
                    border: 2px solid white;
                    padding: 18px 45px;
                    border-radius: 35px;
                    font-size: 18px;
                    font-weight: 600;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    transition: transform 0.2s;
                " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                    💸 Send Coins
                </button>
                
                <button style="
                    background: rgba(255,255,255,0.2);
                    backdrop-filter: blur(10px);
                    color: white;
                    border: 2px solid white;
                    padding: 18px 45px;
                    border-radius: 35px;
                    font-size: 18px;
                    font-weight: 600;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    transition: transform 0.2s;
                " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                    💰 Earn Coins
                </button>
            </div>
        </div>
        
        <!-- Tabs -->
        <div style="
            display: flex;
            gap: 30px;
            padding: 20px 40px;
            background: #0a0a0a;
            border-bottom: 1px solid #222;
        ">
            <button style="
                background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
                color: white;
                border: none;
                padding: 12px 28px;
                border-radius: 25px;
                font-size: 16px;
                font-weight: 600;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 8px;
            ">
                📊 Overview
            </button>
            
            <button style="
                background: transparent;
                color: #888;
                border: 1px solid #333;
                padding: 12px 28px;
                border-radius: 25px;
                font-size: 16px;
                cursor: pointer;
            ">
                💸 Transactions
            </button>
            
            <button style="
                background: transparent;
                color: #888;
                border: 1px solid #333;
                padding: 12px 28px;
                border-radius: 25px;
                font-size: 16px;
                cursor: pointer;
            ">
                🎁 Rewards
            </button>
            
            <button style="
                background: transparent;
                color: #888;
                border: 1px solid #333;
                padding: 12px 28px;
                border-radius: 25px;
                font-size: 16px;
                cursor: pointer;
            ">
                💡 Creator Tools
            </button>
        </div>
        
        <!-- Stats Cards -->
        <div style="
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
            padding: 40px;
        ">
            <!-- Current Balance Card -->
            <div style="
                background: linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%);
                border-radius: 25px;
                padding: 35px;
                color: white;
                position: relative;
                overflow: hidden;
            ">
                <div style="
                    position: absolute;
                    top: -20px;
                    right: -20px;
                    width: 100px;
                    height: 100px;
                    background: rgba(255,255,255,0.1);
                    border-radius: 50%;
                "></div>
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 25px;">
                    <span style="font-size: 28px;">💰</span>
                    <span style="font-size: 20px; font-weight: 600;">Current Balance</span>
                </div>
                <div style="font-size: 52px; font-weight: bold; margin-bottom: 10px;">3,247 VIB3</div>
                <div style="font-size: 16px; opacity: 0.8;">≈ $32.47 USD</div>
            </div>
            
            <!-- Total Earned Card -->
            <div style="
                background: linear-gradient(135deg, #ec4899 0%, #f472b6 100%);
                border-radius: 25px;
                padding: 35px;
                color: white;
                position: relative;
                overflow: hidden;
            ">
                <div style="
                    position: absolute;
                    top: -20px;
                    right: -20px;
                    width: 100px;
                    height: 100px;
                    background: rgba(255,255,255,0.1);
                    border-radius: 50%;
                "></div>
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 25px;">
                    <span style="font-size: 28px;">📈</span>
                    <span style="font-size: 20px; font-weight: 600;">Total Earned</span>
                </div>
                <div style="font-size: 52px; font-weight: bold; margin-bottom: 10px;">18,932 VIB3</div>
                <div style="font-size: 16px; opacity: 0.8;">+1,247 this month</div>
            </div>
            
            <!-- Creator Rank Card -->
            <div style="
                background: linear-gradient(135deg, #06b6d4 0%, #22d3ee 100%);
                border-radius: 25px;
                padding: 35px;
                color: white;
                position: relative;
                overflow: hidden;
            ">
                <div style="
                    position: absolute;
                    top: -20px;
                    right: -20px;
                    width: 100px;
                    height: 100px;
                    background: rgba(255,255,255,0.1);
                    border-radius: 50%;
                "></div>
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 25px;">
                    <span style="font-size: 28px;">🏆</span>
                    <span style="font-size: 20px; font-weight: 600;">Creator Rank</span>
                </div>
                <div style="font-size: 52px; font-weight: bold; margin-bottom: 10px;">Gold</div>
                <div style="font-size: 16px; opacity: 0.8;">Top 15% of creators</div>
            </div>
        </div>
        
        <!-- Recent Activity -->
        <div style="padding: 0 40px 40px;">
            <h2 style="color: white; margin-bottom: 25px; font-size: 24px; display: flex; align-items: center; gap: 12px;">
                <span>💎</span> Recent Coin Activity
            </h2>
            <div style="background: #1a1a1a; border-radius: 20px; padding: 5px;">
                <!-- Challenge Reward -->
                <div style="
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    padding: 20px 25px;
                    background: #222;
                    margin: 3px;
                    border-radius: 15px;
                ">
                    <div style="
                        width: 56px;
                        height: 56px;
                        background: linear-gradient(135deg, #06b6d4, #3b82f6);
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 24px;
                    ">🎯</div>
                    <div style="flex: 1;">
                        <div style="color: white; font-weight: 600; font-size: 18px;">Challenge Reward</div>
                        <div style="color: #666; font-size: 14px;">2 hours ago</div>
                    </div>
                    <div style="color: #10b981; font-weight: 700; font-size: 22px;">+500 VIB3</div>
                </div>
                
                <!-- Video Likes Bonus -->
                <div style="
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    padding: 20px 25px;
                    background: #222;
                    margin: 3px;
                    border-radius: 15px;
                ">
                    <div style="
                        width: 56px;
                        height: 56px;
                        background: linear-gradient(135deg, #ec4899, #f472b6);
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 24px;
                    ">❤️</div>
                    <div style="flex: 1;">
                        <div style="color: white; font-weight: 600; font-size: 18px;">Video Likes Bonus</div>
                        <div style="color: #666; font-size: 14px;">5 hours ago</div>
                    </div>
                    <div style="color: #10b981; font-weight: 700; font-size: 22px;">+125 VIB3</div>
                </div>
                
                <!-- Sent to @musiclover -->
                <div style="
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    padding: 20px 25px;
                    background: #222;
                    margin: 3px;
                    border-radius: 15px;
                ">
                    <div style="
                        width: 56px;
                        height: 56px;
                        background: linear-gradient(135deg, #8b5cf6, #a78bfa);
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 24px;
                    ">➡️</div>
                    <div style="flex: 1;">
                        <div style="color: white; font-weight: 600; font-size: 18px;">Sent to @musiclover</div>
                        <div style="color: #666; font-size: 14px;">1 day ago</div>
                    </div>
                    <div style="color: #ef4444; font-weight: 700; font-size: 22px;">-200 VIB3</div>
                </div>
            </div>
        </div>
        
        <!-- Earn More Coins Section -->
        <div style="padding: 0 40px 60px;">
            <h2 style="color: white; margin-bottom: 25px; font-size: 24px; display: flex; align-items: center; gap: 12px;">
                <span>💰</span> Earn More Coins
            </h2>
            <div style="
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 25px;
            ">
                <!-- Daily Quests -->
                <div style="
                    background: #222;
                    border-radius: 20px;
                    padding: 35px;
                    text-align: center;
                    cursor: pointer;
                    transition: transform 0.2s;
                " onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'">
                    <div style="
                        width: 80px;
                        height: 80px;
                        background: linear-gradient(135deg, #ec4899, #f472b6);
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 40px;
                        margin: 0 auto 20px;
                    ">🎯</div>
                    <h3 style="color: white; font-size: 22px; margin: 0 0 10px 0;">Daily Quests</h3>
                    <p style="color: #888; margin: 0 0 20px 0; font-size: 14px;">Complete daily tasks for coins</p>
                    <div style="color: #10b981; font-size: 18px; font-weight: 600;">+50-300 VIB3</div>
                </div>
                
                <!-- Creator Bonus -->
                <div style="
                    background: #222;
                    border-radius: 20px;
                    padding: 35px;
                    text-align: center;
                    cursor: pointer;
                    transition: transform 0.2s;
                " onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'">
                    <div style="
                        width: 80px;
                        height: 80px;
                        background: linear-gradient(135deg, #8b5cf6, #a78bfa);
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 40px;
                        margin: 0 auto 20px;
                    ">🎁</div>
                    <h3 style="color: white; font-size: 22px; margin: 0 0 10px 0;">Creator Bonus</h3>
                    <p style="color: #888; margin: 0 0 20px 0; font-size: 14px;">Earn from video performance</p>
                    <div style="color: #10b981; font-size: 18px; font-weight: 600;">+100-1000 VIB3</div>
                </div>
                
                <!-- Referral Program -->
                <div style="
                    background: #222;
                    border-radius: 20px;
                    padding: 35px;
                    text-align: center;
                    cursor: pointer;
                    transition: transform 0.2s;
                " onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'">
                    <div style="
                        width: 80px;
                        height: 80px;
                        background: linear-gradient(135deg, #06b6d4, #22d3ee);
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 40px;
                        margin: 0 auto 20px;
                    ">👥</div>
                    <h3 style="color: white; font-size: 22px; margin: 0 0 10px 0;">Referral Program</h3>
                    <p style="color: #888; margin: 0 0 20px 0; font-size: 14px;">Invite friends to VIB3</p>
                    <div style="color: #10b981; font-size: 18px; font-weight: 600;">+500 VIB3</div>
                </div>
            </div>
        </div>
    `;
    
    // Update sidebar active state
    document.querySelectorAll('.sidebar-item').forEach(item => {
        item.classList.remove('active');
    });
    const coinsBtn = document.getElementById('sidebarCoins');
    if (coinsBtn) {
        coinsBtn.classList.add('active');
    }
};


console.log('✅ VIB3 Coins page complete');