var mongoose = require('mongoose');

var BattingSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    match: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    homeTeamName: {
        type: String,
        required: true
    },
    awayTeamName: {
        type: String,
        required: true
    },
    chooseHomeAwayDraw: {
        type: String,
        enum: ['Home', 'Away', 'Draw'],
        required: true
    },
    battingPoint: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String,
    },
    matchResult: {
        type: String,
        enum: ['Home', 'Away', 'Draw', 'Not Finished'],
        default: 'Not Finished'
    },
    battingResult: {
        type: Boolean,
        default: false
    },
    resultPoint: {
        type: Number,
        default: 0
    }
    // 인덱스 넣어주면 성능이 올라갈 듯함.
});


module.exports = mongoose.model('Batting', BattingSchema);