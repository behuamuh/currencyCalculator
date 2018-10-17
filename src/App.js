import React, { Component } from 'react';
import './App.css';
import GetNewData from './GetNewData';
import Calculator from './Calculator';

const URL = 'https://www.cbr-xml-daily.ru/daily_json.js';

class App extends Component {
  state = {
    date: '',
    valute: [],
  };

  getNewData = () => {
    fetch(URL)
      .then(responce => responce.json())
      .then(data => {
        const valutes = [];
        for (let i in data.Valute) {
          valutes.push(data.Valute[i]);
        }
        valutes.push({
          ID: '1',
          NumCode: '',
          CharCode: 'RUB',
          Nominal: 1,
          Name: '',
          Value: 1,
          Previous: 1,
        });
        this.setState({
          date: data.Date,
          valute: valutes,
        });
      })
      .catch(error => {
        alert(`Не удалось обновить данные.
        Попробуйте позже.
        Ошибка - ${error}`);
      });
  };

  componentDidMount() {
    this.getNewData();
  }

  render() {
    const { date, valute } = this.state;
    return (
      <div className="App">
        <h1>Калькулятор валют</h1>
        <GetNewData date={date} handleSubmit={this.getNewData} />
        <Calculator currents={valute} />
      </div>
    );
  }
}

export default App;
