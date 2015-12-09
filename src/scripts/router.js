import React from 'react';
import Backbone from 'backbone';

import BetaUser from './components/BetaUser.jsx';

class Router extends Backbone.Router {

  renderPage (page) {
    React.render(page, document.body)
  }

  get routes() {
    return {
      '' : 'splash',
      'demo' : 'index',
      'user' : 'profile',
      'register' : 'signUp',
      'betauser' : 'betaUser'
    }
  }

  splash() {
    this.current = 'splash';
  }

  index() {
    this.current = 'index';
  }

  profile() {
    this.current = 'profile';
  }

  signUp() {
    this.current = 'signUp';
  }

  betaUser() {
    this.renderPage(<BetaUser/>)
  }

  initialize() {
    Backbone.history.start();
  }

}

export default Router
