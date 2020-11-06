import { takeLatest, call, all, fork, put } from 'redux-saga/effects';
import axios from 'axios';

export const LOAD_RANKINGS_REQUEST = 'LOAD_RANKINGS_REQUEST';
export const LOAD_RANKINGS_SUCCESS = 'LOAD_RANKINGS_SUCCESS';
export const LOAD_RANKINGS_FAILURE = 'LOAD_RANKINGS_FAILURE';

const BACKEND_URL = 'http://localhost:1337';
axios.defaults.baseURL = `${BACKEND_URL}/api`;

function loadRankingsAPI() {
  return axios.get(`/user`);
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
