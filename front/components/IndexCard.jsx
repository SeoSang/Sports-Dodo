import { List, Row, Col, Card, Progress, Button, Layout, BackTop } from 'antd';
import moment from 'moment';
import { useEffect, useState } from 'react';
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

const getPercent = (home, draw, away) => {
  const total = home + draw + away;
  const homePercent =
    Math.floor((home / total) * 100) === 100
      ? 99.9
      : Math.floor((home / total) * 100);
  const drawPercent =
    Math.floor((draw / total) * 100) === 100
      ? 99.9
      : Math.floor((draw / total) * 100);
  const awayPercent =
    Math.floor((away / total) * 100) === 100
      ? 99.9
      : Math.floor((away / total) * 100);
  return { homePercent, drawPercent, awayPercent };
};

const IndexCard = ({ match }) => {
  const [percent, setPercent] = useState({
    homePercent: 0,
    drawPercent: 0,
    awayPercent: 0,
  });
  useEffect(() => {
    const percents = getPercent(
      match.homeBattingPoint,
      match.drawBattingPoint,
      match.awayBattingPoint
    );
    setPercent(percents);
  }, [match]);
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
      <label>
        승 : {match.homeBattingNumber} 명 베팅{' '}
        <strong>({match.homeBattingPoint}P)</strong>
      </label>
      <Progress percent={percent.homePercent} size="small" />
      <label>
        무 : {match.drawBattingNumber} 명 베팅{' '}
        <strong>({match.drawBattingPoint}P)</strong>{' '}
      </label>
      <Progress
        strokeColor={'green'}
        percent={percent.drawPercent}
        size="small"
      />
      <label>
        패 : {match.awayBattingNumber} 명 베팅{' '}
        <strong>({match.awayBattingPoint}P)</strong>
      </label>
      <Progress
        strokeColor={'red'}
        percent={percent.awayPercent}
        size="small"
      />
      <br></br>
      <CardBottomDiv>
        <Link href={{ pathname: 'match', query: { matchid: match._id } }}>
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
