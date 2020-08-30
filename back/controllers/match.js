const express = require('express');
const router = express.Router({ mergeParams: true });
const asyncHandler = require('../middlewares/async');
const ErrorResponse = require('../utils/errorResponse');
const Match = require('../models/Match');
const { getHashes } = require('crypto');

exports.createMatch = asyncHandler(async (req, res, next) => {
	// const homeTeam = req.body.homeTeam;
	// const awayTeam = req.body.awayTeam;
	// const startTime = req.body.startTime;
	// const result = req.body.result; // 경기 시작전에는 "undefined"

	const match = await Match.create(req.body);

	return res.status(201).json({
		success: true,
		data: match
	})
})

// exports.getMatchs = asyncHandler(async (req, res, next) => {
//     const matchs = await Match.find({}); // query 추가~~

//     res.status(200).json({
//         success: true,
//         data: matchs
//     })
// })

exports.getMatchs = asyncHandler(async (req, res, next) => {
	// '/api/match?startindex=7
	let query;

	// Copy req.query
	const reqQuery = { ...req.query };

	// Fields to exclude
	const removeFields = ['select', 'sort', 'limit', 'startindex'];

	// Loop over removeFields and delete them from reqQuery
	removeFields.forEach(param => delete reqQuery[param]);

	// Create query string
	let queryStr = JSON.stringify(reqQuery);

	// Create operators ($gt, $gte, etc)
	queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);

	// Finding resource
	query = Match.find(JSON.parse(queryStr));

	// Sort
	if (req.query.sort) {
		const sortBy = req.query.sort.split(',').join(' ');
		query = query.sort(sortBy);
	} else {
		query = query.sort('startTime _id');
	}

	// Pagination
	// const page = parseInt(req.query.page, 10) || 1;
	const limit = parseInt(req.query.limit, 10) || 3;
	const startIndex = parseInt(req.query.startindex);
	const endIndex = startIndex + 10;
	const total = await Match.countDocuments(JSON.parse(queryStr));

	query = query.skip(startIndex - 1).limit(limit);

	// Executing query
	const results = await query;

	//check can load more
	let hasNext = false;

	if (endIndex < total) {
		hasNext = true;
	}

	res.status(200).json({
		success: true,
		count: results.length,
		nextStartIndex: endIndex,
		hasNext: hasNext,
		data: results
	});
});

exports.getMatch = asyncHandler(async (req, res, next) => {
	const match = await Match.findById(req.params.id);

	if (!match) {
		return next(
			new ErrorResponse(`No match with the id of ${req.params.id}`, 404)
		)
	}

	res.status(200).json({
		success: true,
		data: match
	})
});

exports.editMatch = asyncHandler(async (req, res, next) => {
	let match = await Match.findById(req.params.id);

	if (!match) {
		return next(
			new ErrorResponse(`No Match with the id of ${req.params.id}`, 404)
		);
	}

	match = await Match.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true
	});

	match.save();

	res.status(200).json({
		success: true,
		data: match
	});
})

exports.deleteMatch = asyncHandler(async (req, res, next) => {
	let match = Match.findById(req.params.id);

	if (!match) {
		return next(
			new ErrorResponse(`No match with the id of ${req.params.id}`, 404)
		)
	}

	await Match.deleteOne({ _id: req.params.id });

	res.status(200).json({
		success: true,
		data: {}
	});
});


// 종료된 것들 추려낸 뒤에 정보가져와서 match result 관련 필드들 변경하기.
exports.setResultsToMatch = asyncHandler(async (req, res, next) => {
	let match = Match.findById(req.params.id);

	if (!match) {
		return next(
			new ErrorResponse(`No match with the id of ${req.params.id}`, 404)
		)
	}

	const { status, goalsHomeTeam, goalsAwayTeam } = response.data.api.fixtures[0];

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

	await Match.findByIdAndUpdate(changingData);
})