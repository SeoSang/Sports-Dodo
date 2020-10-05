import { Col, Row } from 'antd';
import React from 'react';
import Link from 'next/link';
import { wrapper } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { LOAD_BATTING_USER_REQUEST } from '../sagas/user';
import { useEffect } from 'react';

const BattingUserList = ({ data }) => {
  const { battingUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const userid = data.userid;

  // console.log(userid);
  // console.log(battingUser);

  useEffect(() => {
    dispatch({
      type: LOAD_BATTING_USER_REQUEST,
      data: userid,
    });
  }, []);

  // console.log(data);
  // console.log(battingUser);

  //이름이랑 닉네임 제대로 안나옴
  return data ? (
    <Row>
      <Row style={{ fontSize: '1px', marginBottom: '5em' }}>
        <Link href={{ pathname: 'profile', query: { userid: userid } }}>
          <a>
            {data?.userid}
            {battingUser?.name} / {battingUser?.nickname}
          </a>
        </Link>
        / {data?.battingPoint}p
      </Row>
    </Row>
  ) : (
    <Row>데이터 없음</Row>
  );
};
// export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
//   store.dispatch({ type: LOAD_BATTING_USER_REQUEST, data: userid});
// });

export default BattingUserList;
