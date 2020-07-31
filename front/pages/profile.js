import React from "react"
import { Row, Col, Avatar } from "antd"

const profile = () => {
  return (
    <>
      <Row>
        <Col span={4}>
          <Avatar size={100} src='/images/profile.jpg' />
        </Col>
        <Col span={8}>
          <h2>데이비드</h2>
          <h2>포인트 : 434234점</h2>
          <h2>랭킹 : 3123위</h2>
        </Col>
        <Col span={12}></Col>
      </Row>
      <Row>
        <Col span={12}>
          <h1>적중내역</h1>
        </Col>
      </Row>
      <Row>
        <Col span={4}>
          <h2>경기</h2>
        </Col>
        <Col span={4}>
          <h2>베팅</h2>
        </Col>
        <Col span={4}>
          <h2>결과</h2>
        </Col>
      </Row>
    </>
  )
}

export default profile
