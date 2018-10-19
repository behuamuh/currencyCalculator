import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

import AppComponent from './AppComponent';
import { getNewData } from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.getNewData();
  }

  render() {
    return <AppComponent {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    date: state.currencies.date,
    valute: state.currencies.valute,
    isloading: state.loading.isloading,
    error: state.loading.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNewData: () => dispatch(getNewData()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
