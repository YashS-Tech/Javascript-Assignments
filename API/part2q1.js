const axios = require("axios");

// i have used a function to filter users by website domain
function filterUsersByDomain(users, domain) {
  return new Promise((resolve, reject) => {
    const filteredUsers = users.filter(user => {
      const regex = new RegExp(`\\.${domain}$`, "i");
      return regex.test(user.website);
    });

    if (filteredUsers.length > 0) {
      resolve(filteredUsers);
    } else {
      reject(`No users found with ${domain} domain.`);
    }
  });
}

// i have made an API call to https://jsonplaceholder.typicode.com/users using Axios
axios.get("https://jsonplaceholder.typicode.com/users")
  .then(response => {
    // Filter users with website containing ".org" domain
    const usersWithOrgDomain = response.data.filter(user => {
      const regex = new RegExp("\\.org$", "i");
      return regex.test(user.website);
    });

    // i have called filterUsersByDomain with the filtered users and ".org" domain
    return filterUsersByDomain(usersWithOrgDomain, "org");
  })
  .then(filteredUsers => {
    console.log(filteredUsers);
  })
  .catch(error => {
    console.error(error);
  });