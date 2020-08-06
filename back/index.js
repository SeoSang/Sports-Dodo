const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require('./routes/user');
const matchRouter = require('./routes/match');
const battingRouter = require('./routes/batting');
const resultRouter = require('./routes/result');
const { upcoming } = require('./api/upcoming');

require('dotenv').config(); // .env -> 중요정보 보호. (gitignore 해둬서 git에는 안감.)

const app = express();

// api를 위한 라우터들
app.use('/api/user', userRouter);
app.use('/api/match', matchRouter);
app.use('/api/batting', battingRouter);
app.use('/api/result', resultRouter);

// 미들웨어들
app.use(morgan('dev')); // 로그 찍어줌
app.use(helmet()); // 코드 보호
app.use(
  // 접근 제어
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);
app.use(express.json()); // form 데이터나 ajax 요청을 파싱해줌.

// 서버 처리관련
app.use('/', (req, res) => {
  res.status(200).json('서버 메인입니다');
});

const port = process.env.PORT || 1337;
app.listen(port, () => {
  console.log(`실행됨 : http://localhost:${port}`);
  // 모든 리그 아이디 써보기.
  // upcoming();
});
