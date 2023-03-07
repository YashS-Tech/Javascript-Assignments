const users = [
    { name: "Yashraj", website: "https://www.example.org" },
    { name: "Akash", website: "https://www.example.com" },
    { name: "Raj", website: "https://www.example.org" },
    { name: "Ruturaj", website: "https://www.example.net" }
  ];
  
  // I have used these function to filter users by website domain
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
  
  //I have  called filterUsersByDomain with the users array and ".org" domain
  filterUsersByDomain(users, "org")
    .then(filteredUsers => {
      console.log(filteredUsers);
    })
    .catch(error => {
      console.error(error);
    });