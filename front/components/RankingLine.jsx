import React from 'react';
import { Row, Col, Button } from 'antd';
import Link from 'next/link';

const RankingLine = ({ _id, rank, nickname, success, fail }) => {
  return _id ? (
    <Row>
      <Col span={2}>{rank}</Col>
      <Col span={10}>{nickname}</Col>
      <Col span={2}>{3}회</Col>
      <Col span={2}>{0}회</Col>
      <Col span={4}>성공률</Col>
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
      <Col span={10}>
        <h2>닉네임</h2>
      </Col>
      <Col span={2}>
        <h2>성공</h2>
      </Col>
      <Col span={2}>
        <h2>실패</h2>
      </Col>
      <Col span={4}>
        <h2>성공률</h2>
      </Col>
      <Col span={4}>
        <h2>자세히보기</h2>
      </Col>
    </Row>
  );
};

export default RankingLine;
