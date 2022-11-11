const express = require('express');
const ejs = require('ejs');
const morgan = require('morgan')
//app
const app = express();

//view engine
app.set('view engine', 'ejs');

// port
app.listen(3000);

//Static folder
app.use(express.static('public'))
app.use(morgan('dev'))

app.use((req, res, next) => {
    console.log('new request made:');
    next();
});

app.get('/', (req, res) => {
    const blogs = [
        {title: 'whatser', snippet: 'imsoconfused'},
        {title: 'whats her', snippet: 'confused'}
    ]
    res.render('index', {blogs});
});

app.get('/about', (req, res) => {
    res.sendFile('./views/about.ejs', { root: __dirname});
});

app.get('about-us', (req, res) => {
    res.redirect('/about');
});

// Always happens if there is no match before
app.use((req, res) => {
    res.status(404).sendFile('./views/404.ejs', { root: __dirname});
});