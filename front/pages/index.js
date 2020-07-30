import { List, Row, Col, Card, Progress, Button, Layout } from "antd"
import {
  dummy_match_A,
  dummy_ranking_A,
  dummy_ranking_B,
  dummy_ranking_C,
  dummy_main_matches,
} from "../src/dummy"
import { UpperDiv, LowerDiv, SportCategories } from "../styles/styled-components"
import { useState, useRef } from "react"

const FOOTBALL_TRANSLATE = "-0"
const BASEBALL_TRANSLATE = "-33.3%"
const BASKETBALL_TRANSLATE = "-66.6%"

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(1)
  const slideRef = useRef(null)

  const onClickFootball = (e) => {
    // 슬라이드 애니메이션
    setCurrentSlide(FOOTBALL_TRANSLATE)
  }
  const onClickBaseball = (e) => {
    setCurrentSlide(BASEBALL_TRANSLATE)
  }
  const onClickBasketball = (e) => {
    setCurrentSlide(BASKETBALL_TRANSLATE)
  }

  return (
    <>
      <Row style={{ textAlign: "center" }} justify='space-around' gutter={16}>
        <UpperDiv>
          <Col span={20}>
            <div style={{ overflow: "hidden" }}>
              <div
                ref={slideRef}
                style={{
                  width: "300%",
                  display: "flex",
                  transition: "all 0.5s ease-in-out",
                  transform: `translateX(${currentSlide}`,
                }}
              >
                {dummy_main_matches.map((match) => (
                  <Card
                    title={dummy_main_matches.event}
                    bordered={false}
                    style={{ margin: "3px 5px", width: "11%" }}
                  >
                    <h2>{`${match.teamA} VS ${match.teamB}`} </h2>
                    <Progress type='circle' percent={75} />
                  </Card>
                ))}
              </div>
            </div>
          </Col>
          <Col span={4} style={{ height: "100%" }}>
            <Layout style={{ height: "100%" }}>
              <SportCategories onClick={onClickFootball}>축구</SportCategories>
              <SportCategories onClick={onClickBaseball}>야구</SportCategories>
              <SportCategories onClick={onClickBasketball}>농구</SportCategories>
            </Layout>
          </Col>
        </UpperDiv>
      </Row>
      <LowerDiv>
        <h2>실시간 랭킹</h2>
        <Row>
          <Col span={8}>
            <List
              header={<h2>{dummy_ranking_A.event}</h2>}
              bordered
              dataSource={dummy_ranking_A.rankings}
              renderItem={(item, i) => <List.Item>{`${i + 1}위 - ${item}`}</List.Item>}
            ></List>
          </Col>
          <Col span={8}>
            <List
              header={<h2>{dummy_ranking_B.event}</h2>}
              bordered
              dataSource={dummy_ranking_B.rankings}
              renderItem={(item, i) => <List.Item>{`${i + 1}위 - ${item}`}</List.Item>}
            ></List>
          </Col>
          <Col span={8}>
            <List
              header={<h2>{dummy_ranking_C.event}</h2>}
              bordered
              dataSource={dummy_ranking_C.rankings}
              renderItem={(item, i) => <List.Item>{`${i + 1}위 - ${item}`}</List.Item>}
            ></List>
          </Col>
        </Row>
      </LowerDiv>
    </>
  )
}

export default Home
