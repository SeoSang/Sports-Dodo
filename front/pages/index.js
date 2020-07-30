import { List, Row, Col, Card, Progress, Button, Layout } from "antd"
import {
  dummy_match_A,
  dummy_ranking_A,
  dummy_ranking_B,
  dummy_ranking_C,
  dummy_main_mathes,
} from "../src/dummy"
import { UpperDiv, LowerDiv, SportCategories } from "../styles/styled-components"

const Home = () => {
  // TODO : 메인페이지 길이가 짧으면 오른쪽으로 붙는 버그 수정
  return (
    <>
      <Row style={{ textAlign: "center" }} justify='space-around' gutter={16}>
        <UpperDiv>
          <Col span={20}>
            <div style={{ display: "flex" }}>
              {dummy_main_mathes.map((match) => (
                <Card title='축구' bordered={false} style={{ margin: "3px 5px", width: "32%" }}>
                  <h2>{`${match.teamA} VS ${match.teamB}`} </h2>
                  <Progress type='circle' percent={75} />
                </Card>
              ))}
            </div>
          </Col>
          <Col span={4} style={{ height: "100%" }}>
            <Layout style={{ height: "100%" }}>
              <SportCategories>축구</SportCategories>
              <SportCategories>야구</SportCategories>
              <SportCategories>농구</SportCategories>
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
