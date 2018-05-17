const express = require('express');
const hbs = require('hbs');  // handle bars wrapper lib

var app = express();  // maks a new Express App

app.set('view engine', 'hbs');   //?
app.use(express.static(__dirname + '/public'));

  app.get('/', (req, res) => {
    res.render('home.hbs', {
      pageTitle: 'Home Page',
      welcomeMessage: 'Here lives a scraper',
      currentYear: new Date().getFullYear()
    });
  });

  app.get('/about', (req, res) => {
    res.render('about.hbs', {
      pageTitle: 'Home Page',
      welcomeMessage: 'Here lives a scraper',
      currentYear: new Date().getFullYear()
    });
  });

// /bad - send back json with errorMessage
app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

app.listen(3000, () => {console.log("Server runing on port 3000")});  // bind to a port on this machine
