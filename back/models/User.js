var mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

var UserSchema = mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password: { // need to hash
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    nickname: {
        type: String,
        maxlength:50,
        default:this.name,
        unique: true,
    },
    point: {
        type: Number,
        default: 100 //
    },
    battings: { // populate 로 바꿔야할 듯하다.
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Batting'
    }
});

UserSchema.methods.getSignedJwtToken = function() {

}


module.exports = mongoose.model('User', UserSchema);