import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import MatchLine from '../components/MatchLine';
import { useSelector, useDispatch } from 'react-redux';
import { LOAD_MATCHS_REQUEST } from '../sagas/match';
import { wrapper } from '../store';
import Link from 'next/link';

const MatchsTitleRow = styled(Row)`
  background-color: #b6dbf2;
  padding: 10px;
`;

const MatchsContentRow = styled(Row)`
  background-color: white;
  min-height: 80vh;
  padding: 10px;
`;

const dummy_matchLine = {
  home: '토트넘',
  away: '맨유',
  time: new Date().toString(),
  battingCount: 3,
  deadline: new Date().toString(),
};

const matchs = () => {
  const state = useSelector((state) => state.match);
  const { matchs } = useSelector((state) => state.match);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: LOAD_MATCHS_REQUEST,
    });
  }, []);
  // const { matchs } = useSelector((state) => state.match);
  // console.log(matchs.slice(0).reverse());

  return (
    <Row
      style={{
        textAlign: 'center',
        padding: '20px',
      }}
      justify="space-around"
    >
      <Row>
        <h1> 매치 보기 </h1>
      </Row>
      <Row
        style={{
          boxShadow:
            '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        }}
      >
        <MatchsTitleRow>
          <Col span={4}>
            <h2> 홈 </h2>
          </Col>
          <Col span={4}>
            <h2> 어웨이 </h2>
          </Col>
          <Col span={5}>
            <h2> 경기시간 </h2>
          </Col>
          <Col span={4}>
            <h2> 현황 </h2>
          </Col>
          <Col span={5}>
            <h2> 마감 </h2>
          </Col>
          <Col span={2}>
            <h2> 베팅 </h2>
          </Col>
        </MatchsTitleRow>
        <MatchsContentRow>
          {matchs
            ?.slice(0)
            .reverse()
            .map((match) => (
              // matchs.slice(0).reverse()
              <MatchLine {...match}></MatchLine>
            ))}
        </MatchsContentRow>
      </Row>
    </Row>
  );
};

// export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
//   store.dispatch({ type: LOAD_MATCHS_REQUEST, index: 1 });
// });

export default matchs;
