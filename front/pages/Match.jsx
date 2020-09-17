import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import moment from 'moment';
import styled from 'styled-components';
import axios from 'axios';
import { BACKEND_URL } from '../sagas/.';

import { dummy_epl, dummy_epl_A } from '../src/dummy.js';
import {
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
  background-color: #afffee;
  min-height: 80vh;
  padding: 10px;
`;

axios.defaults.baseURL = `${BACKEND_URL}/api`;

const match = () => {
  const router = useRouter();
  const matchid = router.query.matchid;

  const { me } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // 소유한 포인트에서 배팅한 포인트를 차감하여 리덕스를 사용해야하나?

  const point = me ? me.point : 0;

  // const url = `http://localhost:1337/api/match/${matchid}`;
  // const url2 = `${url}/batting`;

  const [match, setMatch] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [choose, setChoose] = useState('Home');
  const [battingpoint, setBattingpoint] = useState(10);

  const [bpoint, setBpoint] = useState([]);
  const [test, setTest] = useState([]);

  useEffect(() => {
    const fetchMatch = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 match 를 초기화하고
        setError(null);
        setMatch(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);

        const response = await axios.get(`/match/${matchid}`);
        setMatch(response.data.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    const fetchPoint = async () => {
      try {
        setError(null);
        setBpoint(null);
        setLoading(true);

        const response2 = await axios.get(`/match/${matchid}/batting`);
        setBpoint(response2.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchMatch();
    fetchPoint();
  }, []);

  if (loading) return <SyncOutlined spin style={{ fontSize: '100px' }} />;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!match) return null;

  // console.log(bpoint?.battingPoints?.homeTotalPoint);
  // console.log(bpoint?.battingPoints?.awayTotalPoint);
  // console.log(bpoint?.battingPoints?.drawTotalPoint);
  // console.log(bpoint?.howManyPeopleBatted);

  const homeTeam = match.homeTeam;
  const awayTeam = match.awayTeam;
  const startTime = moment(match.startTime).format('MM.DD HH:MM');
  const finishTime = moment(match.finishTime).format('MM.DD HH:MM');
  const goalsHomeTeam = match.goalsHomeTeam;
  const goalsAwayTeam = match.goalsAwayTeam;

  const homeTotalPoint = bpoint?.battingPoints?.homeTotalPoint;
  const awayTotalPoint = bpoint?.battingPoints?.awayTotalPoint;
  const drawTotalPoint = bpoint?.battingPoints?.drawTotalPoint;
  const howManyPeopleBatted = bpoint?.howManyPeopleBatted;

  console.log(homeTotalPoint);

  const homeTeamImg =
    'data:image/png;base64,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';
  const awayTeamImg =
    'data:image/jpeg;base64,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';

  const handleChooseChange = (e) => {
    setChoose(e.target.value);
    // console.log(e);
    // console.log(e.target.value);
    // console.log(choose);
  };
  const handlebattingpointChange = (e) => {
    if (e > point) {
      alert('가진 포인트보다 배팅을 많이 했습니다.');
    } else {
      setBattingpoint(e);
    }
  };

  const handleSubmit = () => {
    axios
      .post(`/match/${matchid}/batting`, {
        chooseHomeAwayDraw: choose,
        battingPoint: battingpoint,
      })
      .then((res) => {
        console.log(res);
        router.push('/matchings');
      })
      .catch((err) => {
        console.log(err);
      });

    // axios({
    //   method: 'POST',
    //   // const url = `http://localhost:1337/api/match/${matchid}`;
    //   // const url2 = `${url}/batting`;
    //   url: `/match/${matchid}/batting`,
    //   data: {
    //     // user: me.id,
    //     // userNickname,
    //     // match: matchid,

    //     chooseHomeAwayDraw: choose,
    //     battingPoint: battingpoint,
    //   },
    //   headers: {
    //     // 'content-type': 'application/json',
    //     // // "Access-Control-Allow-Origin": "*",
    //     // 'x-access-token': token,
    //   },
    // })
    //   .then((res) => {
    //     console.log(res);
    //     router.push('/matchings');
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <>
      <TestRow>
        <Form onFinish={handleSubmit}>
          {/* <Row
            style={{ textAlign: 'center', padding: '20px' }}
            justify="space-around"
          > */}
          <Row>
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
                <h4>{startTime}</h4>
              </Row>
              <Row>
                <h4>{finishTime}</h4>
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
              max={point}
              step={10}
              // value={battingpoint}
              onChange={handlebattingpointChange}
            />
          </Row>
          <Button type="primary" htmlType="submit" danger>
            배팅하기
          </Button>
          {/* </Row> */}
        </Form>
      </TestRow>
    </>
  );
};

export default match;
