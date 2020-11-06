import React from 'react';
import { FlexDiv } from '../styles/styled-components';

const NoMatchCard = () => {
  return (
    <FlexDiv style={{ textAlign: 'center' }} height="100%" width="300%">
      <FlexDiv width="33%">
        <h1 style={{ textAlign: 'center' }}>진행중인 축구경기가 없습니다!</h1>
      </FlexDiv>
      <FlexDiv width="33%">
        <h1 style={{ textAlign: 'center' }}>진행중인 야구경기가 없습니다!</h1>
      </FlexDiv>
      <FlexDiv width="33%">
        <h1 style={{ textAlign: 'center' }}>진행중인 농구경기가 없습니다!</h1>
      </FlexDiv>
    </FlexDiv>
  );
};

export default NoMatchCard;
