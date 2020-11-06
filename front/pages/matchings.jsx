import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
// import Match from 'Match';
import { BACKEND_URL } from '../sagas/.';
import moment from 'moment';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_MATCHS_REQUEST } from '../sagas/match';

import { Table, Tag, Space, Button, Row, Col, Empty } from 'antd';

import { AlignCenterOutlined, SyncOutlined } from '@ant-design/icons';
import SizeContext from 'antd/lib/config-provider/SizeContext';
import MatchTest from '../components/MatchTest';

// import { css } from '@emotion/core';

const { Column, ColumnGroup } = Table;

// const tableCSS = css`
//   margin: '40px 120px',
//   backgroundColor: 'white',
//   '& table': {
//     borderCollapse: 'collapse',
//   },
//   '& thead > tr > th': {
//     backgroundColor: 'darkblue',
//     color: 'white',
//   },
//   '& thead > tr': {
//     borderWidth: '2px',
//     borderColor: 'yellow',
//     borderStyle: 'solid',
//   },
// `;

// 가까운 시간순서
// const url = "http://localhost:80/posts?_sort=match_date&_order=ASC";
// axios.defaults.baseURL = `${BACKEND_URL}/api`;

// const limit = 100;
function matchings() {
  const columns = [
    {
      title: 'key',
      dataIndex: 'key',
      key: 'key',
      align: 'center',
      width: 100,
    },
    {
      title: 'homeTeam',
      dataIndex: 'homeTeam',
      key: 'homeTeam',
      align: 'center',
      width: 200,
    },
    {
      title: 'awayTeam',
      dataIndex: 'awayTeam',
      key: 'awayTeam',
      align: 'center',
      width: 200,
    },
    {
      title: 'startTime',
      dataIndex: 'startTime',
      key: 'startTime',
      align: 'center',
      width: 100,
      // sorter: (a, b) => a.startTime - b.startTime,
    },
    {
      title: 'finishTime',
      dataIndex: 'finishTime',
      key: 'finishTime',
      align: 'center',
      width: 100,
    },
    {
      title: '배팅인원',
      dataIndex: 'howManyPeopleBatted',
      key: 'howManyPeopleBatted',
      align: 'center',
      width: 100,
      // sorter: (a, b) => a.howManyPeopleBatted - b.howManyPeopleBatted,
    },
    {
      title: '배팅',
      dataIndex: '_id',
      key: '_id',
      width: 100,
      align: 'center',
      render: (_id) => (
        <Link href={{ pathname: 'match', query: { matchid: _id } }}>
          <a>
            <Button type="primary" htmlType="submit" danger>
              배팅하기
            </Button>
          </a>
        </Link>
      ),
    },
  ];

  // 시작 시간 5분전 마감
  // 종료 시간 후 경기종료

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: LOAD_MATCHS_REQUEST });
    // dispatch({ type: LOAD_MATCHS_REQUEST, index: -1 });
  }, []);
  const { matchs } = useSelector((state) => state.match);

  if (matchs?.length < 0)
    return (
      <Row>
        <Row>에러가 발생했습니다</Row>
        <Row>
          {/* <Table columns={columns} /> */}
          <Empty />
        </Row>
      </Row>
    );
  if (!matchs) return null;

  const data = [];
  for (let i = 0; i < matchs.length; i++) {
    data.push({
      key: i + 1,
      ...matchs[i],
      startTime: moment(matchs[i].startTime).format('MM.DD HH:MM'),
      finishTime: moment(matchs[i].finishTime).format('MM.DD HH:MM'),
      howManyPeopleBatted:
        matchs[i].homeBattingNumber +
        matchs[i].awayBattingNumber +
        matchs[i].drawBattingNumber
          ? matchs[i].homeBattingNumber +
            matchs[i].awayBattingNumber +
            matchs[i].drawBattingNumber
          : 0,
    });
  }

  return (
    <Row
      style={{
        textAlign: 'center',
        padding: '20px',
        backgroundColor: 'gray',
        //테이블 row들 왜 투명이냐 ..? Table 스타일로 수정
      }}
      justify="space-around"
    >
      <Table
        // className={tableCSS}
        style={{ backgroundColor: 'white' }}
        columns={columns}
        dataSource={data.slice(0).reverse()}
        bordered
      />
    </Row>
  );
}

export default matchings;

// const [matchs, setMatchs] = useState([]);
// const [loading, setLoading] = useState(false);
// const [error, setError] = useState(null);

// useEffect(() => {
//   const fetchMatchs = async () => {
//     try {
//       setError(null);
//       setMatchs(null);
//       setLoading(true);

//       const response = await axios.get(`/match?limit=${limit}`);
//       // 데이터는 response.data 안에 들어있습니다.
//       setMatchs(response.data.data);
//     } catch (e) {
//       setError(e);
//     }
//     setLoading(false);
//   };

//   fetchMatchs();
// }, []);

// if (loading) return <SyncOutlined spin style={{ fontSize: '100px' }} />;
