import { takeLatest, call, all, fork, put } from 'redux-saga/effects';
import axios from 'axios';

export const LOAD_BATTINGS_REQUEST = 'LOAD_BATTINGS_REQUEST';
export const LOAD_BATTINGS_SUCCESS = 'LOAD_BATTINGS_SUCCESS';
export const LOAD_BATTINGS_FAILURE = 'LOAD_BATTINGS_FAILURE';

export const LOAD_BATTING_REQUEST = 'LOAD_BATTING_REQUEST';
export const LOAD_BATTING_SUCCESS = 'LOAD_BATTING_SUCCESS';
export const LOAD_BATTING_FAILURE = 'LOAD_BATTING_FAILURE';

export const LOAD_BATTING_HISTORY_REQUEST = 'LOAD_BATTING_HISTORY_REQUEST';
export const LOAD_BATTING_HISTORY_SUCCESS = 'LOAD_BATTING_HISTORY_SUCCESS';
export const LOAD_BATTING_HISTORY_FAILURE = 'LOAD_BATTING_HISTORY_FAILURE';

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
  yield takeLatest(LOAD_BATTING_REQUEST, loadBatting);
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
  yield takeLatest(LOAD_BATTINGS_REQUEST, loadBattings);
}

function loadBattingHistoryAPI(matchId) {
  return axios.get(`/batting/for-a-match/${matchId}`);
}

function* loadBattingHistory(action) {
  try {
    const result = yield call(loadBattingHistoryAPI, action.data);
    yield put({
      type: LOAD_BATTING_HISTORY_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOAD_BATTING_HISTORY_FAILURE,
      error: e,
    });
  }
}

function* watchLoadBattingHistory() {
  yield takeLatest(LOAD_BATTING_HISTORY_REQUEST, loadBattingHistory);
}

export default function* battingSaga() {
  yield all([
    fork(watchLoadBattings),
    fork(watchLoadBatting),
    fork(watchLoadBattingHistory),
  ]);
}
