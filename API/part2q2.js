const axios = require("axios");

// Function to add userInfo object to each user
function addUserInfo(users) {
  return new Promise((resolve, reject) => {
    const updatedUsers = users.map(user => {
      return {
        ...user,
        userInfo: {
          fullName: user.name,
          username: user.username,
          emailId: user.email,
          timeStamp: new Date().toISOString()
        }
      };
    });

    if (updatedUsers.length > 0) {
      resolve(updatedUsers);
    } else {
      reject(`No users found to update.`);
    }
  });
}

// I have made an API call to https://jsonplaceholder.typicode.com/users 
axios.get("https://jsonplaceholder.typicode.com/users")
  .then(response => {
    // I have called addUserInfo function with the user data
    return addUserInfo(response.data);
  })
  .then(updatedUsers => {
    console.log(updatedUsers);
  })
  .catch(error => {
    console.error(error);
  });
