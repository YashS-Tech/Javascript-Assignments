const axios = require('axios');
const url = 'https://api.github.com/gists/public';

axios.get(url)
  .then(response => {
    const data = response.data.slice(0, 5);
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
