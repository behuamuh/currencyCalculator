export const DATA_REQUEST = 'DATA_REQUEST';

export const DATA_RECEIVE = 'DATA_RECEIVE';

export const ERROR = 'ERROR';

const URL = 'https://www.cbr-xml-daily.ru/daily_json.js';

export const dataRequest = () => {
  return { type: DATA_REQUEST };
};

export const dataReceive = (date, valute) => {
  return {
    type: DATA_RECEIVE,
    date,
    valute,
  };
};

export const dataError = () => {
  return { type: ERROR };
};

export const getNewData = () => dispatch => {
  dispatch(dataRequest());

  //Исскуственно создаю задержку при загрузке данных,
  //чтобы визуализировать поведение при ожидании данных.
  //для работы убрать setTimeout
  setTimeout(
    () =>
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

          dispatch(dataReceive(data.Date, valutes));
        })
        .catch(error => {
          dispatch(dataError());
        }),
    1000
  );
};
