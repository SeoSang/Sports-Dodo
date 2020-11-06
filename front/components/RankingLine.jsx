<<<<<<< HEAD
import React from 'react';
import { Row, Col, Button } from 'antd';
import Link from 'next/link';

const calPercent = (win, lose) => {
  if (win === 0 && lose === 0) return 0;
  if (lose == 0) return 100;
  else return Math.round((win / (win + lose)) * 1000) / 10;
};

const RankingLine = ({ _id, rank, point, nickname, battings }) => {
  return _id ? (
    <Row>
      <Col span={2}>{rank}</Col>
      <Col span={8}>{nickname}</Col>
      <Col span={3}>{Math.round(point)}p</Col>
      <Col span={2}>{battings[0].collectCount}회</Col>
      <Col span={2}>{battings[0].wrongCount}회</Col>
      <Col span={3}>
        {battings
          ? calPercent(battings[0].collectCount, battings[0].wrongCount)
          : '데이터없음'}
        %
      </Col>
      <Col span={4}>
        <Link href={{ pathname: 'userprofile', query: { userId: _id } }}>
          <a>
            <Button>자세히 보기</Button>
          </a>
        </Link>
      </Col>
    </Row>
  ) : (
    <Row>
      <Col span={2}>
        <h2>순위</h2>
      </Col>
      <Col span={8}>
        <h2>닉네임</h2>
      </Col>
      <Col span={3}>
        <h2>포인트</h2>
      </Col>
      <Col span={2}>
        <h2>성공</h2>
      </Col>
      <Col span={2}>
        <h2>실패</h2>
      </Col>
      <Col span={3}>
        <h2>성공률</h2>
      </Col>
      <Col span={4}>
        <h2>자세히보기</h2>
      </Col>
    </Row>
  );
};

export default RankingLine;
=======
import React from 'react';
import { Row, Col, Button } from 'antd';
import Link from 'next/link';

const calPercent = (win, lose) => {
  if (win === 0 && lose === 0) return 0;
  if (lose == 0) return 100;
  else return Math.round((win / (win + lose)) * 1000) / 10;
};

const RankingLine = ({ _id, rank, point, nickname, battings }) => {
  return _id ? (
    <Row>
      <Col span={2}>{rank}</Col>
      <Col span={8}>{nickname}</Col>
      <Col span={3}>{Math.round(point)}p</Col>
      <Col span={2}>{battings[0].collectCount + battings[0].wrongCount}회</Col>
      <Col span={2}>{battings[0].collectCount}회</Col>
      <Col span={3}>
        {battings
          ? calPercent(battings[0].collectCount, battings[0].wrongCount)
          : '데이터없음'}
        %
      </Col>
      <Col span={4}>
        <Link href={{ pathname: 'profile', query: { userid: _id } }}>
          <a>
            <Button>자세히 보기</Button>
          </a>
        </Link>
      </Col>
    </Row>
  ) : (
    <Row>
      <Col span={2}>
        <h2>순위</h2>
      </Col>
      <Col span={8}>
        <h2>닉네임</h2>
      </Col>
      <Col span={3}>
        <h2>포인트</h2>
      </Col>
      <Col span={2}>
        <h2>시도</h2>
      </Col>
      <Col span={2}>
        <h2>성공</h2>
      </Col>
      <Col span={3}>
        <h2>성공률</h2>
      </Col>
      <Col span={4}>
        <h2>자세히보기</h2>
      </Col>
    </Row>
  );
};

export default RankingLine;
>>>>>>> e0a8ce48c0a0fb86312e71d8a46d8eac64cbe2da
