const axios = require('axios');
const Match = require('../models/Match');


//ex: league_id = '2', date = 'YYYY-MM-DD'
async function getMatchFromAPI(league_id, date){
  try {
    const response = await axios({
      method: 'get',
      url: `https://api-football-v1.p.rapidapi.com/v2/fixtures/league/${league_id}/${date}`,
      headers: {
        'Content-Type': 'application/json',
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
        'x-rapidapi-key': process.env.API_KEY
      }
    })

    const newMatchs = new Array();

    for (let i = 0; i < response.data.api.fixtures.length; i++) {
        const inputData = {
            homeTeam: response.data.api.fixtures[i].homeTeam.team_name,
            awayTeam: response.data.api.fixtures[i].awayTeam.team_name,
            startTime: response.data.api.fixtures[i].event_date,
        }

        newMatchs.push(inputData);
    }

    console.log(newMatchs);

    const res = await Match.insertMany(newMatchs);
    console.log('print response');
    console.log(res);


  } catch (error) {
    console.error(error);
  }
}

module.exports.getMatchFromAPI = getMatchFromAPI;
