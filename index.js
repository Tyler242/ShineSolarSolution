const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', (req, res, next) => {
  res.render('index');
});

app.listen(2500, () => {
  console.log('Express Server is running');
});
