import React from 'react';
import Parse from 'parse';
import Backbone from 'backbone';

export default class SignUp extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();

    var user = new Parse.User();
    user.set("username", this.refs.username.value);
    user.set("password", this.refs.password.value);
    user.set("email", this.refs.email.value);

    user.signUp(null, {
      success: function(user) {
        Backbone.history.navigate(`/user`, true);
      },
      error: function(user, error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });


  }

  render () {
    return (
      <div className="container signup">
        <div className="jumbotron col-md-offset-2 col-md-8">
          <form className="form-signin" onSubmit={this.handleSubmit}>
            <h2 className="form-signin-heading">
              Sign Up
            </h2>
            <label className="sr-only" htmlFor="inputUsername">
              Username
            </label>
            <input autofocus className="form-control" id="inputUsername" placeholder="Username" ref="username" required type="text"/>
            <label className="sr-only" htmlFor="inputEmail">
              Email address
            </label>
            <input className="form-control" id="inputEmail" placeholder="Email address" ref="email" required type="email"/>
            <label className="sr-only" htmlFor="inputPassword">Password</label>
            <input className="form-control" id="inputPassword" placeholder="Password" ref="password" required type="password"/>
            <button className="btn btn-lg btn-primary btn-block" type="submit">
              Sign in
            </button>
          </form>
        </div>
      </div>
    );
  }
}
