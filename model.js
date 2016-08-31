const model = {
  state: {
    authenticated: false,
  },
  effects: {
    login(data, state, send, done) {
      if (data.username === 'marlun' && data.password === 'pass') {
        send('authenticated', { user: 'marlun' }, done);
      } else {
        console.log('Error');
      }
    }
  },
  reducers: {
    authenticated(data, state) {
      return Object.assign(state, { authenticated: true });
    },
  }
}

module.exports = model;
