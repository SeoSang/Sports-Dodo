import { takeLatest, call, all, fork, put } from 'redux-saga/effects';
import axios from 'axios';
import moment from 'moment';

export const LOAD_MATCHS_REQUEST = 'LOAD_MATCHS_REQUEST';
export const LOAD_MATCHS_SUCCESS = 'LOAD_MATCHS_SUCCESS';
export const LOAD_MATCHS_FAILURE = 'LOAD_MATCHS_FAILURE';

export const LOAD_MAIN_MATCHS_REQUEST = 'LOAD_MAIN_MATCHS_REQUEST';
export const LOAD_MAIN_MATCHS_SUCCESS = 'LOAD_MAIN_MATCHS_SUCCESS';
export const LOAD_MAIN_MATCHS_FAILURE = 'LOAD_MAIN_MATCHS_FAILURE';

export const LOAD_MATCH_POINTS_REQUEST = 'LOAD_MATCH_POINTS_REQUEST';
export const LOAD_MATCH_POINTS_SUCCESS = 'LOAD_MATCH_POINTS_SUCCESS';
export const LOAD_MATCH_POINTS_FAILURE = 'LOAD_MATCH_POINTS_FAILURE';

function loadMatchsAPI(index = -1) {
  // index 파라미터를 받아오는데 없다면 디폴트로 -1로 쓴다
  //근데 index 왜쓰는거지?
  const nowTime = moment().format();
  // if (index == -1) {
  //   return axios.get(`/match`);
  //   // return axios.get(`/match?startTime[gt]=${nowTime}`);
  // }
  const limit = 100; // 받을 개수
  return axios.get(
    `/match?limit=${limit}`
    // `/match?startTime[gt]=${nowTime}&limit=${limit}&startindex=${index}`
  );
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
function loadMatchsPointAPI(index = -1) {
  if (index == -1) {
    return axios.get(`/match`);
  }
  return axios.get(
    `/match/${matchid}/batting`
    // `/match?startTime[gt]=${nowTime}&limit=${limit}&startindex=${index}`
  );
}

function* loadMatchsPoint(action) {
  try {
    const result = yield call(loadMatchsPointAPI, action.index);
    // yield call(console.log('@@@@@ loadMatchs result @@@@@'));
    // yield call(console.log(result));
    yield put({
      type: LOAD_MATCH_POINTS_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOAD_MATCH_POINTS_FAILURE,
      error: JSON.stringify(e),
    });
  }
}
// http://localhost:1337/api/match/5f4a3e2d60d7215bd4bd3310/batting
// http://localhost:1337/api/match/${matchid}/batting 한경기에 배팅된 포인트와 배팅한 사람들 수
function* watchLoadMatchsPoint() {
  yield takeLatest(LOAD_MATCH_POINTS_REQUEST, loadMatchsPoint);
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
    fork(watchLoadMatchsPoint),
  ]);
}
