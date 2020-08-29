const axios = require('axios');
const schedule = require('node-schedule');
const Match = require('../models/Match');

async function bringFinishedDataAndEditMatch(idForFAPI) {
	try {
		const response = await axios({
			method: 'get',
			url: `https://api-football-v1.p.rapidapi.com/v2/fixtures/id/${idForFAPI}`,
			headers: {
				'Content-Type': 'application/json',
				'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
				'x-rapidapi-key': process.env.API_KEY
			}
		})

		const { status, goalsHomeTeam, goalsAwayTeam } = response.data.api.fixtures[0];


		// ! 110만에 안끝났으면 다시 실행하게끔 설정하는 부분.
		// if( status !== "Match Finished") {
		// 	return new rule = ~
		// }

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

async function putResultToMatch() {

	// Get today's matchs
	let todayMatchs = await getTodaysMatchs();
	console.log(todayMatchs);

	for (let i = 0; i < todayMatchs.length; i++) {
		let finishTime = new Date(todayMatchs[i].finishTime)

		var date = new Date(
			2020,
			finishTime.getMonth(),
			finishTime.getDate(),
			finishTime.getHours(),
			finishTime.getMinutes()
		)

		// * FOR TEST
		// var date = new Date();
		// date.setSeconds(date.getSeconds() + 15);
		// console.log(date);
		// console.log(todayMatchs[i].idForFAPI);

		schedule.scheduleJob(date, function () {
			bringFinishedDataAndEditMatch(todayMatchs.idForFAPI);
			// bringFinishedDataAndEditMatch(157215); // * FOR Test
		})
	}
}

function reservePutResultToMatch() {
	var rule = new schedule.RecurrenceRule();
	rule.hour = 00;
	rule.minute = 01;


	schedule.scheduleJob(rule, function () {
		putResultToMatch();
	});
	console.log('reserved getting result everyday 00:01:00');
}

module.exports.bringFinishedDataAndEditMatch = bringFinishedDataAndEditMatch;
module.exports.getTodaysMatchs = getTodaysMatchs;
module.exports.putResultToMatch = putResultToMatch;
module.exports.reservePutResultToMatch = reservePutResultToMatch;