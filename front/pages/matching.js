import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import Match from "./Match";

import { Route } from "react-router-dom";
import Link from "next/link";

import { Table, Tag, Space } from "antd";

import { AlignCenterOutlined } from "@ant-design/icons";

const { Column, ColumnGroup } = Table;
//npm i json-server
//node server.js
// 가까운 시간순서
const url = "http://localhost:80/posts?_sort=match_date&_order=ASC";

function matching() {
  // const classes1 = useStyles();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setUsers(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(url);
        setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;

  console.log(users);

  return (
    <div
      style={{
        marginLeft: 50,
        marginRight: 50,
        paddingTop: 100,
      }}
    >
      {users.map((data) => {
        return (
          <Match
            key={data.matchid}
            matchid={data.matchid}
            teamA={data.teamA}
            teamB={data.teamB}
            match_date={data.match_date}
          />
        );
      })}
      <Table dataSource={users}>
        <Column
          title="matchid"
          dataIndex="matchid"
          key="matchid"
          align="center"
        />
        <Column title="teamA" dataIndex="teamA" key="teamA" align="center" />
        <Column title="teamB" dataIndex="teamB" key="teamB" align="center" />
        <Column
          title="match_date"
          dataIndex="match_date"
          key="match_date"
          align="center"
        />

        <Column
          title="Odds"
          key="odds"
          align="center"
          render={(text, record) => (
            <Space size="middle">
              {/* 나중에 승무패 대신 배팅 비율 */}

              <Link href="./Match">
                <a>승 </a>
              </Link>
              {/* <a Link="/Match/:1">승 {record.lastName}</a> */}
              <a>무</a>
              <a>패</a>
            </Space>
          )}
        />
        <Column
          title="배팅 총 포인트"
          dataIndex="totalPoint"
          sorter={(a, b) => a.totalPoint - b.totalPoint}
        />
        <Column title="자세히보기" dataIndex="asdf">
          {/* <Route path="/matching/:matchid" Component={matching}></Route> */}
        </Column>
      </Table>
    </div>
  );
}

export default matching;
