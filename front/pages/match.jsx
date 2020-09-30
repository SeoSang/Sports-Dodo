import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import moment from 'moment';
import styled from 'styled-components';
import axios from 'axios';
import { BACKEND_URL } from '../sagas';
import MatchTest from '../components/MatchTest';
import Notification from '../components/Notification';

// import userFetch from 'userFetch';

import {
  notification,
  Alert,
  Space,
  Form,
  Input,
  Radio,
  Row,
  Col,
  Avatar,
  InputNumber,
  Button,
} from 'antd';
import {
  UpperDiv,
  LowerDiv,
  SportCategories,
} from '../styles/styled-components';
import { AlignCenterOutlined, SyncOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

axios.defaults.baseURL = `${BACKEND_URL}/api`;

const fetchApi = async (url) => {
  // let data = [];
  try {
    const { data } = await axios.get(url);
    //비구조화 할당
    // data = { ...response.data };
    // console.log(response.data);
    // console.log(data);
    return data;
    // return response.data;
  } catch (e) {
    console.log(e);
    return [];
  }
};

const match = () => {
  const router = useRouter();
  const matchid = router.query.matchid;

  const { me } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // 소유한 포인트에서 배팅한 포인트를 차감하여 리덕스를 사용해야하나?

  const userPoint = me ? me.point : 0;
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [match, setMatch] = useState(null);
  const [bpoint, setBpoint] = useState([]);
  const [choose, setChoose] = useState('Home');
  const [battingpoint, setBattingpoint] = useState(10);

  useEffect(() => {
    if (matchid) {
      const match = fetchApi(`/match/${matchid}`);
      const point = fetchApi(`/match/${matchid}/batting`);

      Promise.all([match, point]).then((v) => {
        setMatch(v[0].data);
        setBpoint(v[1]);
      });
    }
  }, [matchid]);
  // const idForFAPI = match1?.idForFAPI;
  // const { idForFAPI } = match1;
  //비구조화 할당 왜 안돼?
  // console.log(idForFAPI);
  const homeTeam = match?.homeTeam;
  const awayTeam = match?.awayTeam;

  const startTime = match?.startTime;
  const startTime_1 = moment(startTime).format('MM.DD HH:MM');

  const finishTime = match?.finishTime;
  const finishTime_1 = moment(finishTime).format('MM.DD HH:MM');

  const goalsHomeTeam = match?.goalsHomeTeam;
  const goalsAwayTeam = match?.goalsAwayTeam;

  const homeTotalPoint = bpoint?.battingPoints?.homeTotalPoint;
  const awayTotalPoint = bpoint?.battingPoints?.awayTotalPoint;
  const drawTotalPoint = bpoint?.battingPoints?.drawTotalPoint;
  const totalPoint = homeTotalPoint + awayTotalPoint + drawTotalPoint;
  //배당률 전체/
  // testnum.toFixed(0);  소수점 버리기 반올림

  const homeOdds =
    homeTotalPoint === 0 ? 0 : (totalPoint / homeTotalPoint).toFixed(2);
  const awayOdds =
    awayTotalPoint === 0 ? 0 : (totalPoint / awayTotalPoint).toFixed(2);
  const drawOdds =
    drawTotalPoint === 0 ? 0 : (totalPoint / drawTotalPoint).toFixed(2);
  //적중률
  const hitOdds =
    choose === 'Home'
      ? (homeOdds * battingpoint).toFixed(2)
      : choose === 'Away'
      ? (awayOdds * battingpoint).toFixed(2)
      : (drawOdds * battingpoint).toFixed(2);

  const howManyPeopleBatted = bpoint?.howManyPeopleBatted;

  const homeBattingNumber = match?.homeBattingNumber;
  const awayBattingNumber = match?.awayBattingNumber;
  const drawBattingNumber = match?.drawBattingNumber;
  // console.log(homeBattingNumber);

  const homeTeamLogoUrl = match?.homeTeamLogoUrl;
  const awayTeamLogoUrl = match?.awayTeamLogoUrl;

  const round = match?.round;
  // const referee = if;
  const referee = () => {
    if (match?.referee === null) {
      return '미정';
    } else {
      return match?.referee;
    }
  };
  const venue = match?.venue;

  // console.log(match);

  const homeTeamImg = homeTeamLogoUrl
    ? homeTeamLogoUrl
    : 'http://asq.kr/CGXdlkoUJHiq';

  const awayTeamImg = awayTeamLogoUrl
    ? awayTeamLogoUrl
    : 'http://asq.kr/BDy9XSTWw0sf';

  const handleChooseChange = (e) => {
    setChoose(e.target.value);
  };

  const handlebattingpointChange = (e) => {
    if (e > userPoint) {
      Notification('가진 포인트보다 배팅을 많이 했습니다.');
    } else {
      setBattingpoint(e);
    }
  };

  const handleSubmit = () => {
    axios
      .post(`/match/${matchid}/batting`, {
        homeTeamName: homeTeam,
        awayTeamName: awayTeam,
        chooseHomeAwayDraw: choose,
        battingPoint: battingpoint,
      })
      .then((res) => {
        console.log(res);
        Notification('배팅을 완료 하였습니다!');
        // <Alert message="배팅을 완료 하였습니다." type="success" showIcon />;
        router.push('/matchings');
      })
      .catch((err) => {
        console.log(err);
        Notification('배팅에 오류가 발생 하였습니다!');
        // <Alert message="배팅 시간이 지났습니다." type="error" showIcon />;
      });
  };

  return (
    <>
      <Row
        style={{
          backgroundColor: 'white',
          height: '100%',
        }}
      >
        <Row
          style={{
            marginTop: '3rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            //수직 가운데 정렬
          }}
        >
          <Col span={10}>
            <Row>
              <Avatar
                size={100}
                src={homeTeamImg}
                style={{ backgroundColor: 'white' }}
              />
            </Row>
            <Row>
              <h2>{homeTeam}</h2>
            </Row>
            <Row>
              <h4>11승 1무 3패</h4>
            </Row>
            <Row>
              <h4>{goalsHomeTeam}</h4>
            </Row>
          </Col>
          <Col span={4}>
            <Row>{round}</Row>
            <Row>
              <h1>VS</h1>
            </Row>
            <Row>
              <h4>{startTime_1}</h4>
            </Row>
            {/* <Row>
              <h4>{finishTime_1}</h4>
            </Row> */}

            {/* 장소 */}
          </Col>
          <Col span={10}>
            <Row>
              <Avatar
                size={100}
                src={awayTeamImg}
                style={{ backgroundColor: 'white' }}
              />
            </Row>
            <Row>
              <h2>{awayTeam}</h2>
            </Row>
            <Row>
              <h4>16승 0무 0패</h4>
            </Row>
            <Row>
              <h4>{goalsAwayTeam}</h4>
            </Row>
          </Col>
        </Row>
        <Row style={{ marginBottom: '2rem' }}>
          <Row>{venue}</Row>
          <Row>주심 : {referee()}</Row>
        </Row>
        <Row>
          <Col span={8}>{homeTotalPoint} p</Col>
          <Col span={8}>{drawTotalPoint} p</Col>
          <Col span={8}>{awayTotalPoint} p</Col>
        </Row>
        <Row>
          <Col span={8}>{homeOdds}</Col>
          <Col span={8}>{drawOdds}</Col>
          <Col span={8}>{awayOdds}</Col>
        </Row>
        <Form onFinish={handleSubmit}>
          <Row style={{ paddingTop: '2rem' }}>
            <Radio.Group defaultValue="Home" buttonStyle="solid">
              <Radio.Button value="Home" onChange={handleChooseChange}>
                홈 승
              </Radio.Button>
              <Radio.Button value="Draw" onChange={handleChooseChange}>
                홈 무
              </Radio.Button>
              <Radio.Button value="Away" onChange={handleChooseChange}>
                홈 패
              </Radio.Button>
            </Radio.Group>
          </Row>
          <Row style={{ paddingTop: '1rem' }}>
            <InputNumber
              defaultValue={10}
              // formatter={(value) => `${value}`}
              // parser={(value) => value.replace("", "")}
              min={10}
              max={userPoint}
              step={10}
              // value={battingpoint}
              onChange={handlebattingpointChange}
            />
          </Row>
          <Row>예상 배당 포인트 : {hitOdds} p</Row>
          <Row>
            <Button type="primary" htmlType="submit" danger>
              배팅하기
            </Button>
          </Row>
          {/* </Row> */}
        </Form>
      </Row>
    </>
  );
};

export default match;
