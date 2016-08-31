const html = require('choo/html');

function loginForm({ onSubmit }) {
  return html`
    <form action="/login" method="post" onsubmit=${onSubmit}>
      <label for="username">Username</label>
      <input id="username" type="text" name="username" />
      <label for="password">Password</label>
      <input id="password" type="password" name="password" />
      <input type="submit" value="Login" />
    </form>
  `;
}

module.exports = loginForm;
