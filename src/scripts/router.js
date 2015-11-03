import Backbone from 'backbone';

class Router extends Backbone.Router {

  get routes() {
    return {
      '' : 'index',
      'user' : 'profile'
    }
  }

  index() {
    this.current = 'index';
  }

  profile() {
    this.current = 'profile';
  }

  initialize() {
    Backbone.history.start();
  }

}

export default Router
