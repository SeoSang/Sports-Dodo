import { List, Row, Col, Card, Progress, Button, Layout, BackTop,Carousel } from 'antd';
import { dummy_main_rankings } from '../src/dummy';
import {
  FlexDiv,
  LowerDiv,
  SportCategories,
} from '../styles/styled-components';
import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_MAIN_MATCHS_REQUEST } from '../sagas/match';
import moment from 'moment';
import { LOAD_RANKINGS_REQUEST } from '../sagas/ranking';
import IndexCard from '../components/IndexCard';
import NoMatchCard from '../components/NoMatchCard';
import Link from 'next/link';

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
  background-color: #ffffff;
`;

export const UpperCol = styled(Col)`
  padding: 3px;
  margin: 0.2vh 1vw;
  margin-top: 1vh;
  height: 100%;
  background-color: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.07), 0 3px 10px 0 rgba(0, 0, 0, 0.004);

  @media (max-width: 992px) {
    // height: 60vh;
    font-size: 80%;
  }
`;

const TitleH1 = styled.h1`
  font-size: 6rem;
  font-weight: 700;
  @media (max-width: 1300px) {
    font-size: 4.8rem;
  }
  @media (max-width: 1000px) {
    font-size: 3.7rem;
  }
  @media (max-width: 780px) {
    font-size: 2.5rem;
  }
`;

const MessiContainer = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  width: 100%;
  height: 20%;
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
    font-size: 80%;
  }
`;

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const slideRef = useRef(null);
  const messiRef = useRef(null);
  const dispatch = useDispatch();
  const { matchs } = useSelector(state => state.match);
  const { rankings } = useSelector(state => state.ranking);
  const [show, handleShow] = useState(false);

  useEffect(() => {
    dispatch({
      type: LOAD_RANKINGS_REQUEST,
    });
    dispatch({
      type: LOAD_MAIN_MATCHS_REQUEST,
    });
  }, []);

  useEffect(() => {
    const scrollFun = () => {
      if (window.scrollY > 60) {
        handleShow(true);
      } else handleShow(false);
    };
    window.addEventListener('scroll', scrollFun);
    return () => {
      window.removeEventListener('scroll', scrollFun);
    };
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
      <Carousel autoplay>
        <div>
          <Row style={{ zIndex: 20 }}>
            <MessiContainer onClick={scrollToBottom}>
              <img
                style={{ width: '100%', height: '50%', opacity: '50%' }}
                src="/images/messi.jpg"
              />
              <FlexDiv
                width="100%"
                height="50%"
                style={{
                  position: 'absolute',
                  opacity: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {show ? (
                  <>
                    <TitleH1 style={{ fontSize: '4rem' }}>
                      매치 리스트를 확인하세요
                    </TitleH1>
                  </>
                ) : (
                  <>
                    <TitleH1 style={{ fontSize: '4rem' }}>
                      당신의 <span style={{ color: '#ed1c23' }}>통찰력을</span>{' '}
                      보여주세요!
                    </TitleH1>
                    <Button
                      type="primary"
                      style={{
                        backgroundColor: '#ffff4d',
                        color: 'black',
                        border: 'none',
                        width: '50vh',
                        height: '8vh',
                        fontSize: '1.7rem',
                      }}
                    >
                      <Link href="/matchings">
                        <a>
                          <b>배팅 하러 가기</b>
                        </a>
                      </Link>
                    </Button>
                  </>
                )}
              </FlexDiv>
            </MessiContainer>
          </Row>
        </div>

        <div>
          <Row style={{ zIndex: 20 }}>
            <MessiContainer onClick={scrollToBottom}>
              <img
                  style={{ width: '100%', height: '50%', opacity: '50%' }}
                  src="/images/son.jpg"
              />
              <FlexDiv
                  width="100%"
                  height="50%"
                  style={{
                    position: 'absolute',
                    opacity: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
              >
                {show ? (
                    <>
                      <TitleH1 style={{ fontSize: '4rem' }}>
                        배팅을 하고 포인트를 얻으세요
                      </TitleH1>
                    </>
                ) : (
                    <>
                      <TitleH1 style={{ fontSize: '4rem' }}>
                        실시간 <span style={{ color: '#ed1c23' }}>랭킹을</span>{' '}
                        확인하세요!
                      </TitleH1>
                      <Button
                          type="primary"
                          style={{
                            backgroundColor: '#ffff4d',
                            color: 'black',
                            border: 'none',
                            width: '50vh',
                            height: '8vh',
                            fontSize: '1.7rem',
                          }}
                      >
                        <Link href="/rankings ">
                          <a>
                            <b>랭킹 보러가기</b>
                          </a>
                        </Link>
                      </Button>
                    </>
                )}
              </FlexDiv>
            </MessiContainer>
          </Row>
        </div>
      </Carousel>

      <MainRow>
        <Card
          style={{
            backgroundColor: '#fcfcfc',
            margin: '5px',
            boxShadow:
              '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          }}
        >
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
                <SportCategories onClick={onClickFootball}>
                  축구
                </SportCategories>
                <SportCategories onClick={onClickBaseball}>
                  야구
                </SportCategories>
                <SportCategories onClick={onClickBasketball}>
                  농구
                </SportCategories>
              </SliderButtonContainer>
            </UpperCol>
          </Row>
        </Card>
        <LowerDiv style={{ margin: '10px' }}>
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
