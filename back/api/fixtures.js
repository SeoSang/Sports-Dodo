const axios = require('axios');

const { API_URL, API_KEY } = require('./index');

/** @ leagueID = 리그 고유 아이디, number = 몇개 가져올지 */
async function getLastFixtures(leagueID, number) {
  const FULL_URL = `${API_URL}/fixtures/league/${leagueID}/last/${number}`;
  try {
    const result = await axios({
      method: 'GET',
      url: FULL_URL,
      headers: {
        'content-type': 'application/octet-stream',
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
        'x-rapidapi-key': `${API_KEY}`,
        useQueryString: true,
      },
    });
    console.log(result.data.api.fixtures);
    return result.data.api.fixtures;
  } catch (e) {
    console.error(e);
  }
}
async function getNextFixtures(leagueID, number) {
  const FULL_URL = `${API_URL}/fixtures/league/${leagueID}/next/${number}`;
  try {
    const result = await axios({
      method: 'GET',
      url: FULL_URL,
      headers: {
        'content-type': 'application/octet-stream',
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
        'x-rapidapi-key': `${API_KEY}`,
        useQueryString: true,
      },
    });
    console.log(result.data.api.fixtures);
    return result.data.api.fixtures;
  } catch (e) {
    console.error(e);
  }
}

exports.getLastFixtures = getLastFixtures;
exports.getNextFixtures = getNextFixtures;
