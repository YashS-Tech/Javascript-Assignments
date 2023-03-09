const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    const users = response.data;
    console.log(users);
  })
  .catch((error) => {
    console.error(error);
  });
