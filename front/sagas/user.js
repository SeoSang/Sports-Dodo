<<<<<<< HEAD
import { takeLatest, call, all, fork, put } from 'redux-saga/effects';
import { BACKEND_URL } from '../src/dummy';
import axios from 'axios';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';
=======
import { takeLatest, call, all, fork, put } from "redux-saga/effects";
import { BACKEND_URL } from "../src/dummy";
import axios from "axios";

//액션 타입 정의
export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";
>>>>>>> a4654feb147117dd091c69587335f0e17afb4a98

axios.defaults.baseURL = `${BACKEND_URL}/api`;

function loginAPI(loginData) {
<<<<<<< HEAD
  return axios.post('/user/login', loginData);
=======
  return axios.post("/user/login", loginData, {
    withCredentials: true, // 쿠키 주고받기 위해 넣어준다.
  });
>>>>>>> a4654feb147117dd091c69587335f0e17afb4a98
}

function* login(action) {
  try {
    const result = yield call(loginAPI, action.data); // call -> loginAPI(action.data)
    yield put({
      // put -> Action lk실행
      type: LOG_IN_SUCCESS,
<<<<<<< HEAD
      data: result.data,
=======
      data: result,
>>>>>>> a4654feb147117dd091c69587335f0e17afb4a98
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOG_IN_FAILURE,
      error: e,
    });
  }
}

function* watchLogin() {
  yield takeLatest(LOG_IN_REQUEST, login);
<<<<<<< HEAD
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
    return axios.get('/user');
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

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchRegister), fork(watchLoadUser)]);
=======
}

export default function* userSaga() {
  yield all([fork(watchLogin)]);
>>>>>>> a4654feb147117dd091c69587335f0e17afb4a98
}
