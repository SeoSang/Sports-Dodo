const express = require('express');
const router = express.Router({ mergeParams: true });
const asyncHandler = require('../middlewares/async');
const ErrorResponse = require('../utils/errorResponse');
const User = require('../models/User');
const Batting = require('../models/Batting');

exports.createBatting = asyncHandler(async (req, res, next) => {
    const user = req.user._id;
    const match = req.params.id;

    const chooseHomeAwayDraw = req.body.chooseHomeAwayDraw;
    const battingPoint = req.body.battingPoint;
    const description = req.body.description;

    const batting = await Batting.create({
        user: user,
        match: match,
        chooseHomeAwayDraw: chooseHomeAwayDraw,
        battingPoint: battingPoint,
        description: description
    });

    await User.findByIdAndUpdate(req.user._id, { $inc: { point: -`${battingPoint}` } }, { new: true });

    return res.status(201).json({
        success: true,
        data: batting
    })
})

// model에 index 넣어주면 더 빨라질듯함.
exports.getBattings = asyncHandler(async (req, res, next) => {
    const battings = await Batting.find({ match: req.params.id });

    //homeTotal, awayTotal, drawTotal Point 계산하기
    let homeTotalPoint = 0;
    let drawTotalPoint = 0;
    let awayTotalPoint = 0;

    for (let i = 0; i < battings.length; i++) {
        if (battings[i].chooseHomeAwayDraw === 'Home') {
            homeTotalPoint += battings[i].battingPoint;
        } else if (battings[i].chooseHomeAwayDraw === 'Away') {
            awayTotalPoint += battings[i].battingPoint;
        } else {
            drawTotalPoint += battings[i].battingPoint;
        }
    }

    return res.status(200).json({
        success: true,
        // data: battings,
        battingPoints: {
            homeTotalPoint: homeTotalPoint,
            awayTotalPoint: awayTotalPoint,
            drawTotalPoint: drawTotalPoint
        },
        howManyPeopleBatted: battings.length
    })
})

exports.getBatting = asyncHandler(async (req, res, next) => {
    const batting = await Batting.findById(req.params.id);

    if (!batting) {
        return next(
            new ErrorResponse(`No batting with the id of ${req.params.id}`, 404)
        )
    }

    //

    return res.status(200).json({
        success: true,
        batting: batting
    })
})

exports.editBatting = asyncHandler(async (req, res, next) => {
    let batting = await Batting.findById(req.params.id);

    if (!batting) {
        return next(
            new ErrorResponse(`No Batting with the id of ${req.params.id}`, 404)
        );
    }

    batting = await Batting.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    batting.save();

    res.status(200).json({
        success: true,
        data: batting
    })
})

exports.deleteBatting = asyncHandler(async (req, res, next) => {
    let batting = await Batting.findById(req.params.id);

    if (!batting) {
        return next(
            new ErrorResponse(`No Batting with the id of ${req.params.id}`, 404)
        );
    }

    // +battingPoint back to UserModel
    await User.findByIdAndUpdate(batting.user, { $inc: { point: +`${batting.battingPoint}` } }, { new: true })

    await Batting.deleteOne({ _id: req.params.id });

    res.status(200).json({
        success: true,
        data: {}
    })
})