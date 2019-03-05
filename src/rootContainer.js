import React from 'react';
import { hot } from 'react-hot-loader';
import './styles/index.scss';
import SeasonDisplay from './seasonDisplay';

class RootContainer extends React.Component {
  state = {
    lat: null,
    errorMsg: '',
  };

  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err =>
        this.setState({ errorMsg: err.message})
    );


    if (this.state.errorMsg && !this.state.lat) {
      return <div> Error:{this.state.errMsg} </div>;
    }
    if (!this.state.errorMsg && this.state.lat) {
      return <div> Latitude:{this.state.lat} </div>;
    }
    return <div> Loading! </div>;
  }
}
export default hot(module)(RootContainer);
