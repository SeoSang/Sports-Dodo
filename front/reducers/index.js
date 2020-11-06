// 하위 리듀서들 하나로 묶어주는 index

import { combineReducers } from 'redux';
import user from './user.js';
import batting from './batting.js';
import ranking from './ranking.js';
import match from './match.js';

const rootReducer = combineReducers({
  user,
  ranking,
  batting,
  match,
});

export default rootReducer;
