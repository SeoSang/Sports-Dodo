import React, { useEffect } from 'react';
import { Row, Col, Avatar, Alert, notification } from 'antd';
import { wrapper } from '../store';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { LOAD_USER_REQUEST } from '../sagas/user';
import { useRouter } from 'next/dist/client/router';
import Notification from '../components/Notification';

const profileCardStye = {
  backgroundColor: '#c8d6e5',
  margin: '2px',
  padding: '5px',
  boxShadow:
    '0 9px 8px 1px rgba(0, 0, 0, 0.2), 0 6px 20px 1px rgba(0, 0, 0, 0.19)',
};

const BattingsCard = styled.div`
  background-color: #fdcb6e;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

// http://localhost:1337/api/user/5f55f6af32e4e943e89b6894
//유저 api 검색

const profile = () => {
  const { me } = useSelector((state) => state.user);
  const router = useRouter();

  useEffect(() => {
    if (!me) {
      Notification('로그인이 필요합니다!');
      // <Alert message="로그인이 필요합니다!" type="warning" showIcon closable />;
      // alert('로그인이 필요합니다!');
      router.push('/');
    }
  }, [me]);
  return (
    <>
      <Row style={{ marginBottom: '20px' }}>
        <Col span={14} style={profileCardStye}>
          <Row>
            <Col span={8}>
              <Avatar size={100} src="/images/profile.jpg" />
            </Col>
            <Col span={16}>
              <h2>{me?.name}</h2>
              <h2>포인트 : {me?.point}점</h2>
              <h2>랭킹 : 3123위</h2>
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
            <Col span={8}>
              <h2>결과</h2>
            </Col>
          </Row>
          {me?.battings.map((batting) => (
            <Row>
              <Col span={8}>
                <h2>
                  {batting.match.homeTeam} VS {batting.match.awayTeam}
                </h2>
              </Col>
              <Col span={8}>
                <h2>
                  {batting.select} 선택 - {batting.point}포인트
                </h2>
              </Col>
              <Col span={8}>
                <h2>
                  {batting.select === batting.result.matchResult
                    ? batting.result.reward
                    : 0}{' '}
                  포인트 획득!{' '}
                </h2>
              </Col>
            </Row>
          ))}
        </Row>
      </BattingsCard>
    </>
  );
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  console.log(store);
  store.dispatch({ type: LOAD_USER_REQUEST, me: true, id: 1 });
});

export default profile;

const openNotification = (e) => {
  notification.open({
    message: 'Notification Title',
    description: e,
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};
