const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
// Setting the view engine to EJS
app.set('view engine', 'ejs');

// Initialize an empty array to hold polls
let sondages = [];

// Handle GET request for the root URL to render the main page
app.get('/', (req, res) => {
    res.render('index', { sondages: sondages });
});

// Handle POST request to create a new poll
app.post('/creer-sondage', (req, res) => {
    const { question } = req.body;
    // Add the new poll to the sondages array with zero votes
    sondages.push({ question: question, votes: 0 });
    res.redirect('/');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`L'application est lancée sur http://localhost:${PORT}`);
});