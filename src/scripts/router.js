import Backbone from 'backbone';

class Router extends Backbone.Router {

  get routes() {
    return {
      '' : 'splash',
      'demo' : 'index',
      'user' : 'profile',
      'register' : 'signUp'
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

  initialize() {
    Backbone.history.start();
  }

}

export default Router
