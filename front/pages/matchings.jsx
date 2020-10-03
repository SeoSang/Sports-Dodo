import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
// import Match from 'Match';
import { BACKEND_URL } from '../sagas/.';
import moment from 'moment';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import {
  LOAD_MATCHS_REQUEST,
  LOAD_MATCHS_HISTORY_REQUEST,
} from '../sagas/match';

import { Table, Tag, Space, Button, Row, Col, Empty, Spin, Result } from 'antd';

import { AlignCenterOutlined, SyncOutlined } from '@ant-design/icons';
import SizeContext from 'antd/lib/config-provider/SizeContext';
import Notification from '../components/Notification';
require('moment-timezone');

// import { css } from '@emotion/core';

const { Column, ColumnGroup } = Table;

// const limit = 100;
function matchings() {
  moment.tz.setDefault('Asia/Seoul');
  const nowTime = moment().format('MM/DD hh:mm');

  const test = (e) => {
    if (nowTime > e) {
      // console.log(e);
      // console.log(nowTime);
      return '마감';
    } else {
      return '배팅';
    }
  };
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
      render(text, record) {
        return {
          props: {
            style: { color: '#2d3436' },
          },
          children: (
            <div>
              <strong>{text}</strong>
            </div>
          ),
        };
      },
    },
    {
      title: 'awayTeam',
      dataIndex: 'awayTeam',
      key: 'awayTeam',
      align: 'center',
      width: 200,
      render(text, record) {
        return {
          props: {
            style: { color: '#2d3436' },
          },
          children: (
            <div>
              <strong>{text}</strong>
            </div>
          ),
        };
      },
    },
    {
      title: 'startTime',
      dataIndex: 'startTime',
      key: 'startTime',
      align: 'center',
      width: 100,
      render(text, record) {
        return {
          props: {
            style: {
              // color: 13 > 2 ? '#e84118' : '#2d3436',
              color:
                record.nowTime >
                moment(record.deadLine).subtract(2, 'hours').format()
                  ? '#e84118'
                  : '#2d3436',
            },
          },
          children: <div>{text}</div>,
        };
      },
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
      render(text, record) {
        return {
          props: {
            style: { color: parseInt(text) > 1 ? '#e84118' : '#353b48' },
          },
          children: (
            <div>
              <strong>{text}</strong>
            </div>
          ),
        };
      },
      // sorter: (a, b) => a.howManyPeopleBatted - b.howManyPeopleBatted,
    },
    {
      title: '배팅',
      dataIndex: '_id',
      key: '_id',
      width: 100,
      align: 'center',
      render: (_id, record) => (
        //nowTime > record.startTime ? 배팅하기 : 마감되었습니다
        <Link href={{ pathname: 'match', query: { matchid: _id } }}>
          <a>
            <Button type="primary" htmlType="submit" danger>
              {test(record.startTime)}
            </Button>
          </a>
        </Link>
      ),
    },
  ];

  const { me } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!me) {
      // Notification('로그인이 필요합니다!');  새로고침하면 왜 로그인 하라고 뜰까? me가 왜없냐
      // <Alert message="로그인이 필요합니다!" type="warning" showIcon closable />;
      // alert('로그인이 필요합니다!');
      // router.push('/');
    }
    dispatch({ type: LOAD_MATCHS_REQUEST });
    dispatch({ type: LOAD_MATCHS_HISTORY_REQUEST });
    // dispatch({ type: LOAD_MATCHS_REQUEST, index: -1 });
  }, [me]);
  const { matchs, matchsHistory } = useSelector((state) => state.match);

  if (!matchs)
    return (
      <Spin style={{ marginTop: '3rem', SizeContext: '10rem' }} size="large" />
    );

  if (matchs?.length < 0)
    return (
      <Row>
        <Row>로딩 중</Row>
        <Row>
          {/* <Table columns={columns} /> */}
          <Result
            status="warning"
            title="경기를 불러오지 못하였습니다!"
            // extra={
            //   <Button type="primary" key="console">
            //     Go Console
            //   </Button>
            // }
          />
          {/* <Spin /> */}
          {/* <Empty /> */}
        </Row>
      </Row>
    );
  console.log(moment.utc().format());
  const matchsData = [];
  for (let i = 0; i < matchs?.length; i++) {
    matchsData.push({
      key: i + 1,
      ...matchs[i],
      startTime: moment(matchs[i].startTime).format('MM/DD hh:mm'),
      finishTime: moment(matchs[i].finishTime).format('MM/DD hh:mm'),
      deadLine: moment(matchs[i].startTime).subtract(5, 'minutes').format(),
      // 마감시간 설정
      howManyPeopleBatted:
        matchs[i].homeBattingNumber +
        matchs[i].awayBattingNumber +
        matchs[i].drawBattingNumber,
    });
  }
  const matchsHistoryData = [];
  for (let i = 0; i < matchsHistory?.length; i++) {
    matchsHistoryData.push({
      key: i + 1,
      ...matchsHistory[i],
      startTime: moment(matchsHistory[i].startTime).format('MM/DD hh:mm'),
      finishTime: moment(matchsHistory[i].finishTime).format('MM/DD hh:mm'),
      howManyPeopleBatted:
        matchsHistory[i].homeBattingNumber +
        matchsHistory[i].awayBattingNumber +
        matchsHistory[i].drawBattingNumber,
    });
  }

  return (
    <Row
      style={{
        textAlign: 'center',
        // padding: '20px',
        backgroundColor: 'white',
        //테이블 row들 왜 투명이냐 ..? Table 스타일로 수정
      }}
      justify="space-around"
    >
      <Row style={{ backgroundColor: 'white', padding: '20px' }}>
        <Row>
          <h2>진행 중</h2>
        </Row>
        <Table
          style={{ backgroundColor: 'white' }}
          columns={columns}
          dataSource={matchsData} // 현재 시간 이후의 배팅 // 진행 중
          pagination={{ pageSize: 5 }}
          // scroll={{ y: 300 }}
          rowClassName={(record, index) =>
            nowTime > record.deadLine
              ? 'red'
              : nowTime > moment(record.deadLine).subtract(1, 'd').format()
              ? 'green'
              : 'blue'
          }
          bordered
        />
        <Row>
          <h2>지난 배팅</h2>
        </Row>
        <Table
          style={{ backgroundColor: 'white' }}
          columns={columns}
          dataSource={matchsHistoryData.slice(0).reverse()} // 현재 시간 이전의 배팅 // 지난배팅
          pagination={{ pageSize: 5 }}
          // scroll={{ x: 50 }}
          bordered
        />
      </Row>
    </Row>
  );
}

export default matchings;
