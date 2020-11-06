<<<<<<< HEAD
import produce from 'immer';
import {
  LOAD_BATTINGS_REQUEST,
  LOAD_BATTINGS_SUCCESS,
  LOAD_BATTINGS_FAILURE,
  LOAD_BATTING_REQUEST,
  LOAD_BATTING_SUCCESS,
  LOAD_BATTING_FAILURE,
} from '../sagas/batting';

export const initialState = {
  isLoadingBatting: false,
  isLoadedBatting: false,
  isLoadingBattings: false,
  isLoadedBattings: false,
  loadingErrorReason: '',
  batting: null,
  battings: null,
};

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOAD_BATTINGS_REQUEST:
        draft.isLoadingBattings = true;
        draft.isLoadedBattings = false;
        break;
      case LOAD_BATTINGS_SUCCESS:
        draft.isLoadingBattings = false;
        draft.isLoadedBattings = true;
        draft.battings = action.data;
        break;
      case LOAD_BATTINGS_FAILURE:
        draft.isLoadingBattings = false;
        draft.isLoadedBattings = false;
        draft.battings = null;
        draft.loadingErrorReason = action.error;
        break;
      case LOAD_BATTING_REQUEST:
        draft.isLoadingBatting = true;
        draft.isLoadedBatting = false;
        break;
      case LOAD_BATTING_SUCCESS:
        draft.isLoadingBatting = false;
        draft.isLoadedBatting = true;
        draft.batting = action.data;
        break;
      case LOAD_BATTING_FAILURE:
        draft.isLoadingBatting = false;
        draft.isLoadedBatting = false;
        draft.loadingErrorReason = action.error;
        break;
      default:
        break;
    }
  });
};

export default reducer;
=======
import produce from 'immer';
import {
  LOAD_BATTINGS_REQUEST,
  LOAD_BATTINGS_SUCCESS,
  LOAD_BATTINGS_FAILURE,
  LOAD_BATTING_REQUEST,
  LOAD_BATTING_SUCCESS,
  LOAD_BATTING_FAILURE,
  LOAD_BATTING_HISTORY_REQUEST,
  LOAD_BATTING_HISTORY_SUCCESS,
  LOAD_BATTING_HISTORY_FAILURE,
} from '../sagas/batting';

export const initialState = {
  isLoadingBatting: false,
  isLoadedBatting: false,
  isLoadingBattings: false,
  isLoadedBattings: false,
  loadingErrorReason: '',
  batting: null,
  battings: null,
  isLoadingBattingHistory: false,
  isLoadedBattingHistory: false,
  battingHistory: null,
};

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOAD_BATTINGS_REQUEST:
        draft.isLoadingBattings = true;
        draft.isLoadedBattings = false;
        break;
      case LOAD_BATTINGS_SUCCESS:
        draft.isLoadingBattings = false;
        draft.isLoadedBattings = true;
        draft.battings = action.data;
        break;
      case LOAD_BATTINGS_FAILURE:
        draft.isLoadingBattings = false;
        draft.isLoadedBattings = false;
        draft.battings = null;
        draft.loadingErrorReason = action.error;
        break;
      case LOAD_BATTING_REQUEST:
        draft.isLoadingBatting = true;
        draft.isLoadedBatting = false;
        break;
      case LOAD_BATTING_SUCCESS:
        draft.isLoadingBatting = false;
        draft.isLoadedBatting = true;
        draft.batting = action.data;
        break;
      case LOAD_BATTING_FAILURE:
        draft.isLoadingBatting = false;
        draft.isLoadedBatting = false;
        draft.loadingErrorReason = action.error;
      //
      case LOAD_BATTING_HISTORY_REQUEST:
        draft.isLoadingBattingHistory = true;
        draft.isLoadedBatting = false;
        break;
      case LOAD_BATTING_HISTORY_SUCCESS:
        draft.isLoadingBattingHistory = false;
        draft.isLoadedBatting = true;
        draft.battingHistory = action.data.data;
        break;
      case LOAD_BATTING_HISTORY_FAILURE:
        draft.isLoadingBattingHistory = false;
        draft.isLoadedBatting = false;
        draft.loadingErrorReason = action.error;
        break;
      default:
        break;
    }
  });
};

export default reducer;
>>>>>>> e0a8ce48c0a0fb86312e71d8a46d8eac64cbe2da
