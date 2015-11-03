import React from 'react';

class Landing extends React.Component {
  render () {
    return (
      <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-lg-offset-1 videofeature">
              <div className="flex-video widescreen">
                <iframe allowfullscreen="" src="https://www.youtube.com/embed/Jj1fhYZJjek?modestbranding=1&autohide=1&showinfo=0&controls=0&=0&autoplay=1"></iframe>
              </div>
            </div>
            <div className="col-lg-3 text-center">
              <div className="profile-header-img">
                <img className="img-circle" src="images/featureduser.png" />
                <div className="rank-label-container">
                  <span className="label label-default rank-label"><i className="fa fa-circle"></i>&nbsp;GreenBrother2</span>

                </div>
                <div>
                  <span className="usertag">#tag</span>
                  <span className="usertag">#tag</span>
                  <span className="usertag">#tag</span>
                  <span className="usertag">#tag</span>
                </div>

              </div>

                </div>
              </div>
            </div>
            <div className="morevids">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <h3 className="relatedusers">Related Users</h3>
                  </div>
                  <div className="col-lg-6">
                    <img src="http://placehold.it/90x90"></img>
                    <img src="http://placehold.it/90x90"></img>
                    <img src="http://placehold.it/90x90"></img>
                    <img src="http://placehold.it/90x90"></img>
                  </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="trending">
                    <div className="text-center container">
                      <h1 className="whatstrending">What's Trending</h1>
                    </div>
                    <div className="container">
                      <div className="row">
                        <div className="col-md-3 col-sm-6">
                          <div className="panel panel-default">
                            <div className="panel-body">
                              <p className="lead">Paleo</p>
                            </div>


                          <div className="panel-thumbnail"><img src="images/paleo.jpg" className="img-responsive"></img></div>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <div className="panel panel-default">
                          <div className="panel-body">
                            <p className="lead">Pairings</p>
                          </div>
                          <div className="panel-thumbnail"><img src="images/pairings.jpeg" className="img-responsive"></img></div>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <div className="panel panel-default">
                          <div className="panel-body">
                            <p className="lead">Organic</p>
                          </div>
                          <div className="panel-thumbnail"><img src="images/organic.jpeg" className="img-responsive"></img></div>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <div className="panel panel-default">
                          <div className="panel-body">
                            <p className="lead">Vegan</p>
                          </div>
                          <div className="panel-thumbnail"><img src="images/vegan.jpeg" className="img-responsive"></img></div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center trendingviewmore">
                      <a href="#" className="btn btn-lg btn-default ">View More&nbsp;<i className="fa fa-chevron-right"></i></a>
                    </div>
                  </div>
                  </div>

                  <div className="broadcaster">
                    <div className="container text-center broadcasterinner">
                      <h3>Join the Community</h3>
                      <h2>Become a broadcaster</h2>
                      <a href="#" className="btn btn-lg btn-default">Start Here&nbsp;<i className="fa fa-chevron-right"></i></a>
                    </div>
                  </div>

                <div className="socialsection">
                  <div className="container kitchnews">
                    <h1>test</h1>
                  </div>
                </div>
              </div>


              );
            }
          }

          export default Landing;
