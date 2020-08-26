import React from 'react';
import { Drawer, Button, Row, Menu, Col, Popover, Layout } from 'antd';
import { useState } from 'react';
import {
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import Avatar from 'antd/lib/avatar/avatar';
import { Background90Div } from '../styles/styled-components';
import MainMenu from './MainMenu';
import { useSelector } from 'react-redux';
import { MyProfile, NullProfile } from './LayoutProfile';
import Link from 'next/link';
import { ContentDiv, TitleBarDiv } from '../styles/styled-components';

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
        <Row style={{ height: '7vh' }}>
          <Col className="vertical-mid" span={4}>
            <Button onClick={toggleCollapsed}>
              {visible ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
            </Button>
          </Col>
          <Col style={{ textAlign: 'center' }} span={16}>
            <Link href="/">
              <a style={{ fontSize: '2em', color: '#1890FF' }}>스포츠도도</a>
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
      <MainMenu
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        visible={visible}
      />
      <Background90Div style={{ textAlign: 'center' }}>
        <ContentDiv>{children}</ContentDiv>
      </Background90Div>
      {/* <Layout.Footer style={{ height: '3vh', textAlign: 'center' }}>
        프로젝트 이름 ©2020 Created by ~~~
      </Layout.Footer> */}
    </>
  );
};

export default MyLayout;
