var mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')

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
        maxlength: 50
    },
    nickname: {
        type: String,
        maxlength:50,
        minlength: 3,
        required: true,
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

UserSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.getSignedJwtToken = function() {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    });
};

UserSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};


module.exports = mongoose.model('User', UserSchema);