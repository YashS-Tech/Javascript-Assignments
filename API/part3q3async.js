const axios = require('axios');

async function getDesiredObjectForPosts() {
  try {
    const usersResponse = await axios.get('https://jsonplaceholder.typicode.com/users');
    const users = usersResponse.data;
    const posts = [];

    for (const user of users) {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
      const userPosts = response.data;
      
      for (const post of userPosts) {
        const desiredObject = {
          userId: post.userId,
          postId: post.id,
          title: post.title,
          body: post.body,
          name: user.name,
          username: user.username,
          email: user.email,
          city: user.address.city,
          zipcode: user.address.zipcode,
          phone: user.phone,
          website: user.website,
          company: user.company.name,
        };
        posts.push(desiredObject);
      }
    }

    console.log(posts);
  } catch (error) {
    console.error(error);
  }
}

getDesiredObjectForPosts();
