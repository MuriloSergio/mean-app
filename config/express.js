var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
//var home = require('../app/routes/home');

module.exports = function () {
  var app = express();

  //configuração de ambiente
  app.set('port', 3000);

  //middleware
  app.use(express.static('./Public'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(require('method-override')());
  app.set('view engine', 'ejs');
  app.set('views', './App/Views');

  load('models', {cwd: 'App'})
    .then('Controllers')
    .then('Routes')
    .into(app);

  return app;
}
