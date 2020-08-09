const asyncHandler = require('./async');
const ErrorResponse = require('../utils/errorResponse');
const User = require('../models/User');
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