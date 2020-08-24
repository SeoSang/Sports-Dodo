const express = require('express');
const router = express.Router({ mergeParams: true });
const asyncHandler = require('../middlewares/async');
const ErrorResponse = require('../utils/errorResponse');
const Match = require('../models/Match');

exports.createMatch = asyncHandler(async (req, res, next) => {
    // const homeTeam = req.body.homeTeam;
    // const awayTeam = req.body.awayTeam;
    // const startTime = req.body.startTime;
    // const result = req.body.result; // 경기 시작전에는 "undefined"

    const match = await Match.create(req.body);
    console.log(match);
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
    res.status(200).json(res.advancedResults);
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