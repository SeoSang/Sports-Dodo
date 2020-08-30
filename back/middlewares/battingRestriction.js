const asyncHandler = require('./async');
const ErrorResponse = require('../utils/errorResponse');
const User = require('../models/User');
const Match = require('../models/Match');
const Batting = require('../models/Batting');

// http://localhost:1337/api/match/5f4674264ec3915394fcc374/batting

exports.timeChecker = asyncHandler(async (req, res, next) => {
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