import { List, Row, Col, Card, Progress, Button, Layout } from "antd"
import { dummy_match_A, dummy_main_rankings, dummy_main_matches } from "../src/dummy"
import { UpperDiv, LowerDiv, SportCategories } from "../styles/styled-components"
import { useState, useRef } from "react"

const FOOTBALL_TRANSLATE = "-0"
const BASEBALL_TRANSLATE = "-33.3%"
const BASKETBALL_TRANSLATE = "-66.6%"

const IMAGE_MAPPING = {
  축구: "/images/premier_league.png",
  야구: "/images/kbo.png",
  농구: "/images/nba.jpg",
}

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
                    style={{ margin: "3px 5px", width: "11%", height: "100%" }}
                  >
                    <h2>{`${match.teamA} VS ${match.teamB}`} </h2>
                    <Progress type='circle' percent={75} />
                    <br></br>
                    <Button style={{ marginTop: "15px" }}>자세히 보기</Button>
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
          {dummy_main_rankings.map((ranking) => {
            return (
              <Col span={8}>
                <List
                  header={
                    <img
                      style={{ width: "60px", height: "30px" }}
                      src={IMAGE_MAPPING[ranking.event]}
                    ></img>
                  }
                  bordered
                  dataSource={ranking.rankings}
                  renderItem={(item, i) => <List.Item>{`${i + 1}위 - ${item}`}</List.Item>}
                ></List>
              </Col>
            )
          })}
        </Row>
      </LowerDiv>
    </>
  )
}

export default Home
