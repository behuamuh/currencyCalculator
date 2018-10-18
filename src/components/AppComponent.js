import React, { Component } from 'react';
import './App.css';
import GetNewData from './GetNewData';
import Calculator from './Calculator';

class AppComponent extends Component {
  render() {
    const { date, valute } = this.props;
    return (
      <div className="App">
        <h1>Калькулятор валют</h1>
        <GetNewData date={date} handleSubmit={this.getNewData} />
        <hr />
        <Calculator currents={valute} />
      </div>
    );
  }
}

export default AppComponent;
