import { Col, Row } from 'antd';
import React from 'react';
import Link from 'next/link';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import match from '../pages/match';

import { LOAD_MATCHS_REQUEST } from '../sagas/match';
import { LOAD_BATTING_USER_REQUEST } from '../sagas/user';
import { useEffect } from 'react';

const BattingUserList = ({ data }) => {
  const { battingUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: LOAD_BATTING_USER_REQUEST, data: data.userid });
  }, []);
  return (
    <Row>
      <Row style={{ fontSize: '1px', marginBottom: '5em' }}>
        <Link href={{ pathname: 'profile', query: { userid: data.userid } }}>
          <a>{battingUser?.nickname}</a>
        </Link>
        / {data.battingPoint}p
      </Row>
    </Row>
  );
};
export default BattingUserList;
