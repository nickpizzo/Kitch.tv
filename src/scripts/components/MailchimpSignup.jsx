import React from 'react';

class MailchimpSignup extends React.Component {
  render() {
    return (
      <div id="mc_embed_signup">
        <form action="//kitch.us12.list-manage.com/subscribe/post?u=21183d49d8e48b5c2cbf71676&amp;id=821cf8fe93" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
            <input type="email" name="EMAIL" className="mailchimpemail" id="mce-EMAIL" placeholder="enter your email" required/>
            <div className="hiddenSignUp" aria-hidden="true">
              <input type="text" name="b_21183d49d8e48b5c2cbf71676_821cf8fe93" tabindex="-1" value=""/>
            </div>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <div className="clear">
              <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="mailchimpsubmit"/>
            </div>
        </form>
      </div>
    )
  }
}

export default MailchimpSignup;
