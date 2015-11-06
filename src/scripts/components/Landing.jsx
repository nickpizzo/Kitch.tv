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
                  <iframe allowFullScreen="" src="https://www.youtube.com/embed/Jj1fhYZJjek?modestbranding=1&autohide=1&showinfo=0&controls=0&=0&autoplay=1"></iframe>
                </div>
              </div>
              <div className="col-lg-3 text-center">
                <div className="profile-header-img">
                  <img className="img-circle" src="images/featureduser.png" />
                  <div className="rank-label-container">
                    <span className="label label-default rank-label"><i className="fa fa-circle"></i>&nbsp;GreenBrother2</span>
                  </div>
                  <div>
                    <div className="usertaghead">
                      <span className="usertag">#modern</span>
                      <span className="usertag">#smallspace</span>
                    </div>
                    <div className="usertaghead">
                      <span className="usertag">#dormroom</span>
                      <span className="usertag">#local</span>
                    </div>
                    <div className="usertaghead">
                      <span className="usertag">#seasonal</span>
                      <span className="usertag">#fresh</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="morevids">
            <div className="container">
              <div className="row">
                <div className="col-xs-2"></div>
                <div className="col-xs-2">
                  <img className="channelhover" src="images/morevids1.jpg" width="135" height="90"></img>
                </div>
                <div className="col-xs-2">
                  <img className="channelhover" src="images/morevids2.jpg" width="135" height="90"></img>
                </div>
                <div className="col-xs-2">
                  <img className="channelhover" src="images/morevids3.jpeg" width="135" height="90"></img>
                </div>
                <div className="col-xs-2">
                  <img className="channelhover" src="images/morevids4.jpg" width="135" height="90"></img>
                </div>
                <div className="col-xs-2"></div>
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
                <div className="panel panel-default trendingtab">
                  <div className="panel-body trendingtab">
                    <p className="lead">Paleo</p>
                  </div>
                <div className="panel-thumbnail"><img src="images/paleo.jpg" className="img-responsive"></img></div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="panel panel-default trendingtab">
                  <div className="panel-body trendingtab">
                    <p className="lead">Pairings</p>
                  </div>
                  <div className="panel-thumbnail"><img src="images/pairings.jpeg" className="img-responsive"></img></div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="panel panel-default trendingtab">
                  <div className="panel-body trendingtab">
                    <p className="lead">Organic</p>
                  </div>
                  <div className="panel-thumbnail"><img src="images/organic.jpeg" className="img-responsive"></img></div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="panel panel-default trendingtab">
                  <div className="panel-body trendingtab">
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
          <div className="container kitchnews text-center">
            <h1>test</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
