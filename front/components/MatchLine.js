import React from 'react';
import { Row, Col, Button } from 'antd';

const MatchLine = ({ home, away, time, battingCount, deadline }) => {
  return (
    <Row>
      <Col span={4}>{home}</Col>
      <Col span={4}>{away}</Col>
      <Col span={5}> {time} </Col>
      <Col span={4}>{battingCount} 명</Col>
      <Col span={5}>마감 : {deadline}</Col>
      <Col span={2}>
        <Button>베팅!</Button>
      </Col>
    </Row>
  );
};

export default MatchLine;
