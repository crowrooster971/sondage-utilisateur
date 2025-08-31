const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

let sondages = [];

app.get('/', (req, res) => {
    res.render('index', { sondages: sondages });
});

app.post('/creer-sondage', (req, res) => {
    const { question } = req.body;
    sondages.push({ question: question, votes: 0 });
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`L'application est lancée sur http://localhost:${PORT}`);
});