const express = require('express');
const app = express();
const https = require('http').createServer(app);
// Load middlewares

require('./middleware')(app);
app.use('/api', require('./router'));

exports.start = ((argv) => {
    let port = argv[0] || 5324
    https.listen(port, () => {
        console.log(`Server running! port:${port}`)
    });
});