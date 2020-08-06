// 조만간 시작하는 경기들을 가져온다.
const axios = require('axios');

const { API_URL, API_KEY } = require('./index');

module.exports = {
  upcoming: async () => {
    return await axios({
      method: 'GET',
      url: `${API_URL}/leagues`,
      headers: {
        'content-type': 'application/octet-stream',
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
        'x-rapidapi-key': `${API_KEY}`,
        useQueryString: true,
      },
    })
      .then(response => {
        console.table(response.data.api.leagues);
      })
      .catch(error => {
        console.log(error);
      });
  },
};
