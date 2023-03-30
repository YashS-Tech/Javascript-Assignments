const axios = require("axios");

// I have made an API call to https://jsonplaceholder.typicode.com/users 
axios.get("https://jsonplaceholder.typicode.com/users")
  .then(response => {
    const user = response.data.find(user => user.email === "Nathan@yesenia.net");

    if (user) {
      console.log(user);
    } else {
      throw new Error(`No user found with email address Nathan@yesenia.net.`);
    }
  })
  .catch(error => {
    console.error(error);
  });