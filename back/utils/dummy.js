// Make datas
const User = require('../models/User');
const Match = require('../models/Match');
const asyncHandler = require('../middlewares/async');
const ErrorResponse = require('../utils/errorResponse');
const Batting = require('../models/Batting');

// user
let user1 = {
  email: 'user1@naver.com',
  password: '123123',
  name: 'user1',
  nickname: 'user1',
};

let user2 = {
  email: 'user2@naver.com',
  password: '123123',
  name: 'user2',
  nickname: 'user2',
  point: 101,
};

let user3 = {
  email: 'user3@naver.com',
  password: '123123',
  name: 'user3',
  nickname: 'user3',
};

// match
let match1 = {
  homeTeam: 'TeamA',
  awayTeam: 'TeamB',
  startTime: '2018-08-11T12:35:00+00:00',
};

let match2 = {
  homeTeam: 'TeamA',
  awayTeam: 'TeamC',
  startTime: '2018-08-11T13:35:00+00:00',
};

let match3 = {
  homeTeam: 'TeamA',
  awayTeam: 'TeamB',
  startTime: '2018-08-12T12:36:00+00:00',
};

let match4 = {
  homeTeam: 'TeamA',
  awayTeam: 'TeamB',
  startTime: '2018-08-11T12:40:00+00:00',
};

let match5 = {
  homeTeam: 'TeamA',
  awayTeam: 'TeamB',
  startTime: '2018-08-11T18:35:00+00:00',
};

let match6 = {
  homeTeam: 'TeamA',
  awayTeam: 'TeamB',
  startTime: '2018-08-11T10:35:00+00:00',
};

exports.dummyDatas = asyncHandler(async () => {
  await User.insertMany([user1, user2, user3]);
  await Match.insertMany([match1, match2, match3, match4, match5, match6]);
});
