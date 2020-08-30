import { List, Row, Col, Card, Progress, Button, Layout, BackTop } from 'antd';
import {
  dummy_match_A,
  dummy_main_rankings,
  dummy_main_matches,
} from '../src/dummy';
import { LowerDiv, SportCategories } from '../styles/styled-components';
import { useState, useRef } from 'react';
import styled from 'styled-components';

const FOOTBALL_TRANSLATE = '-0';
const BASEBALL_TRANSLATE = '-33.3%';
const BASKETBALL_TRANSLATE = '-66.6%';

const IMAGE_MAPPING = {
  축구: '/images/premier_league.png',
  야구: '/images/kbo.png',
  농구: '/images/nba.jpg',
};

export const MainRow = styled(Row)`
  height: 100vh;
  background-color: #e8e8e8;
`;

export const UpperCol = styled(Col)`
  padding: 3px;
  margin: 0.2vh 1vw;
  margin-top: 1vh;
  height: 35vh;
  background-color: #f6f5f5;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const MessiContainer = styled.div`
  height: 93vh;
  overflow: hidden;
  opacity: 90%;
`;

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const slideRef = useRef(null);
  const messiRef = useRef(null);

  const onClickFootball = e => {
    // 슬라이드 애니메이션
    setCurrentSlide(FOOTBALL_TRANSLATE);
  };
  const onClickBaseball = e => {
    setCurrentSlide(BASEBALL_TRANSLATE);
  };
  const onClickBasketball = e => {
    setCurrentSlide(BASKETBALL_TRANSLATE);
  };

  const scrollToBottom = () => {
    messiRef.current.scrollIntoView({ behavior: 'smooth' });
    messiRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Row style={{ zIndex: 20 }}>
        <MessiContainer onClick={scrollToBottom}>
          <img style={{ minWidth: '100%' }} src="/images/messi.jpg"></img>
        </MessiContainer>
      </Row>
      <MainRow style={{ height: '100vh' }}>
        <Row
          style={{ marginTop: '5vh', textAlign: 'center' }}
          justify="space-around"
          gutter={16}
        >
          <UpperCol span={19}>
            <div style={{ overflow: 'hidden' }}>
              <div
                ref={slideRef}
                style={{
                  width: '300%',
                  display: 'flex',
                  transition: 'all 0.5s ease-in-out',
                  transform: `translateX(${currentSlide}`,
                }}
              >
                {dummy_main_matches.map((match, i) => (
                  <Card
                    title={dummy_main_matches.category}
                    bordered={true}
                    style={{
                      margin: '3px 5px',
                      width: '11%',
                      height: '100%',
                    }}
                    key={`card${i}`}
                  >
                    <h2>{`${match.teamA} VS ${match.teamB}`} </h2>
                    <label>승 : 100p</label>
                    <Progress percent={30} size="small" />
                    <label>무 : 350p</label>
                    <Progress strokeColor={'green'} percent={50} size="small" />
                    <label>패 : 80p</label>
                    <Progress strokeColor={'red'} percent={20} size="small" />
                    <br></br>
                    <Button style={{ marginTop: '15px' }}>자세히 보기</Button>
                  </Card>
                ))}
              </div>
            </div>
          </UpperCol>
          <UpperCol span={3}>
            <Layout style={{ height: '100%' }}>
              <SportCategories onClick={onClickFootball}>축구</SportCategories>
              <SportCategories onClick={onClickBaseball}>야구</SportCategories>
              <SportCategories onClick={onClickBasketball}>
                농구
              </SportCategories>
            </Layout>
          </UpperCol>
        </Row>
        <LowerDiv>
          <h2>실시간 랭킹</h2>
          <Row>
            {dummy_main_rankings.map((ranking, i) => {
              return (
                <Col span={8} key={`ranking${i}`}>
                  <List
                    header={
                      <img
                        style={{
                          width: '60px',
                          height: '30px',
                        }}
                        src={IMAGE_MAPPING[ranking.category]}
                      ></img>
                    }
                    bordered
                    dataSource={ranking.rankings}
                    renderItem={(item, i) => (
                      <List.Item>{`${i + 1}위 - ${item}`}</List.Item>
                    )}
                  ></List>
                </Col>
              );
            })}
          </Row>
        </LowerDiv>
      </MainRow>
      <div style={{ float: 'left', clear: 'both' }} ref={messiRef}></div>
    </>
  );
};

export default Home;
