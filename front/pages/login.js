import { FullDiv } from '../styles/styled-components';
import { Button, Input, Checkbox, Form } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Link from 'next/link';

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

const register = () => {
    const onFinish = (values) => {
        console.log(values);
    };
    const onFinishFailed = (values) => {
        console.log(values);
    };
    return (
        <FullDiv style={{ marginTop: '5vh' }}>
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
                    rules={[
                        { required: true, message: '이메일을 입력해주세요!' },
                    ]}
                >
                    <Input
                        prefix={
                            <UserOutlined className="site-form-item-icon" />
                        }
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
                        prefix={
                            <LockOutlined className="site-form-item-icon" />
                        }
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>

                <Form.Item
                    {...tailLayout}
                    name="remember"
                    valuePropName="checked"
                >
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

export default register;
