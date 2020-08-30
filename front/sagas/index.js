import { all, call } from 'redux-saga/effects';
import userSaga from './user';
import battingSaga from './batting';
import rankingSaga from './ranking';
import matchSaga from './match';
import axios from 'axios';
import { BACKEND_URL } from '../src/dummy.js';

axios.defaults.baseURL = `${BACKEND_URL}/api`;

export default function* rootSaga() {
  yield all([
<<<<<<< HEAD
    call(userSaga),
    call(battingSaga),
    call(rankingSaga),
    call(matchSaga),
=======
    call(matchSaga),
    call(userSaga),
    call(battingSaga),
    call(rankingSaga),
>>>>>>> 6ea4e0cd0cbe1842d5b1f9a51c534adf0029d0ca
  ]);
}
