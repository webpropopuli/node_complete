const express = require('express');
const hbs = require('hbs');
const PORT = process.env.PORT || 3000;

//var app = express();

hbs.registerPartials(__dirname + '/views/partials'); //set the dir
hbs.registerHelper('hbThisYear', () => {
  return new Date().getFullYear()
});

hbs.registerHelper('hbBigAssText', (text) => {
  return text.toUpperCase();
});

express()
  .set('view engine', 'hbs')
  .use(express.static(__dirname + '/public'))
  .get('/', (req, res) => res.render('home.hbs', {
      pageTitle: 'Home Page',
      welcomeMessage: 'Welcome to my website'
      }) )
  .get('/about', (req, res) => res.render('about.hbs', {
      pageTitle: 'About Page'    }) )
  .get('/bad', (req, res) => res.send({
      errorMessage: 'Unable to handle request'  // /bad - send back json with errorMessage
      }) )
  .listen(PORT, () => console.log(`Server is up on port ${PORT}`));
