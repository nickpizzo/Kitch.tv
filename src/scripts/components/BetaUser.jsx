import React from 'react'

class BetaUser extends React.Component {
  render () {
    return (
      <div className="beta-container">
        <div className="beta-banner">
          <img src="images/kitchmailchimp.jpeg" className="beta-banner"/>
        </div>

        <div className="beta-text">
          <h2>Welcome to Kitch,</h2>
          <p>I would like to introduce you to a brand new social platform designed specifically for chefs and foodies. Kitch.tv is a streaming video social network branded for food and cooking culture. Think of this site as a YouTube for cooking-related content. The site will be designed to highlight the cooking niches that you specialize in, and it will attract viewers with a special interest in the niches you identify with. Kitch will improve how you reach and interact with your viewers. The possibilities are vast on our open platform.</p>
          <p>We are currently seeking early-stage content contributors to assist in the build process of the site. By offering your new or existing content for display on Kitch.tv, you can be part of the initial community of Kitch adopters. As features are added, we will give special consideration to our founding contributors which will eventually include the ability to monetize your viewer traffic.</p>
          <p>Please stay in touch with us on social media while we build out this community. Also sign up for email updates on our website Kitch.tv. For demonstration purposes, we have a live concept of a what a new visitor to Kitch.tv will see upon site landing. Please have a look around here. To submit specific content for feature on Kitch’s social media presence, please get in touch with us directly at chef@kitch.tv.</p>
          <p>Cheers,</p>
          <p>Nick Pizzo</p>
          <p>founder</p>
        </div>

        <div className="beta-footer">
          <i className="fa fa-facebook-square fa-2x"></i>
          <i className="fa fa-instagram fa-2x"></i>
          <i className="fa fa-twitter-square fa-2x"></i>
          <i className="fa fa-youtube-square fa-2x"></i>
          <i className="fa fa-pinterest-square fa-2x"></i>
        </div>

      </div>
    )
  }
}

export default BetaUser
