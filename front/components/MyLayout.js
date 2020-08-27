import React from 'react';
import { Drawer, Button, Row, Menu, Col, Popover, Layout } from 'antd';
import { useState } from 'react';
<<<<<<< HEAD
import { UserOutlined } from '@ant-design/icons';
=======
import {
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
>>>>>>> 0a144aa79c093bc94b440b58725e6334b9f69e6b
import Avatar from 'antd/lib/avatar/avatar';
import { Background90Div } from '../styles/styled-components';
import MainMenu from './MainMenu';
import { useSelector } from 'react-redux';
import { MyProfile, NullProfile } from './LayoutProfile';
import Link from 'next/link';
import { ContentDiv, TitleBarDiv } from '../styles/styled-components';
<<<<<<< HEAD
import styled from 'styled-components';

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
=======
>>>>>>> 0a144aa79c093bc94b440b58725e6334b9f69e6b

const MyLayout = ({ children }) => {
  const { me } = useSelector(state => state.user);
  const [visible, setVisible] = useState(false);
  const toggleCollapsed = () => {
    setVisible(!visible);
  };

  const handleMouseEnter = e => {
    setVisible(true);
    console.log('handleMouseEnter');
  };

  const handleMouseLeave = e => {
    setVisible(false);
  };

  return (
    <>
      <TitleBarDiv>
<<<<<<< HEAD
        <Row style={{ height: '50px' }}>
=======
        <Row style={{ height: '7vh' }}>
>>>>>>> 0a144aa79c093bc94b440b58725e6334b9f69e6b
          <Col className="vertical-mid" span={4}>
            <MenuButton onClick={toggleCollapsed}>
              <span> </span>
              <span> </span>
              <span> </span>
            </MenuButton>
          </Col>
          <Col style={{ textAlign: 'center' }} span={16}>
            <Link href="/">
<<<<<<< HEAD
              <a style={{ fontSize: '2em', color: '#1890FF' }}>LOGO</a>
=======
              <a style={{ fontSize: '2em', color: '#1890FF' }}>스포츠도도</a>
>>>>>>> 0a144aa79c093bc94b440b58725e6334b9f69e6b
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
              className="cursor-point"
              content={me ? MyProfile : NullProfile}
              title="내 정보"
              trigger="click"
            >
              <Avatar shape="square" size="large" icon={<UserOutlined />} />
            </Popover>
          </Col>
        </Row>
      </TitleBarDiv>
<<<<<<< HEAD
      <MainMenu visible={visible} />
      <Background90Div style={{ textAlign: 'center' }}>
        <ContentDiv>{children}</ContentDiv>
      </Background90Div>
      <Layout.Footer style={{ textAlign: 'center' }}>
=======
      <MainMenu
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        visible={visible}
      />
      <Background90Div style={{ textAlign: 'center' }}>
        <ContentDiv>{children}</ContentDiv>
      </Background90Div>
      {/* <Layout.Footer style={{ height: '3vh', textAlign: 'center' }}>
>>>>>>> 0a144aa79c093bc94b440b58725e6334b9f69e6b
        프로젝트 이름 ©2020 Created by ~~~
      </Layout.Footer> */}
    </>
  );
};

export default MyLayout;
