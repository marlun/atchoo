function auth(view, loginView) {
  return function(state, prev, send) {
    return state.authenticated
      ? view(state, prev, send)
      : loginView(state, prev, send)
  }
}

module.exports = auth;
