import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import moment from 'moment';
import styled from 'styled-components';
import axios from 'axios';
import { BACKEND_URL } from '../sagas';
import MatchTest from '../components/MatchTest';
import Notification from '../components/Notification';

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

const TestRow = styled(Row)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

axios.defaults.baseURL = `${BACKEND_URL}/api`;

const match = () => {
  const router = useRouter();
  const matchid = router.query.matchid;

  const { me } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // 소유한 포인트에서 배팅한 포인트를 차감하여 리덕스를 사용해야하나?

  const userPoint = me ? me.point : 0;

  // const [match, setMatch] = useState();
  const [bpoint, setBpoint] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [choose, setChoose] = useState('Home');
  const [battingpoint, setBattingpoint] = useState(10);

  //중복 줄이려고 fetchApi 사용
  const match = fetchApi(`/match/${matchid}`)?.data;
  const bpoint1 = fetchApi(`/match/${matchid}/batting`);
  // console.log(match1);
  // console.log(match1?.idForFAPI);

  // const idForFAPI = match1?.idForFAPI;
  // const { idForFAPI } = match1;
  //비구조화 할당 왜 안돼?
  // useState set으로 왜안들어가져?

  // console.log(idForFAPI);

  // console.log(bpoint1);

  // setTest1(test11);
  // setTest2(test22);

  // console.log(test1);

  // setBpoint(...test22);

  // console.log(match);
  // console.log(typeof match);

  const homeTeam = match?.homeTeam;
  const awayTeam = match?.awayTeam;

  const startTime = match?.startTime;
  const startTime_1 = moment(startTime).format('MM.DD HH:MM');

  const finishTime = match?.finishTime;
  const finishTime_1 = moment(finishTime).format('MM.DD HH:MM');

  const goalsHomeTeam = match?.goalsHomeTeam;
  const goalsAwayTeam = match?.goalsAwayTeam;

  const homeTotalPoint = bpoint1?.battingPoints?.homeTotalPoint;
  const awayTotalPoint = bpoint1?.battingPoints?.awayTotalPoint;
  const drawTotalPoint = bpoint1?.battingPoints?.drawTotalPoint;
  const totalPoint = homeTotalPoint + awayTotalPoint + drawTotalPoint;
  //배당률 전체/
  // testnum.toFixed(0);  소수점 버리기 반올림

  const homeOdds =
    homeTotalPoint === 0 ? 0 : (totalPoint / homeTotalPoint).toFixed(2);
  const awayOdds =
    awayTotalPoint === 0 ? 0 : (totalPoint / awayTotalPoint).toFixed(2);
  const drawOdds =
    drawTotalPoint === 0 ? 0 : (totalPoint / drawTotalPoint).toFixed(2);

  const hitOdds =
    choose === 'Home'
      ? (homeOdds * battingpoint).toFixed(2)
      : choose === 'Away'
      ? (awayOdds * battingpoint).toFixed(2)
      : (drawOdds * battingpoint).toFixed(2);

  const howManyPeopleBatted = bpoint1?.howManyPeopleBatted;

  // const { homeBattingNumber } = match;
  // const { awayBattingNumber } = match;
  // const { drawBattingNumber } = match;
  // console.log(homeTotalPoint);

  const homeTeamLogoUrl = match?.homeTeamLogoUrl;
  const awayTeamLogoUrl = match?.awayTeamLogoUrl;

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
      // openNotification('가진 포인트보다 배팅을 많이 했습니다.');
      Notification('가진 포인트보다 배팅을 많이 했습니다.');
    } else {
      setBattingpoint(e);
    }
  };

  // console.log(typeof { choose });
  // console.log(typeof choose);
  // console.log(typeof Home);

  const handleSubmit = () => {
    axios
      .post(`/match/${matchid}/batting`, {
        chooseHomeAwayDraw: choose,
        battingPoint: battingpoint,
      })
      .then((res) => {
        console.log(res);
        openNotification('배팅을 완료 하였습니다!');
        // <Alert message="배팅을 완료 하였습니다." type="success" showIcon />;
        router.push('/matchings');
      })
      .catch((err) => {
        console.log(err);
        openNotification('배팅에 오류가 발생 하였습니다!');
        // <Alert message="배팅 시간이 지났습니다." type="error" showIcon />;
      });
  };

  return (
    <>
      <Row>
        <Row
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            //수직 가운데 정렬
          }}
        >
          <Col span={10}>
            <Row>
              <Avatar size={100} src={homeTeamImg} />
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
            <Row>
              <h1>VS</h1>
            </Row>
            <Row>
              <h4>{startTime_1}</h4>
            </Row>
            <Row>
              <h4>{finishTime_1}</h4>
            </Row>
          </Col>
          <Col span={10}>
            <Row>
              <Avatar size={100} src={awayTeamImg} />
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
          <Row>
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
          <Row>
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
          <Button type="primary" htmlType="submit" danger>
            배팅하기
          </Button>
          {/* </Row> */}
        </Form>
      </Row>
    </>
  );
};

export default match;

function fetchApi(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMatch = async () => {
      try {
        setError(null);
        setData(null);
        setLoading(true);

        const response = await axios.get(url);
        setData(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchMatch();
  }, []);

  if (loading) return console.log('로딩 중');
  if (error) return console.log('에러 발생');
  if (!data) return console.log('데이터가 없습니다.');

  return data;
}

const openNotification = (e) => {
  notification.open({
    message: 'Notification Title',
    description: e,
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};

// useEffect(() => {
//   const fetchMatch = async () => {
//     try {
//       // 요청이 시작 할 때에는 error 와 match 를 초기화하고
//       setError(null);
//       setMatch(null);
//       console.log(match);
//       // loading 상태를 true 로 바꿉니다.
//       setLoading(true);

//       const response = await axios.get(`/match/${matchid}`);
//       setMatch(response.data.data); // 데이터는 response.data 안에 들어있습니다.
//     } catch (e) {
//       setError(e);
//     }
//     setLoading(false);
//   };

//   const fetchPoint = async () => {
//     try {
//       setError(null);
//       setBpoint(null);
//       setLoading(true);

//       const response2 = await axios.get(`/match/${matchid}/batting`);
//       setBpoint(response2.data);
//     } catch (e) {
//       setError(e);
//     }
//     setLoading(false);
//   };

//   fetchMatch();
//   fetchPoint();
// }, []);

// if (loading) return <SyncOutlined spin style={{ fontSize: '100px' }} />;
// if (error) return <div>에러가 발생했습니다</div>;
// if (!match) return null;
