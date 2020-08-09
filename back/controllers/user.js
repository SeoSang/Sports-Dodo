const express = require('express');
const router = express.Router({mergeParams: true});
const asyncHandler = require('../middlewares/async');
const ErrorResponse = require('../utils/errorResponse');
const User = require('../models/User');

// @desc    Register User
// @route   POST /api/user/register
// @access  Public
exports.register = asyncHandler(async (req, res, next) => {

    // const { email, password, name, nickname } = req.body;
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    const nickname = req.body.nickname;

    console.log('ok?')

    // Create user
    const user = await User.create({
        email: email, 
        password : password, 
        name: name, 
        nickname: nickname
    });

    sendTokenResponse(user, 201, res);
});

//   !! 잠시 멈춤. login 기능부터 만들고 
exports.withdrawal = asyncHandler(async (req, res, next) => {
    const user = await User.findByIdAndDelete()
})

// @desc    Login a user
// @route   POST /api/user/login
// @access  Public
exports.login = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;

    //Validate email & password
    if (!email || !password) {
        return next(new ErrorResponse("Please provide an email and password", 400))
    }

    //Check for user
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
        return next(new ErrorResponse('Invalid credentials', 401));
    }

    // Check if password matches
    const isMatch = await user.matchPassword(password);

    if(!isMatch) {
        return next(new ErrorResponse('Invalid credentials', 401));
    }

    sendTokenResponse(user, 200, res);
});

// exports.getUsers
// exports.getUser
// exports.editUser
// exports.myProfile
// exports.editMyProfle
// exports.logout

const sendTokenResponse = (user, statusCode, res) => {
    // Create token
    const token = user.getSignedJwtToken(); // 지금까진 token엔 user._id 만 저장되어있음.

    const options = {
        expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        ),
        httpOnly: true
    };

    if (process.env.NODE_ENV === 'production') {
        options.secure = true;
    }

    res.status(statusCode)
        .cookie('token', token, options) // 이거 설정해줘야 하나? 프론트에서 알아서 저장해야하는 것이 아닌가?
        .json({
            success: true,
            token: token
        });
}; 