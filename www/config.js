// Configuration for VIB3 Web Frontend
// This file configures the web app to use the backend API

const config = {
    // Backend API URL - Use relative path since frontend and backend are on same domain
    API_URL: '',  // Empty string means use same domain
    
    // If running locally, use localhost
    LOCAL_API_URL: 'http://localhost:3000',
    
    // Automatically detect which to use
    getApiUrl() {
        // If on localhost, use local API
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            return this.LOCAL_API_URL;
        }
        // Otherwise use same domain (Digital Ocean deployment)
        return this.API_URL;
    }
};

// Set global API URL
window.API_BASE_URL = config.getApiUrl();

// Log which API we're using
console.log('🌐 Using API:', window.API_BASE_URL || 'Same domain');