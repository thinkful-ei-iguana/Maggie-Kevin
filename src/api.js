const BASE_URL = 'https://thinkful-list-api.herokuapp.com/kevin';

const getItems = function () {
  fetch(`${BASE_URL}/items`)
    .then(res => res.json())
    .then(res => console.log(res));
  return Promise.resolve('A successful response!');
};

export default {
  getItems
};
