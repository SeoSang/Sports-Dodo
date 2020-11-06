import { takeLatest, call, all, fork, put } from 'redux-saga/effects';
import axios from 'axios';
import { BACKEND_URL } from '.';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
export const LOG_OUT = 'LOG_OUT';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';
export const SET_TOKEN = 'SET_TOKEN';

export const LOAD_BATTING_USER_REQUEST = 'LOAD_BATTING_USER_REQUEST';
export const LOAD_BATTING_USER_SUCCESS = 'LOAD_BATTING_USER_SUCCESS';
export const LOAD_BATTING_USER_FAILURE = 'LOAD_BATTING_USER_FAILURE';

axios.defaults.baseURL = `${BACKEND_URL}/api`;

function loginAPI(loginData) {
  return axios.post('/user/login', loginData);
}

function* login(action) {
  try {
    const result = yield call(loginAPI, action.data); // call -> loginAPI(action.data)

    yield put({
      // 토큰 저장
      type: SET_TOKEN,
      data: result.data.token,
    });
    yield sessionStorage.setItem('sd', result.data.token); // 토큰 저장
    yield put({
      // put -> Action lk실행
      type: LOG_IN_SUCCESS,
      data: result.data,
    });

    // yield put({
    //   type: LOAD_USER_REQUEST,
    //   data: {
    //     me: true,
    //   },
    // });
  } catch (e) {
    yield console.error(e);
    yield alert('잘못된 아이디 혹은 비밀번호입니다!');
    yield put({
      type: LOG_IN_FAILURE,
      error: e,
    });
  }
}

function* watchLogin() {
  yield takeLatest(LOG_IN_REQUEST, login);
}

function registerAPI(registerData) {
  return axios.post('/user', registerData);
}

function* register(action) {
  try {
    const result = yield call(registerAPI, action.data);
    yield put({
      // put -> Action 실행
      type: REGISTER_SUCCESS,
      data: result,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: REGISTER_FAILURE,
      error: e,
    });
  }
}

function* watchRegister() {
  yield takeLatest(REGISTER_REQUEST, register);
}

function loadUserAPI(userData) {
  if (userData.me) {
    return axios.get('/user/profile');
  }
  return axios.get(`/user/${userData.id}`);
}

function* loadUser(action) {
  try {
    const result = yield call(loadUserAPI, action.data);
    yield put({
      // put -> Action 실행
      type: LOAD_USER_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOAD_USER_FAILURE,
      error: e,
    });
  }
}

function* watchLoadUser() {
  yield takeLatest(LOAD_USER_REQUEST, loadUser);
}
function loadBattingUserAPI(userid) {
  const userid_1 = userid;
  return axios.get(`/user/${userid_1}`);
}

function* loadBattingUser(action) {
  try {
    const result = yield call(loadBattingUserAPI, action.data);
    yield put({
      type: LOAD_BATTING_USER_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOAD_BATTING_USER_FAILURE,
      error: e,
    });
  }
}

function* watchLoadBattingUser() {
  yield takeLatest(LOAD_BATTING_USER_REQUEST, loadBattingUser);
}

export default function* userSaga() {
  yield all([
    fork(watchLogin),
    fork(watchRegister),
    fork(watchLoadUser),
    fork(watchLoadBattingUser),
  ]);
}
