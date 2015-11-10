import React from 'react';

class Footer extends React.Component {
  render () {
    return(
      <div>
        <footer className="footer-distributed">
          <div className="container footeritems">
            <div className="footer-left">
              <p className="footer-links">
                <a href="#">About</a>
                ·
                <a href="#">Blog</a>
                ·
                <a href="#">Advertise</a>
                ·
                <a href="#">Developers</a>
                ·
                <a href="#">Parterns</a>
                ·
                <a href="#">Mobile</a>
                ·
                <a href="#">Jobs</a>
                ·
                <a href="#">Help</a>
                ·
                <a href="#">Privacy Policy</a>
              </p>
              <p className="copyright">Kitch.tv &copy; 2015</p>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer;
