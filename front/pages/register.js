import { FullDiv } from "../styles/styled-components"
import { Button, Input, Checkbox, Form } from "antd"
import { UserOutlined, LockOutlined, MailOutlined, SmileOutlined } from "@ant-design/icons"
import Link from "next/link"

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
}

const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
}

const registerFormStyle = {
  top: "10%",
  position: "relative",
  transform: "translate(0%,0%)",
}

const register = () => {
  const onFinish = (values) => {
    console.log(values)
  }
  const onFinishFailed = (values) => {
    console.log(values)
  }
  return (
    <FullDiv style={{ marginTop: "5vh" }}>
      <Form
        {...layout}
        style={registerFormStyle}
        name='basic'
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <h1>회원가입</h1>
        <Form.Item
          label='이메일'
          name='email'
          rules={[{ required: true, message: "이메일을 입력해주세요!" }]}
        >
          <Input prefix={<MailOutlined className='site-form-item-icon' />} placeholder='E-mail' />
        </Form.Item>

        <Form.Item
          label='비밀번호'
          name='password'
          rules={[{ required: true, message: "Please input your password!" }]}
          //   SmileOutlined
        >
          <Input
            prefix={<LockOutlined className='site-form-item-icon' />}
            type='password'
            placeholder='Password'
          />
        </Form.Item>
        <Form.Item
          name='confirm'
          label='비밀번호 확인'
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "비밀번호 확인을 입력해주세요!",
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve()
                }
                return Promise.reject("비밀번호가 일치하지 않습니다!")
              },
            }),
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className='site-form-item-icon' />}
            placeholder='password check'
          />
        </Form.Item>
        <Form.Item
          label='이름'
          name='name'
          rules={[{ required: true, message: "이름을 입력해주세요!" }]}
        >
          <Input prefix={<UserOutlined className='site-form-item-icon' />} placeholder='name' />
        </Form.Item>
        <Form.Item
          label='별명'
          name='nickname'
          rules={[{ required: true, message: " 별명을 입력해주세요!" }]}
        >
          <Input
            prefix={<SmileOutlined className='site-form-item-icon' />}
            placeholder='nickname'
          />
        </Form.Item>

        <Form.Item
          {...tailLayout}
          name='agreement'
          valuePropName='checked'
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject("Should accept agreement"),
            },
          ]}
        >
          <Checkbox>
            <a href='' style={{ color: "blue" }}>
              이용약관
            </a>
            에 동의합니다.
          </Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <div>
            <Button type='primary' htmlType='submit'>
              회원가입
            </Button>
          </div>
        </Form.Item>
      </Form>
    </FullDiv>
  )
}

export default register
