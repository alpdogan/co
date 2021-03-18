const express = require('express');
const path = require('path');
const prerender = require('prerender-node'); 
var morgan = require('morgan');


const prerenderToken = process.env.PRERENDER_TOKEN;
const prerenderServiceUrl = process.env.PRERENDER_SERVICE_URL;
console.log("prerender", prerenderServiceUrl, prerenderToken);

const app = express();


app.use(morgan(":method :url :status :response-time ms - :res[content-length]"));
// Serve static files from the React app
app.use(express.static(path.join(__dirname, './build')));

app.use(prerender
    .set('prerenderToken', prerenderToken)
    .set('prerenderServiceUrl', prerenderServiceUrl)
);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);
console.log(`Server listening on ${port}`);

