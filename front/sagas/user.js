import { takeLatest, call, all, fork, put } from "redux-saga/effects"
import { BACKEND_URL } from "../src/dummy"
import axios from "axios"

export const LOG_IN_REQUEST = "LOG_IN_REQUEST"
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS"
export const LOG_IN_FAILURE = "LOG_IN_FAILURE"

axios.defaults.baseURL = `${BACKEND_URL}/api`

function loginAPI(loginData) {
  return axios.post("/user/login", loginData, {
    withCredentials: true, // 쿠키 주고받기 위해 넣어준다.
  })
}

function* login(action) {
  try {
    const result = yield call(loginAPI, action.data) // call -> loginAPI(action.data)
    yield put({
      // put -> Action 실행
      type: LOG_IN_SUCCESS,
      data: result,
    })
  } catch (e) {
    console.error(e)
    yield put({
      type: LOG_IN_FAILURE,
      error: e,
    })
  }
}

function* watchLogin() {
  yield takeLatest(LOG_IN_REQUEST, login)
}

export default function* userSaga() {
  yield all([fork(watchLogin)])
}
