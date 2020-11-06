import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { LOAD_RANKINGS_REQUEST } from '../sagas/ranking';
import RankingLine from '../components/RankingLine';

const RankingsTitleRow = styled(Row)`
  background-color: #b6dbf2;
  padding: 10px;
`;

const RankingsContentRow = styled(Row)`
  background-color: white;
  min-height: 80vh;
  padding: 10px;
  font-weight: 500;
`;

const rankings = () => {
  const { rankings } = useSelector((state) => state.ranking);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: LOAD_RANKINGS_REQUEST,
    });
  }, []);
  return (
    <Row
      style={{
        textAlign: 'center',
        padding: '20px',
      }}
      justify="space-around"
    >
      <Row>
        <h1> 포인트 랭킹 </h1>
      </Row>
      <Row
        style={{
          boxShadow:
            '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        }}
      >
        <RankingsTitleRow>
          <RankingLine />
        </RankingsTitleRow>
        <RankingsContentRow>
          {rankings?.map((ranking, i) => (
            <RankingLine {...ranking} key={`rank_${i}`} rank={i + 1}>
              {' '}
            </RankingLine>
          ))}
        </RankingsContentRow>
      </Row>
    </Row>
  );
};

// export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
//   store.dispatch({ type: LOAD_Rankings_REQUEST, index: 1 });
// });

export default rankings;
