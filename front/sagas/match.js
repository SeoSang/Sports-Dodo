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
  const nowTime = moment.format();
  return axios.get(
    `/match?startTime[gt]=${nowTime}&limit=${limit}&startindex=${index}`
  );
}

function* loadMatchs(action) {
  try {
<<<<<<< HEAD
    const result = yield call(loadMatchsAPI, action.data);
=======
    const result = yield call(loadMatchsAPI, action.index);
>>>>>>> 6ea4e0cd0cbe1842d5b1f9a51c534adf0029d0ca
    yield call(console.log('@@@@@ loadMatchs result @@@@@'));
    yield call(console.log(result));
    yield put({
      type: LOAD_MATCHS_SUCCESS,
<<<<<<< HEAD
      data: result.data,
=======
      data: result,
>>>>>>> 6ea4e0cd0cbe1842d5b1f9a51c534adf0029d0ca
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOAD_MATCHS_FAILURE,
      error: e,
    });
  }
}

function* watchLoadMatchs() {
  return takeLatest(LOAD_MATCHS_REQUEST, loadMatchs);
}

<<<<<<< HEAD
export default function* Matchsaga() {
=======
export default function* matchSaga() {
>>>>>>> 6ea4e0cd0cbe1842d5b1f9a51c534adf0029d0ca
  yield all([fork(watchLoadMatchs)]);
}
