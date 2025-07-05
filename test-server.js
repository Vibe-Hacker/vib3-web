const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Test endpoint
app.get('/test', (req, res) => {
    res.json({ 
        status: 'ok', 
        time: new Date().toISOString(),
        env: {
            hasDbUrl: !!process.env.DATABASE_URL,
            dbUrlStart: process.env.DATABASE_URL ? process.env.DATABASE_URL.substring(0, 20) : 'none'
        }
    });
});

// Login test
app.post('/api/auth/login', (req, res) => {
    res.json({ 
        message: 'Login endpoint working',
        received: req.body,
        time: new Date().toISOString()
    });
});

app.listen(PORT, () => {
    console.log(`Test server running on port ${PORT}`);
});