import React, { Component } from 'react';

export default class GetNewData extends Component {
  render() {
    const { date, handleSubmit } = this.props;
    return (
      <div>
        {date ? (
          <p>Данные актуальны на - {date}</p>
        ) : (
          <p>
            Если данные не появятся через несколько секунд, нажмите "Обновить"
          </p>
        )}
        <button onClick={handleSubmit}>Обновить</button>
      </div>
    );
  }
}
