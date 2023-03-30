const axios = require("axios");

// i have made an API call to https://jsonplaceholder.typicode.com/users using Axios
axios.get("https://jsonplaceholder.typicode.com/users")
  .then(response => {
    const sum = response.data.reduce((accumulator, user) => accumulator + user.id, 0);
    console.log(`Summation of all user IDs: ${sum}`);
  })
  .catch(error => {
    console.error(error);
  });
