import { FullDiv } from "../styles/styled-components"
import { Button, Input, Checkbox, Form } from "antd"

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
}

const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
}

const loginFormStyle = {
  top: "50%",
  position: "relative",
  transform: "translate(0%,-80%)",
}

const login = () => {
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
        style={loginFormStyle}
        name='basic'
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label='이메일'
          name='email'
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='비밀번호'
          name='password'
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name='remember' valuePropName='checked'>
          <Checkbox>아이디 기억하기</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </FullDiv>
  )
}

export default login
