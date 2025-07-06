// Complete sidebar button handlers
console.log('🎯 Loading sidebar handlers...');

// Collaborate page
window.showCollaboratePage = function() {
    // Hide everything else
    document.querySelectorAll('.page, .content-page, [id$="Page"], .video-feed').forEach(el => {
        el.style.display = 'none';
    });
    
    // Create or get collaborate page
    let collaboratePage = document.getElementById('collaboratePage');
    if (!collaboratePage) {
        collaboratePage = document.createElement('div');
        collaboratePage.id = 'collaboratePage';
        document.body.appendChild(collaboratePage);
    }
    
    collaboratePage.style.cssText = `
        position: fixed;
        top: 0;
        left: 200px;
        right: 0;
        bottom: 0;
        background: #000;
        overflow-y: auto;
        display: block;
        padding: 40px;
    `;
    
    collaboratePage.innerHTML = `
        <h1 style="color: white; font-size: 36px; margin: 0 0 30px 0;">
            🤝 VIB3 Collaborate
        </h1>
        <div style="
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
        ">
            <div style="
                background: #111;
                padding: 30px;
                border-radius: 15px;
                text-align: center;
            ">
                <div style="font-size: 48px; margin-bottom: 20px;">🎬</div>
                <h3 style="color: white; margin: 0 0 10px 0;">Duet Videos</h3>
                <p style="color: #888;">Create split-screen collaborations</p>
                <button style="
                    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
                    color: white;
                    border: none;
                    padding: 10px 30px;
                    border-radius: 20px;
                    margin-top: 20px;
                    cursor: pointer;
                ">Start Duet</button>
            </div>
            
            <div style="
                background: #111;
                padding: 30px;
                border-radius: 15px;
                text-align: center;
            ">
                <div style="font-size: 48px; margin-bottom: 20px;">🎤</div>
                <h3 style="color: white; margin: 0 0 10px 0;">Voice Overs</h3>
                <p style="color: #888;">Add your voice to any video</p>
                <button style="
                    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
                    color: white;
                    border: none;
                    padding: 10px 30px;
                    border-radius: 20px;
                    margin-top: 20px;
                    cursor: pointer;
                ">Record Voice</button>
            </div>
            
            <div style="
                background: #111;
                padding: 30px;
                border-radius: 15px;
                text-align: center;
            ">
                <div style="font-size: 48px; margin-bottom: 20px;">👥</div>
                <h3 style="color: white; margin: 0 0 10px 0;">Group Projects</h3>
                <p style="color: #888;">Create content with multiple creators</p>
                <button style="
                    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
                    color: white;
                    border: none;
                    padding: 10px 30px;
                    border-radius: 20px;
                    margin-top: 20px;
                    cursor: pointer;
                ">Start Project</button>
            </div>
        </div>
    `;
    
    // Update sidebar
    document.querySelectorAll('.sidebar-item').forEach(item => {
        item.classList.remove('active');
    });
    const collaborateBtn = document.getElementById('sidebarCollaboration');
    if (collaborateBtn) {
        collaborateBtn.classList.add('active');
    }
};

// VIB3 Coins page
window.showCoinsPage = function() {
    // Hide everything else
    document.querySelectorAll('.page, .content-page, [id$="Page"], .video-feed').forEach(el => {
        el.style.display = 'none';
    });
    
    // Create or get coins page
    let coinsPage = document.getElementById('coinsPage');
    if (!coinsPage) {
        coinsPage = document.createElement('div');
        coinsPage.id = 'coinsPage';
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
        <!-- Gradient Header -->
        <div style="
            background: linear-gradient(135deg, #eab308 0%, #f59e0b 100%);
            padding: 40px;
            text-align: center;
            color: white;
        ">
            <h1 style="font-size: 48px; margin: 0 0 10px 0;">🪙 VIB3 Coins</h1>
            <p style="font-size: 18px; opacity: 0.9;">Your creative currency</p>
            
            <div style="
                background: rgba(255,255,255,0.2);
                backdrop-filter: blur(10px);
                border-radius: 20px;
                padding: 30px;
                margin: 30px auto 0;
                max-width: 400px;
            ">
                <div style="font-size: 48px; font-weight: bold;">12,450</div>
                <div style="font-size: 16px; opacity: 0.9;">Current Balance</div>
            </div>
        </div>
        
        <!-- Actions -->
        <div style="
            display: flex;
            gap: 20px;
            padding: 30px 40px;
            justify-content: center;
        ">
            <button style="
                background: #eab308;
                color: black;
                border: none;
                padding: 15px 40px;
                border-radius: 25px;
                font-size: 16px;
                font-weight: 600;
                cursor: pointer;
            ">Buy Coins</button>
            
            <button style="
                background: transparent;
                color: #eab308;
                border: 2px solid #eab308;
                padding: 15px 40px;
                border-radius: 25px;
                font-size: 16px;
                font-weight: 600;
                cursor: pointer;
            ">Send Coins</button>
            
            <button style="
                background: transparent;
                color: #eab308;
                border: 2px solid #eab308;
                padding: 15px 40px;
                border-radius: 25px;
                font-size: 16px;
                font-weight: 600;
                cursor: pointer;
            ">Withdraw</button>
        </div>
        
        <!-- Transaction History -->
        <div style="padding: 0 40px;">
            <h2 style="color: white; margin-bottom: 20px;">Recent Transactions</h2>
            <div style="background: #111; border-radius: 15px; padding: 20px;">
                <div style="
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 15px 0;
                    border-bottom: 1px solid #222;
                ">
                    <div>
                        <div style="color: white; font-weight: 600;">Received from @creator123</div>
                        <div style="color: #666; font-size: 12px;">2 hours ago</div>
                    </div>
                    <div style="color: #10b981; font-weight: 600;">+500</div>
                </div>
                
                <div style="
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 15px 0;
                    border-bottom: 1px solid #222;
                ">
                    <div>
                        <div style="color: white; font-weight: 600;">Challenge Prize</div>
                        <div style="color: #666; font-size: 12px;">Yesterday</div>
                    </div>
                    <div style="color: #10b981; font-weight: 600;">+1,000</div>
                </div>
                
                <div style="
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 15px 0;
                ">
                    <div>
                        <div style="color: white; font-weight: 600;">Sent to @friend456</div>
                        <div style="color: #666; font-size: 12px;">3 days ago</div>
                    </div>
                    <div style="color: #ef4444; font-weight: 600;">-200</div>
                </div>
            </div>
        </div>
    `;
    
    // Update sidebar
    document.querySelectorAll('.sidebar-item').forEach(item => {
        item.classList.remove('active');
    });
    const coinsBtn = document.getElementById('sidebarCoins');
    if (coinsBtn) {
        coinsBtn.classList.add('active');
    }
};

// Activity page - now handled by activity-page-complete.js
window.showActivityPage = function() {
    if (window.showActivityComplete) {
        window.showActivityComplete();
    } else {
        // Fallback
        window.showPage('activity');
    }
};

// Messages page - already exists but let's make sure
window.showMessagesPage = function() {
    if (window.showMessages) {
        window.showMessages();
    } else {
        // Fallback implementation
        document.querySelectorAll('.page, .content-page, [id$="Page"], .video-feed').forEach(el => {
            el.style.display = 'none';
        });
        
        const messagesPage = document.getElementById('messagesPage');
        if (messagesPage) {
            messagesPage.style.display = 'block';
        }
        
        // Update sidebar
        document.querySelectorAll('.sidebar-item').forEach(item => {
            item.classList.remove('active');
        });
        const messagesBtn = document.getElementById('sidebarMessages');
        if (messagesBtn) {
            messagesBtn.classList.add('active');
        }
    }
};

// Profile page
window.showProfilePage = function() {
    if (window.showProfile) {
        window.showProfile();
    } else {
        // Fallback
        window.showPage('profile');
    }
};

// Override showPage to handle all cases
const originalShowPageHandler = window.showPage;
window.showPage = function(page) {
    switch(page) {
        case 'collaboration':
        case 'collaborate':
            showCollaboratePage();
            break;
        case 'coins':
        case 'vib3coins':
            showCoinsPage();
            break;
        case 'activity':
            showActivityPage();
            break;
        case 'messages':
            showMessagesPage();
            break;
        case 'profile':
            showProfilePage();
            break;
        default:
            if (originalShowPageHandler) {
                originalShowPageHandler(page);
            }
    }
};

console.log('✅ Sidebar handlers loaded');