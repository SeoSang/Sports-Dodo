import React, { useEffect } from 'react';
import { Row, Col, Avatar, Alert, notification } from 'antd';
import { wrapper } from '../store';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { LOAD_USER_REQUEST } from '../sagas/user';
import { useRouter, useDispatch } from 'next/dist/client/router';
import Notification from '../components/Notification';
import ProfileBattingLine from '../components/ProfileBattingLine';

const profileCardStyle = {
  backgroundColor: '#c8d6e5',
  margin: '1rem',
  padding: '5px',
  borderRadius: '10px',
  boxShadow:
    '0 9px 8px 1px rgba(0, 0, 0, 0.2), 0 6px 20px 1px rgba(0, 0, 0, 0.19)',
};

const BattingsCard = styled.div`
  background-color: #f6f6f6;
  border-radius: 10px;
  margin: 0 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

// http://localhost:1337/api/user/5f55f6af32e4e943e89b6894
//유저 api 검색

const profile = () => {
  // const dispatch = useDispatch();

  const { me } = useSelector((state) => state.user);
  // console.log(me);
  //me.id 값을 검색
  const router = useRouter();

  useEffect(() => {
    if (!me) {
      Notification('로그인이 필요합니다!');
      // <Alert message="로그인이 필요합니다!" type="warning" showIcon closable />;
      // alert('로그인이 필요합니다!');
      router.push('/');
    }
    // dispatch({ type: LOAD_BATTING_HISTORY_REQUEST, data : me.id });
  }, [me]);
  // const { battings, rank } = useSelector((state) => state.batting);  //  유저의 배팅내역 전체
  // matchResult battingResult resultPoint chooseHomeAwayDraw battingPoint createdAt
  return (
    <>
      <Row style={{ marginBottom: '20px' }}>
        <Col span={14} style={profileCardStyle}>
          <Row>
            <Col span={8}>
              <Avatar size={100} src="/images/profile.jpg" />
            </Col>
            <Col span={16}>
              <h2>{me?.name}</h2>
              <h2>포인트 : {me?.point}점</h2>
              <h2>랭킹 : {me?.rank}위</h2>
            </Col>
          </Row>
        </Col>
        <Col span={10}></Col>
      </Row>
      <BattingsCard>
        <Row>
          <Col span={24}>
            <h1>적중내역</h1>
          </Col>
        </Row>
        <Row>
          <Row>
            <Col span={8}>
              <h2>경기</h2>
            </Col>
            <Col span={8}>
              <h2>베팅</h2>
            </Col>
            <Col span={4}>
              <h2>결과</h2>
            </Col>
            <Col span={4}>
              <h2>날짜</h2>
            </Col>
          </Row>
          {/* api/user/{me.id} */}
          {me?.battings?.map((batting) => (
            <ProfileBattingLine batting={batting}></ProfileBattingLine>
          ))}
        </Row>
      </BattingsCard>
    </>
  );
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  store.dispatch({ type: LOAD_USER_REQUEST, me: true, id: 1 });
});

export default profile;
