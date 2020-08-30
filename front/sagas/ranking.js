import { takeLatest, call, all, fork, put } from 'redux-saga/effects';
import { BACKEND_URL } from '../src/dummy';
import axios from 'axios';

axios.defaults.baseURL = `${BACKEND_URL}/api`;

export const LOAD_RANKINGS_REQUEST = 'LOAD_RANKINGS_REQUEST';
export const LOAD_RANKINGS_SUCCESS = 'LOAD_RANKINGS_SUCCESS';
export const LOAD_RANKINGS_FAILURE = 'LOAD_RANKINGS_FAILURE';

function loadRankingsAPI() {
  return axios.get(`/rankings`);
}

function* loadRankings(action) {
  try {
    const result = yield call(loadRankingsAPI, action.data);
    yield put({
      type: LOAD_RANKINGS_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOAD_RANKINGS_FAILURE,
      error: e,
    });
  }
}

function* watchLoadRankings() {
  yield takeLatest(LOAD_RANKINGS_REQUEST, loadRankings);
}

export default function* rankingSaga() {
  yield all([fork(watchLoadRankings)]);
}
