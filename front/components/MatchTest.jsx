import React, { useState, useEffect, Component } from 'react';

import styled from 'styled-components';
import axios from 'axios';
import { BACKEND_URL } from '../sagas';
import {
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

const MatchTest = ({ url }) => (WrappedComponent) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 match 를 초기화하고
        setError(null);
        setData(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);

        const response = await axios.get(url);
        setData(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetch();
  }, []);

  if (loading) return <SyncOutlined spin style={{ fontSize: '100px' }} />;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!data) return null;

  return data;
};

export default MatchTest;
