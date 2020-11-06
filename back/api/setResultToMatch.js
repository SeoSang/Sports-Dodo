const axios = require('axios');
const schedule = require('node-schedule');
const Match = require('../models/Match');
const Batting = require('../models/Batting');
const User = require('../models/User');

function reservePutResultToMatch() {
  var rule = new schedule.RecurrenceRule();
  rule.hour = 00;
  rule.minute = 01;

  schedule.scheduleJob(rule, function () {
    putResultToMatch();
  });
  console.log('reserved getting result everyday 00:01:00');

  rule.minute = 02;
  schedule.scheduleJob(rule, function () {
    putResultToBattingAndUser();
    console.log;
  });
  console.log(
    'reserved calculating result to battings and users everyday 00:02:00'
  );
}

async function putResultToMatch() {
  // Get today's matchs
  let todayMatchs = await getTodaysMatchs();
  console.log(todayMatchs);

  for (let i = 0; i < todayMatchs.length; i++) {
    let finishTime = new Date(todayMatchs[i].finishTime);

    var dateForMatch = new Date(
      2020,
      finishTime.getMonth(),
      finishTime.getDate(),
      finishTime.getHours(),
      finishTime.getMinutes()
    );

    // // 결과가져오는 것과 결과를 베팅을 계산하는 데에 시간 텀을 주기 위해 1분 추가했습니다.
    // let battingTime = finishTime.setMinutes(this.finishTime.getMinutes() + 1);

    // var dateForBatting = new Date(
    // 	2020,
    // 	finishTime.getMonth(),
    // 	finishTime.getDate(),
    // 	finishTime.getHours(),
    // 	battingTime.getMinutes()
    // )

    // * FOR TEST
    // var date = new Date();
    // date.setSeconds(date.getSeconds() + 15);
    // console.log(date);
    // console.log(todayMatchs[i].idForFAPI);

    schedule.scheduleJob(dateForMatch, function () {
      bringFinishedDataAndEditMatch(todayMatchs.idForFAPI);
      // bringFinishedDataAndEditMatch(157215); // * FOR Test
    });
  }
}

async function putResultToBattingAndUser() {
  // Get today's matchs
  let todayMatchs = await getTodaysMatchs();
  console.log(todayMatchs);

  for (let i = 0; i < todayMatchs.length; i++) {
    let finishTime = new Date(todayMatchs[i].finishTime);

    var dateForBatting = new Date(
      2020,
      finishTime.getMonth(),
      finishTime.getDate(),
      finishTime.getHours(),
      finishTime.getMinutes()
    );

    schedule.scheduleJob(dateForBatting, function () {
      calculateBattingResultOfEachMatch(
        todayMatchs[i]._id,
        todayMatchs[i].result
      );
    });
  }
}

// // 00:02 시에 시작하게 설정.
// async function putResultToBattingAndUserTest() {

// 	// Get today's matchs
// 	// let todayMatchs = await getTodaysMatchs();
// 	// console.log(todayMatchs);

// 	let todayMatchs = [{
// 		"status": "Match Finished",
// 		"goalsHomeTeam": 2,
// 		"goalsAwayTeam": 4,
// 		"result": "Draw",
// 		"_id": "5f4a3e2c60d7215bd4bd330f",
// 		"homeTeam": "Gwangju FC",
// 		"awayTeam": "Jeonbuk Motors",
// 		"startTime": "2020-09-12T07:30:00+00:00",
// 		"idForFAPI": 490814,
// 		"finishTime": "2020-08-31T08:27:20.000Z",
// 		"__v": 0
// 	},];

// 	for (let i = 0; i < todayMatchs.length; i++) {
// 		let finishTime = new Date(todayMatchs[i].finishTime)
// 		console.log(finishTime);

// 		var dateForBatting = new Date(
// 			2020,
// 			finishTime.getMonth(),
// 			finishTime.getDate(),
// 			finishTime.getHours(),
// 			finishTime.getMinutes(),
// 			finishTime.getSeconds()
// 		)
// 		console.log('dateForBatting ' + dateForBatting);

// 		schedule.scheduleJob(dateForBatting, function () {
// 			calculateBattingResultOfEachMatch(todayMatchs[i]._id, todayMatchs[i].result);
// 		});
// 	}
// }

async function calculateBattingResultOfEachMatch(matchId, matchResult) {
  console.log('matchResult');
  console.log(`[1] ${matchResult}`);

  // 한경기의 총 점수들 계산.
  const totalPoints = await totalPointsForAMatch(matchId); // hT / aT / dT / aT
  console.log('totalPoint : ' + totalPoints);
  console.log(`[2] ${totalPoints}`); //확인하기

  // 한경기에 대한 베팅들 가져오기.
  let battings = await Batting.find({ match: matchId });
  console.log(`[3] ${battings}`);

  // 가져온 베팅들에 경기 결과 update.
  for (let j = 0; j < battings.length; j++) {
    // batting.matchResult 설정.
    let checkBattingChanged = await Batting.findByIdAndUpdate(battings[j]._id, {
      matchResult: matchResult,
    });
    // console.log('checkBattingChanged : ' + checkBattingChanged);
    console.log(`[4] checkBatting Changed : ${checkBattingChanged}`);

    let plusPoint = 0;

    // plus 포인트 계산.
    if (battings[j].chooseHomeAwayDraw == battings[j].matchResult) {
      // batting.chooseHAD == batting.matchResult
      if ((matchResult = 'Home')) {
        // console.log('2222222222222')
        // console.log(battings[j].battingPoint)
        // console.log(totalPoints.homeTotalPoint)
        // console.log(totalPoints.allTotalPoint)
        plusPoint =
          (battings[j].battingPoint / totalPoints.homeTotalPoint) *
          totalPoints.allTotalPoint; // if matchResult = home => homeTotalPoint
      } else if ((matchResult = 'Away')) {
        plusPoint =
          (battings[j].battingPoint / totalPoints.awayTotalPoint) *
          totalPoints.allTotalPoint;
      } else {
        plusPoint =
          (battings[j].battingPoint / totalPoints.drawTotalPoint) *
          totalPoints.allTotalPoint;
      }
      plusPoint = Math.ceil(plusPoint); // 소수점 올림.

      console.log('plusPoint : ' + plusPoint);

      // 각 베팅의 결과 입력.
      await Batting.findByIdAndUpdate(
        battings[j]._id,
        { battingResult: true, $inc: { resultPoint: `${plusPoint}` } },
        { new: true }
      );

      // 맞춘사람에게 포인트 주기.
      let checkUserChanged = await User.findByIdAndUpdate(
        battings[j].user,
        { $inc: { point: `${plusPoint}` } },
        { new: true }
      );
      console.log(`[5] checkUserChanged : ${checkUserChanged}`);
    } else {
      await Batting.findByIdAndUpdate(
        battings[j]._id,
        { battingResult: false },
        { new: true }
      );
    }
  }
}

async function getTodaysMatchs() {
  date = new Date();
  gtTime = date.toISOString().slice(0, 11) + '00:00:00';
  lteTime = date.toISOString().slice(0, 11) + '59:59:59';

  // * FOR TEST
  // date = new Date("2020-01-01T21:50:00.000Z");
  // gtTime = date.toISOString().slice(0, 11) + "00:00:00"
  // lteTime = date.toISOString().slice(0, 11) + "59:59:59"
  // console.log(gtTime + ' ' + lteTime);

  let matchs = await Match.find({
    startTime: {
      $gt: `${gtTime}`,
      $lte: `${lteTime}`,
    },
  })
    .sort({ startTime: 1 })
    .select('status _id idForFAPI finishTime');

  return matchs;
}

async function bringFinishedDataAndEditMatch(idForFAPI) {
  try {
    const response = await axios({
      method: 'get',
      url: `https://api-football-v1.p.rapidapi.com/v2/fixtures/id/${idForFAPI}?timezone=Asia/Seoul`,
      headers: {
        'Content-Type': 'application/json',
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
        'x-rapidapi-key': process.env.API_KEY,
      },
    });

    const {
      status,
      goalsHomeTeam,
      goalsAwayTeam,
    } = response.data.api.fixtures[0];

    // * 110분만에 안끝났으면 다시 실행하게끔 설정하는 부분.
    if (status !== 'Match Finished') {
      setTimeout(() => bringFinishedDataAndEditMatch(idForFAPI), 1200000);
    }

    let result;

    if (goalsHomeTeam > goalsAwayTeam) {
      result = 'HomeWin';
    } else if (goalsHomeTeam < goalsAwayTeam) {
      result = 'AwayWin';
    } else {
      result = 'Draw';
    }

    let changingData = {
      status: status,
      goalsHomeTeam: goalsHomeTeam,
      goalsAwayTeam: goalsAwayTeam,
      result: result,
    };

    // await Match.findByIdAndUpdate(matchId, changingData);
    await Match.findOneAndUpdate({ idForFAPI: idForFAPI }, changingData);
  } catch (error) {
    console.error(error);
  }
}

totalPointsForAMatch = async (matchId) => {
  const battings = await Batting.find({ match: matchId });

  let homeTotalPoint = 0;
  let awayTotalPoint = 0;
  let drawTotalPoint = 0;

  for (let i = 0; i < battings.length; i++) {
    if (battings[i].chooseHomeAwayDraw === 'Home') {
      homeTotalPoint += battings[i].battingPoint;
    } else if (battings[i].chooseHomeAwayDraw === 'Away') {
      awayTotalPoint += battings[i].battingPoint;
    } else {
      drawTotalPoint += battings[i].battingPoint;
    }
  }

  const allTotalPoint = homeTotalPoint + awayTotalPoint + drawTotalPoint;

  let points = {
    homeTotalPoint: homeTotalPoint,
    awayTotalPoint: awayTotalPoint,
    drawTotalPoint: drawTotalPoint,
    allTotalPoint: allTotalPoint,
  };
  console.log(points);

  return points;
};

module.exports.bringFinishedDataAndEditMatch = bringFinishedDataAndEditMatch;
module.exports.getTodaysMatchs = getTodaysMatchs;
module.exports.putResultToMatch = putResultToMatch;
module.exports.reservePutResultToMatch = reservePutResultToMatch;
// module.exports.putResultToBattingAndUserTest = putResultToBattingAndUserTest;
module.exports.putResultToBattingAndUser = putResultToBattingAndUser;
