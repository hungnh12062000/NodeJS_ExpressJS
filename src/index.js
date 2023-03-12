const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

// static file
app.use(express.static(path.join(__dirname, 'public')));

// middleware
                    app.use(
                         express.urlencoded({
                              extended: true,
                         }),
                    );
                    app.use(express.json());

//template engine
app.engine('hbs', handlebars.engine({
          extname: '.hbs',
     }),
);
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, './resources/views'));

// router
app.get('/', (req, res) => {
     res.render('home');
});

app.get('/news', (req, res) => {
     res.render('news');
});

app.get('/search', (req, res) => {
     console.log(req.query);
     res.render('search');
});

app.post('/search', (req, res) => {
     console.log(req.body);

     res.send('search post');
});

// port
                    app.listen(port, () => {
                         console.log(`Example app listening on port http://localhost:${port}`);
                    });