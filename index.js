const express = require('express');
const path = require('path');

const app = express();

// i'll be using ejs templates
app.set('view engine', 'ejs');
app.set('views', 'views');

// give the ejs template access to CSS and frontent JS
app.use(express.static(path.join(__dirname, 'public')));

// only need one page to be rendered otherwise I would use routing.
app.use('/', (req, res, next) => {
  res.render('index');
});

app.listen(2500, () => {
  console.log('Express Server is running');
});
