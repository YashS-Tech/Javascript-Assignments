import axios from 'axios';

async function getUserPosts(userId: number) {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

getUserPosts(1); 
