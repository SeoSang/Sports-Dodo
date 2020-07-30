import React from "react"
import { Drawer, Button, Row, Menu, Col, Popover, Layout } from "antd"
import { useState } from "react"
import styled from "styled-components"
import { UserOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons"
import Avatar from "antd/lib/avatar/avatar"
import { Background90Div } from "../styles/styled-components"
import MainMenu from "./MainMenu"
import { dummy_me } from "../src/dummy.js"
import Link from "next/link"

const TitleBarDiv = styled.div`
  border-bottom-width: 1px;
  border-bottom-style: solid;
  background-color: #001529;
  padding: 2px;
`

const ContentDiv = styled.div`
  background-color: #d1ccc0;
  height: 80vh;
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

const MyLayout = ({ children }) => {
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
              {visible ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
            </Button>
          </Col>
          <Col style={{ textAlign: "center" }} span={16}>
            <Link href='/'>
              <a style={{ fontSize: "2em", color: "#1890FF" }}>LOGO</a>
            </Link>
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
      <MainMenu visible={visible} />
      <Background90Div style={{ textAlign: "center" }}>
        <ContentDiv>{children}</ContentDiv>
      </Background90Div>
      <Layout.Footer style={{ textAlign: "center" }}>
        프로젝트 이름 ©2020 Created by ~~~
      </Layout.Footer>
    </>
  )
}

export default MyLayout
