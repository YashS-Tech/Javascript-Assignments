import axios from 'axios';

async function getData() {
  try {
    const response = await axios.get('https://api.github.com');
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

getData();