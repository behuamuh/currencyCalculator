import React, { Component } from 'react';

export default class GetNewData extends Component {
  render() {
    const { date, handleSubmit } = this.props;
    return (
      <div>
        <p>Данные актуальны на - {date}</p>
        <button onClick={handleSubmit}>Обновить</button>
      </div>
    );
  }
}
