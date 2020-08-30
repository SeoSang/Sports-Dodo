import React from "react";
import { List, Layout, Menu, Breadcrumb, Row, Col, Divider } from "antd";

import { dummy_main_rankings, dummy_ranking_A } from "../src/dummy";
import {
  UpperDiv,
  LowerDiv,
  SportCategories,
} from "../styles/styled-components";

const IMAGE_MAPPING = {
  축구: "/images/premier_league.png",
  야구: "/images/kbo.png",
  농구: "/images/nba.jpg",
};

const { Header, Footer, Sider, Content } = Layout;

const test = () => {
  return (
    <>
      <UpperDiv>
        <Row style={{ height: "50px" }}>
          <Col span={8}>game</Col>
          <Col span={8} offset={8}>
            승 무 패
          </Col>
          <Col></Col>
        </Row>
      </UpperDiv>

      <LowerDiv>
        <h2 className="ranking">랭커들의 배팅</h2>
        <Row>
          {/* {dummy_ranking_A?.map((ranking) => {
            return (
              <Col span={8}>
                <List
                  // header={
                  //   // <img
                  //   //   style={{ width: "60px", height: "30px" }}
                  //   //   src={IMAGE_MAPPING[ranking.event]}
                  //   // ></img>
                  // }
                  bordered
                  dataSource={ranking.rankings}
                  renderItem={(item, i) => (
                    <List.Item>{`${i + 1}위 - ${item}`}</List.Item>
                  )}
                ></List>
              </Col>
            );
          })} */}
        </Row>
      </LowerDiv>
    </>
  );
};

export default test;
{
  /* <Layout>
        <Content style={{ paddig: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">Content</div>
        </Content>
      </Layout> */
}
