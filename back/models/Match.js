var mongoose = require('mongoose');

var MatchSchema = mongoose.Schema({
    homeTeam: {
        type: String,
        required: true,
    },
    awayTeam: {
        type: String,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    finishTime: {
        type: String,
    },
    idForFAPI: {
        type: Number
    },
    status: {
        type: String,
        enum: ['Not Started', 'Match Finished'],
        default: 'Not Started'
    },
    goalsHomeTeam: {
        type: Number,
        default: 0
    },
    goalsAwayTeam: {
        type: Number,
        default: 0
    },
    result: {
        type: String,
        enum: ['HomeWin', 'AwayWin', 'Draw', 'Not Finished'],
        default: 'Not Finished'
    }
},
    //  {
    //     toJSON: { virtuals: true },
    //     toObject: { virtuals: true }
    // }
);

MatchSchema.pre('save', async function (next) {
    startTime = new Date(this.startTime);
    startTime = startTime.setMinutes(startTime.getMinutes() + 110);
    startTime = new Date(startTime);
    this.finishTime = startTime.toISOString();
    next();
});

// MatchSchema.virtual('battings', {
//     ref: 'Batting',
//     localField: '_id',
//     foreignField: 'match'
// });

// MatchSchema.virtual('result', {
//     ref: 'Result',
//     localField: '_id',
//     foreignField: 'match'
// })


module.exports = mongoose.model('Match', MatchSchema);