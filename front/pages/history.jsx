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
  Divider,
} from 'antd';
import {
  UpperDiv,
  LowerDiv,
  SportCategories,
  FlexDiv,
} from '../styles/styled-components';
import { AlignCenterOutlined, SyncOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

axios.defaults.baseURL = `${BACKEND_URL}/api`;

const history = () => {
  return <div>배팅 내역 페이지입니다.</div>;
};

export default history;
