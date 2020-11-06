const axios = require('axios');
const schedule = require('node-schedule');
const Match = require('../models/Match');
const { create } = require('../models/Match');

//ex: league_id = '2', date = 'YYYY-MM-DD'
async function bringMatchFromAPI(league_id, date) {
  try {
    const response = await axios({
      method: 'get',
      url: `https://api-football-v1.p.rapidapi.com/v2/fixtures/league/${league_id}/${date}?timezone=Asia/Seoul`,
      headers: {
        'Content-Type': 'application/json',
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
        'x-rapidapi-key': process.env.API_KEY,
      },
    });

    // console.log('1111')
    // const newMatchs = new Array();

    for (let i = 0; i < response.data.api.fixtures.length; i++) {
      console.log(response.data.api.fixtures[i].homeTeam.team_id);
      console.log('111');
      // homeTeamInfo = { 1: '1', 2: '2' };
      // awayTeamInfo = { 1: '1', 2: '2' };
      homeTeamInfo = await getHomeTeamInfo(
        response.data.api.fixtures[i].homeTeam.team_id
      );
      console.log(homeTeamInfo);
      awayTeamInfo = await getAwayTeamInfo(
        response.data.api.fixtures[i].awayTeam.team_id
      );

      const inputData = {
        homeTeam: response.data.api.fixtures[i].homeTeam.team_name,
        homeTeamLogoUrl: response.data.api.fixtures[i].homeTeam.logo,
        awayTeam: response.data.api.fixtures[i].awayTeam.team_name,
        awayTeamLogoUrl: response.data.api.fixtures[i].awayTeam.logo,
        startTime: response.data.api.fixtures[i].event_date,
        idForFAPI: response.data.api.fixtures[i].fixture_id,
        venue: response.data.api.fixtures[i].venue,
        referee: response.data.api.fixtures[i].referee,
        round: response.data.api.fixtures[i].round,
        homeTeamIdInFAPI: response.data.api.fixtures[i].homeTeam.team_id,
        awayTeamIdInFAPI: response.data.api.fixtures[i].awayTeam.team_id,
        homeInfo: homeTeamInfo.data.api.statistics,
        awayInfo: awayTeamInfo.data.api.statistics,
      };

      // newMatchs.push(inputData);
      await Match.create(inputData);
    }

    for (let i = 0; i < response.data.api.fixtures.length; i++) {}
    //homeInfo: homeTeamInfo,
    //awayInfo: awayTeamInfo,

    // console.log(newMatchs);

    // const res = await Match.insertMany(newMatchs);
    // console.log('print response');
    // console.log(res);
  } catch (error) {
    console.error(error);
  }
}

let getHomeTeamInfo = async (teamId) => {
  teamId = teamId.toString();
  console.log(teamId);
  console.log('222222');
  try {
    const statisticsResponse = await axios({
      method: 'get',
      url: `https://api-football-v1.p.rapidapi.com/v2/statistics/2790/${teamId}`,
      headers: {
        'Content-Type': 'application/json',
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
        'x-rapidapi-key': process.env.API_KEY,
      },
    });

    return statisticsResponse;
  } catch (error) {
    console.log(error);
  }
};

let getAwayTeamInfo = async (teamId) => {
  try {
    const statisticsResponse = await axios({
      method: 'get',
      url: `https://api-football-v1.p.rapidapi.com/v2/statistics/2790/${teamId}`,
      headers: {
        'Content-Type': 'application/json',
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
        'x-rapidapi-key': process.env.API_KEY,
      },
    });

    return statisticsResponse;
  } catch (error) {
    console.log(error);
  }
};

let bringThreeDayLaterMatchs = () => {
  let TODAY = new Date();
  let threeDayLaterDate =
    TODAY.getFullYear() +
    '-' +
    (TODAY.getMonth() + 1) +
    '-' +
    (TODAY.getDate() + 3);

  var rule = new schedule.RecurrenceRule();
  rule.hour = 11;
  rule.minute = 00;
  // rule.second = 20;

  schedule.scheduleJob(rule, function () {
    // bringMatchFromAPI('524', '2020-01-01');
    bringMatchFromAPI('1336', threeDayLaterDate); // k leage :1336
    console.log('did bring 3days later matchs');
  });
  console.log('reserved bring3daylaterMatch');
};

module.exports.bringMatchFromAPI = bringMatchFromAPI;
module.exports.bringThreeDayLaterMatchs = bringThreeDayLaterMatchs;
