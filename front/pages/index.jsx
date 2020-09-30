import { List, Row, Col, Card, Progress, Button, Layout, BackTop } from 'antd';
import { dummy_main_rankings } from '../src/dummy';
import { LowerDiv, SportCategories } from '../styles/styled-components';
import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_MAIN_MATCHS_REQUEST } from '../sagas/match';
import moment from 'moment';
import { LOAD_RANKINGS_REQUEST } from '../sagas/ranking';
import IndexCard from '../components/IndexCard';
import NoMatchCard from '../components/NoMatchCard';

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
  height: 100%;
  background-color: #f6f5f5;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media (max-width: 992px) {
    // height: 60vh;
  }
`;

const MessiContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 93vh;
  overflow: hidden;
  opacity: 90%;
  cursor: pointer;
  width: 100%;
`;

const SlideRefDiv = styled.div`
  display: flex;
  width: 300%;
  height: 100%;
  align-items: center;
  transition: all 0.5s ease-in-out;
  transform: translateX(${props => props.tr});
`;

const MatchTime = styled.div`
  // position: absolute;
  display: inline-block;
  bottom: 20px;
  right: 20px;
  padding: 3px;
  border: 1px solid gray;
`;

const SliderButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 992px) {
    flex-direction: row;
  }
`;

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const slideRef = useRef(null);
  const messiRef = useRef(null);
  const dispatch = useDispatch();
  const { matchs } = useSelector(state => state.match);
  const { rankings } = useSelector(state => state.ranking);

  useEffect(() => {
    dispatch({
      type: LOAD_RANKINGS_REQUEST,
    });
    dispatch({
      type: LOAD_MAIN_MATCHS_REQUEST,
    });
  }, []);

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
          <img style={{ width: '100%' }} src="/images/messi.jpg"></img>
        </MessiContainer>
      </Row>
      <MainRow style={{ height: '100vh' }}>
        <Row
          style={{ marginTop: '5vh', textAlign: 'center' }}
          justify="space-around"
          gutter={16}
        >
          <UpperCol xs={24} lg={19}>
            <div style={{ height: '100%', overflow: 'hidden' }}>
              <SlideRefDiv ref={slideRef} tr={currentSlide}>
                {matchs && matchs.length !== 0 ? (
                  matchs.map((match, i) => (
                    <IndexCard match={match} key={i}></IndexCard>
                  ))
                ) : (
                  <NoMatchCard />
                )}
              </SlideRefDiv>
            </div>
          </UpperCol>
          <UpperCol style={{ height: '100%' }} xs={24} lg={3}>
            <SliderButtonContainer style={{ height: '100%' }}>
              <SportCategories onClick={onClickFootball}>축구</SportCategories>
              <SportCategories onClick={onClickBaseball}>야구</SportCategories>
              <SportCategories onClick={onClickBasketball}>
                농구
              </SportCategories>
            </SliderButtonContainer>
          </UpperCol>
        </Row>
        <LowerDiv>
          <h2>실시간 랭킹</h2>
          <Row>
            {rankings ? (
              <Col span={8}>
                <List
                  header={
                    <img
                      style={{
                        width: '60px',
                        height: '30px',
                      }}
                      src={IMAGE_MAPPING['축구']}
                    ></img>
                  }
                  bordered
                  dataSource={rankings.slice(0, 5)}
                  renderItem={(item, i) => (
                    <List.Item>{`${i + 1}위 - ${item.nickname}`}</List.Item>
                  )}
                ></List>
              </Col>
            ) : (
              <></>
            )}
            {dummy_main_rankings.map((ranking, index) => (
              <Col span={8} key={index}>
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
                  dataSource={ranking.data.slice(0, 5)}
                  renderItem={(item, i) => (
                    <List.Item>{`${i + 1}위 - ${item.nickname}`}</List.Item>
                  )}
                ></List>
              </Col>
            ))}
          </Row>
        </LowerDiv>
      </MainRow>
      <div style={{ float: 'left', clear: 'both' }} ref={messiRef}></div>
    </>
  );
};

export default Home;
