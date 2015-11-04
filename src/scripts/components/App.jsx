import React from 'react';
import Parse from 'parse';

import Navigation from './Navigation.jsx';
import Landing from './Landing.jsx';
import Footer from './Footer.jsx';
import Profile from './Profile.jsx';
import SignUp from './SignUp.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: Parse.User.current(),
      currentRoute: props.router.current
    }
  }

  componentWillMount() {
    this.props.router.on('route', this.onRoute);
  }

  componentWillUnmount() {
    this.props.router.off('route', this.onRoute);
  }

  onRoute = () => {
    this.setState({
      currentUser: Parse.User.current(),
      currentRoute: this.props.router.current
    });
  }

  render() {
    let currentView;

    switch(this.state.currentRoute) {
      case 'index' :
        currentView = <Landing />;
        break;
      case 'profile' :
        currentView = <Profile />;
        break;
      case 'signUp' :
        currentView = <SignUp />;
        break;
      default :
        currentView = <Landing />;
    };

    return (
      <div>
        <div id="wrap">
          <Navigation current={this.state.currentRoute} currentUser={this.state.currentUser}/>
          {currentView}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
