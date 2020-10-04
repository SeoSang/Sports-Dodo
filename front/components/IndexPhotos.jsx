import { Button, Carousel, Row } from 'antd';
import React from 'react';
import { FlexDiv } from '../styles/styled-components';
import styled from 'styled-components';
import Link from 'next/link';

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

const IndexPhotos = ({ scrollToRef, show }) => {
  return (
    <Carousel autoplay>
      <Row style={{ zIndex: 20 }}>
        <MessiContainer onClick={scrollToRef}>
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
                  <span style={{ color: '#ed1c23' }}>매치 리스트</span>를
                  확인하세요
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

      <Row style={{ zIndex: 20 }}>
        <MessiContainer onClick={scrollToRef}>
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
                  <span style={{ color: '#011cac' }}>배팅</span>을 하고 포인트를
                  얻으세요
                </TitleH1>
              </>
            ) : (
              <>
                <TitleH1 style={{ fontSize: '4rem' }}>
                  실시간 <span style={{ color: '#011cac' }}>랭킹을</span>{' '}
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
    </Carousel>
  );
};

export default IndexPhotos;
