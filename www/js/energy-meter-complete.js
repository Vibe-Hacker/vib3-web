// Complete VIB3 Energy Meter - Real-time updates with spinning animation
console.log('⚡ Loading VIB3 Energy Meter...');

let energyInterval = null;
let energyData = {
    score: 8.8,
    liveUsers: 1153,
    vibeScore: 9.3
};

window.showEnergyMeterComplete = function() {
    // Create modal overlay
    const overlay = document.createElement('div');
    overlay.id = 'energyMeterOverlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(10px);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.3s ease-out;
    `;
    
    // Create modal content
    const modal = document.createElement('div');
    modal.style.cssText = `
        background: #1a1a1a;
        border-radius: 25px;
        padding: 40px;
        width: 90%;
        max-width: 500px;
        position: relative;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        animation: slideUp 0.3s ease-out;
    `;
    
    modal.innerHTML = `
        <!-- Close button -->
        <button onclick="closeEnergyMeter()" style="
            position: absolute;
            top: 20px;
            right: 20px;
            background: transparent;
            border: none;
            color: #666;
            font-size: 24px;
            cursor: pointer;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: background 0.2s;
        " onmouseover="this.style.background='#333'" onmouseout="this.style.background='transparent'">
            ✕
        </button>
        
        <!-- Title -->
        <h2 style="
            color: #00d4ff;
            font-size: 32px;
            text-align: center;
            margin: 0 0 20px 0;
            font-weight: 600;
        ">Energy Meter</h2>
        
        <!-- Subtitle -->
        <p style="
            color: #888;
            text-align: center;
            margin: 0 0 40px 0;
            font-size: 16px;
        ">Real-time platform engagement energy</p>
        
        <!-- Energy Circle Container -->
        <div style="
            display: flex;
            justify-content: center;
            margin-bottom: 40px;
            position: relative;
            height: 250px;
        ">
            <!-- Animated Circle -->
            <div style="
                width: 200px;
                height: 200px;
                position: relative;
            ">
                <!-- Gradient ring -->
                <svg width="200" height="200" style="
                    position: absolute;
                    top: 0;
                    left: 0;
                    transform: rotate(-90deg);
                    animation: spin 3s linear infinite;
                ">
                    <defs>
                        <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style="stop-color:#ff6b6b;stop-opacity:1" />
                            <stop offset="50%" style="stop-color:#ffa500;stop-opacity:1" />
                            <stop offset="100%" style="stop-color:#ff6b6b;stop-opacity:1" />
                        </linearGradient>
                    </defs>
                    <circle cx="100" cy="100" r="90" 
                        stroke="url(#energyGradient)" 
                        stroke-width="20" 
                        fill="none"
                        stroke-linecap="round"
                        stroke-dasharray="400 600"
                    />
                </svg>
                
                <!-- Inner circle -->
                <div style="
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 160px;
                    height: 160px;
                    background: #000;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                ">
                    <div id="energyScore" style="
                        font-size: 48px;
                        color: white;
                        font-weight: bold;
                        display: flex;
                        align-items: baseline;
                    ">
                        ${energyData.score}
                    </div>
                    <div style="
                        color: #666;
                        font-size: 14px;
                        text-transform: uppercase;
                        letter-spacing: 2px;
                        transform: rotate(-5deg);
                        margin-top: 5px;
                    ">Energy</div>
                </div>
            </div>
        </div>
        
        <!-- Stats Grid -->
        <div style="
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        ">
            <!-- Live Users -->
            <div style="
                background: #222;
                border-radius: 15px;
                padding: 25px;
                text-align: center;
            ">
                <div id="liveUsersCount" style="
                    color: #00d4ff;
                    font-size: 32px;
                    font-weight: bold;
                    margin-bottom: 10px;
                ">${energyData.liveUsers.toLocaleString()}</div>
                <div style="
                    color: #666;
                    font-size: 14px;
                ">Live Users</div>
            </div>
            
            <!-- Vibe Score -->
            <div style="
                background: #222;
                border-radius: 15px;
                padding: 25px;
                text-align: center;
            ">
                <div id="vibeScoreCount" style="
                    color: #ff0080;
                    font-size: 32px;
                    font-weight: bold;
                    margin-bottom: 10px;
                ">${energyData.vibeScore}</div>
                <div style="
                    color: #666;
                    font-size: 14px;
                ">Vibe Score</div>
            </div>
        </div>
    `;
    
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    
    // Add animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes slideUp {
            from { 
                transform: translateY(20px);
                opacity: 0;
            }
            to { 
                transform: translateY(0);
                opacity: 1;
            }
        }
        
        @keyframes spin {
            from { transform: rotate(-90deg); }
            to { transform: rotate(270deg); }
        }
    `;
    document.head.appendChild(style);
    
    // Start real-time updates
    startEnergyUpdates();
    
    // Close on overlay click
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            closeEnergyMeter();
        }
    });
};

// Start real-time updates
function startEnergyUpdates() {
    // Update every 1-2 seconds
    energyInterval = setInterval(() => {
        // Update energy score
        energyData.score = (Math.random() * 2 + 7.5).toFixed(1); // 7.5 - 9.5
        document.getElementById('energyScore').textContent = energyData.score;
        
        // Update live users (small variations)
        energyData.liveUsers += Math.floor(Math.random() * 20) - 10;
        energyData.liveUsers = Math.max(1000, energyData.liveUsers);
        document.getElementById('liveUsersCount').textContent = energyData.liveUsers.toLocaleString();
        
        // Update vibe score
        energyData.vibeScore = (Math.random() * 1 + 8.8).toFixed(1); // 8.8 - 9.8
        document.getElementById('vibeScoreCount').textContent = energyData.vibeScore;
        
        // Add pulse effect on update
        const scoreElement = document.getElementById('energyScore');
        scoreElement.style.transform = 'scale(1.1)';
        setTimeout(() => {
            scoreElement.style.transform = 'scale(1)';
        }, 200);
    }, 1500);
}

// Close energy meter
window.closeEnergyMeter = function() {
    // Stop updates
    if (energyInterval) {
        clearInterval(energyInterval);
        energyInterval = null;
    }
    
    // Remove overlay
    const overlay = document.getElementById('energyMeterOverlay');
    if (overlay) {
        overlay.style.opacity = '0';
        setTimeout(() => overlay.remove(), 300);
    }
};


console.log('✅ VIB3 Energy Meter loaded');