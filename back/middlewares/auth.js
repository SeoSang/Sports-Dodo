const asyncHandler = require('./async');
const ErrorResponse = require('../utils/errorResponse');
const User = require('../models/User');
const Batting = require('../models/Batting');
const jwt = require('jsonwebtoken');

exports.protect = asyncHandler(async (req, res, next) => {
    var token = req.headers['x-access-token'];

    if (!token) {
        return next(new ErrorResponse('Not authorized to access this route', 401));
    }

    try {
        //Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = await User.findById(decoded._id);
        next();
    } catch (err) {
        return next(new ErrorResponse('Not authorized to access this route', 401))
    }
})

exports.checkIsOnwerThisBatting = asyncHandler(async (req, res, next) => {
    const batting = await Batting.findById(req.params.id)

    if (!batting) {
        const message = `No Batting with the id of ${req.params.id}`;
        return next(new ErrorResponse(message, 404));
    }
    if (String(batting.user) !== String(req.user.id)) {

        const message = `You are not owner of this batting`;
        return next(new ErrorResponse(message, 401));
    }
    next();
});