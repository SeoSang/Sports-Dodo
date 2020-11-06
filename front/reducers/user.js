<<<<<<< HEAD
import produce from 'immer';
import { HYDRATE } from 'next-redux-wrapper';
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
  SET_TOKEN,
  LOG_OUT,
} from '../sagas/user';

export const initialState = {
  isLoggingIn: false,
  isLoginSuccess: false,
  me: null,
  isRegistering: false,
  isRegisterSuccess: false,
  userInfo: null,
  loginErrorReason: '',
  registerErrorReason: '',
  token: null,
};

const reducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case HYDRATE:
        draft.isLoginSuccess = false;
        draft = { ...state, ...action.payload };
        break;
      case LOG_IN_REQUEST:
        draft.isLoggingIn = true;
        draft.loginErrorReason = '';
        break;
      case LOG_OUT:
        // draft = { ...state, ...initialState };
        draft.me = null;
        draft.token = null;
        draft.isLoginSuccess = false;
        break;
      case SET_TOKEN:
        draft.token = action.data;
        break;
      case LOG_IN_SUCCESS:
        draft.isLoggingIn = false;
        draft.isLoginSuccess = true;
        // draft.me = action.data.data;
        break;
      case LOG_IN_FAILURE:
        draft.me = null;
        draft.isLoggingIn = false;
        draft.isLoginSuccess = false;
        draft.loginErrorReason = action.error;
        break;
      case LOAD_USER_REQUEST:
        draft.me = null;
        break;
      case LOAD_USER_SUCCESS:
        draft.me = action.data.data;
        draft.me.rank = action.data.rank;
        break;
      case LOAD_USER_FAILURE:
        draft.me = null;
        break;
      case REGISTER_REQUEST:
        draft.isRegistering = true;
        draft.isRegisterSuccess = false;
        break;
      case REGISTER_SUCCESS:
        draft.isRegistering = false;
        draft.isRegisterSuccess = true;
        break;
      case REGISTER_FAILURE:
        draft.isRegistering = false;
        draft.registerErrorReason = action.error;
        break;
      default:
        break;
    }
  });
};

export default reducer;
=======
import produce from 'immer';
import { HYDRATE } from 'next-redux-wrapper';
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
  SET_TOKEN,
  LOG_OUT,
  LOAD_BATTING_USER_REQUEST,
  LOAD_BATTING_USER_SUCCESS,
  LOAD_BATTING_USER_FAILURE,
} from '../sagas/user';

export const initialState = {
  isLoggingIn: false,
  isLoginSuccess: false,
  me: null,
  isRegistering: false,
  isRegisterSuccess: false,
  userInfo: null,
  loginErrorReason: '',
  registerErrorReason: '',
  token: null,
  battingUser: null,
  isLoadingUser: false,
  isLoadSuccess: false,
  loadingbattingUserErrorReason: '',
};

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case HYDRATE:
        draft.isLoginSuccess = false;
        draft = { ...state, ...action.payload };
        break;
      case LOG_IN_REQUEST:
        draft.isLoggingIn = true;
        draft.loginErrorReason = '';
        break;
      case LOG_OUT:
        // draft = { ...state, ...initialState };
        draft.me = null;
        draft.token = null;
        draft.isLoginSuccess = false;
        break;
      case SET_TOKEN:
        draft.token = action.data;
        break;
      case LOG_IN_SUCCESS:
        draft.isLoggingIn = false;
        draft.isLoginSuccess = true;
        // draft.me = action.data.data;
        break;
      case LOG_IN_FAILURE:
        draft.me = null;
        draft.isLoggingIn = false;
        draft.isLoginSuccess = false;
        draft.loginErrorReason = action.error;
        break;
      case LOAD_USER_REQUEST:
        draft.me = null;
        break;
      case LOAD_USER_SUCCESS:
        draft.me = action.data.data;
        draft.me.rank = action.data.rank;
        break;
      case LOAD_USER_FAILURE:
        draft.me = null;
        break;
      case REGISTER_REQUEST:
        draft.isRegistering = true;
        draft.isRegisterSuccess = false;
        break;
      case REGISTER_SUCCESS:
        draft.isRegistering = false;
        draft.isRegisterSuccess = true;
        break;
      case REGISTER_FAILURE:
        draft.isRegistering = false;
        draft.registerErrorReason = action.error;
        break;
      case LOAD_BATTING_USER_REQUEST:
        draft.isLoadingUser = true;
        draft.isLoadSuccess = false;
        draft.battingUser = null;
        break;
      case LOAD_BATTING_USER_SUCCESS:
        draft.isLoadingUser = false;
        draft.isLoadSuccess = true;
        draft.battingUser = action.data.data;
        draft.battingUser.rank = action.data.rank;
        break;
      case LOAD_BATTING_USER_FAILURE:
        draft.isLoadingUser = false;
        draft.isLoadSuccess = false;
        draft.loadingbattingUserErrorReason = action.error;
        draft.battingUser = null;
        break;
      default:
        break;
    }
  });
};

export default reducer;
>>>>>>> e0a8ce48c0a0fb86312e71d8a46d8eac64cbe2da
