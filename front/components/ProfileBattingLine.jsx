import { Col, Row } from 'antd';
import React from 'react';
import moment from 'moment';

const ProfileBattingLine = ({ batting }) => {
  return (
    <Row>
      <Col span={8}>
        <h3>
          {batting.homeTeamName} VS {batting.awayTeamName}
        </h3>
      </Col>
      <Col span={8}>
        <h3>
          {batting.chooseHomeAwayDraw} 선택 - {batting.battingPoint}P
        </h3>
      </Col>
      <Col span={4}>
        <h3>+{batting.battingResult ? batting.resultPoint : 0} P </h3>
      </Col>
      <Col span={4}>
        <h3>{moment.format(batting.createdAt)}</h3>
      </Col>
    </Row>
  );
};

export default ProfileBattingLine;
