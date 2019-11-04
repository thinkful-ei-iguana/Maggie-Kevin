const BASE_URL = 'https://thinkful-list-api.herokuapp.com/kevin';

const getItems = function() {
  return fetch(`${BASE_URL}/items`);
  // .then(res => res.json())
  // .then(res => console.log(res))
  // return Promise.resolve('A successful response!');
  
};

const createItem = function(name) {
  let newItem = JSON.stringify({
    name: name
  });

  return fetch(`${BASE_URL}/items`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: newItem
  });

};

const updateItem = function(id, updateData) {
  return fetch(`${BASE_URL}/items/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updateData)
  });
};

export default {
  getItems,
  createItem,
  updateItem
};
