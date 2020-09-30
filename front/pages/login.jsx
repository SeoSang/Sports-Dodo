import { FullDiv } from '../styles/styled-components';
import { Button, Input, Checkbox, Form, Alert, notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { LOG_IN_REQUEST } from '../sagas/user';
import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
import { Cookies } from 'react-cookie';
import { wrapper } from '../store';
import Notification from '../components/Notification';
import axios from 'axios';
import { BACKEND_URL } from '../sagas';

const layout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 10 },
};

const tailLayout = {
  wrapperCol: { offset: 7, span: 10 },
};

const loginFormStyle = {
  top: '50%',
  position: 'relative',
  transform: 'translate(0%,-80%)',
};

const cookie = new Cookies();

const login = () => {
  const { isLoginSuccess, isLoggingIn, token, me } = useSelector(
    (state) => state.user
  );
  useEffect(() => {
    if (me && !isLoginSuccess) {
      Notification('이미 로그인 되었습니다!');
      // openNotification('이미 로그인 되었습니다!');
      // <Alert message="이미 로그인 되었습니다!" type="info" showIcon />;
      // alert('이미 로그인 되었습니다!');
      router.push('/');
    }
  }, [me]);

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (isLoginSuccess) {
      cookie.set('sd', token);
      // <Alert message="로그인에 성공하였습니다!" type="success" showIcon />;
      // alert('로그인에 성공하였습니다!');

      Notification('로그인에 성공하였습니다!');
      // openNotification('로그엔이 성공하였습니다!');
      // router.push('/');
      // () = setTimeout((timer) => {
      router.push('/');
      // }, 5000);
      // timer();
      // setTimeout(, 5000);
      // 왜 Unhandled Runtime Error 발생하지 ?
    }
    // return () => clearTimeout(timer);
  }, [isLoginSuccess, isLoggingIn, token]);

  const onFinish = (values) => {
    dispatch({ type: LOG_IN_REQUEST, data: values });
  };

  const onFinishFailed = (values) => {};

  const onClickTest = async () => {
    const result = await axios.get(`${BACKEND_URL}/ping`);
    console.log(result);
  };

  return (
    <FullDiv style={{ marginTop: '5vh' }}>
      {/* <Button onClick={onClickTest}>핑 테스트</Button> */}

      <Form
        {...layout}
        style={loginFormStyle}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <h1>로그인</h1>
        <Form.Item
          label="이메일"
          name="email"
          rules={[{ required: true, message: '이메일을 입력해주세요!' }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="E-mail"
          />
        </Form.Item>

        <Form.Item
          label="비밀번호"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>아이디 기억하기</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <div>
            <Button
              type="primary"
              htmlType="submit"
              style={{ margin: '0 5px' }}
            >
              로그인
            </Button>
            <Button type="primary" style={{ margin: '0 5px' }}>
              <Link href="/register">
                <a>회원가입</a>
              </Link>
            </Button>
            <Button type="primary" style={{ margin: '0 5px' }}>
              비밀번호 찾기
            </Button>
          </div>
        </Form.Item>
      </Form>
    </FullDiv>
  );
};

export default login;
