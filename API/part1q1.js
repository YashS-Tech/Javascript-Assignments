
const axios = require('axios');


axios.get('https://api.github.com')
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
