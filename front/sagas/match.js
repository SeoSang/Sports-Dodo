import { takeLatest, call, all, fork, put } from 'redux-saga/effects';
import axios from 'axios';
import moment from 'moment';

export const LOAD_MATCHS_REQUEST = 'LOAD_MATCHS_REQUEST';
export const LOAD_MATCHS_SUCCESS = 'LOAD_MATCHS_SUCCESS';
export const LOAD_MATCHS_FAILURE = 'LOAD_MATCHS_FAILURE';

export const LOAD_MAIN_MATCHS_REQUEST = 'LOAD_MAIN_MATCHS_REQUEST';
export const LOAD_MAIN_MATCHS_SUCCESS = 'LOAD_MAIN_MATCHS_SUCCESS';
export const LOAD_MAIN_MATCHS_FAILURE = 'LOAD_MAIN_MATCHS_FAILURE';

function loadMatchsAPI(index = -1) {
  const nowTime = moment().format();
  if (index == -1) {
    return axios.get(`/match?startTime[gt]=${nowTime}`);
  }
  const limit = 10; // 받을 개수
  return axios.get(
    `/match?startTime[gt]=${nowTime}&limit=${limit}&startindex=${index}`
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
  yield all([fork(watchLoadMatchs), fork(watchLoadMainMatchs)]);
}
