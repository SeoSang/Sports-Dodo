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
    chooseHomeAwayDraw: {
        type: String,
        enum: [Home, Away, Draw], 
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
}); 

module.exports = mongoose.model('Batting', BattingSchema);