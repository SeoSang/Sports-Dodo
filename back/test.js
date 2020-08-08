const { getLastFixtures, getNextFixtures } = require('./api/fixtures');

getLastFixtures(2, 5); // (프리미어리그 : 2) 최근 5경기 가져오기.
getNextFixtures(2642, 5); // 다음 5경기
