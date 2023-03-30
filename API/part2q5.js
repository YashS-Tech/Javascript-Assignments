const axios = require("axios");

// I have made an API call to https://jsonplaceholder.typicode.com/users using Axios
axios.get("https://jsonplaceholder.typicode.com/users")
  .then(response => {
    const keyValuePairs = response.data.reduce((accumulator, user) => {
      accumulator[user.username] = user.email;
      return accumulator;
    }, {});
    console.log(keyValuePairs);
  })
  .catch(error => {
    console.error(error);
  });
