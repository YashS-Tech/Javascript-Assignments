import axios from 'axios';

axios.get('https://api.github.com/gists/public')
  .then(response => {
    const gists = response.data.slice(0, 5);
    console.log(gists);
  })
  .catch(error => {
    console.error(error);
  });
