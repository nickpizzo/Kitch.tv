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
              <button type="button" className="btn btn-info"><i className="fa fa-cog">&nbsp;</i>Edit Profile</button>
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
              <ul className="list-group">
                <li className="list-group-item text-muted">Activity <i className="fa fa-dashboard fa-1x"></i></li>
                <li className="list-group-item text-right profilenav"><span className="pull-left"><strong className="">Shares</strong></span>29</li>
                <li className="list-group-item text-right profilenav"><span className="pull-left"><strong className="">Likes</strong></span>8</li>
                <li className="list-group-item text-right profilenav"><span className="pull-left"><strong className="">Posts</strong></span>12</li>
              </ul>
            </div>
            <div className="col-sm-9" contenteditable="false">
              <div className="panel panel-default">
                <div className="panel-heading">Live Video - <i className="fa fa-circle" id="circle2">&nbsp;</i>Online</div>
                <div className="panel-body">
                  <iframe width="819" height="461" src="http://www.ustream.tv/embed/21521464?html5ui" allowfullscreen webkitallowfullscreen scrolling="no" frameborder="0"></iframe>
                </div>
                <div className="text-center broadcastbuttons">
                  <button type="button" className="btn btn-success"><i className="fa fa-television">&nbsp;</i>New Live Broadcast</button>
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <button type="button" className="btn btn-warning"><i className="fa fa-film">&nbsp;</i>New Archived Broadcast</button>
                </div>
              </div>
              <div className="panel panel-default target">
                <div className="panel-heading" contenteditable="false">Previous Broadcasts</div>
                <div className="panel-body">
                  <div className="row previousbroadcastitem">
                    <div className="col-xs-3 col-md-3 text-center">
                      <img src="images/previous1.png" className="img-rounded img-responsive previousbroadcastimage"></img>
                    </div>
                    <div className="col-xs-9 col-md-9 section-box">
                      <h4 className="previousbraodcasttitle">Veggie Lo Main</h4>
                      <p className="previousbroadcastinfo">Design elements, playground and code snippets for Bootstrap HTML/CSS/JS framework</p>
                      <div className="row rating-desc">
                        <div className="col-md-12 ">
                          <span className="fa fa-heart heartcolor"></span>
                          <span className="fa fa-heart heartcolor"></span>
                          <span className="fa fa-heart heartcolor"></span>
                          <span className="fa fa-heart heartcolor"></span>
                          <span className="fa fa-heart-o heartcolor"></span>
                          <span>(12)</span>
                          <span className="separator">|</span>
                          <span className="fa fa-comment commentcolor">&nbsp;</span>
                          <span>(8 Comments)&nbsp;<i className="fa fa-caret-down"></i></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row previousbroadcastitem">
                    <div className="col-xs-3 col-md-3 text-center">
                      <img src="images/previous2.jpeg" className="img-rounded img-responsive previousbroadcastimage"></img>
                    </div>
                    <div className="col-xs-9 col-md-9 section-box">
                      <h4 className="previousbraodcasttitle">Whole Foods Trip #3</h4>
                      <p className="previousbroadcastinfo">Design elements, playground and code snippets for Bootstrap HTML/CSS/JS framework</p>
                      <div className="row rating-desc">
                        <div className="col-md-12 ">
                          <span className="fa fa-heart heartcolor"></span>
                          <span className="fa fa-heart heartcolor"></span>
                          <span className="fa fa-heart heartcolor"></span>
                          <span className="fa fa-heart heartcolor"></span>
                          <span className="fa fa-heart-o heartcolor"></span>
                          <span>(12)</span>
                          <span className="separator">|</span>
                          <span className="fa fa-comment commentcolor">&nbsp;</span>
                          <span>(8 Comments)&nbsp;<i className="fa fa-caret-down"></i></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row previousbroadcastitem">
                    <div className="col-xs-3 col-md-3 text-center">
                      <img src="images/previous3.jpeg" className="img-rounded img-responsive previousbroadcastimage"></img>
                    </div>
                    <div className="col-xs-9 col-md-9 section-box">
                      <h4 className="previousbraodcasttitle">Strawberry Lime Popsicles</h4>
                      <p className="previousbroadcastinfo">Design elements, playground and code snippets for Bootstrap HTML/CSS/JS framework</p>
                      <div className="row rating-desc">
                        <div className="col-md-12 ">
                          <span className="fa fa-heart heartcolor"></span>
                          <span className="fa fa-heart heartcolor"></span>
                          <span className="fa fa-heart heartcolor"></span>
                          <span className="fa fa-heart heartcolor"></span>
                          <span className="fa fa-heart-o heartcolor"></span>
                          <span>(12)</span>
                          <span className="separator">|</span>
                          <span className="fa fa-comment commentcolor">&nbsp;</span>
                          <span>(8 Comments)&nbsp;<i className="fa fa-caret-down"></i></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <i className="fa fa-caret-down fa-2x text-center"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;
