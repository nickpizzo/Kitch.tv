import React from 'react';
import $ from 'jquery';

class Header extends React.Component {

  componentDidMount() {
    $(".dropdown").hover(
        function() {
            $('.dropdown-menu', this).stop( true, true ).slideDown("fast");
            $(this).toggleclass('open');
        },
        function() {
            $('.dropdown-menu', this).stop( true, true ).slideUp("fast");
            $(this).toggleclass('open');
        }
    );
  }

  render() {

    return (
      <nav className="navbar-default" role="navigation">
        <div className="container-fluid">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Logo</a>
          </div>

          <!-- Collect the nav links, forms, and other content for toggling -->
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">

              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Browse <span className="caret"></span></a>
                <ul className="dropdown-menu" role="menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li className="divider"></li>
                  <li><a href="#">Separated link</a></li>
                  <li className="divider"></li>
                  <li><a href="#">One more separated link</a></li>
                </ul>
              </li>
            </ul>
            <form className="navbar-form navbar-left" role="search">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Find A Channel">
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
              </form>
              <ul className="nav navbar-nav navbar-right">
                <li><p className="navbar-text">Already have an account?</p></li>
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
                          <form className="form" role="form" method="post" action="login" accept-charset="UTF-8" id="login-nav">
                            <div className="form-group">
                              <label className="sr-only" for="exampleInputEmail2">Email address</label>
                              <input type="email" className="form-control" id="exampleInputEmail2" placeholder="Email address" required>
                              </div>
                              <div className="form-group">
                                <label className="sr-only" for="exampleInputPassword2">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" required>
                                  <div className="help-block text-right"><a href="">Forget the password ?</a></div>
                                </div>
                                <div className="form-group">
                                  <button type="submit" className="btn btn-primary btn-block">Sign in</button>
                                </div>
                                <div className="checkbox">
                                  <label>
                                    <input type="checkbox"> keep me logged-in
                                    </label>
                                  </div>
                                </form>
                              </div>
                              <div className="bottom text-center">
                                New here? <a href="#"><b>Join Us</b></a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div><!-- /.navbar-collapse -->
              </div><!-- /.container-fluid -->
            </nav>
          )
        }
      }

      export default Header;
