import { useEffect, useState } from 'react';
import { FlexDiv, FullDiv } from '../styles/styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Notification from '../components/Notification';
import { Button, Input, Checkbox, Form, message, Modal } from 'antd';
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  SmileOutlined,
} from '@ant-design/icons';
import { REGISTER_REQUEST } from '../sagas/user';
import { agreement } from '../src/agreement';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
};

const registerFormStyle = {
  top: '10%',
  transform: 'translate(0%,0%)',
};

const register = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isRegistering, isRegisterSuccess } = useSelector(
    (state) => state.user
  );
  const [agreementVisible, setAgreementVisible] = useState(false);

  const { me } = useSelector((state) => state.user);
  useEffect(() => {
    if (me) {
      Notification('이미 로그인 되었습니다!');
      router.push('/');
    }
  }, [me]);

  useEffect(() => {
    if (isRegisterSuccess) {
      Notification('회원가입에 성공하였습니다!');
      router.push('/');
    }
  }, [isRegisterSuccess, isRegistering]);

  const onFinish = (values) => {
    if (!values.agreement) {
      Notification('이용약관에 동의해주세요!');
      // alert('이용약관에 동의해주세요!');
      return;
    }
    if (values.name.length < 2 || values.name.length > 50) {
      Notification(
        '이름 길이 제한에 어긋났습니다! \n (허용 범위 : 2글자 ~ 50글자'
      );
      return;
    }
    if (values.name.length < 3 || values.name.length > 100) {
      Notification(
        '닉네임 길이 제한에 어긋났습니다! \n (허용 범위 : 3글자 ~ 100글자'
      );
      return;
    }
    const reqValues = {
      email: values.email,
      password: values.password,
      name: values.name,
      nickname: values.nickname,
    };
    try {
      dispatch({ type: REGISTER_REQUEST, data: reqValues });
    } catch (e) {
      console.error(e);
      message.error('회원가입이 실패했습니다!');
      Notification('회원가입이 실패했습니다!');
    }
  };
  const onFinishFailed = (values) => {};
  return (
    <FlexDiv width="100%" height="100%">
      <FullDiv style={{ padding: '5vh 0' }}>
        <Form
          {...layout}
          style={registerFormStyle}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <h1>회원가입</h1>
          <Form.Item
            label="이메일"
            name="email"
            rules={[{ required: true, message: '이메일을 입력해주세요!' }]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="E-mail"
            />
          </Form.Item>

          <Form.Item
            label="비밀번호"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
            //   SmileOutlined
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              a
            />
          </Form.Item>
          <Form.Item
            name="confirm"
            label="비밀번호 확인"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: '비밀번호 확인을 입력해주세요!',
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject('비밀번호가 일치하지 않습니다!');
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="password check"
            />
          </Form.Item>
          <Form.Item
            label="이름"
            name="name"
            rules={[{ required: true, message: '이름을 입력해주세요!' }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="name"
            />
          </Form.Item>
          <Form.Item
            label="별명"
            name="nickname"
            rules={[{ required: true, message: ' 별명을 입력해주세요!' }]}
          >
            <Input
              prefix={<SmileOutlined className="site-form-item-icon" />}
              placeholder="nickname"
            />
          </Form.Item>

          <Form.Item
            {...tailLayout}
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject('Should accept agreement'),
              },
            ]}
          >
            <Checkbox>
              <a
                onClick={() => {
                  setAgreementVisible(true);
                }}
                style={{ color: 'blue' }}
              >
                이용약관
              </a>
              에 동의합니다.
            </Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <div>
              <Button type="primary" htmlType="submit">
                회원가입
              </Button>
            </div>
          </Form.Item>
        </Form>
      </FullDiv>
      <Modal
        title="이용약관"
        visible={agreementVisible}
        onCancel={(e) => {
          setAgreementVisible(false);
        }}
        onOk={(e) => {
          setAgreementVisible(false);
        }}
      >
        {agreement.split('\n').map((line) => {
          return (
            <span>
              {line}
              <br />
            </span>
          );
        })}
      </Modal>
    </FlexDiv>
  );
};

export default register;
