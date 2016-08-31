const html = require('choo/html');
const page = require('../components/page');

function homePage(state, prev, send) {
  if (!state.authenticated) {
    send('location:setLocation', { location: '/login' });
  }
  return page(html`<div>Hello</div>`);
}

module.exports = homePage;
