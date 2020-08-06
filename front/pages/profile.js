import React from 'react';
import { Row, Col, Avatar } from 'antd';
import { dummy_profile } from '../src/dummy';
import styled from 'styled-components';
import { LOAD_USER_REQUEST } from '../sagas/user';

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

const profile = () => {
  const { me } = useSelector((state) => state.user);
  return (
    <>
      <Row style={{ marginBottom: '20px' }}>
        <Col span={14} style={profileCardStye}>
          <Row>
            <Col span={8}>
              <Avatar size={100} src="/images/profile.jpg" />
            </Col>
            <Col span={16}>
              <h2>{dummy_profile.name}</h2>
              <h2>포인트 : {dummy_profile.point}점</h2>
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
          {dummy_profile.battings.map((batting) => (
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

profile.getInitialProps = async (context) => {
  context.store.dispatch({
    type: LOAD_USER_REQUEST,
    data: { me: true, id: 0 },
  });
  return;
};

export default profile;
