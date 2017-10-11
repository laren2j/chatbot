// server.js

// BASE SETUP
// =============================================================================

"use strict";
// call the packages we need
const express       = require('express');
const apiai         = require('apiai');
const bodyParser    = require('body-parser');
const app           = express();
const chat          = apiai("< Client access token >");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

// ROUTES FOR OUR API
// =============================================================================
const router = express.Router();   

// test route to make sure everything is working (accessed at GET http://localhost:8080)
router.get('/', function(req, res) {
    res.json({ message: 'Wellcome to chatbot' });   
});

// DialogFlow API(accessed at POST http://localhost:8080/api/)
app.post('/api/', function(req, res) {
    const msg = req.body.msg;
    chat.textRequest(msg, {
        sessionId: '< Developer access token >'
    }).on('response', function(response) {
        res.send(response);
    }).on('error', function(error) {
        res.send(error);
    }).end();
});

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Chatbot runs on ' + port);


