const axios = require('axios');
axios.get('https://api.github.com/gists/public')
  .then(function (response) {
    // i have used it to Extract the relevant data from the response
    const gists = response.data.map(gist => {
      return {
        id: gist.id,
        owner_id: gist.owner.id,
        owner_login: gist.owner.login,
        owner_url: gist.owner.url,
        filename: Object.keys(gist.files)[0],
        filesize: gist.files[Object.keys(gist.files)[0]].size
      }
    });

    
    console.log(gists);
  })
  .catch(function (error) {
    console.log(error);
  });
