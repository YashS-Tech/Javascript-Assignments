const axios = require('axios');

async function getAllPosts() {
  try {
    const usersResponse = await axios.get('https://jsonplaceholder.typicode.com/users');
    const users = usersResponse.data;
    const posts = [];

    for (const user of users) {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
      const userPosts = response.data;
      posts.push(...userPosts);
    }

    console.log(posts);
  } catch (error) {
    console.error(error);
  }
}

getAllPosts();
