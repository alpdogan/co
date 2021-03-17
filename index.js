const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, './build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);
console.log(`Server listening on ${port}`);