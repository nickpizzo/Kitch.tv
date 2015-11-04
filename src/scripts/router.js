import Backbone from 'backbone';

class Router extends Backbone.Router {

  get routes() {
    return {
      '' : 'index',
      'user' : 'profile',
      'register' : 'signUp'
    }
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

  initialize() {
    Backbone.history.start();
  }

}

export default Router
