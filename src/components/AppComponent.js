import React, { Component } from 'react';

import './App.css';

import GetNewData from './GetNewData';
import Calculator from './Calculator';

class AppComponent extends Component {
  render() {
    const { date, valute, getNewData, isloading, error } = this.props;
    return (
      <div className="App">
        <h1>Калькулятор валют</h1>
        <GetNewData date={date} handleSubmit={getNewData} />
        <hr />
        {error ? (
          error
        ) : isloading ? (
          <p>Загрузка...</p>
        ) : (
          <Calculator currents={valute} />
        )}
      </div>
    );
  }
}

export default AppComponent;
