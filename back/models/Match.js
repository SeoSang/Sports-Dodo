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
    result: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Result'
    },
    startTime: {
        type: String,
        required: true
    }
}); 


module.exports = mongoose.model('Match', MatchSchema);