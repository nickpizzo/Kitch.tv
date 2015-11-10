import React from 'react';

class Profile extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <br></br>
          <div className="row profilebanner">
            <div className="col-sm-2"><a href="" className="pull-right profilepic"><img title="profile image" className="img-circle" src="images/profilepic.png" width="150" height="150"></img></a></div>
            <div className="col-sm-10 usernamebanner">
              <h1 className="">nickpizzo</h1>
              <button type="button" className="btn btn-info"><i className="fa fa-cog"></i>Edit Profile</button>
            </div>
          </div>
          <br></br>
            <div className="row">
              <div className="col-sm-3">
                <div className="list-group">
                  <div className="list-group-item profilenav"><span><i className="fa fa-video-camera">&nbsp;</i>Video Manager</span>&nbsp;</div>
                  <div className="list-group-item profilenav"><span><i className="fa fa-calendar">&nbsp;</i>Schedule A Broadcast</span>&nbsp;</div>
                  <div className="list-group-item profilenav"><span><i className="fa fa-envelope">&nbsp;</i>Messages</span><i className="badge badge-info">4</i></div>
                  <div className="list-group-item profilenav"><span><i className="fa fa-heart">&nbsp;</i>Following</span>&nbsp;</div>
                  <div className="list-group-item profilenav"><span><i className="fa fa-users">&nbsp;</i>Followers</span>&nbsp;</div>
                  <div className="list-group-item profilenav"><span><i className="fa fa-bar-chart">&nbsp;</i>Statistics</span>&nbsp;</div>
                </div>
              <div className="panel panel-default">
                <div className="panel-heading">Insured / Bonded?</div>
                <div className="panel-body"><i className="fa fa-check-square"></i> Yes, I am insured and bonded.</div>
              </div>

            <ul className="list-group">
              <li className="list-group-item text-muted">Activity <i className="fa fa-dashboard fa-1x"></i></li>
              <li className="list-group-item text-right"><span className="pull-left"><strong className="">Shares</strong></span> 125</li>
              <li className="list-group-item text-right"><span className="pull-left"><strong className="">Likes</strong></span> 13</li>
              <li className="list-group-item text-right"><span className="pull-left"><strong className="">Posts</strong></span> 37</li>
              <li className="list-group-item text-right"><span className="pull-left"><strong className="">Followers</strong></span> 78</li>
            </ul>
          <div className="panel panel-default">
            <div className="panel-heading">Social Media</div>
            <div className="panel-body">	<i className="fa fa-facebook fa-2x"></i>  <i className="fa fa-github fa-2x"></i>
              <i className="fa fa-twitter fa-2x"></i> <i className="fa fa-pinterest fa-2x"></i>  <i className="fa fa-google-plus fa-2x"></i>
            </div>
          </div>
        </div>
        <div className="col-sm-9" contenteditable="false">
          <div className="panel panel-default">
            <div className="panel-heading">Live Video</div>
            <div className="panel-body">
              <iframe width="819" height="461" src="http://www.ustream.tv/embed/21521464?html5ui" allowfullscreen webkitallowfullscreen scrolling="no" frameborder="0"></iframe>
            </div>
          </div>
          <div className="panel panel-default target">
            <div className="panel-heading" contenteditable="false">Previous Broadcasts</div>
            <div className="panel-body">
              <div className="row">
                <div className="col-xs-3 col-md-3 text-center">
                  <img src="http://bootsnipp.com/apple-touch-icon-114x114-precomposed.png" alt="bootsnipp" className="img-rounded img-responsive"></img>
                </div>
                <div className="col-xs-9 col-md-9 section-box">
                  <h3>Bootsnipp</h3>
                  <p>Design elements, playground and code snippets for Bootstrap HTML/CSS/JS framework</p>
                  <div className="row rating-desc">
                    <div className="col-md-12 ">
                      <span className="fa fa-heart heartcolor"></span>
                      <span className="fa fa-heart heartcolor"></span>
                      <span className="fa fa-heart heartcolor"></span>
                      <span className="fa fa-heart heartcolor"></span>
                      <span className="fa fa-heart-o heartcolor"></span>
                      <span>(36)</span>
                      <span className="separator">|</span>
                      <span className="fa fa-comment commentcolor">&nbsp;</span>
                      <span>(100 Comments)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
              <div className="panel panel-default">
                <div className="panel-heading">Starfox221's Bio</div>
                <div className="panel-body"> A long description about me.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;
