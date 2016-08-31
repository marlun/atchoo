const html = require('choo/html');
const page = require('../components/page');

function homePage(state, prev, send) {
  return page(html`<div>Hello</div>`);
}

module.exports = homePage;
