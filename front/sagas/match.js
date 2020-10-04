import { takeLatest, call, all, fork, put } from 'redux-saga/effects';
import axios from 'axios';
import moment from 'moment';

export const LOAD_MATCHS_REQUEST = 'LOAD_MATCHS_REQUEST';
export const LOAD_MATCHS_SUCCESS = 'LOAD_MATCHS_SUCCESS';
export const LOAD_MATCHS_FAILURE = 'LOAD_MATCHS_FAILURE';

export const LOAD_MAIN_MATCHS_REQUEST = 'LOAD_MAIN_MATCHS_REQUEST';
export const LOAD_MAIN_MATCHS_SUCCESS = 'LOAD_MAIN_MATCHS_SUCCESS';
export const LOAD_MAIN_MATCHS_FAILURE = 'LOAD_MAIN_MATCHS_FAILURE';

export const LOAD_MATCHS_HISTORY_REQUEST = 'LOAD_MATCHS_HISTORY_REQUEST';
export const LOAD_MATCHS_HISTORY_SUCCESS = 'LOAD_MATCHS_HISTORY_SUCCESS';
export const LOAD_MATCHS_HISTORY_FAILURE = 'LOAD_MATCHS_HISTORY_FAILURE';

function loadMatchsAPI(index) {
  // index 파라미터를 받아오는데 없다면 디폴트로 -1로 쓴다
  //근데 index 왜쓰는거지?
  const nowTime = moment().format();
  const limit = 100; // 받을 개수

  if (index === 1) {
    return axios.get(`/match?limit=1000`);
    // index가 1인경우 전체 경기 부름
  }
  return axios.get(`/match?startTime[gt]=${nowTime}&limit=${limit}`);
}

function* loadMatchs(action) {
  try {
    const result = yield call(loadMatchsAPI, action.index);
    // yield call(console.log('@@@@@ loadMatchs result @@@@@'));
    // yield call(console.log(result));
    yield put({
      type: LOAD_MATCHS_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOAD_MATCHS_FAILURE,
      error: JSON.stringify(e),
    });
  }
}

function* watchLoadMatchs() {
  yield takeLatest(LOAD_MATCHS_REQUEST, loadMatchs);
}
///
function loadMatchsHistoryAPI(index) {
  const nowTime = moment().format();
  const limit = 9999;
  // if (index == -1) {
  //   return axios.get(`/match`);
  // }
  return axios.get(
    // `/match/${matchid}/batting`
    `/match?startTime[lt]=${nowTime}&limit=${limit}`
  );
}

function* loadMatchsHistory(action) {
  try {
    const result = yield call(loadMatchsHistoryAPI, action.index);
    // yield call(console.log('@@@@@ loadMatchs result @@@@@'));
    // yield call(console.log(result));
    yield put({
      type: LOAD_MATCHS_HISTORY_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOAD_MATCHS_HISTORY_FAILURE,
      error: JSON.stringify(e),
    });
  }
}
function* watchLoadMatchsHistory() {
  yield takeLatest(LOAD_MATCHS_HISTORY_REQUEST, loadMatchsHistory);
}

///
function loadMainMatchsAPI() {
  const nowTime = moment().format();
  const limit = 3; // 받을 개수
  return axios.get(`/match?startTime[gt]=${nowTime}&limit=${limit}`);
}

function* loadMainMatchs(action) {
  try {
    const result = yield call(loadMainMatchsAPI);
    yield put({
      type: LOAD_MAIN_MATCHS_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOAD_MAIN_MATCHS_FAILURE,
      error: JSON.stringify(e),
    });
  }
}

function* watchLoadMainMatchs() {
  yield takeLatest(LOAD_MAIN_MATCHS_REQUEST, loadMainMatchs);
}

export default function* matchSaga() {
  yield all([
    fork(watchLoadMatchs),
    fork(watchLoadMainMatchs),
    fork(watchLoadMatchsHistory),
  ]);
}
