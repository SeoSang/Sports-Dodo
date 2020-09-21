// var request = require('supertest');
var expect = require('chai').expect;
const { mockResponseLeague2Date20180811 } = require('../utils/mockDatas');

// bringMatchFromAPI(league_id, date)
describe('Get Matchs from Football API', () => {
  it('Test for Test', () => {
    // const response = await axios({
    //     method: 'get',
    //     url: `https://api-football-v1.p.rapidapi.com/v2/fixtures/league/${league_id}/${date}?timezone=Asia/Seoul`,
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
    //       'x-rapidapi-key': process.env.API_KEY
    //     }
    //   })

    // Get mock data 'https://api-football-v1.p.rapidapi.com/v2/fixtures/league/2/2018-08-11?timezone=Asia/Seoul'
    const response = mockResponseLeague2Date20180811;
    expect(response.api.fixtures[0].league_id).to.be.equal(2);

    expect('a').to.be.equal('b');
  });
});
