import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import match from './match';

import moment from 'moment';

import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { LOG_IN_REQUEST } from '../sagas/user';

import { Table, Tag, Space } from 'antd';

import { AlignCenterOutlined, SyncOutlined } from '@ant-design/icons';
import SizeContext from 'antd/lib/config-provider/SizeContext';
const { Column, ColumnGroup } = Table;

// 가까운 시간순서
// const url = "http://localhost:80/posts?_sort=match_date&_order=ASC";
const url = 'http://localhost:1337/api/match?limit=100';
//const matchings = () =>{}
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
      key: 'kehomeTeamy',
      align: 'center',
    },
    {
      title: 'awayTeam',
      dataIndex: 'awayTeam',
      key: 'awayTeam',
      align: 'center',
    },
    {
      title: 'startTime',
      dataIndex: 'startTime',
      key: 'startTime',
      align: 'center',
      // sorter: (a, b) => a.startTime - b.startTime,
    },
    {
      title: 'finishTime',
      dataIndex: 'finishTime',
      key: 'finishTime',
      align: 'center',
    },
    {
      title: '배팅인원',
      dataIndex: 'numOfbatting',
      key: 'numOfbatting',
      align: 'center',
      // sorter: (a, b) => a.numOfbatting - b.numOfbatting,
    },
    // {
    //   title: "배팅인원",
    //   dataIndex: "numOfbatting",
    //   key: "numOfbatting",
    //   align: "center",
    // },
    {
      title: '배팅',
      dataIndex: '_id',
      key: '_id',
      align: 'center',
      render: (_id) => (
        <Link href={{ pathname: 'match', query: { matchid: _id } }}>
          <a>배팅하기</a>
        </Link>
      ),
    },
  ];

  // const test_data = [
  //   { key: '1', homeTeam: 'adf', awayTeam: 32, startTime: 'asdfasdf' },
  //   { key: '2', homeTeam: 'adf', awayTeam: 32, startTime: 'asdfasdf' },
  // ];

  const { me } = useSelector((state) => state.user);
  // const my = me;
  // console.log(me.point);
  // console.log(my.email);
  // console.log(my.point);

  const [matchs, setMatchs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // React.Component.state = {
  //   bordered: true,
  //   size: 'default',
  // };

  useEffect(() => {
    const fetchMatchs = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 matchs 를 초기화하고
        setError(null);
        setMatchs(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(url);
        // setMatchs(response.data.data); // 데이터는 response.data 안에 들어있습니다.
        setMatchs(response.data.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchMatchs();
  }, []);

  if (loading) return <SyncOutlined spin style={{ fontSize: '100px' }} />;
  if (error)
    return (
      <div>
        <div>에러가 발생했습니다</div>
        <div>
          <Table columns={columns} />
        </div>
      </div>
    );
  if (!matchs) return null;

  const data = [];
  // myArray.slice(0).reverse().map
  for (let i = 0; i < matchs.length; i++) {
    data.push({
      key: i + 1,
      ...matchs[i],
      startTime: moment(matchs[i].startTime).format('MM.DD HH:MM'),
      finishTime: moment(matchs[i].finishTime).format('MM.DD HH:MM'),
    });
  }

  // const time_moment = moment(timetest).startOf("hour").fromNow(); // 남은시간 체크
  // const time_moment2 = moment(timetest).format("MM.DD HH:MM"); // 08.11 21시 08분 포맺

  // if (data.length > 0) {
  //   console.log(data);
  //   console.log(data[0]);
  //   console.log(data[0].key);
  //   console.log(data[0]._id);
  // }

  return (
    <div
      style={{
        marginLeft: 50,
        marginRight: 50,
        paddingTop: 100,
      }}
    >
      <Table columns={columns} dataSource={data.slice(0).reverse()} bordered />
    </div>
  );
}

export default matchings;
