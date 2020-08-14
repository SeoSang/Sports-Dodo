const express = require('express');
const router = express.Router({mergeParams: true});
const asyncHandler = require('../middlewares/async');
const ErrorResponse = require('../utils/errorResponse');
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

    return res.status(201).json({
        success: true,
        data: batting
    })
})

exports.getBattings = asyncHandler(async (req, res, next) => {
    const battings = await Batting.find({});

    return res.status(200).json({
        success: true,
        data: battings
    })
})

exports.getBatting = asyncHandler(async (req, res, next) => {
    const batting = await Batting.findById(req.params.id);

    if (!batting) {
        return next(
            new ErrorResponse(`No batting with the id of ${req.params.id}`, 404)
        )
    }

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

    await Batting.deleteOne({_id: req.params.id});

    res.status(200).json({
        success: true,
        data: {}
    })
})