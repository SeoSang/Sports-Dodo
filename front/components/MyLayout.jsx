import React from 'react';
import { Drawer, Button, Row, Menu, Col, Popover, Form, Input } from 'antd';
import { useState } from 'react';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Avatar from 'antd/lib/avatar/avatar';
import { Background90Div } from '../styles/styled-components';
import MainMenu from './MainMenu';
import login from '../pages/login';
import { useSelector, shallowEqual } from 'react-redux';
import Link from 'next/link';
import { ContentDiv, TitleBarDiv } from '../styles/styled-components';
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

const MyProfile = (me) => (
  <div>
    <h2>{me?.email}</h2>
    <h3>{me?.nickname + '님'}</h3>
    <p>Point : {me?.point}p</p>
    <p>랭킹 : 777위</p>
    <Button style={{ margin: '5px' }}>
      <Link href="./profile">
        <a>자세히</a>
      </Link>
    </Button>
    <Button style={{ margin: '5px' }}>로그아웃</Button>
  </div>
);

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
// const TestProfile = (me) => (
//   <div>
//     <h2>로그인이</h2>
//     <h2>필요합니다</h2>
//     <div>
//       <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
//         <Form.Item
//           label="이메일"
//           name="email"
//           rules={[{ required: true, message: '이메일을 입력해주세요!' }]}
//         >
//           <Input
//             prefix={<UserOutlined className="site-form-item-icon" />}
//             placeholder="E-mail"
//           />
//         </Form.Item>

//         <Form.Item
//           label="비밀번호"
//           name="password"
//           rules={[
//             {
//               required: true,
//               message: 'Please input your password!',
//             },
//           ]}
//         >
//           <Input
//             prefix={<LockOutlined className="site-form-item-icon" />}
//             type="password"
//             placeholder="Password"
//           />
//         </Form.Item>
//       </Form>
//     </div>
//   </div>
// );

// const onFinish = (values) => {
//   // dispatch({ type: LOG_IN_REQUEST, data: values });
//   <login email={values.email} password={values.password} />;
// };
// const onFinishFailed = (values) => {};

const MyLayout = ({ children, me }) => {
  const [visible, setVisible] = useState(false);
  const toggleCollapsed = () => {
    setVisible(!visible);
  };

  return (
    <>
      <TitleBarDiv>
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
              content={me ? MyProfile(me) : NullProfile}
              title="내 정보"
              trigger="click"
            >
              <Avatar shape="square" size="large" icon={<UserOutlined />} />
            </Popover>
          </Col>
        </Row>
      </TitleBarDiv>
      <MainMenu visible={visible} />
      <Background90Div style={{ textAlign: 'center' }}>
        <ContentDiv>{children}</ContentDiv>
      </Background90Div>
    </>
  );
};

export default MyLayout;
