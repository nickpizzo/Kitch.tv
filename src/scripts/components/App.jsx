import React from 'react';

import Navigation from './Navigation.jsx';
import Landing from './Landing.jsx';
import Footer from './Footer.jsx';
import Profile from './Profile.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
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
      currentRoute: this.props.router.current
    });
  }

  render() {
    let currentView;

    switch(this.state.currentRoute) {
      case 'index' :
        currentView = <Landing/>;
        break;
      case 'profile' :
        currentView = <Profile/>;
        break;
      default :
        currentView = <Landing/>;
    };

    return (
      <div>
        <Navigation/>
        {currentView}
        <Footer/>
      </div>
    );
  }
}

export default App;
