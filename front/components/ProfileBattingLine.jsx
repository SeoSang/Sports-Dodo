import { Col, Row } from 'antd';
import React from 'react';
import moment from 'moment';

require('moment-timezone');
moment.tz.setDefault('Asia/Seoul');

const ProfileBattingLine = ({ batting }) => {
  // console.log(batting);
  return (
    <Row>
      <Col span={8}>
        <h3>
          {batting?.homeTeamName} VS {batting?.awayTeamName}
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
        <h3>{moment(batting.createdAt).format('YY-MM-DD HH:MM')}</h3>
      </Col>
    </Row>
  );
};

export default ProfileBattingLine;
