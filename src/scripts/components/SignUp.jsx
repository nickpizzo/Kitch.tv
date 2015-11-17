import React from 'react';
import Parse from 'parse';
import Backbone from 'backbone';

export default class SignUp extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();

    var user = new Parse.User();
    user.set("firstname", this.refs.firstname.value);
    user.set("lastname", this.refs.lastname.value);
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
      <div>


<form onSubmit={this.handleSubmit}>
  <div className="container">
    <div className="form-group">
      <label className="sr-only">First Name</label>
      <input ref="firstname" className="form-control" placeholder="First Name"/>
    </div>
    <div className="form-group">
      <label className="sr-only">Last Name</label>
      <input ref="lastname" className="form-control" placeholder="Last Name"/>
    </div>
    <div className="form-group">
      <label className="sr-only">Username</label>
      <input ref="username" className="form-control" placeholder="Username"/>
    </div>
    <div className="form-group">
      <label className="sr-only">Email</label>
      <input ref="email" type="email" className="form-control" placeholder="Email"/>
    </div>
    <div className="form-group">
      <label className="sr-only">Password</label>
      <input ref="password" type="password" className="form-control" placeholder="Password"/>
    </div>

    <button type="submit" className="btn btn-success">Sign Me Up!</button>
    Already have an acount? <a href="#">Sign in Here!</a>
  </div>
</form>

</div>

    );
  }
}
