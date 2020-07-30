import { List, Row, Col, Card, Progress } from "antd"
import { dummy_match, dummy_ranking_A, dummy_ranking_B, dummy_ranking_C } from "../src/dummy"
import { UpperDiv, LowerDiv } from "../styles/styled-components"

const Home = () => {
  // TODO : 메인페이지 길이가 짧으면 오른쪽으로 붙는 버그 수정
  return (
    <>
      <UpperDiv>
        <Row style={{ textAlign: "center" }} justify='space-around' gutter={16}>
          <Col span={8}>
            <Card title='축구' bordered={false}>
              <h2>{`${dummy_match.teamA} VS ${dummy_match.teamB}`} </h2>
              <Progress type='circle' percent={75} />
            </Card>
          </Col>
          <Col span={8}>
            <Card title='축구' bordered={false}>
              <h2>{`${dummy_match.teamA} VS ${dummy_match.teamB}`} </h2>
              <Progress type='circle' percent={25} />
            </Card>
          </Col>
          <Col span={8}>
            <Card title='축구' bordered={false}>
              <h2>{`${dummy_match.teamA} VS ${dummy_match.teamB}`} </h2>
              <Progress type='circle' percent={50} />
            </Card>
          </Col>
        </Row>
      </UpperDiv>
      <LowerDiv>
        <h2>실시간 랭킹</h2>
        <Row>
          <Col span={8}>
            <List
              header={<h2>{dummy_ranking_A.event}</h2>}
              bordered
              dataSource={dummy_ranking_A.rankings}
              renderItem={(item, i) => <List.Item>{`${i}위 - ${item}`}</List.Item>}
            ></List>
          </Col>
          <Col span={8}>
            <List
              header={<h2>{dummy_ranking_B.event}</h2>}
              bordered
              dataSource={dummy_ranking_B.rankings}
              renderItem={(item, i) => <List.Item>{`${i}위 - ${item}`}</List.Item>}
            ></List>
          </Col>
          <Col span={8}>
            <List
              header={<h2>{dummy_ranking_C.event}</h2>}
              bordered
              dataSource={dummy_ranking_C.rankings}
              renderItem={(item, i) => <List.Item>{`${i}위 - ${item}`}</List.Item>}
            ></List>
          </Col>
        </Row>
      </LowerDiv>
    </>
  )
}

export default Home
