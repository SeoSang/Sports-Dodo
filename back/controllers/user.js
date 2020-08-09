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

// @desc Withdrawal a user
// @route GET /api/user/withdrawal
// @access Protect
exports.withdrawal = asyncHandler(async (req, res, next) => {

    const userId = req.user._id

    const user = await User.deleteOne({_id: req.user._id });

    res.status(200).json({
        message: "지금까지 이용해주셔서 감사합니다. :)",
        data: {}
    });
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

exports.getUsers = asyncHandler(async (req, res, next) => {
    let users = await User.find({});

    res.status(200).json({
        success: true,
        data: users
    });
})

// exports.logout

// @desc    get a single user
// @route   GET /api/user
// @access  Public
exports.getUser = asyncHandler(async (req, res, next) => {
    let user = await User.findOne({_id: req.params.id});
    
    if (!user) {
        return next(
            new ErrorResponse(`No user with the id of ${req.params.id}`, 404)
        )
    }

    return res.status(200).json({ 
        success: true,
        data: user
    });
});

// @desc    Edit a user detail
// @route   PUT /api/user/:id
// @access  Private
exports.editUser = asyncHandler(async (req, res, next) => {
    let user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    if (!user) {
        return next(
          new ErrorResponse(`No user with the id of ${req.params.id}`, 404)
        );
      }

    res.status(200).json({
        success: true,
        data: user
    })
});

// @desc    Get my profile
// @route   GET /api/user/profile
// @access  Private
exports.myProfile = asyncHandler(async (req, res, next) => {
    return res.json({
        success: true, 
        data: req.user 
    });
})

// @desc    Edit my profile
// @route   PUT /api/user/profile
// @access  Private
exports.editMyProfile = asyncHandler(async (req, res, next) => {
    console.log(req.user._id);
    let tmp = await User.findByIdAndUpdate(req.user._id, req.body, { new: true, runValidators: true});
    console.log(tmp);
    
    let user = await User.findOneAndUpdate({_id: req.user._id}, req.body, {
        new: true,
        runValidators: true
    });

    res.status(200).json({
        success: true,
        data: user
    })
});


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
