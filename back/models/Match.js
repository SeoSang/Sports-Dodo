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
        type: Date,
        required: true
    },
    // info 는 더 논의해봐야할듯함.
    // infos: 
}); 


module.exports = mongoose.model('Match', MatchSchema);