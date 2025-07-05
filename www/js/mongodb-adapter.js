// MongoDB Adapter for VIB3
// This replaces Firebase functionality with MongoDB API calls

// API base URL configuration - use same domain for Digital Ocean deployment
const API_BASE_URL = window.API_BASE_URL || (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
    ? 'http://localhost:3000' 
    : '');

console.log('🔌 MongoDB adapter loading, API URL:', API_BASE_URL);

// Store auth token
let authToken = localStorage.getItem('authToken');
let currentUser = null;

// MongoDB API wrapper
window.mongoAPI = {
    // Auth functions
    async login(email, password) {
        try {
            const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            
            const data = await response.json();
            
            if (response.ok && data.token) {
                localStorage.setItem('authToken', data.token);
                authToken = data.token;
                currentUser = data.user;
                window.currentUser = data.user;
                window.auth.currentUser = data.user;
                
                // Hide auth container after successful login
                const authContainer = document.getElementById('authContainer');
                if (authContainer) {
                    authContainer.style.display = 'none';
                }
                
                // Trigger any initialization that happens after login
                if (window.initializeAfterAuth) {
                    window.initializeAfterAuth();
                }
                
                // Initialize the app after successful login
                if (window.initializeApp) {
                    console.log('🚀 Initializing app after login...');
                    window.initializeApp();
                } else {
                    console.log('⚠️ No initializeApp function found');
                    // Try to load videos directly
                    if (window.loadInitialVideos) {
                        window.loadInitialVideos();
                    }
                }
                
                return { success: true, user: data.user };
            } else {
                console.error('Login failed - Status:', response.status, 'Data:', data);
                throw new Error(data.error || data.message || `Login failed (${response.status})`);
            }
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    },

    async signup(email, password, displayName) {
        try {
            const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password, username: displayName })
            });
            
            const data = await response.json();
            
            if (response.ok && data.token) {
                localStorage.setItem('authToken', data.token);
                authToken = data.token;
                currentUser = data.user;
                window.currentUser = data.user;
                window.auth.currentUser = data.user;
                
                // Hide auth container after successful login
                const authContainer = document.getElementById('authContainer');
                if (authContainer) {
                    authContainer.style.display = 'none';
                }
                
                // Trigger any initialization that happens after login
                if (window.initializeAfterAuth) {
                    window.initializeAfterAuth();
                }
                
                // Initialize the app after successful login
                if (window.initializeApp) {
                    console.log('🚀 Initializing app after login...');
                    window.initializeApp();
                } else {
                    console.log('⚠️ No initializeApp function found');
                    // Try to load videos directly
                    if (window.loadInitialVideos) {
                        window.loadInitialVideos();
                    }
                }
                
                return { success: true, user: data.user };
            } else {
                console.error('Signup failed - Status:', response.status, 'Data:', data);
                throw new Error(data.error || data.message || `Signup failed (${response.status})`);
            }
        } catch (error) {
            console.error('Signup error:', error);
            throw error;
        }
    },

    async logout() {
        localStorage.removeItem('authToken');
        authToken = null;
        currentUser = null;
        return { success: true };
    },

    getCurrentUser() {
        return currentUser;
    },

    getAuthToken() {
        return authToken;
    }
};

// Firebase compatibility layer
window.auth = {
    currentUser: null,
    
    async signInWithEmailAndPassword(email, password) {
        const result = await window.mongoAPI.login(email, password);
        if (result.success) {
            this.currentUser = result.user;
            window.currentUser = result.user;
        }
        return result;
    },
    
    async createUserWithEmailAndPassword(email, password) {
        const result = await window.mongoAPI.signup(email, password);
        if (result.success) {
            this.currentUser = result.user;
            window.currentUser = result.user;
        }
        return result;
    },
    
    async signOut() {
        await window.mongoAPI.logout();
        this.currentUser = null;
        window.currentUser = null;
    }
};

// Make Firebase-style functions available globally
window.signInWithEmailAndPassword = async (auth, email, password) => {
    return window.mongoAPI.login(email, password);
};

window.createUserWithEmailAndPassword = async (auth, email, password, displayName) => {
    return window.mongoAPI.signup(email, password, displayName);
};

window.signOut = async () => {
    return window.mongoAPI.logout();
};

// Check for existing session on load
async function checkExistingSession() {
    if (authToken) {
        try {
            const response = await fetch(`${API_BASE_URL}/api/auth/me`, {
                headers: { 
                    'Authorization': `Bearer ${authToken}`,
                    'Content-Type': 'application/json'
                }
            });
            
            if (response.ok) {
                const data = await response.json();
                currentUser = data.user;
                window.currentUser = data.user;
                window.auth.currentUser = data.user;
                console.log('✅ Existing session found for:', data.user.email);
            } else {
                // Invalid token
                localStorage.removeItem('authToken');
                authToken = null;
            }
        } catch (error) {
            console.error('Session check error:', error);
        }
    }
}

// Check session on load
checkExistingSession();

console.log('✅ MongoDB adapter loaded');