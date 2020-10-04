import React from 'react';
import { Button, Row, Col, Popover, Form, Input, message, Divider } from 'antd';
import { useState } from 'react';
import { UserOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import Avatar from 'antd/lib/avatar/avatar';
import { Background100Div } from '../styles/styled-components';
import MainMenu from './MainMenu';
import login from '../pages/login';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { ContentDiv, TitleBarDiv } from '../styles/styled-components';
import styled from 'styled-components';
import { LOG_OUT } from '../sagas/user';
import axios from 'axios';
import Link from 'next/link';

const MenuButton = styled.a`
  display: inline-block;
  transition: all 0.4s;
  position: relative;
  width: 50px;
  height: 44px;
  margin-left: 8px;

  span {
    display: inline-block;
    transition: all 0.4s;
    position: absolute;
    left: 0;
    width: 80%;
    height: 4px;
    background-color: #fff;
    border-radius: 4px;
  }

  span:nth-child(1) {
    top: 13px;
  }
  span:nth-child(2) {
    top: 23px;
  }
  span:nth-child(3) {
    top: 33px;
  }
`;

const MyProfile = me => {
  const dispatch = useDispatch();
  const onClickLogout = () => {
    try {
      dispatch({ type: LOG_OUT });
      sessionStorage.clear();
      delete axios.defaults.headers.common['x-access-token'];
      message.info('로그아웃 완료!');
    } catch (e) {
      message.error('로그아웃 실패!');
    }
  };

  return (
    <div>
      <h2>{me?.email}</h2>
      <h3>{me?.nickname + '님'}</h3>
      <p>Point : {me?.point}p</p>
      <p>랭킹 : {me?.rank ? me.rank : 0}위</p>
      <Button style={{ margin: '5px' }}>
        <Link href="./profile">
          <a>자세히</a>
        </Link>
      </Button>
      <Button onClick={onClickLogout} style={{ margin: '5px' }}>
        로그아웃
      </Button>
    </div>
  );
};

const NullProfile = (
  <div>
    <h2>로그인이</h2>
    <h2>필요합니다</h2>
    <div>
      <Button style={{ margin: '5px' }}>
        <Link href="./login">
          <a>로그인</a>
        </Link>
      </Button>
      <Button style={{ margin: '5px' }}>
        <Link href="./register">
          <a>회원가입</a>
        </Link>
      </Button>
    </div>
  </div>
);

const MyLayout = ({ children, me }) => {
  const [visible, setVisible] = useState(false);
  const toggleCollapsed = () => {
    setVisible(!visible);
  };

  return (
    <>
      <TitleBarDiv
        style={{
          backgroundColor: 'black',
          margin: '0',
          position: 'fixed',
          zIndex: '100',
          width: '100%',
        }}
      >
        <Row style={{ height: '50px' }}>
          <Col className="vertical-mid" span={4}>
            <MenuButton onClick={toggleCollapsed}>
              <span> </span>
              <span> </span>
              <span> </span>
            </MenuButton>
          </Col>
          <Col style={{ textAlign: 'center' }} span={16}>
            <Link href="/">
              <a>
                <img
                  style={{ width: '100px', height: '40px' }}
                  src="/images/logo.png"
                />
              </a>
            </Link>
          </Col>
          <Col
            style={{
              textAlign: 'end',
              position: 'relative',
              top: '50%',
              transform: 'translate(-5%, -50%)',
            }}
            span={4}
          >
            <Popover
              className="cursor-point profile-popover"
              content={me ? MyProfile(me) : NullProfile}
              title="내 정보"
              trigger="click"
              placement="bottom"
            >
              <Avatar
                shape="square"
                size="large"
                icon={me ? <UserOutlined /> : <QuestionCircleOutlined />}
              />
            </Popover>
          </Col>
        </Row>
      </TitleBarDiv>
      <MainMenu visible={visible} />
      <Background100Div style={{ textAlign: 'center' }}>
        {children}
        <Divider></Divider>
        <footer style={{ padding: '1rem' }}>
          <p>
            Copyright (C) 2020. <a>스포츠도도</a>. All rights reserved
          </p>
        </footer>
      </Background100Div>
    </>
  );
};

export default MyLayout;
