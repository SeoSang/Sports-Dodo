import React from "react"
import { Drawer, Button, Row, Menu } from "antd"
import { useState } from "react"
import { NextPage, NextComponentType, NextPageContext } from "next"
import styled from "styled-components"
import { FC } from "react"

const dummy_me = {
  email: "scscsc@naver.com",
  nickname: "김건모",
}

export const BackgroundDiv = styled.div`
  background-color: #fafafa;
  height: 90vh;
`

const MyLayout: FC<{ children: any }> = ({ children }) => {
  const [visible, setVisible] = useState(false)
  const onDrawerClose = () => {
    setVisible(false)
  }
  const onClickMenu = () => {
    setVisible(true)
  }
  return (
    <>
      <Drawer
        title='User'
        placement='left'
        closable={false}
        onClose={onDrawerClose}
        visible={visible}
      >
        <h2>{dummy_me?.email}</h2>
        <h3>{dummy_me?.nickname + "님"}</h3>
        <Button style={{ margin: "5px" }}>내 정보</Button>
        <Button style={{ margin: "5px" }}>로그아웃</Button>
      </Drawer>
      <Row>
        <Button onClick={onClickMenu}>메뉴</Button>
      </Row>
      <BackgroundDiv>{children}</BackgroundDiv>
    </>
  )
}

export default MyLayout
