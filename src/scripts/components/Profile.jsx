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
                <ul className="list-group">

                  <li className="list-group-item text-right"><span className="pull-left"><strong className="">Joined</strong></span> 2.13.2014</li>
                  <li className="list-group-item text-right"><span className="pull-left"><strong className="">Last seen</strong></span> Yesterday</li>
                  <li className="list-group-item text-right"><span className="pull-left"><strong className="">Real name</strong></span> Joseph Doe</li>
                  <li className="list-group-item text-right"><span className="pull-left"><strong className="">Role: </strong></span> Pet Sitter
                  </li>
                </ul>
                <div className="panel panel-default">
                  <div className="panel-heading">Insured / Bonded?
                  </div>
                  <div className="panel-body"><i className="fa fa-check-square"></i> Yes, I am insured and bonded.
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">Website <i className="fa fa-link fa-1x"></i>
                </div>
                <div className="panel-body"><a href="http://bootply.com" className="">bootply.com</a>
              </div>
            </div>
            <ul className="list-group">
              <li className="list-group-item text-muted">Activity <i className="fa fa-dashboard fa-1x"></i>
            </li>
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
            <div className="panel-heading">Starfox221's Bio</div>
            <div className="panel-body"> A long description about me.</div>
          </div>
          <div className="panel panel-default target">
            <div className="panel-heading" contenteditable="false">Pets I Own</div>
            <div className="panel-body">
              <div className="row">
                <div className="col-md-4">
                  <div className="thumbnail">
                    <img alt="300x200" src="http://lorempixel.com/600/200/people"></img>
                      <div className="caption">
                        <h3>
                          Rover
                        </h3>
                        <p>
                          Cocker Spaniel who loves treats.
                        </p>
                        <p>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="thumbnail">
                      <img alt="300x200" src="http://lorempixel.com/600/200/city"></img>
                        <div className="caption">
                          <h3>
                            Marmaduke
                          </h3>
                          <p>
                            Is just another friendly dog.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="thumbnail">
                        <img alt="300x200" src="http://lorempixel.com/600/200/sports"></img>
                          <div className="caption">
                            <h3>Rocky</h3>


                            <p>Loves catnip and naps. Not fond of children.</p>
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
