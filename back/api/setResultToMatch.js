const axios = require('axios');
const schedule = require('node-schedule');
const Match = require('../models/Match');

function reservePutResultToMatch() {
	var rule = new schedule.RecurrenceRule();
	rule.hour = 00;
	rule.minute = 01;

	schedule.scheduleJob(rule, function () {
		putResultToMatch();
	});
	console.log('reserved getting result everyday 00:01:00');
}


async function putResultToMatch() {

	// Get today's matchs
	let todayMatchs = await getTodaysMatchs();
	console.log(todayMatchs);

	for (let i = 0; i < todayMatchs.length; i++) {
		let finishTime = new Date(todayMatchs[i].finishTime)

		var dateForMatch = new Date(
			2020,
			finishTime.getMonth(),
			finishTime.getDate(),
			finishTime.getHours(),
			finishTime.getMinutes()
		)

		// 결과가져오는 것과 결과를 베팅을 계산하는 데에 시간 텀을 주기 위해 1분 추가했습니다.
		let battingTime = finishTime.setMinutes(this.finishTime.getMinutes() + 1);

		var dateForBatting = new Date(
			2020,
			finishTime.getMonth(),
			finishTime.getDate(),
			finishTime.getHours(),
			battingTime.getMinutes()
		)

		// * FOR TEST
		// var date = new Date();
		// date.setSeconds(date.getSeconds() + 15);
		// console.log(date);
		// console.log(todayMatchs[i].idForFAPI);

		schedule.scheduleJob(dateForMatch, function () {
			bringFinishedDataAndEditMatch(todayMatchs.idForFAPI);
			// bringFinishedDataAndEditMatch(157215); // * FOR Test
		})

		// ! 매치 한개에 대한 결과를 가져 왔으니 결과가 생긴 매치에 대한 베팅을 여기서 부터 어찌 해야한다.
		schedule.scheduleJob(dateForBatting, function () {
			// 유저 베팅에 대한 결과를 처리하는 함수.
		})
	}
}


async function getTodaysMatchs() {
	date = new Date();
	gtTime = date.toISOString().slice(0, 11) + "00:00:00"
	lteTime = date.toISOString().slice(0, 11) + "59:59:59"

	// * FOR TEST
	// date = new Date("2020-01-01T21:50:00.000Z");
	// gtTime = date.toISOString().slice(0, 11) + "00:00:00"
	// lteTime = date.toISOString().slice(0, 11) + "59:59:59"
	// console.log(gtTime + ' ' + lteTime);

	let matchs = await Match
		.find({
			"startTime":
			{
				"$gt": `${gtTime}`,
				"$lte": `${lteTime}`
			}
		})
		.sort({ "startTime": 1 })
		.select("status _id idForFAPI finishTime");

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
				'x-rapidapi-key': process.env.API_KEY
			}
		})

		const { status, goalsHomeTeam, goalsAwayTeam } = response.data.api.fixtures[0];


		// * 110분만에 안끝났으면 다시 실행하게끔 설정하는 부분.
		if (status !== "Match Finished") {
			setTimeout(() => bringFinishedDataAndEditMatch(idForFAPI), 1200000);
		}

		let result;

		if (goalsHomeTeam > goalsAwayTeam) {
			result = 'HomeWin'
		} else if (goalsHomeTeam < goalsAwayTeam) {
			result = 'AwayWin';
		} else {
			result = 'Draw';
		}

		let changingData = {
			status: status,
			goalsHomeTeam: goalsHomeTeam,
			goalsAwayTeam: goalsAwayTeam,
			result: result
		}

		// await Match.findByIdAndUpdate(matchId, changingData);
		await Match.findOneAndUpdate({ "idForFAPI": idForFAPI }, changingData)
	} catch (error) {
		console.error(error);
	}
}


module.exports.bringFinishedDataAndEditMatch = bringFinishedDataAndEditMatch;
module.exports.getTodaysMatchs = getTodaysMatchs;
module.exports.putResultToMatch = putResultToMatch;
module.exports.reservePutResultToMatch = reservePutResultToMatch;