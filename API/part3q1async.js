const axios = require('axios');

async function getUsers() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const users = response.data;
    console.log(users);
  } catch (error) {
    console.error(error);
  }
}

getUsers();
