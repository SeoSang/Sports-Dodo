import { takeLatest, call, all, fork, put } from 'redux-saga/effects';
import { BACKEND_URL } from '../src/dummy';
import axios from 'axios';
import moment from 'moment';

axios.defaults.baseURL = `${BACKEND_URL}/api`;

export const LOAD_MATCHS_REQUEST = 'LOAD_MATCHS_REQUEST';
export const LOAD_MATCHS_SUCCESS = 'LOAD_MATCHS_SUCCESS';
export const LOAD_MATCHS_FAILURE = 'LOAD_MATCHS_FAILURE';

function loadMatchsAPI(index = -1) {
  const limit = 10; // 받을 개수
  const nowTime = moment().format();
  console.log('nowTime => ', nowTime);
  return axios.get(
    `/match?startTime[gt]=${nowTime}&limit=${limit}&startindex=${index}`
  );
}

function* loadMatchs(action) {
  try {
    const result = yield call(loadMatchsAPI, action.index);
    yield call(console.log('@@@@@ loadMatchs result @@@@@'));
    yield call(console.log(result));
    yield put({
      type: LOAD_MATCHS_SUCCESS,
      data: result,
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

export default function* matchSaga() {
  yield all([fork(watchLoadMatchs)]);
}
