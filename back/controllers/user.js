const express = require('express');
const router = express.Router({ mergeParams: true });
const asyncHandler = require('../middlewares/async');
const ErrorResponse = require('../utils/errorResponse');
const User = require('../models/User');
const Batting = require('../models/Batting');

// @desc    Register User
// @route   POST /api/user
// @access  Public
exports.register = asyncHandler(async (req, res, next) => {
  // const { email, password, name, nickname } = req.body;
  console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;
  const nickname = req.body.nickname;

  console.log(email);
  console.log('ok?');

  // Create user
  const user = await User.create({
    email: email,
    password: password,
    name: name,
    nickname: nickname,
  });
  console.log(user);

  sendTokenResponse(user, 201, res);
});

// @desc Withdrawal a user
// @route DELETE /api/user/
// @access Protect
exports.withdrawal = asyncHandler(async (req, res, next) => {
  const userId = req.user._id;

  const user = await User.deleteOne({ _id: req.user._id });

  res.status(200).json({
    message: '지금까지 이용해주셔서 감사합니다. :)',
    data: {},
  });
});

// @desc    Login a user
// @route   POST /api/user/login
// @access  Public
exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  //Validate email & password
  if (!email || !password) {
    return next(new ErrorResponse('Please provide an email and password', 400));
  }

  //Check for user
  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    return next(new ErrorResponse('Invalid credentials', 401));
  }

  // Check if password matches
  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    return next(new ErrorResponse('Invalid credentials', 401));
  }

  // 비밀번호 삭제
  const userData = await User.findOne({ email });
  const nonPasswordData = Object.assign({}, userData)._doc;
  delete nonPasswordData['password'];

  sendTokenResponse(user, 200, res, nonPasswordData);
});

exports.getUsers = asyncHandler(async (req, res, next) => {
    let users = await User.find({}).populate('battings')
        .populate('')
        .sort({ point: -1 })
        .limit(50);

    for (let i = 0; i < users.length; i++) {
        //calc battings
        eachPersonBattings = {
            collectCount: 0,
            wrongCount: 0
        };

        // reduce 로 바꾸셔요.
        for (let j = 0; j < users[i].battings.length; j++) {
            if (users[i].battings[j].battingResult === true) {
                eachPersonBattings.collectCount++;
            } else if (users[i].battings[j].battingresult === false) {
                eachPersonBattings.wrongCount++;
            }
        }

        users[i].battings = eachPersonBattings;
    }

    users[i].battings = eachPersonBattings;
  }

  res.status(200).json({
    success: true,
    data: users,
  });
});

exports.getRanking = asyncHandler(async (req, res, next) => {
  let users = await User.find({}).sort({ point: -1 });

  let index = users.findIndex(i => i._id == req.params.id);

  res.status(200).json({
    success: true,
    ranking: index + 1,
  });
});

// exports.logout

// @desc    get a single user
// @route   GET /api/user/:id
// @access  Public
exports.getUser = asyncHandler(async (req, res, next) => {
  let user = await User.findOne({ _id: req.params.id }).populate('battings');

  // get Ranking
  let users = await User.find({})
    .sort({ point: -1 })
    .select('point');
  let rank = users.findIndex(i => i._id == req.params.id) + 1;

  if (!user) {
    return next(
      new ErrorResponse(`No user with the id of ${req.params.id}`, 404)
    );
  }

  return res.status(200).json({
    success: true,
    rank: rank,
    data: user,
  });
});

// @desc    Edit a user detail
// @route   PUT /api/user/:id
// @access  Private
exports.editUser = asyncHandler(async (req, res, next) => {
  let user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!user) {
    return next(
      new ErrorResponse(`No user with the id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    data: user,
  });
});

// @desc    Get my profile
// @route   GET /api/user/profile
// @access  Private
exports.myProfile = asyncHandler(async (req, res, next) => {
  const battings = await Batting.find({ user: req.user._id });

  let users = await User.find({})
    .sort({ point: -1 })
    .select('point');

  let rank = users.findIndex(i => i._id == `${req.user._id}`) + 1;

  req.user.battings = battings;

  return res.json({
    success: true,
    rank: rank,
    data: req.user,
  });
});

// @desc    Edit my profile
// @route   PUT /api/user/profile
// @access  Private
exports.editMyProfile = asyncHandler(async (req, res, next) => {
  console.log(req.user._id);
  let tmp = await User.findByIdAndUpdate(req.user._id, req.body, {
    new: true,
    runValidators: true,
  });
  console.log(tmp);

  let user = await User.findOneAndUpdate({ _id: req.user._id }, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: user,
  });
});

exports.getMyRecord = asyncHandler(async (req, res, next) => {
  let battings = await Batting.find({ user: req.user._id })
    .sort({ createdAt: -1 })
    .limit(50);

  res.status(200).json({
    success: true,
    data: battings,
  });
});

const sendTokenResponse = (user, statusCode, res, data = null) => {
  // Create token
  const token = user.getSignedJwtToken(); // 지금까진 token엔 user._id 만 저장되어있음.

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === 'production') {
    options.secure = true;
  }

  if (data) {
    res
      .status(statusCode)
      .cookie('token', token, options) // 이거 설정해줘야 하나? 프론트에서 알아서 저장해야하는 것이 아닌가?
      .json({
        success: true,
        token: token,
        data,
      });
  } else {
    res
      .status(statusCode)
      .cookie('token', token, options) // 이거 설정해줘야 하나? 프론트에서 알아서 저장해야하는 것이 아닌가?
      .json({
        success: true,
        token: token,
      });
  }
};
