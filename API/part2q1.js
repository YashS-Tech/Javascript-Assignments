//I have solved these question in 2 ways for practice
//In 1st solution I HAVE TAKEN HARDCODED values 
//In 2nd solution I HAVE MADE AN API CALL to GITHUB GISTS AND CARRIED OUT SIMILAR OPERATIONS

//sOLUTION 1
const users = [
    { name: "Yashraj", website: "https://www.live.org" },
    { name: "Akash", website: "https://www.case.com" },
    { name: "Raj", website: "https://www.helper.org" },
    { name: "Ruturaj", website: "https://www.doctor.net" }
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
//  ----------------------------------------------------------------------------------

//sOLUTION 2
const axios = require("axios");

// I have used a function to filter users by website domain
function filterUsersByDomain(users, domain) {
  return new Promise((resolve, reject) => {
    const filteredUsers = users.filter(user => {
      const regex = new RegExp(`\\.${domain}$`, "i");
      return regex.test(user.html_url);
    });

    if (filteredUsers.length > 0) {
      resolve(filteredUsers);
    } else {
      reject(`No users found with ${domain} domain.`);
    }
  });
}


axios.get("https://api.github.com/gists/public")
  .then(response => {
    // Filter users with website containing ".org" domain
    const usersWithOrgDomain = response.data.filter(user => {
      const regex = new RegExp("\\.org$", "i");
      return regex.test(user.html_url);
    });

    // A call to  filterUsersByDomain with the filtered users and ".org" domain
    return filterUsersByDomain(usersWithOrgDomain, "org");
  })
  .then(filteredUsers => {
    console.log(filteredUsers);
  })
  .catch(error => {
    console.error(error);
  });