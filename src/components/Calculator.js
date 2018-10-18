import React, { Component } from 'react';

export default class Calculator extends Component {
  state = {
    inCurrent: 'RUB',
    toCurrent: 'RUB',
    input: '',
    result: '',
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  getValue = () => {
    const { currents } = this.props;
    const { inCurrent, toCurrent, input } = this.state;
    const inVal = +input;
    // eslint-disable-next-line
    if (inVal !== inVal) {
      alert('Incorrect number');
      return;
    }
    const result =
      (currents.find(current => current.CharCode === inCurrent).Value * inVal) /
      currents.find(current => current.CharCode === toCurrent).Value;
    this.setState({ result });
  };

  render() {
    const { currents } = this.props;
    const { inCurrent, toCurrent, input, result } = this.state;
    const list = currents.map(current => {
      return <option key={current.ID}>{current.CharCode}</option>;
    });
    return (
      <div>
        <input
          name="input"
          type="text"
          value={input}
          onChange={this.handleChange}
        />
        <br />
        Исходная валюта
        <select name="inCurrent" value={inCurrent} onChange={this.handleChange}>
          {list}
        </select>
        <br />
        Валюта назначения
        <select name="toCurrent" value={toCurrent} onChange={this.handleChange}>
          {list}
        </select>
        <br />
        <button onClick={this.getValue}>Посчитать</button>
        <p>{result}</p>
      </div>
    );
  }
}
