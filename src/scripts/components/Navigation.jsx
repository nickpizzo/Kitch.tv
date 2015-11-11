import React from 'react';
import Parse from 'parse';
import Backbone from 'backbone';

class SessionNavigation extends React.Component {

  handleSignOut = () => {
    Parse.User.logOut();
    Backbone.history.navigate('/', true);
  }

  handleSignIn = (event) => {
    event.preventDefault();
    Parse.User.logIn(this.refs.username.value, this.refs.password.value, {
      success: function(user) {
        Backbone.history.navigate('/user', true);
      },
      error: function(user, error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });
  }

  render() {
    if (this.props.user) {
      return (
        <ul className = "nav navbar-nav navbar-right">
          <li>
            <ul className="nav navbar-nav">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-user">&nbsp;</i>My Account<span className="caret"></span></a>
                <ul className="dropdown-menu" role="menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li className="divider"></li>
                  <li><a href="#">Separated link</a></li>
                  <li className="divider"></li>
                  <li><a href="#" onClick={this.handleSignOut}>Sign Out</a></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      )
    } else {
      return (
        <div>
        <ul className="nav navbar-nav navbar-right">
          <li><p className="navbar-text">Already a Member?</p></li>
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown"><b>Login</b> <span className="caret"></span></a>
            <ul id="login-dp" className="dropdown-menu">
              <li>
                <div className="row">
                  <div className="col-md-12">
                    Login via
                    <div className="social-buttons">
                      <a href="#" className="btn btn-fb"><i className="fa fa-facebook"></i> Facebook</a>
                      <a href="#" className="btn btn-tw"><i className="fa fa-twitter"></i> Twitter</a>
                    </div>
                    or
                    <form className="form" onSubmit={this.handleSignIn}>
                      <div className="form-group">
                        <label className="sr-only">Username</label>
                        <input ref="username" className="form-control" placeholder="Username" required></input>
                      </div>
                      <div className="form-group">
                        <label className="sr-only">Password</label>
                        <input type="password" ref="password" className="form-control" placeholder="Password" required></input>
                        <div className="help-block text-right"><a href="">Forget your password?</a></div>
                      </div>
                      <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-block">Sign in</button>
                      </div>
                      <div className="checkbox">
                        <label>
                          <input type="checkbox"> keep me logged&#8208;in</input>
                        </label>
                      </div>
                    </form>
                  </div>
                  <div className="bottom text-center">
                    New here? <a href="#/register"><b>Join Us</b></a>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
        </div>
      )
    }
  }
}

class Navigation extends React.Component {

  render() {
    return (
      <div>
        <nav className="navbar-default" role="navigation">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a href="#" className="pull-left"><img className="logo" src="images/logo.png"></img></a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

              <form className="navbar-form navbar-left" role="search">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Find A Channel"></input>
                </div>
                <button type="submit" className="btn btn-default">Go</button>
              </form>
              <SessionNavigation user={this.props.currentUser}/>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navigation;
