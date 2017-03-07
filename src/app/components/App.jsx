import React from 'react';
import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { getApp } from '../selectors';

class App extends React.Component {
  render(){
    return (
      <div className="container-fluid">
        Some content
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    someProp: getApp(state)
  };
}

App.propTypes = {
  someProp: ImmutablePropTypes.map
};

export default connect(
  mapStateToProps, {}
)(App);
