import React from 'react';
import { Row, Col, Button } from 'antd';
import moment from 'moment';
import Link from 'next/link';

const MatchLine = ({ _id, homeTeam, awayTeam, startTime, finishTime }) => {
  const deadline = moment(startTime).subtract({ minutes: 15 });
  const nowTime = moment();
  console.log(typeof deadline.diff(nowTime));
  return deadline.diff(nowTime) > 0 ? (
    <Link href={{ pathname: 'match', query: { matchId: _id } }}>
      <a>
        <Row>
          <Col span={4}>{homeTeam}</Col>
          <Col span={4}>{awayTeam}</Col>
          <Col span={7}>
            {' '}
            {moment(startTime).format('YYYY-MM-DD HH:mm')} ~{' '}
            {moment(finishTime).format('YYYY-MM-DD HH:mm')}{' '}
          </Col>
          <Col span={2}>{0} 명</Col>
          <Col span={5}>{deadline.format('YYYY-MM-DD HH:mm')}</Col>
          <Col span={2}>
            <Button>베팅!</Button>
          </Col>
        </Row>
      </a>
    </Link>
  ) : (
    <Row>
      <Col span={4}>{homeTeam}</Col>
      <Col span={4}>{awayTeam}</Col>
      <Col span={7}>
        {' '}
        {moment(startTime).format('YYYY-MM-DD HH:mm')} ~{' '}
        {moment(finishTime).format('YYYY-MM-DD HH:mm')}{' '}
      </Col>
      <Col span={2}>{0} 명</Col>
      <Col span={5}>{deadline.format('YYYY-MM-DD HH:mm')}</Col>
      <Col span={2}>
        <Button danger>마감</Button>
      </Col>
    </Row>
  );
};

export default MatchLine;
