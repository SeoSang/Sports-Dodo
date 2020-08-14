var mongoose = require('mongoose');

var ResultSchema = mongoose.Schema({
    match: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    homeAwayDraw: {
        type: String,
        enum: [Home, Away, Draw],
        required :true,
    },              
    homeScore: {
        type: Number,
        required: true
    },
    awayScore: {
        type: Number,
        required: true
    }
});


module.exports = mongoose.model('Result', ResultSchema);