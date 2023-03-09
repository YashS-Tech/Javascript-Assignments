const axios = require('axios');
axios.get('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    const users = response.data;
    const promises = [];
    
    users.forEach((user) => {
      promises.push(axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`));
    });
   
    Promise.all(promises)
      .then((responses) => {
        const posts = [];
        // i have used forEach to iterate over each response and add the desired object for each post to the posts array
        responses.forEach((response, index) => {
          response.data.forEach((post) => {
            posts.push({
              userId: users[index].id,
              postId: post.id,
              title: post.title,
              body: post.body,
              name: users[index].name,
              username: users[index].username,
              email: users[index].email,
              city: users[index].address.city,
              zipcode: users[index].address.zipcode,
              phone: users[index].phone,
              website: users[index].website,
              company: users[index].company
            });
          });
        });
        
        console.log(posts);
      })
      .catch((error) => {
        console.error(error);
      });
  })
  .catch((error) => {
    console.error(error);
  });