const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const errorHandler = require('./middlewares/error');
const userRouter = require('./routes/user');
const matchRouter = require('./routes/match');
const battingRouter = require('./routes/batting');
const resultRouter = require('./routes/result');
const { upcoming } = require('./api/upcoming');

const connectDB = require('./config/db');
const { getMatchFromAPI } = require('./api/createMatchs');
const { dummyDatas } = require('./utils/dummy');

//require('dotenv').config(); // .env -> 중요정보 보호. (gitignore 해둬서 git에는 안감.)
// 밑에껄로 바꿀게요 !
const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });

connectDB();
// getMatchFromAPI('2','2018-8-11');

// ! 한번 하고 주석 처리 !
// dummyDatas();

const app = express();

// 접근 제어
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

connectDB();

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(bodyParser.json());

// api를 위한 라우터들
app.use('/api/user', userRouter);
app.use('/api/match', matchRouter);
app.use('/api/batting', battingRouter);
app.use('/api/result', resultRouter);

// 미들웨어들
app.use(morgan('dev')); // 로그 찍어줌
app.use(helmet()); // 코드 보호
app.use(express.json()); // form 데이터나 ajax 요청을 파싱해줌.

// 서버 처리관련
// app.use('/', (req, res) => {
//   res.status(200).json('서버 메인입니다');
// });

app.use(errorHandler);

const port = process.env.PORT || 1337;
const server = app.listen(port, () => {
  console.log(`실행됨 : http://localhost:${port}`);
  // 모든 리그 아이디 써보기.
  // upcoming();
});

module.exports = app;
