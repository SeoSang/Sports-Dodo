const axios = require('axios');
const schedule = require('node-schedule');
const Match = require('../models/Match');


//ex: league_id = '2', date = 'YYYY-MM-DD'
async function bringMatchFromAPI(league_id, date) {
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

let bringThreeDayLaterMatchs = () => {
  let TODAY = new Date();
  let threeDayLaterDate = TODAY.getFullYear() + '-' + (TODAY.getMonth() + 1) + '-' + (TODAY.getDate() + 3)

  var rule = new schedule.RecurrenceRule();

  rule.hour = 11;
  rule.minute = 0;

  schedule.scheduleJob(rule, function () {
    bringMatchFromAPI('2', threeDayLaterDate);
    console.log('did bring 3days later matchs');
  });
}

module.exports.bringMatchFromAPI = bringMatchFromAPI;
module.exports.bringThreeDayLaterMatchs = bringThreeDayLaterMatchs;