// Create web server using Express
// 1. Create web server
// 2. Create route
// 3. Start web server

// 1. Create web server
const express = require('express');
const app = express();
const port = 3000;

// 2. Create route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// 3. Start web server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});



