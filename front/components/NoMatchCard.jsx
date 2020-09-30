import React from 'react';
import { FlexDiv } from '../styles/styled-components';

const NoMatchCard = () => {
  return (
    <FlexDiv style={{ textAlign: 'center' }} height="100%" width="78vw">
      <h1 style={{ textAlign: 'center' }}>경기가 없습니다!</h1>
    </FlexDiv>
  );
};

export default NoMatchCard;
