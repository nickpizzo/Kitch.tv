import React from 'react';

class Profile extends React.Component {
  render() {
    return (
      <div>
        <div className="col-md-3 profilenav">
          <div className="well well-lg">
            <div className="profile-header-img userbanner1 text-center">
              <img className="img-circle userimage1" src="http://placehold.it/150x150"></img>
            </div>
            <ul className="nav">
              <li>
                <label label-default="" className="tree-toggler nav-header">Header 1</label>
                <ul className="nav  tree active-trial">
                  <li><a href="#">Link</a></li>
                  <li><a href="#">Link</a></li>
                  <li>
                    <label label-default="" className="tree-toggler nav-header ">Header 1.1</label>
                      <ul className="nav  tree  active-trial">
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                        <li>
                          <label label-default="" className="tree-toggler nav-header">Header 1.1.1</label>
                          <ul className="nav  tree">
                            <li><a href="#">Link</a></li>
                            <li><a href="#">Link</a></li>
                          </ul>
                        </li>
                      </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-divider"></li>
              <li>
                <label label-default="" className="tree-toggler nav-header">Header 2</label>
                <ul className="nav  tree">
                  <li><a href="#">Link</a></li>
                  <li><a href="#">Link</a></li>
                  <li>
                    <label label-default="" className="tree-toggler nav-header">Header 2.1</label>
                    <ul className="nav  tree">
                      <li><a href="#">Link</a></li>
                      <li><a href="#">Link</a></li>
                      <li>
                        <label label-default="" className="tree-toggler nav-header">Header 2.1.1</label>
                        <ul className="nav  tree">
                          <li><a href="#">Link</a></li>
                          <li><a href="#">Link</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <label label-default="" className="tree-toggler nav-header">Header 2.2</label>
                      <ul className="nav  tree">
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                        <li>
                          <label label-default="" className="tree-toggler nav-header">Header 2.2.1</label>
                          <ul className="nav  tree">
                            <li><a href="#">Link</a></li>
                            <li><a href="#">Link</a></li>
                          </ul>
                        </li>
                      </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;
