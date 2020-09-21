import { List, Row, Col, Card, Progress, Button, Layout, BackTop } from 'antd';
import moment from 'moment';
import { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const MatchTime = styled.div`
  // position: absolute;
  display: inline-block;
  bottom: 20px;
  right: 20px;
  padding: 3px;
  border: 1px solid gray;
`;

const CardBottomDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  margin-top: 15px;
`;

const IndexCard = ({ match }) => {
  const [totalBattingNumber, setTotal] = useState(
    match.homeBattingNumber + match.drawBattingNumber + match.awayBattingNumber
  );
  return (
    <Card
      title={'축구'}
      bordered={true}
      style={{
        margin: '3px 5px',
        width: '11%',
      }}
    >
      <h2>{`${match.homeTeam} VS ${match.awayTeam}`} </h2>
      <label>승 : {match.homeBattingNumber} 명 베팅</label>
      <Progress
        percent={(match.homeBattingNumber / totalBattingNumber) * 100}
        size="small"
      />
      <label>무 : {match.drawBattingNumber} 명 베팅</label>
      <Progress
        strokeColor={'green'}
        percent={(match.drawBattingNumber / totalBattingNumber) * 100}
        size="small"
      />
      <label>패 : {match.awayBattingNumber} 명 베팅</label>
      <Progress
        strokeColor={'red'}
        percent={(match.awayBattingNumber / totalBattingNumber) * 100}
        size="small"
      />
      <br></br>
      <CardBottomDiv>
        <Link href={{ pathname: 'Match', query: { matchId: match._id } }}>
          <a>
            <Button>자세히 보기</Button>
          </a>
        </Link>
        <MatchTime>{moment(match.startTime).format('lll')}</MatchTime>
      </CardBottomDiv>
    </Card>
  );
};

export default IndexCard;
