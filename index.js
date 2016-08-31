const choo = require('choo');
const html = require('choo/html');
const appModel = require('./model');
const homePage = require('./pages/homePage')
const loginPage = require('./pages/loginPage')
const auth = require('./auth');

const app = choo();

app.model(appModel);

app.router((route) => [
  route('/', auth(homePage, loginPage)),
]);

const tree = app.start();
document.body.appendChild(tree);
