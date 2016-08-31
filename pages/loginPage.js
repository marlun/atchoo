const html = require('choo/html');
const loginForm = require('../components/loginForm');
const page = require('../components/page');

function loginPage(state, prev, send) {
  function onSubmit(e) {
    send('login', { username: 'marlun', password: 'pass' });
    e.preventDefault();
  }

  return page(loginForm({ onSubmit }));
}

module.exports = loginPage;
