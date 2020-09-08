const asyncHandler = require('./async');
const ErrorResponse = require('../utils/errorResponse');
const User = require('../models/User');
const Match = require('../models/Match');
const Batting = require('../models/Batting');

// http://localhost:1337/api/match/5f4674264ec3915394fcc374/batting

exports.timeCheckerCreate = asyncHandler(async (req, res, next) => {
    const match = await Match.findById(req.params.id);

    // let date = "2020-08-29T11:50:00+00:00"
    let startTime = new Date(match.startTime);
    startTime = startTime.setMinutes(startTime.getMinutes() - 10)

    const startTimeMinus10Minutes = new Date(startTime).toISOString().slice(0, 19);
    let now = new Date().toISOString().slice(0, 19);

    console.log(startTimeMinus10Minutes);
    console.log('now  ' + now);

    if (now < startTimeMinus10Minutes) {
        console.log('possible');
        return next();
    }

    console.log('batting impossible');
    return next(new ErrorResponse('Can bat until 10 minutes from the start', 400));
});

exports.timeCheckerUpdateDelete = asyncHandler(async (req, res, next) => {

    const batting = await Batting.findById(req.params.id);
    const match = await Match.findById(batting.match);

    // let date = "2020-08-29T11:50:00+00:00"
    let startTime = new Date(match.startTime);
    startTime = startTime.setMinutes(startTime.getMinutes() - 10)

    const startTimeMinus10Minutes = new Date(startTime).toISOString().slice(0, 19);
    let now = new Date().toISOString().slice(0, 19);

    console.log(startTimeMinus10Minutes);
    console.log('now  ' + now);

    if (now < startTimeMinus10Minutes) {
        console.log('possible');
        return next();
    }

    console.log('batting impossible');
    return next(new ErrorResponse('Can bat until 10 minutes from the start', 400));
});

exports.checkHasEnoughPointForCreate = asyncHandler(async (req, res, next) => {
    if (req.body.battingPoint > req.user.point) {
        return next(new ErrorResponse(`You can only bat less than or equal to ${req.user.point} point`));
    }
    next();
});

exports.checkHasEnoughPointForUpdate = asyncHandler(async (req, res, next) => {
    let batting = await Batting.findById(req.params.id);

    if (req.body.battingPoint > (req.user.point + batting.battingPoint)) {
        return next(new ErrorResponse(`You can only bat less than or equal to `))
    }
    next();
})

// exports.checkTime = () => {
//     let date = "2020-08-29T14:44:00+00:00"
//     let startTime = new Date(date);
//     startTime = startTime.setMinutes(startTime.getMinutes() - 10)

//     const startTimeMinus10Minutes = new Date(startTime).toISOString().slice(0, 19);
//     let now = new Date().toISOString().slice(0, 19);

//     console.log(startTimeMinus10Minutes);
//     console.log(now);
//     if (now < startTimeMinus10Minutes) {
//         return console.log('베팅 가능');
//     }
//     return console.log('불가능');
// };