const axios = require('axios');
axios.get('https://api.github.com/gists/public')
  .then(function (response) {
    
    const gistFilesCount = response.data.map(gist => {
      return {
        id: gist.id,
        files_count: Object.keys(gist.files).length
      }
    });

   
    console.log(gistFilesCount);
  })
  .catch(function (error) {
    console.log(error);
  });
