import { takeLatest, call, all, fork, put } from 'redux-saga/effects';
import { BACKEND_URL } from '../src/dummy';
import axios from 'axios';

axios.defaults.baseURL = `${BACKEND_URL}/api`;

export const LOAD_BATTINGS_REQUEST = 'LOAD_BATTINGS_REQUEST';
export const LOAD_BATTINGS_SUCCESS = 'LOAD_BATTINGS_SUCCESS';
export const LOAD_BATTINGS_FAILURE = 'LOAD_BATTINGS_FAILURE';

export const LOAD_BATTING_SUCCESS = 'LOAD_BATTING_SUCCESS';
export const LOAD_BATTING_REQUEST = 'LOAD_BATTING_REQUEST';
export const LOAD_BATTING_FAILURE = 'LOAD_BATTING_FAILURE';

function loadBattingAPI(battingId) {
  return axios.get(`/batting/${battingId}`);
}

function* loadBatting(action) {
  try {
    const result = yield call(loadBattingAPI, action.data);
    yield put({
      type: LOAD_BATTING_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOAD_BATTING_FAILURE,
      error: e,
    });
  }
}

function* watchLoadBatting() {
  return takeLatest(LOAD_BATTING_REQUEST, loadBatting);
}

function loadBattingsAPI(userId, count) {
  return axios.get(`/battings?userid=${userId}&count=${count}`);
}

function* loadBattings(action) {
  try {
    const result = yield call(loadBattingsAPI, action.userId, action.count);
    yield put({
      type: LOAD_BATTINGS_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOAD_BATTINGS_FAILURE,
      error: e,
    });
  }
}

function* watchLoadBattings() {
  return takeLatest(LOAD_BATTINGS_REQUEST, loadBattings);
}

export default function* battingSaga() {
  yield all([fork(watchLoadBattings), fork(watchLoadBatting)]);
}
