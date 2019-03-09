import React from 'react';
import {hot} from 'react-hot-loader';
import './styles/CarDisplay.scss';

class CarSearch extends React.Component {
  state= {
    carSearch: '',
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onUserSubmit(this.state.carSearch);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={ this.onFormSubmit }>
          <div className="field">
            <label > Image Search
              <input type="text" value={this.state.carSearch}
                onChange={e => this.setState({carSearch: e.target.value})}
              />
            </label>
          </div>
        </form>
      </div>
    );
  }
}


export default hot(module)(CarSearch);