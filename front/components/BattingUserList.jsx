import { Col, Row } from 'antd';
import React from 'react';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import match from '../pages/match';

import { LOAD_MATCHS_REQUEST } from '../sagas/match';
import { useEffect } from 'react';

const BattingUserList = ({ data }) => {
  return (
    <div>
      <div style={{ fontSize: '1px' }}>
        {data.userid} {data.chooseHomeAwayDraw} {data.battingPoint}
      </div>
    </div>
  );
};
export default BattingUserList;
