import React from 'react';

class SplashPage extends React.Component {
  render() {
    return (
      <div className="fullpage text-center">

        <img className="" id="splashimage" src="images/kitchlogoredround.png"/>

        <div className="col-md-12 splashbuttons">
          <ul className="social-network social-circle ">
            <li><a href="#" className="icoRss" title="Rss"><i className="fa fa-rss"></i></a></li>
            <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
            <li><a href="#" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"></i></a></li>
            <li><a href="#" className="icoGoogle" title="Google +"><i className="fa fa-google-plus"></i></a></li>
            <li><a href="#" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
          </ul>
        </div>

      </div>


    )
  }
}
export default SplashPage;
