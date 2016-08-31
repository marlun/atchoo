const html = require('choo/html');

function pageView(content) {
  return html`
    <div>
      ${content}
    </div>
  `;
}

module.exports = pageView;
