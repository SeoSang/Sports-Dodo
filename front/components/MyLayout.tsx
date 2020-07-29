import React from "react"
import { Drawer, Button, Row, Menu, Col, Popover, Layout } from "antd"
import { useState } from "react"
import styled from "styled-components"
import { FC } from "react"
import {
  UserOutlined,
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons"
import Avatar from "antd/lib/avatar/avatar"
import SubMenu from "antd/lib/menu/SubMenu"

const dummy_me = {
  email: "scscsc@naver.com",
  nickname: "김건모",
}

export const BackgroundDiv = styled.div`
  height: 90vh;
`

const TitleBarDiv = styled.div`
  border-bottom-width: 1px;
  border-bottom-style: solid;
  background-color: #001529;
  padding: 2px;
`
const MyProfile = (
  <div>
    <h2>{dummy_me?.email}</h2>
    <h3>{dummy_me?.nickname + "님"}</h3>
    <p>Point : 356p</p>
    <p>랭킹 : 777위</p>
    <Button style={{ margin: "5px" }}>자세히</Button>
    <Button style={{ margin: "5px" }}>로그아웃</Button>
  </div>
)

const MyLayout: FC<{ children: any }> = ({ children }) => {
  const [visible, setVisible] = useState(false)
  const toggleCollapsed = () => {
    setVisible(!visible)
  }
  return (
    <>
      <TitleBarDiv>
        <Row style={{ height: "50px" }}>
          <Col className='vertical-mid' span={4}>
            <Button onClick={toggleCollapsed}>
              <MenuUnfoldOutlined />
            </Button>
          </Col>
          <Col style={{ textAlign: "center" }} span={16}>
            <h1>LOGO</h1>
          </Col>
          <Col
            style={{
              textAlign: "end",
              position: "relative",
              top: "50%",
              transform: "translate(-5%, -50%)",
            }}
            span={4}
          >
            <Popover className='cursor-point' content={MyProfile} title='내 정보' trigger='click'>
              <Avatar shape='square' size='large' icon={<UserOutlined />} />
            </Popover>
          </Col>
        </Row>
      </TitleBarDiv>
      <div style={{ zIndex: 10, position: "absolute", width: 256, top: "70px" }}>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode='inline'
          theme='dark'
          inlineCollapsed={visible}
        >
          <Menu.Item key='1' icon={<DesktopOutlined />}>
            매칭 보기
          </Menu.Item>
          <Menu.Item key='2' icon={<PieChartOutlined />}>
            통계 보기
          </Menu.Item>
          <Menu.Item key='3' icon={<ContainerOutlined />}>
            적중 내역보기
          </Menu.Item>
          <SubMenu key='sub1' icon={<AppstoreOutlined />} title='기타 메뉴'>
            <Menu.Item key='5'>메뉴 1</Menu.Item>
            <Menu.Item key='6'>메뉴 2</Menu.Item>
            <Menu.Item key='7'>메뉴 3</Menu.Item>
          </SubMenu>
          <SubMenu key='sub2' icon={<MailOutlined />} title='커뮤니티'>
            <Menu.Item key='9'>커뮤니티 1</Menu.Item>
            <Menu.Item key='10'>커뮤니티 2</Menu.Item>
            <SubMenu key='sub3' title='Submenu'>
              <Menu.Item key='11'>기타 1</Menu.Item>
              <Menu.Item key='12'>기타 2</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </div>
      <Row>
        <BackgroundDiv>{children}</BackgroundDiv>
      </Row>
      <Layout.Footer style={{ textAlign: "center" }}>
        프로젝트 이름 ©2020 Created by ~~~
      </Layout.Footer>
    </>
  )
}

export default MyLayout
