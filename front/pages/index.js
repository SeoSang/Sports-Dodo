import { List, Row, Col, Card, Progress, Button, Layout } from 'antd';
import {
  dummy_match_A,
  dummy_main_rankings,
  dummy_main_matches,
} from '../src/dummy';
import {
  UpperDiv,
  LowerDiv,
  SportCategories,
} from '../styles/styled-components';
import { useState, useRef } from 'react';

const FOOTBALL_TRANSLATE = '-0';
const BASEBALL_TRANSLATE = '-33.3%';
const BASKETBALL_TRANSLATE = '-66.6%';

const IMAGE_MAPPING = {
  축구: '/images/premier_league.png',
  야구: '/images/kbo.png',
  농구: '/images/nba.jpg',
};

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const slideRef = useRef(null);

<<<<<<< HEAD
  const onClickFootball = e => {
    // 슬라이드 애니메이션
    setCurrentSlide(FOOTBALL_TRANSLATE);
  };
  const onClickBaseball = e => {
    setCurrentSlide(BASEBALL_TRANSLATE);
  };
  const onClickBasketball = e => {
=======
  const onClickFootball = (e) => {
    // 슬라이드 애니메이션
    setCurrentSlide(FOOTBALL_TRANSLATE);
  };
  const onClickBaseball = (e) => {
    setCurrentSlide(BASEBALL_TRANSLATE);
  };
  const onClickBasketball = (e) => {
>>>>>>> 0d0d66aa37d4af35280109ea812ca09a0fd7063b
    setCurrentSlide(BASKETBALL_TRANSLATE);
  };

  return (
    <>
      <Row style={{ textAlign: 'center' }} justify="space-around" gutter={16}>
        <UpperDiv>
          <Col span={20}>
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
<<<<<<< HEAD
                {dummy_main_matches.map(match => (
=======
                {dummy_main_matches.map((match) => (
>>>>>>> 0d0d66aa37d4af35280109ea812ca09a0fd7063b
                  <Card
                    title={dummy_main_matches.category}
                    bordered={false}
                    style={{
                      margin: '3px 5px',
                      width: '11%',
                      height: '100%',
                    }}
                  >
                    <h2>{`${match.teamA} VS ${match.teamB}`} </h2>
<<<<<<< HEAD
                    <Progress type="circle" percent={75} />
=======
                    <label>승 : 100p</label>
                    <Progress percent={30} size="small" />
                    <label>무 : 350p</label>
                    <Progress strokeColor={'green'} percent={50} size="small" />
                    <label>패 : 80p</label>
                    <Progress strokeColor={'red'} percent={20} size="small" />
>>>>>>> 0d0d66aa37d4af35280109ea812ca09a0fd7063b
                    <br></br>
                    <Button style={{ marginTop: '15px' }}>자세히 보기</Button>
                  </Card>
                ))}
              </div>
            </div>
          </Col>
          <Col span={4} style={{ height: '100%' }}>
            <Layout style={{ height: '100%' }}>
              <SportCategories onClick={onClickFootball}>축구</SportCategories>
              <SportCategories onClick={onClickBaseball}>야구</SportCategories>
              <SportCategories onClick={onClickBasketball}>
                농구
              </SportCategories>
            </Layout>
          </Col>
        </UpperDiv>
      </Row>
      <LowerDiv>
        <h2>실시간 랭킹</h2>
        <Row>
<<<<<<< HEAD
          {dummy_main_rankings.map(ranking => {
=======
          {dummy_main_rankings.map((ranking) => {
>>>>>>> 0d0d66aa37d4af35280109ea812ca09a0fd7063b
            return (
              <Col span={8}>
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
    </>
  );
};

export default Home;
