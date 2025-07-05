// Quick test to verify login works
const fetch = require('node-fetch');

async function testLogin() {
    const url = 'https://vib3-web-75tal.ondigitalocean.app/api/auth/login';
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: 'test@test.com',
                password: 'test123'
            })
        });
        
        const contentType = response.headers.get('content-type');
        console.log('Response status:', response.status);
        console.log('Content-Type:', contentType);
        
        if (contentType && contentType.includes('application/json')) {
            const data = await response.json();
            console.log('✅ JSON Response:', data);
        } else {
            const text = await response.text();
            console.log('❌ HTML Response (first 200 chars):', text.substring(0, 200));
        }
    } catch (error) {
        console.error('❌ Error:', error.message);
    }
}

// Wait 30 seconds for deployment then test
console.log('Waiting 30 seconds for deployment...');
setTimeout(testLogin, 30000);