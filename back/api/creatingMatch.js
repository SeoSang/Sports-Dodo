const Match = require("../models/Match");

const league_id = epl_id;   // 수정
const date = Date.now + '1day'; // 수정

async () => {
    // football API 에서 내일 경기 받아오기.
    const getMatchs = await axios({
        method: 'GET',
        url: `${API_URL}/fixtures/league/{league_id}/{date}?timezone=Europe/London`,
        headers: {
        'content-type': 'application/octet-stream',
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
        'x-rapidapi-key': `${API_KEY}`,
        }
    })

    // 내일 경기 만들기. 
    for (let i in getMatchs.data.api.fixtures.length) {
        const inputData = {
            homeTeam: getMatchs.data.api.fixtures[i].homeTeam.team_name,
            awayTeam: getMatchs.data.api.fixtures[i].awayTeam.team_name,
            startTime: getMatchs.data.api.fixtures[i].event_date + getMatchs.data.api.fixtures[0].event_timestamp
        }

        const newMatchs = new Array();

        newMatchs.push(inputData);

        await Match.insertMany(newMatchs);
    }
}
