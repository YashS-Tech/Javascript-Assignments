const axios = require('axios');
axios.get('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    const users = response.data;
    const promises = [];
    // i have used forEach to iterate over each user and also created a promise to get thier posts.
    users.forEach((user) => {
      promises.push(axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`));
    });
    // Wait for all promises to resolve using Promise.all()
    Promise.all(promises)
      .then((responses) => {
    
        const postsPerUser = responses.map((response) => response.data);
        console.log(postsPerUser);
      })
      .catch((error) => {
        console.error(error);
      });
  })
  .catch((error) => {
    console.error(error);
  });
