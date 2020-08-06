import produce from 'immer';
import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from '../sagas/user';

export const initialState = {
  isLoggingIn: false,
  loginErrorReason: '',
  me: null,
  userInfo: null,
};

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOG_IN_REQUEST:
        draft.isLoggingIn = true;
        draft.loginErrorReason = '';
        break;
      case LOG_IN_SUCCESS:
        draft.isLoggingIn = false;
        draft.me = action.data;
        break;
      case LOG_IN_FAILURE:
        draft.me = null;
        draft.isLoggingIn = false;
        draft.loginErrorReason = action.error;
        break;
      case LOAD_USER_REQUEST:
        break;
      case LOAD_USER_SUCCESS:
        break;
      case LOAD_USER_FAILURE:
        break;
      case REGISTER_REQUEST:
        break;
      case REGISTER_SUCCESS:
        break;
      case REGISTER_FAILURE:
        break;
      default:
        break;
    }
  });
};

export default reducer;
