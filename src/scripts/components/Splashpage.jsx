import React from 'react';

import MailchimpSignup from './MailchimpSignup.jsx';

class SplashPage extends React.Component {
  render() {
    return (
      <div className="fullpage text-center">
        <img id="splashimage" src="images/kitch_large.png"/>
        <div className="col-md-12 splashbuttons">
          <ul className="social-network social-circle ">
            <li><a href="https://www.facebook.com/kitchdottv" target="blank" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
            <li><a href="https://www.instagram.com/kitchdottv" target="blank" className="icoInstagram" title="Instagram"><i className="fa fa-instagram"></i></a></li>
            <li><a href="https://twitter.com/KitchdotTV" target="blank" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"></i></a></li>
            <li><a href="https://www.youtube.com/channel/UCJ6dKqyLBqj7QbPE66DSsKQ" target="blank" className="icoYoutube" title="Youtube"><i className="fa fa-youtube"></i></a></li>
            <li><a href="https://www.pinterest.com/kitchdottv" target="blank" className="icoPinterest" title="Pinterest"><i className="fa fa-pinterest-p"></i></a></li>
          </ul>
        </div>
        <MailchimpSignup />
      </div>
    )
  }
}

export default SplashPage;
