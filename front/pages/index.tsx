import { Row, Col, Card, Progress } from "antd"
import { dummy_match } from "../src/dummy.js"

const Home = () => {
  // TODO : 메인페이지 길이가 짧으면 오른쪽으로 붙는 버그 수정
  return (
    <>
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
      <Row></Row>
    </>
  )
}

export default Home
